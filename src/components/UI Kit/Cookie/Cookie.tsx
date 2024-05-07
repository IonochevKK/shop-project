import "./cookie.scss";
import Button from "../Button/Button";
import Text from "../Text/Text";
import CloseSvg from "../../../../public/svg/close.svg?react";
import { useResizeWidth } from "../../../hooks/useResizeWidth";
import { useDispatch } from "react-redux";
import { ChangeCookies } from "../../../store/cookies-slise";

interface CookieProps {
  acceptedCookies: boolean;
  onClose?: () => void;
}
const Cookie: React.FC<CookieProps> = ({ onClose, acceptedCookies }) => {
  const sizeScreenTablet = useResizeWidth(1024);
  const dispatch = useDispatch();

  const handleAccept = () => {
    dispatch(ChangeCookies(true));
    localStorage.setItem("acceptedCookies", "true");
    if (onClose) onClose();
  };

  // localStorage.clear(); // для тестов
  return (
    <div className={`cookie ${!acceptedCookies ? "show" : ""}`}>
      <div className="cookie-container">
        <div className="close" onClick={onClose}>
          <CloseSvg />
        </div>
        <div className="info">
          <div className="title">
            <Text h3>Мы используем cookie</Text>
          </div>
          <div className="desc">
            <Text body6>
              Продолжая использовать наш сайт, вы даёте согласие на обработку
              файлов cookie, пользовательских данных (сведения о местоположении;
              тип и версия ОС; тип и версия Браузера; тип устройства и
              разрешение его экрана; источник откуда пришёл на сайт
              пользователь; с какого сайта или по какой рекламе; язык ОС и
              Браузера; какие страницы открывает и на какие кнопки нажимает
              пользователь; ip-адрес) в целях функционирования сайта, проведения
              ретаргетинга и проведения статистических исследований и обзоров.
              Если вы не хотите, чтобы ваши данные обрабатывались, покиньте
              сайт.
            </Text>
          </div>
        </div>
        <div className="buttons">
          <Button
            type="primary"
            onClick={handleAccept}
            block={sizeScreenTablet}
          >
            <Text body4> Принять и закрыть</Text>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Cookie;
