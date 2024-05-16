import "./footer.scss";
import Logo from "../../../public/svg/logo.svg?react";
import Divider from "../UI Kit/Divider/Divider";
import Button from "../UI Kit/Button/Button";
import Text from "../UI Kit/Text/Text";
import MasterCardSvg from "../../../public/svg/mastercard.svg?react";
import VisaCardSvg from "../../../public/svg/visa.svg?react";
import MirCardSvg from "../../../public/svg/mir.svg?react";
import SbpCardSvg from "../../../public/svg/sbp.svg?react";
import { useResizeWidth } from "../../hooks/useResizeWidth";
import { useDispatch, useSelector } from "react-redux";
import { store } from "../../store/store";
import Modal from "../UI Kit/Modal/Modal";
import Form from "../UI Kit/Form/Form";
import { useCallback, useState } from "react";
import LoginOrRegister from "../LoginOrRegister/LoginOrRegister";
import { updateUserSession } from "../../store/userSession-slise";
import { Link } from "react-router-dom";
export type RootState = ReturnType<typeof store.getState>;
const Footer = () => {
  const isLogin = useSelector((state: RootState) => state.UserSession.id);

  const sizeScreenTablet = useResizeWidth(1024);
  const sizeScreenMobile = useResizeWidth(550);

  const [isOpenLogin, setIsOpenLogin] = useState<boolean>(false);
  const openLoginOrRegister = useCallback(() => setIsOpenLogin(true), []);
  const closeLoginOrRegister = useCallback(() => setIsOpenLogin(false), []);

  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const openModal = useCallback(() => setIsOpenModal(true), []);
  const closeModal = useCallback(() => setIsOpenModal(false), []);

  const dispatch = useDispatch();

  const onHandleClickLogout = () => {
    localStorage.removeItem("userSession");
    dispatch(updateUserSession({ id: null, email: null, name: null }));
  };

  return (
    <footer>
      {isOpenModal && (
        <Modal isOpen={isOpenModal} closeModal={closeModal}>
          <Form
            type="text"
            title={<Text h3>Задайте нам вопрос и мы вам на него ответим!</Text>}
            blockButton
          />
        </Modal>
      )}
      {isOpenLogin && <LoginOrRegister closeLogin={closeLoginOrRegister} />}
      <div className="footer">
        <Divider type="gray" />
        <div className="footer-top">
          <div className="logo">
            <span>
              <Logo />
            </span>
            <span>
              Приволжский центр <br />
              профессионального <br />
              обучения
            </span>
          </div>
          {!sizeScreenTablet && (
            <div className="pages">
              <Link to="/programms">
                <Button type="link">
                  <Text body5>Программы</Text>
                </Button>
              </Link>
              <Button type="link">
                <Text body5>Сведения об организации</Text>
              </Button>
              <Link to="/novosti">
                <Button type="link">
                  <Text body5>Новости</Text>
                </Button>
              </Link>
              <Button type="link">
                <Text body5>Контакты</Text>
              </Button>
            </div>
          )}

          {!sizeScreenMobile && (
            <div className="buttons">
              {!isLogin && (
                <Button type="secondary_2" onClick={openLoginOrRegister}>
                  <Text body6>Вход или регистрация</Text>
                </Button>
              )}
              {isLogin && (
                <Button type="secondary_2" onClick={onHandleClickLogout}>
                  <Text body6>Выйти из личного кабинета</Text>
                </Button>
              )}
              <Button type="secondary_2" onClick={openModal}>
                <Text body5>Задать вопрос</Text>
              </Button>
            </div>
          )}
        </div>
        {sizeScreenTablet && (
          <div className="footer-middle">
            <div className="pages">
              <div className="pages-block">
                <Button type="link">
                  <Text body5>Новости</Text>
                </Button>
                <Button type="link">
                  <Text body5>Контакты</Text>
                </Button>
              </div>
              <div className="pages-block">
                <Button type="link">
                  <Text body5>Сведения об организации</Text>
                </Button>
                <Button type="link">
                  <Text body5>Программы</Text>
                </Button>
              </div>
            </div>
          </div>
        )}
        <Divider type="gray" />
        <div className="footer-bottom">
          {!sizeScreenMobile && (
            <div className="license">
              <span>
                <Text caption1 color="#BBBBBB">
                  © 2024 АНО ДПО «Приволжский центр <br />
                  профессионального обучения»
                </Text>
              </span>
            </div>
          )}
          <div className="cards-payment">
            <div className="icon">
              <MasterCardSvg />
            </div>
            <div className="icon">
              <VisaCardSvg />
            </div>
            <div className="icon">
              <MirCardSvg />
            </div>
            <div className="icon">
              <SbpCardSvg />
            </div>
          </div>
          <div className="links-pages">
            <Button type="link">
              <Text body5 color="#9B9B9B">
                Договор-оферта
              </Text>
            </Button>
            <Button type="link">
              <Text body5 color="#9B9B9B">
                Доставка и оплата
              </Text>
            </Button>
            <Button type="link">
              <Text body5 color="#9B9B9B">
                Политика обработки персональных данных
              </Text>
            </Button>
          </div>
          {sizeScreenMobile && (
            <div className="license">
              <span>
                <Text caption1 color="#BBBBBB">
                  © 2024 АНО ДПО «Приволжский центр <br />
                  профессионального обучения»
                </Text>
              </span>
            </div>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
