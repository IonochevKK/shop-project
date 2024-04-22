import React from "react";
import "./loginOrRegister.scss";
import { createPortal } from "react-dom";
import Text from "../UI Kit/Text/Text";
import Input from "../UI Kit/Input/Input";
import Button from "../UI Kit/Button/Button";
import CheckBox from "../UI Kit/CheckBox/CheckBox";
import CloseSvg from "../../../public/svg/close.svg?react";
interface LoginOrRegisterProps {
  closeLogin: () => void;
}
const LoginOrRegister: React.FC<LoginOrRegisterProps> = ({ closeLogin }) => {
  const root = document.getElementById("root") as Element;
  return (
    <>
      {createPortal(
        <div className="loginOrRegister">
          <div className="container-login">
            <div className="close" onClick={closeLogin}>
              <CloseSvg />
           </div>
            <div className="title">
              <Text h2>Войти или зарегистрироваться</Text>
            </div>
            <div className="input">
              <Input type="tel" placeholder="(000) 000-00-00" postfix="+7" />
            </div>
            <div className="button">
              <Button type="primary" block>
                <Text body3>Войти </Text>
              </Button>
            </div>
            <div className="checkbox">
              <CheckBox type="checkbox" />
              <Text caption2 color="rgba(155, 155, 155, 1)">
                Я соглашаюсь на обработку персональных данных и ознакомлен с
                правилами использования ресурса
              </Text>
            </div>
          </div>
        </div>,
        root
      )}
    </>
  );
};

export default LoginOrRegister;
