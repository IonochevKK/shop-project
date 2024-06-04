import React from "react";
import Layout from "../../components/Layout/Layout";
import Title from "../../components/UI Kit/Titles/TItle";
import Text from "../../components/UI Kit/Text/Text";
import "./basketUser.scss";
import Label from "../../components/UI Kit/Label/Label";
import WarnLabelSvg from "../../../public/svg/warn-label.svg?react";
import TableBasket from "./components/TableBasket/TableBasket";
import PaymentProduct from "./components/PaymentProduct/PaymentProduct";
const BasketUser = () => {
  return (
    <div className="basketUser">
      <Layout>
        <div className="container-background">
          <div className="container-basketUser">
            <div className="title-basketUser">
              <Title type="flexText">
                <Text h2>Корзина</Text>
              </Title>
            </div>
            <div className="label-basket">
              <Label
                type="warn"
                classname={{
                  background: "rgba(255, 249, 212, 1)",
                  padding: "20px",
                  width: "100%",
                  maxWidth: "500px",
                  textAlign: "left",
                  display: "flex",
                  gap: "10px",
                  alignItems: "center",
                }}
              >
                <div className="icon-label">
                  <WarnLabelSvg />
                </div>
                <div className="text-label">
                  <Text caption2>
                    Пожалуйста, перед оплатой курса убедитесь, что в личном
                    кабинете заполнены все поля и загружены необходимые
                    документы.
                  </Text>
                </div>
              </Label>
            </div>
            <div className="container-payment">
              <div className="item-left">
                <TableBasket />
              </div>
              <div className="item-right">
                <PaymentProduct />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default BasketUser;
