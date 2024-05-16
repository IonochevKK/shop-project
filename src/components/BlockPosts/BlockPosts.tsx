import React, { useEffect, useState } from "react";
import "./blockPosts.scss";
import Title from "../UI Kit/Titles/TItle";
import Text from "../UI Kit/Text/Text";
import Divider from "../UI Kit/Divider/Divider";
import CardNews, { CardNewsList } from "../CardNews/CardNews";
import { useResizeWidth } from "../../hooks/useResizeWidth";
import BreadCrubms from "../UI Kit/BreadCrubms/BreadCrubms";
import BreadCrumbItem, {
  BreadCrumbItemProps,
} from "../UI Kit/BreadCrubms/BreadCrumbItem/BreadCrumbItem";
import { getItemsBreadCrumbs } from "../../utils/getItemsBreadCrumbs";
import { cardsList } from "../../data/dataProgramm";
import Button from "../UI Kit/Button/Button";
type BlockPostsType = "text" | "notext";
interface BlockPostsProps {
  type?: BlockPostsType;
  isbreadCrumbs?: boolean;
  lenghtCards?: number;
  isButton?: boolean;
}

const BlockPosts: React.FC<BlockPostsProps> = ({
  type,
  isbreadCrumbs,
  lenghtCards,
}) => {
  const sizeScreenTablet = useResizeWidth(1440);
  const sizeScreenMobile = useResizeWidth(550);

  const [cardsListPosts, setCardsListPosts] = useState<CardNewsList[]>([]);
  const [listbreadCrumbs, setListBreadCrumbs] = useState<BreadCrumbItemProps[]>(
    []
  );
  const [loadedCardsCount, setLoadedCardsCount] = useState(0);

  const loadMoreCards = () => {
    const nextLoadedCardsCount = loadedCardsCount + 15;
    const newCards = cardsList.slice(0, nextLoadedCardsCount);
    setCardsListPosts(newCards);
    setLoadedCardsCount(nextLoadedCardsCount);
  };

  useEffect(() => {
    setListBreadCrumbs(getItemsBreadCrumbs());
    if (lenghtCards) {
      setCardsListPosts(cardsList.slice(0, lenghtCards));
      setLoadedCardsCount(lenghtCards);
    } else {
      loadMoreCards();
    }
  }, [lenghtCards]);


  return (
    <div className="blockPosts">
      <div className="container">
        {isbreadCrumbs && (
          <BreadCrubms>
            {listbreadCrumbs?.map((item, index) => (
              <BreadCrumbItem
                href={item.href}
                text={`${item.text} /`}
                key={index}
              />
            ))}
          </BreadCrubms>
        )}
        <div className="title">
          {!sizeScreenMobile && (
            <Title type="flexText" value="Смотреть все новости">
              <Text h2>Новости</Text>
              <Divider type="blue" />
            </Title>
          )}
          {sizeScreenMobile && (
            <Title type="flexText">
              <Text h2 fontSize="24px">
                Новости
              </Text>
            </Title>
          )}
        </div>
        <div className="container-items">
          {cardsListPosts?.map((card) => (
            <div className="card-item" key={card.id}>
              <CardNews
                id={card.id}
                title={card.title}
                desc={card.desc}
                createAt={card.createAt}
              />
            </div>
          ))}
        </div>
        {loadedCardsCount < cardsList.length && (
          <div className="button-container">
            <Button type="primary" onClick={loadMoreCards}>
              <Text body3>Показать ещё</Text>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlockPosts;
