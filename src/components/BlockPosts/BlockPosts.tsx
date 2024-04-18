import React from "react";
import "./blockPosts.scss";
import Title from "../UI Kit/Titles/TItle";
import Text from "../UI Kit/Text/Text";
import Divider from "../UI Kit/Divider/Divider";
import CardNews, { CardNewsList } from "../CardNews/CardNews";
import { useResizeWidth } from "../../hooks/useResizeWidth";
type BlockPostsType = "text" | "notext";
interface BlockPostsProps {
  type?: BlockPostsType;
}
const cardsList: CardNewsList[] = [
  {
    title: "Как врачу заявить о себе?",
    desc: " Работа с пациентами — это постоянная коммуникация. И важно в этой коммуникации выстроить образ компетентного.Работа с пациентами — это постоянная коммуникация. И важно в этой коммуникации выстроить образ компетентного",
    createAt: new Date(),
  },
  {
    title:
      "Онконастороженность: почему врачам важно обучаться в этом направлении?",
    desc: "Несмотря на значимые успехи в области лечения онкологии, заболевания данного характера до сих пор становятся причиной Несмотря на значимые успехи в области лечения онкологии, заболевания данного характера до сих пор становятся причиной",
    createAt: new Date(),
  },
  {
    title: "Аккредитация специалистов с немедицинским образованием",
    desc: "Как уже многие знают, в 2023 году вышел Приказ Минздрава № 709н, который распространяется не только на медицинских специалистов, но и на специалистов с немедицинским образованием",
    createAt: new Date(),
  },
  {
    title: "Аккредитация специалистов с немедицинским образованием",
    desc: "Как уже многие знают, в 2023 году вышел Приказ Минздрава № 709н, который распространяется не только на медицинских специалистов, но и на специалистов с немедицинским образованием",
    createAt: new Date(),
  },
  {
    title: "Аккредитация специалистов с немедицинским образованием",
    desc: "Как уже многие знают, в 2023 году вышел Приказ Минздрава № 709н, который распространяется не только на медицинских специалистов, но и на специалистов с немедицинским образованием",
    createAt: new Date(),
  },
];

const BlockPosts: React.FC<BlockPostsProps> = ({ type }) => {
  const sizeScreenTablet = useResizeWidth(1440);
  const sizeScreenMobile = useResizeWidth(550);

  const sliceCardList = (cardsList: CardNewsList[]) => {
    if (!sizeScreenTablet) {
      return cardsList.slice(0, 3);
    } else if (sizeScreenTablet) {
      return cardsList.slice(0, 4);
    } else if (sizeScreenMobile) {
      return cardsList.slice(0, 3);
    }
  };
  const newCardList = sliceCardList(cardsList);
  return (
    <div className="blockPosts">
      <div className="container">
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
          {newCardList?.map((card, index) => (
            <div className="card-item" key={index}>
              <CardNews
                title={card.title}
                desc={card.desc}
                createAt={card.createAt}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlockPosts;
