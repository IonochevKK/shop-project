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
import { useSelector } from "react-redux";
import { store } from "../../store/store";
export type RootState = ReturnType<typeof store.getState>;
const Footer = () => {
  const isLogin = useSelector((state: RootState) => state.UserSession.user);
  const sizeScreenTablet = useResizeWidth(1024);
  const sizeScreenMobile = useResizeWidth(550);
  return (
    <footer>
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
              <Button type="link">
                <Text body5>Программы</Text>
              </Button>
              <Button type="link">
                <Text body5>Сведения об организации</Text>
              </Button>
              <Button type="link">
                <Text body5>Новости</Text>
              </Button>
              <Button type="link">
                <Text body5>Контакты</Text>
              </Button>
            </div>
          )}

          {!sizeScreenMobile && (
            <div className="buttons">
              {!isLogin && (
                <Button type="secondary_2">
                  <Text body6>Вход или регистрация</Text>
                </Button>
              )}
              {isLogin && (
                <Button type="secondary_2">
                  <Text body6>Выйти из личного кабинета</Text>
                </Button>
              )}
              <Button type="secondary_2">
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
