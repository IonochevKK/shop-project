import React from "react";
import "./tableBasket.scss";
import CheckBox from "../../../../components/UI Kit/CheckBox/CheckBox";
import Button from "../../../../components/UI Kit/Button/Button";
import Text from "../../../../components/UI Kit/Text/Text";
import BasketSvg from "../../../../../public/svg/basket.svg?react";

const data = [
  {
    id: 1,
    title:
      "Современные аспекты оказания сестринской помощи в различных отделениях",
    price: "1500 ₽",
    oldPrice: "2450 ₽",
  },
  {
    id: 2,
    title:
      "Бронхиальная астма и хроническая обструктивная болезнь лёгких в амбулаторной практике",
    price: "3500 ₽",
    oldPrice: "",
  },
  {
    id: 3,
    title: "Протозоозы и гельминтозы",
    price: "2500 ₽",
    oldPrice: "5450 ₽",
  },
];

const TableBasket: React.FC = () => {
  return (
    <div className="table-1">
      <div className="table-header-1">
        <CheckBox type="checkbox">
          <Text body5>Выбрать всё</Text>
        </CheckBox>
        <Button type="link">
          <Text body5 color="rgba(118, 118, 118, 1)">
            Очистить корзину
          </Text>
        </Button>
      </div>
      <div className="table-body-1">
        {data.map((item) => (
          <div key={item.id} className="table-row">
            <div className="name-product">
              <CheckBox type="checkbox" name={`checkbox-${item.id}`}>
                <Text body3>{item.title}</Text>
              </CheckBox>
              <div className="delete-button">
                <div className="svg-button">
                  <Button type="link">
                    <BasketSvg />
                  </Button>
                </div>
                <Button type="link">
                  <Text body6>Удалить из корзины</Text>
                </Button>
              </div>
            </div>
            <div className="price">
              <Text body3>{item.price}</Text>
              {item.oldPrice && (
                <span className="old-price">{item.oldPrice}</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableBasket;
