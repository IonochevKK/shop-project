import React from "react";
import "./cardProgram.scss";
import Button from "../UI Kit/Button/Button";
import Label from "../UI Kit/Label/Label";
import Text from "../UI Kit/Text/Text";

export interface CardProgramProps {
  id: number;
  titleText: string;
  price: string | React.ReactNode;
  priceSale?: number | string | React.ReactNode;
  HMOlabel?: boolean;
  labelText: string;
}

const CardProgram: React.FC<CardProgramProps> = ({
  titleText,
  price,
  priceSale,
  HMOlabel,
  labelText,
}) => {
  return (
    <div className="card">
      <div className="card-container">
        <div className="card-container-top">
          <div className="label">
            <Label typeCards="price" size="small">
              <Text body1 lineHeight="20.8px" fontSize="16px">
                {labelText}
              </Text>
            </Label>
            {HMOlabel && (
              <Label typeCards="curs" size="small">
                <Text body1 lineHeight="20.8px" fontSize="16px">
                  НМО
                </Text>
              </Label>
            )}
          </div>
          <div className="title">
            <Text body2>{titleText}</Text>
          </div>
        </div>
        <div className="card-container-bottom">
          <div className="price">
            <span>
              <Text body1>{price} ₽</Text>
            </span>
            {priceSale && (
              <div className="salePrice">
                <Text body2 color="rgba(187, 187, 187, 1)">
                  {priceSale} ₽
                </Text>
                <span className="line" />
              </div>
            )}
          </div>
          <div className="buttons-items">
            <div className="item">
              <Button type="secondary_2" block padding="10px 25px 10px 25px">
                <Text body3>Подробнее</Text>
              </Button>
            </div>
            <div className="item">
              <Button type="primary" block padding="12px 25px 12px 25px">
                <Text body3>Записаться</Text>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProgram;
