import React from "react";
import Slider, { Slide } from "../UI Kit/Slider/Slider";
import { useResizeWidth } from "../../hooks/useResizeWidth";
import Title from "../UI Kit/Titles/TItle";
import Text from "../UI Kit/Text/Text";
import Divider from "../UI Kit/Divider/Divider";
import ImgDoc from "../../../public/img/document-slider.png";
import "./documentsBlock.scss";
const DocumentsBlock = () => {
  const slides: Slide[] = [
    { id: 1, imageUrl: ImgDoc, description: "1" },
    { id: 2, imageUrl: ImgDoc, description: "1" },
    { id: 3, imageUrl: ImgDoc, description: "1" },
    { id: 4, imageUrl: ImgDoc, description: "1" },
    { id: 5, imageUrl: ImgDoc, description: "1" },
  ];
  const sizeScreenMobile = useResizeWidth(550);
  const sizeScreenTablet = useResizeWidth(830);
  return (
    <div className="documentsBlock">
      <div className="container">
        <div className="title">
          <Title type="flex" style={{ padding: "0px" }}>
            {!sizeScreenMobile && <Text h2>Документы учебного центра</Text>}
            {sizeScreenMobile && (
              <Text h2 fontSize="20px" style={{ padding: "0px" }}>
                Документы учебного центра
              </Text>
            )}
            {!sizeScreenTablet && <Divider type="blue" />}
          </Title>
        </div>
        <div className="slider-container">
          <Slider slides={slides} type="buttonArrow" />
        </div>
      </div>
    </div>
  );
};

export default DocumentsBlock;
