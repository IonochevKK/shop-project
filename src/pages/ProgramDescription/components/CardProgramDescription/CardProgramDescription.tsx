import React from "react";
import Label from "../../../../components/UI Kit/Label/Label";
import Text from "../../../../components/UI Kit/Text/Text";
import GreenLineSvg from "../../../../../public/svg/green_line.svg?react";
import DownloadSvg from "../../../../../public/svg/download.svg?react";
import "./cardProgramDescription.scss";
import Button from "../../../../components/UI Kit/Button/Button";
import { addItemBasket } from "../../../../store/basketUser-slise";
import { useDispatch } from "react-redux";
import { CardProgramProps } from "../../../../components/CardProgram/CardProgram";
interface CardProgramDescriptionProps {
  id: string;
  HMOlabel: boolean;
  labelText: string;
  price: string;
  priceSale: string;
  titleText: string;
  nameSpecial: string;
  onClick?: (card: CardProgramProps) => void;
}
const CardProgramDescription: React.FC<CardProgramDescriptionProps> = ({
  id,
  HMOlabel,
  labelText,
  price,
  priceSale,
  titleText,
  nameSpecial,
  onClick,
}) => {
  const handleOnClick = () => {
    if (onClick) {
      onClick({
        id,
        titleText,
        price,
        priceSale,
        HMOlabel,
        labelText,
        nameSpecial,
      });
    }
  };
  return (
    <div className="cardProgramDescription">
      <div className="cotainer-label">
        {HMOlabel && (
          <div className="item-label">
            <Label typeCards="curs" size="large">
              <Text body3>HMO</Text>
            </Label>
          </div>
        )}
        <div className="item-label">
          <Label typeCards="curs" size="large">
            <Text body3>{labelText}</Text>
          </Label>
        </div>
        <div className="item-label">
          <Label typeCards="price" size="large" block>
            <Text body3>
              Стоимость курса : <br />
              <Text body1>
                {!priceSale && priceSale.length !== 0 ? priceSale : price} ₽
              </Text>
            </Text>
          </Label>
        </div>
      </div>
      <div className="container-description-program">
        <div className="item-description-program">
          <div className="svg-description-program">
            <GreenLineSvg />
          </div>
          <div className="program-info">
            <Text body3>Дистанционное обучение</Text>
          </div>
        </div>
        <div className="item-description-program">
          <div className="svg-description-program">
            <GreenLineSvg />
          </div>
          <div className="program-info">
            <Text body3>
              Удостоверение о повышении квалификации + баллы НМО
            </Text>
          </div>
        </div>
        <div className="item-description-program">
          <div className="svg-description-program">
            <GreenLineSvg />
          </div>
          <div className="program-info">
            <Text body3>
              Шаблоны документов и консультация по подготовке к периодической
              аккредитации
            </Text>
          </div>
        </div>
        <div className="item-description-program">
          <div className="svg-description-program">
            <GreenLineSvg />
          </div>
          <div className="program-info">
            <Text body3>Поддержка слушателей во время обучения</Text>
          </div>
        </div>
        <div className="item-description-program">
          <div className="svg-description-program">
            <GreenLineSvg />
          </div>
          <div className="program-info">
            <Text body3>Бесплатная доставка документа по России</Text>
          </div>
        </div>
      </div>
      <div className="container-button-description-program">
        <div className="button-main">
          <Button type="primary" block onClick={handleOnClick}>
            <Text body3>Записаться на курс</Text>
          </Button>
        </div>
        <div className="download-document">
          <Button type="link">
            <div className="svg-button">
              <DownloadSvg />
            </div>
          </Button>
          <div className="button">
            <Button type="link">
              <Text body5>Скачать программу курса</Text>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProgramDescription;
