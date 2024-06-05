import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import "./programDescription.scss";
import BreadCrubms from "../../components/UI Kit/BreadCrubms/BreadCrubms";
import BreadCrumbItem, {
  BreadCrumbItemProps,
} from "../../components/UI Kit/BreadCrubms/BreadCrumbItem/BreadCrumbItem";
import { getItemsBreadCrumbs } from "../../utils/getItemsBreadCrumbs";
import { cards, cardsList } from "../../data/dataProgramm";
import Text from "../../components/UI Kit/Text/Text";
import CardProgramDescription from "./components/CardProgramDescription/CardProgramDescription";
import useGetLocationNow from "../../hooks/useGetLocationNow";
import { CardProgramProps } from "../../components/CardProgram/CardProgram";
import MainImg from "../../../public/img/mask_group.png";
import CropImg from "../../../public/img/crop-mini.png";
import PopularProgram from "../../components/PopularProgram/PopularProgram";
const ProgramDescription: React.FC = () => {
  const [listbreadCrumbs, setListBreadCrumbs] = useState<BreadCrumbItemProps[]>(
    []
  );
  const { location } = useGetLocationNow();
  const [card, setCard] = useState<CardProgramProps>();

  useEffect(() => {
    setListBreadCrumbs(getItemsBreadCrumbs(cardsList));
    const findCardProgramm = cards.find(
      (cardProgramm) => cardProgramm.id === location.split("/").splice(2)[0]
    );
    setCard(findCardProgramm);
  }, []);

  return (
    <div className="programDescription">
      <Layout>
        <div className="container-programDescription">
          <div className="backgorund-image">
            <div className="img img-main">
              <img src={MainImg} alt="" />
            </div>
            <div className="img">
              <img src={CropImg} alt="" />
            </div>
            <div className="img img-right">
              <img src={CropImg} alt="" />
            </div>
          </div>
          <div className="breadCrumbs">
            <BreadCrubms>
              {listbreadCrumbs?.map((item, index) => (
                <BreadCrumbItem
                  href={item.href}
                  text={`${item.text} /`}
                  key={index}
                />
              ))}
            </BreadCrubms>
          </div>
          <div className="programmblock">
            <div className="title-programmblock">
              <Text h2>{card?.titleText}</Text>
            </div>
            <div className="card-block">
              {card !== undefined && (
                <CardProgramDescription
                  id={card?.id}
                  HMOlabel={card.HMOlabel}
                  labelText={card?.labelText}
                  price={card?.price}
                  priceSale={card?.priceSale}
                />
              )}
            </div>
          </div>
        </div>
        <PopularProgram title cardsLength={3} sliceCards={3} backgorund={{background:"#fff"}}  />
      </Layout>
    </div>
  );
};

export default ProgramDescription;
