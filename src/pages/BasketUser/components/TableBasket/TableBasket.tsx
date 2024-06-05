import React, { useEffect, useState } from "react";
import "./tableBasket.scss";
import CheckBox from "../../../../components/UI Kit/CheckBox/CheckBox";
import Button from "../../../../components/UI Kit/Button/Button";
import Text from "../../../../components/UI Kit/Text/Text";
import BasketSvg from "../../../../../public/svg/basket.svg?react";
import { Card, userBasket } from "../../../../libs/fetchAllProductsUserBasket";

interface TableBasketProps {
  listProduct: userBasket[];
  handleDeleteItem: (card: Card) => void;
  handleDeleteItemsBasket: (basketIds: string[]) => void;
}

const TableBasket: React.FC<TableBasketProps> = ({
  listProduct,
  handleDeleteItem,
  handleDeleteItemsBasket,
}) => {
  const [selectAll, setSelectAll] = useState(false);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  useEffect(() => {
    const allSelected =
      listProduct.length > 0 &&
      listProduct.every((item) => selectedItems.includes(item.basketUser.id));
    setSelectAll(allSelected);
  }, [selectedItems, listProduct]);
  const handleSelectAll = () => {
    const newSelectAll = !selectAll;
    setSelectAll(newSelectAll);

    const newSelectedItems = newSelectAll
      ? listProduct.map((item) => item.basketUser.id)
      : [];
    setSelectedItems(newSelectedItems);
  };

  const handleSelectItem = (id: string) => {
    setSelectedItems((prev) =>
      prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]
    );
  };

  return (
    <div className="table-1">
      <div className="table-header-1">
        <CheckBox
          type="checkbox"
          checked={selectAll}
          onChange={handleSelectAll}
        >
          <Text body5>Выбрать всё</Text>
        </CheckBox>
        <Button
          type="link"
          onClick={() => handleDeleteItemsBasket(selectedItems)}
        >
          <Text body5 color="rgba(118, 118, 118, 1)">
            Очистить корзину
          </Text>
        </Button>
      </div>
      <div className="table-body-1">
        {listProduct.length !== 0 ? (
          <>
            {listProduct.map((item, index) => (
              <div key={index} className="table-row">
                <div className="name-product">
                  <CheckBox
                    type="checkbox"
                    name={`checkbox-${item.userUid}`}
                    checked={selectedItems.includes(item.basketUser.id)}
                    onChange={() => handleSelectItem(item.basketUser.id)}
                  >
                    <Text body3>{item.basketUser.titleText}</Text>
                  </CheckBox>
                  <div className="delete-button">
                    <div className="svg-button">
                      <Button type="link">
                        <BasketSvg />
                      </Button>
                    </div>
                    <Button
                      type="link"
                      onClick={() => handleDeleteItem(item.basketUser)}
                    >
                      <Text body6>Удалить из корзины</Text>
                    </Button>
                  </div>
                </div>
                <div className="price">
                  <Text body3>{item.basketUser.price} ₽</Text>
                  {item.basketUser.price && (
                    <span className="old-price">
                      {`${item.basketUser.priceSale}`}{" "}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </>
        ) : (
          <div className="data-none">
            <Text body2_bold>Ваша корзина пуста</Text>
          </div>
        )}
      </div>
    </div>
  );
};

export default TableBasket;
