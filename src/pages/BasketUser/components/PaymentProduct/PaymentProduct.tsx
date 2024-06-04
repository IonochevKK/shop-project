import React from "react";
import "./paymentProduct.scss";
import Title from "../../../../components/UI Kit/Titles/TItle";
import Text from "../../../../components/UI Kit/Text/Text";
import Button from "../../../../components/UI Kit/Button/Button";
import Input from "../../../../components/UI Kit/Input/Input";
const PaymentProduct = () => {
  return (
    <div className="paymentProduct">
      <div className="container-paymentProduct">
        <div className="title-payment">
          <Title type="flexText">
            <Text body3>Оплата</Text>
          </Title>
        </div>
        <div className="items-payment">
          <div className="container-payment-form">
            <div className="item-payment">
              <div className="item-subtitle">
                <Text body5> Всего программ</Text>
              </div>
              <div className="item-count">
                <Text body5>3 шт</Text>
              </div>
            </div>
            <div className="item-payment">
              <div className="item-subtitle">
                <Text body5> Всего программ</Text>
              </div>
              <div className="item-count">
                <Text body5>3 шт</Text>
              </div>
            </div>
            <div className="item-payment">
              <div className="item-subtitle">
                <Text body5>Стоимость</Text>
              </div>
              <div className="item-count">
                <Text body5>11 400 ₽ </Text>
              </div>
            </div>
            <div className="item-payment">
              <div className="item-subtitle">
                <Text body5> Скидка</Text>
              </div>
              <div className="item-count">
                <Text body5>7500 ₽</Text>
              </div>
            </div>
            <div className="item-payment">
              <div className="item-subtitle">
                <Text body3_bold> Итого</Text>
              </div>
              <div className="item-count">
                <Text body3_bold>3900 ₽</Text>
              </div>
            </div>
            <div className="item-payment">
              <Button type="primary" block>
                <Text body3>Оплатить</Text>
              </Button>
            </div>
          </div>
          <div className="container-issue-invoice">
            <div className="title-invoice">
              <Text body5>Выставить счёт на организацию</Text>
            </div>
            <div className="input-invoice">
              <Input type="text" name="INN" placeholder="ИНН" />
            </div>
            <div className="button-invoice">
              <Button type="secondary_1" block>
                <Text body3>Отправить</Text>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentProduct;
