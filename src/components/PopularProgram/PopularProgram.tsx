import React from "react";
import CardProgram, { CardProgramProps } from "../CardProgram/CardProgram";
import "./popularProgram.scss";
import Text from "../UI Kit/Text/Text";
import Title from "../UI Kit/Titles/TItle";
import Divider from "../UI Kit/Divider/Divider";
import { useResizeWidth } from "../../hooks/useResizeWidth";
interface PopularProgramProps {
  cards: CardProgramProps[];
}
const PopularProgram: React.FC<PopularProgramProps> = ({ cards }) => {
  const sizeScreenTablet = useResizeWidth(830);
  const sizeScreenMobile = useResizeWidth(550);
  return (
    <div className="popularProgram">
      <div className="popularProgram-container">
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
        <div className="cards-container">
          {cards.map((card, i) => (
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
      </div>
    </div>
  );
};

export default PopularProgram;
