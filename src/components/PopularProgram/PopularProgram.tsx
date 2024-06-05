import React, { useEffect, useState } from "react";
import CardProgram, { CardProgramProps } from "../CardProgram/CardProgram";
import "./popularProgram.scss";
import Text from "../UI Kit/Text/Text";
import Title from "../UI Kit/Titles/TItle";
import Divider from "../UI Kit/Divider/Divider";
import { useResizeWidth } from "../../hooks/useResizeWidth";
import Pagination from "../UI Kit/Pagination/Pagination";
import { countCardsOnPage } from "../../utils/countCardsOnPage";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { addItemBasket } from "../../store/basketUser-slise";
import { addProductInMyBasket } from "../../libs/addProductInMyBasket";

interface PopularProgramProps {
  title?: boolean;
  cardsLength?: number;
  pagination?: boolean;
  backgorund?: React.CSSProperties;
  disableFilter?: boolean;
  sliceCards?: number;
}

const PopularProgram: React.FC<PopularProgramProps> = ({
  title,
  cardsLength,
  pagination,
  backgorund,
  disableFilter,
  sliceCards,
}) => {
  const dispatch = useDispatch();
  const cardsFilter = useSelector(
    (state: RootState) => state.CardsStorage.filteredCards
  );
  const cardsAll = useSelector(
    (state: RootState) => state.CardsStorage.allCards
  );
  const sizeScreenMobile = useResizeWidth(550);
  const sizeScreenTablet = useResizeWidth(830);

  const [cardsList, setCardsList] = useState<CardProgramProps[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pages, setPage] = useState<number[]>([]);

  const userIdSession = useSelector((state: RootState) => state.UserSession.id);

  useEffect(() => {
    const selectedCards = disableFilter ? cardsAll : cardsFilter;
    setPage(countCardsOnPage(selectedCards));

    if (cardsLength) {
      setCardsList(
        selectedCards.slice(
          (currentPage - 1) * cardsLength,
          currentPage * cardsLength
        )
      );
      if (sliceCards) {
        if (sizeScreenTablet) {
          setCardsList(selectedCards.slice(0, sliceCards));
        }
      }
    } else {
      setCardsList(selectedCards);
    }
  }, [sizeScreenTablet, cardsAll, cardsFilter, currentPage]);

  const handleAddProductInBasket = (card: CardProgramProps) => {
    dispatch(addItemBasket(card));
    if (userIdSession) {
      addProductInMyBasket(card, userIdSession);
    }
  };

  return (
    <div className="popularProgram" style={backgorund}>
      <div className="popularProgram-container">
        {title && (
          <div className="titleh1">
            {!sizeScreenTablet && (
              <Title type="flexText" value="Смотреть все программы">
                <Text h2>Популярные программы</Text>
                <Divider type="blue" />
              </Title>
            )}
            {sizeScreenTablet && !sizeScreenMobile && (
              <Title type="flexText">
                <Text h2>Популярные программы</Text>
              </Title>
            )}
            {sizeScreenMobile && (
              <Title type="flexText">
                <Text h3>Популярные программы</Text>
              </Title>
            )}
          </div>
        )}
        <div className="cards-container">
          {cardsList.length !== 0 && (
            <>
              {cardsList.map((card, i) => (
                <div key={i} className="card-item">
                  <CardProgram
                    id={card.id}
                    titleText={card.titleText}
                    price={card.price}
                    priceSale={card?.priceSale}
                    HMOlabel={card?.HMOlabel}
                    labelText={card.labelText}
                    nameSpecial={card.nameSpecial}
                    onClick={handleAddProductInBasket}
                  />
                </div>
              ))}
            </>
          )}
          {cardsList.length === 0 && (
            <>
              <div className="text-flex">
                <Text body2_bold>По запросу ничего не найдено</Text>
              </div>
            </>
          )}
        </div>
        {pagination && (
          <div className="pagination-container">
            <Pagination
              pages={pages}
              currentPage={currentPage}
              onPageChange={setCurrentPage}
              totalPagesVisible={5}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default PopularProgram;
