import React, { useState } from "react";
import "./loginOrRegister.scss";
import { createPortal } from "react-dom";
import Text from "../UI Kit/Text/Text";
import Input from "../UI Kit/Input/Input";
import Button from "../UI Kit/Button/Button";
import CheckBox from "../UI Kit/CheckBox/CheckBox";
import CloseSvg from "../../../public/svg/close.svg?react";
import { getPhoneNumber } from "../../utils/getPhoneNumberInInput";
import { signInWithPhoneNumber, RecaptchaVerifier } from "firebase/auth";
import { auth } from "../../libs/firebase";
import OtpInput from "../UI Kit/OtpInput/OtpInput";
import { useDispatch, useSelector } from "react-redux";
import { updateUserSession } from "../../store/userSession-slise";

import { RootState } from "../../store/store";
declare global {
  interface Window {
    recaptchaVerifier: RecaptchaVerifier;
    confirmationResult: import("firebase/auth").ConfirmationResult;
  }
}
interface LoginOrRegisterProps {
  closeLogin: () => void;
}
interface PhoneNumber {
  formatedNumber: string;
}

const LoginOrRegister: React.FC<LoginOrRegisterProps> = ({ closeLogin }) => {
  const dispatch = useDispatch();
  const [phoneUser, setPhoneUser] = useState<PhoneNumber>({
    formatedNumber: "",
  });

  const [loading, setLoading] = useState<boolean>(false);
  const [isSeeOtp, setIsSeeOtp] = useState<boolean>(false);
  const [otp, setOTP] = useState("");

  const root = document.getElementById("root") as Element;
  console.log(loading);
  const handleSumbmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const phone = await getPhoneNumber(e);
    setPhoneUser(phone);
  };

  function onCaptchVerify() {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(auth, "sign-in-button", {
        size: "invisible",
        callback: () => {
          onSignInSubmit();
        },
      });
    }
  }
  function onOTPVerify() {
    setLoading(true);
    window.confirmationResult
      .confirm(otp)
      .then(async (res) => {
        console.log(res.user);
        dispatch(
          updateUserSession({
            id: res.user.uid,
            name: res.user.displayName,
            email: res.user.email,
            // createdAT: res.user.metadata,
          })
        );
        closeLogin();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const onSignInSubmit = () => {
    setLoading(true);
    onCaptchVerify();
    const appVerifier = window.recaptchaVerifier;
    if (phoneUser.formatedNumber.length > 0) {
      signInWithPhoneNumber(auth, phoneUser.formatedNumber, appVerifier)
        .then((confirmationResult) => {
          window.confirmationResult = confirmationResult;
          setLoading(false);
          setIsSeeOtp(true);
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
        });
    }
  };

  const handleOTPChange = (value: string) => {
    setOTP(value);
  };

  return (
    <>
      {createPortal(
        <div className="loginOrRegister">
          <div className="container-relative">
            <div className="container-login">
              <div className="close" onClick={closeLogin}>
                <CloseSvg />
              </div>
              <form action="" className="form" onSubmit={handleSumbmit}>
                <div className="title">
                  <Text h2>Войти или зарегистрироваться</Text>
                </div>
                {isSeeOtp && (
                  <div className="desc">
                    <Text body5>
                      Мы отправили СМС-сообщение с кодом подтверждения на номер
                      <strong>{phoneUser.formatedNumber.split(" ")}</strong>
                    </Text>
                  </div>
                )}
                <div className="input">
                  {!isSeeOtp && (
                    <Input
                      type="tel"
                      name="phone"
                      placeholder="(000) 000-00-00"
                      postfix="+7"
                      id="recaptcha-container"
                    />
                  )}
                  {isSeeOtp && (
                    <OtpInput length={6} onChange={handleOTPChange} />
                  )}
                </div>
                <div className="button">
                  {!isSeeOtp && (
                    <Button
                      type="primary"
                      block
                      id="sign-in-button"
                      onClick={onSignInSubmit}
                    >
                      <Text body3>{!loading ? `Войти` : `Загрузка...`} </Text>
                    </Button>
                  )}
                  {isSeeOtp && (
                    <Button
                      type="primary"
                      block
                      id="sign-in-button"
                      onClick={onOTPVerify}
                    >
                      <Text body3>Подтвердить вход </Text>
                    </Button>
                  )}
                </div>
              </form>
              <div className="checkbox-desc">
                <CheckBox type="checkbox" />
                <Text caption2 color="rgba(155, 155, 155, 1)">
                  Я соглашаюсь на обработку персональных данных и ознакомлен с
                  правилами использования ресурса
                </Text>
              </div>
            </div>
          </div>
        </div>,
        root
      )}
    </>
  );
};

export default LoginOrRegister;
