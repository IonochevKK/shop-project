import Layout from "../../components/Layout/Layout";
import Title from "../../components/UI Kit/Titles/TItle";
import Text from "../../components/UI Kit/Text/Text";
import "./basketUser.scss";
import Label from "../../components/UI Kit/Label/Label";
import WarnLabelSvg from "../../../public/svg/warn-label.svg?react";
import TableBasket from "./components/TableBasket/TableBasket";
import PaymentProduct from "./components/PaymentProduct/PaymentProduct";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import {
  deleteItemBasket,
  deleteItemsInBasket,
} from "../../store/basketUser-slise";
import { userBasket } from "../../libs/fetchAllProductsUserBasket";
import deleteProductInBasket from "../../libs/deleteProductInBasket";
import deleteProductsSelectedWithBasket from "../../libs/deleteProductsSelectedWithBasket";
const BasketUser = () => {
  const dispatch = useDispatch();
  const basketUserListProduct = useSelector(
    (state: RootState) => state.BasketUser
  );
  const userSession = useSelector((state: RootState) => state.UserSession.id);
  const handleClickDeleteProductInBatcher = (card: userBasket) => {
    dispatch(deleteItemBasket(card));
    deleteProductInBasket(card, userSession);
  };

  const handleDeleteItemsBasket = (card: userBasket[]) => {
    dispatch(deleteItemsInBasket(card));
    deleteProductsSelectedWithBasket(card, userSession);
  };

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
                <TableBasket
                  listProduct={basketUserListProduct}
                  handleDeleteItem={handleClickDeleteProductInBatcher}
                  handleDeleteItemsBasket={handleDeleteItemsBasket}
                />
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
