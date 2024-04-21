import React, { useEffect, useState } from "react";
import "./cookie.scss";
import Button from "../Button/Button";
import Text from "../Text/Text";
import CloseSvg from "../../../../public/svg/close.svg?react";
import { useResizeWidth } from "../../../hooks/useResizeWidth";

interface CookieProps {
  onClose?: () => void;
}
const Cookie: React.FC<CookieProps> = ({ onClose }) => {
  const [acceptedCookies, setAcceptedCookies] = useState<boolean>(true);

  const sizeScreenTablet = useResizeWidth(1024);
  const sizeScreenMobile = useResizeWidth(600);

  useEffect(() => {
    const hasAcceptedCookies = localStorage.getItem("acceptedCookies");
    if (hasAcceptedCookies === "true") {
      setAcceptedCookies(true);
    } else {
      setAcceptedCookies(false);
    }
  }, []);
  const handleAccept = () => {
    setAcceptedCookies(true);
    localStorage.setItem("acceptedCookies", "true");
    if (onClose) onClose();
  };
localStorage.clear();
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
          <Button type="primary" onClick={handleAccept} block={sizeScreenTablet}>
            <Text body4> Принять и закрыть</Text>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Cookie;
