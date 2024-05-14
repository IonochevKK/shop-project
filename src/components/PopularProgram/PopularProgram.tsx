import React, { useEffect, useState } from "react";
import CardProgram, { CardProgramProps } from "../CardProgram/CardProgram";
import "./popularProgram.scss";
import Text from "../UI Kit/Text/Text";
import Title from "../UI Kit/Titles/TItle";
import Divider from "../UI Kit/Divider/Divider";
import { useResizeWidth } from "../../hooks/useResizeWidth";
import Pagination from "../UI Kit/Pagination/Pagination";
import { countCardsOnPage } from "../../utils/countCardsOnPage";
interface PopularProgramProps {
  cards: CardProgramProps[];
  title?: boolean;
  cardsLength?: number;
  pagination?: boolean;
  backgorund?: React.CSSProperties;
}
const PopularProgram: React.FC<PopularProgramProps> = ({
  cards,
  title,
  cardsLength,
  pagination,
  backgorund,
}) => {
  const sizeScreenMobile = useResizeWidth(550);
  const sizeScreenTablet = useResizeWidth(830);

  const [cardsList, setCardsList] = useState(cards);

  const [currentPage, setCurrentPage] = useState(1);

  const [pages, setPage] = useState<number[]>([]);

  useEffect(() => {
    setPage(countCardsOnPage(cards));
    if (cardsLength) {
      setCardsList(
        cards.slice((currentPage - 1) * cardsLength, currentPage * cardsLength)
      );
      if (sizeScreenTablet) {
        setCardsList(cards.slice(0, 3));
      }
    } else {
      setCardsList(cards);
    }
  }, [sizeScreenTablet, currentPage, cards, cardsLength]);
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
          {cardsList.map((card, i) => (
            <div key={i} className="card-item">
              <CardProgram
                id={card.id}
                titleText={card.titleText}
                price={card.price}
                priceSale={card?.priceSale}
                HMOlabel={card?.HMOlabel}
                labelText={card.labelText}
              />
            </div>
          ))}
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
