import "./programms.scss";
import Layout from "../../components/Layout/Layout";
import PopularProgram from "../../components/PopularProgram/PopularProgram";
import FilterProgram from "../../components/FilterProgram/FilterProgram";
import { CardProgramProps } from "../../components/CardProgram/CardProgram";
import BlockContact from "../../components/BlockContact/BlockContact";
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
    {
      id: 7,
      titleText:
        "Современные аспекты оказания сестринской помощи в различных отделениях",
      price: "1 500",
      priceSale: "2 450",
      HMOlabel: false,
      labelText: "144 ак. ч.",
    },
    {
      id: 8,
      titleText: "Протозоозы и гельминтозы",
      price: "2 500",
      priceSale: "5 450",
      HMOlabel: false,
      labelText: "144 ак. ч. (ЗЕТ)",
    },
    {
      id: 9,
      titleText:
        "Бронхиальная астма и хроническая обструктивная болезнь лёгких в амбулаторной практике",
      price: "1 500",
      HMOlabel: false,
      labelText: "16 ак. ч.",
    },
    {
      id: 10,
      titleText:
        "Современные аспекты оказания сестринской помощи в различных отделениях",
      price: "1 500",
      priceSale: "2 450",
      HMOlabel: false,
      labelText: "144 ак. ч.",
    },
    {
      id: 11,
      titleText: "Протозоозы и гельминтозы",
      price: "2 500",
      priceSale: "5 450",
      HMOlabel: false,
      labelText: "144 ак. ч. (ЗЕТ)",
    },
    {
      id: 12,
      titleText:
        "Бронхиальная астма и хроническая обструктивная болезнь лёгких в амбулаторной практике",
      price: "1 500",
      HMOlabel: false,
      labelText: "16 ак. ч.",
    },
    {
      id: 13,
      titleText:
        "Современные аспекты оказания сестринской помощи в различных отделениях",
      price: "1 500",
      priceSale: "2 450",
      HMOlabel: false,
      labelText: "144 ак. ч.",
    },
    {
      id: 14,
      titleText: "Протозоозы и гельминтозы",
      price: "2 500",
      priceSale: "5 450",
      HMOlabel: false,
      labelText: "144 ак. ч. (ЗЕТ)",
    },
    {
      id: 15,
      titleText:
        "Бронхиальная астма и хроническая обструктивная болезнь лёгких в амбулаторной практике",
      price: "1 500",
      HMOlabel: false,
      labelText: "16 ак. ч.",
    },
    {
      id: 1,
      titleText: "Тест",
      price: "1 500",
      priceSale: "2 450",
      HMOlabel: false,
      labelText: "144 ак. ч.",
    },
    {
      id: 2,
      titleText: "Тест",
      price: "2 500",
      priceSale: "5 450",
      HMOlabel: true,
      labelText: "144 ак. ч. (ЗЕТ)",
    },
    {
      id: 3,
      titleText: "Тест",
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
    {
      id: 7,
      titleText:
        "Современные аспекты оказания сестринской помощи в различных отделениях",
      price: "1 500",
      priceSale: "2 450",
      HMOlabel: false,
      labelText: "144 ак. ч.",
    },
    {
      id: 8,
      titleText: "Протозоозы и гельминтозы",
      price: "2 500",
      priceSale: "5 450",
      HMOlabel: false,
      labelText: "144 ак. ч. (ЗЕТ)",
    },
    {
      id: 9,
      titleText:
        "Бронхиальная астма и хроническая обструктивная болезнь лёгких в амбулаторной практике",
      price: "1 500",
      HMOlabel: false,
      labelText: "16 ак. ч.",
    },
    {
      id: 10,
      titleText:
        "Современные аспекты оказания сестринской помощи в различных отделениях",
      price: "1 500",
      priceSale: "2 450",
      HMOlabel: false,
      labelText: "144 ак. ч.",
    },
    {
      id: 11,
      titleText: "Протозоозы и гельминтозы",
      price: "2 500",
      priceSale: "5 450",
      HMOlabel: false,
      labelText: "144 ак. ч. (ЗЕТ)",
    },
    {
      id: 12,
      titleText:
        "Бронхиальная астма и хроническая обструктивная болезнь лёгких в амбулаторной практике",
      price: "1 500",
      HMOlabel: false,
      labelText: "16 ак. ч.",
    },
    {
      id: 13,
      titleText:
        "Современные аспекты оказания сестринской помощи в различных отделениях",
      price: "1 500",
      priceSale: "2 450",
      HMOlabel: false,
      labelText: "144 ак. ч.",
    },
    {
      id: 14,
      titleText: "Протозоозы и гельминтозы",
      price: "2 500",
      priceSale: "5 450",
      HMOlabel: false,
      labelText: "144 ак. ч. (ЗЕТ)",
    },
    {
      id: 15,
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
        <PopularProgram cards={cards} pagination cardsLength={15} />
        <PopularProgram
          cards={cards}
          cardsLength={3}
          title
          backgorund={{ background: "white" }}
        />
        <BlockContact bakcground={{ background: "#e7f3ff" }} imgLogo />
      </Layout>
    </div>
  );
};

export default Programms;
