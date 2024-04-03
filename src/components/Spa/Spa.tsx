import React from "react";
import SpaSvg from "../../../public/svg/spa.svg?react";
import SpaImg from "../../../public/img/logo-spa.png";
import Text from "../UI Kit/Text/Text";
import "./spa.scss";
import Button from "../UI Kit/Button/Button";
import { useResizeWidth } from "../../hooks/useResizeWidth";
const Spa: React.FC = () => {
  const sizeScreenTablet = useResizeWidth(1024);
  const sizeScreenMobile = useResizeWidth(600);
  return (
    <div className="spa">
      <div className="spa-container">
        <div className="spa-text">
          <div className="title">
            {!sizeScreenTablet && (
              <Text h1 color="white">
                ПОВЫШЕНИЕ КВАЛИФИКАЦИИ,
                <br /> ПРОФЕССИОНАЛЬНАЯ ПЕРЕПОДГОТОВКА <br />И ПРОФЕССИОНАЛЬНОЕ
                ОБУЧЕНИЕ
                <br /> СПЕЦИАЛИСТОВ В СФЕРЕ <br />
                ЗДРАВООХРАНЕНИЯ
              </Text>
            )}
            {sizeScreenTablet && !sizeScreenMobile && (
              <Text h1 color="white" fontSize="36px">
                ПОВЫШЕНИЕ КВАЛИФИКАЦИИ,
                <br /> ПРОФЕССИОНАЛЬНАЯ ПЕРЕПОДГОТОВКА <br />И ПРОФЕССИОНАЛЬНОЕ
                ОБУЧЕНИЕ
                <br /> СПЕЦИАЛИСТОВ В СФЕРЕ <br />
                ЗДРАВООХРАНЕНИЯ
              </Text>
            )}
            {sizeScreenMobile && (
              <Text h1 color="white" fontSize="24px" lineHeight="40px">
                ПОВЫШЕНИЕ КВАЛИФИКАЦИИ,
                <br /> ПРОФЕССИОНАЛЬНАЯ ПЕРЕПОДГОТОВКА <br />И ПРОФЕССИОНАЛЬНОЕ
                ОБУЧЕНИЕ
                <br /> СПЕЦИАЛИСТОВ В СФЕРЕ <br />
                ЗДРАВООХРАНЕНИЯ
              </Text>
            )}
          </div>
          <div className="button">
            <Button type="primary">
              <Text body3>Оставить заявку</Text>
            </Button>
          </div>
        </div>
        <div className="svg-logo">
          <img src={SpaImg} alt="logo-header" />
        </div>
      </div>
    </div>
  );
};

export default Spa;
