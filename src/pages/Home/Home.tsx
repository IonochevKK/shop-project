import React from "react";
import Layout from "../../components/Layout/Layout";
import "./home.scss";
import Spa from "../../components/Spa/Spa";
import FilterProgram from "../../components/FilterProgram/FilterProgram";
import PopularProgram from "../../components/PopularProgram/PopularProgram";
import { CardProgramProps } from "../../components/CardProgram/CardProgram";
import SliderBlock from "../../components/SliderBlock/SliderBlock";
import BlockPosts from "../../components/BlockPosts/BlockPosts";
import DocumentsBlock from "../../components/DocumentsBlock/DocumentsBlock";
import BlockContact from "../../components/BlockContact/BlockContact";

const Home: React.FC = () => {
  const cards: CardProgramProps[] = [
    {
      id: 1,
      titleText:
        "Современные аспекты оказания сестринской помощи в различных отделениях",
      price: "1 500",
      priceSale: "2 450",
      HMOlabel: false,
      labelText: "144 ак. ч.",
    },
    {
      id: 2,
      titleText: "Протозоозы и гельминтозы",
      price: "2 500",
      priceSale: "5 450",
      HMOlabel: true,
      labelText: "144 ак. ч. (ЗЕТ)",
    },
    {
      id: 3,
      titleText:
        "Бронхиальная астма и хроническая обструктивная болезнь лёгких в амбулаторной практике",
      price: "1 500",
      HMOlabel: false,
      labelText: "16 ак. ч.",
    },
    {
      id: 4,
      titleText:
        "Современные аспекты оказания сестринской помощи в различных отделениях",
      price: "1 500",
      priceSale: "2 450",
      HMOlabel: false,
      labelText: "144 ак. ч.",
    },
    {
      id: 5,
      titleText: "Протозоозы и гельминтозы",
      price: "2 500",
      priceSale: "5 450",
      HMOlabel: false,
      labelText: "144 ак. ч. (ЗЕТ)",
    },
    {
      id: 6,
      titleText:
        "Бронхиальная астма и хроническая обструктивная болезнь лёгких в амбулаторной практике",
      price: "1 500",
      HMOlabel: false,
      labelText: "16 ак. ч.",
    },
  ];
  return (
    <div className="home">
      <Layout>
        <Spa />
        <FilterProgram />
        <PopularProgram cards={cards} title cardsLength={6} />
        <SliderBlock />
        <BlockPosts />
        <DocumentsBlock />
        <BlockContact title />
      </Layout>
    </div>
  );
};

export default Home;
