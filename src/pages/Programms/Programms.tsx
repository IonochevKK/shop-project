import React from "react";
import "./programms.scss";
import Layout from "../../components/Layout/Layout";
import PopularProgram from "../../components/PopularProgram/PopularProgram";
import FilterProgram from "../../components/FilterProgram/FilterProgram";
import { CardProgramProps } from "../../components/CardProgram/CardProgram";
const Programms = () => {
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
    <div className="programms">
      <Layout>
        <FilterProgram breadCrumbs />
        <PopularProgram cards={cards} />
      </Layout>
    </div>
  );
};

export default Programms;
