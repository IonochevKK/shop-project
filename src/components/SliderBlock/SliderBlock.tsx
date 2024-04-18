import React from "react";
import "./sliderBlock.scss";
import Title from "../UI Kit/Titles/TItle";
import Text from "../UI Kit/Text/Text";
import Divider from "../UI Kit/Divider/Divider";
import Slider, { Slide } from "../UI Kit/Slider/Slider";
import ImgDoc from "../../../public/img/document-slider.png";
import ImgBack from "../../../public/img/cropv2.png";
import ImgBackv2 from "../../../public/img/cropminiv2.png";
import { useResizeWidth } from "../../hooks/useResizeWidth";
const SliderBlock = () => {
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
    <div className="sliderBlock">
      <div className="container">
        <div className="imgBackground">
          <div className="item-1">
            <img src={ImgBack} alt="" />
          </div>
          <div className="item-2">
            <img src={ImgBackv2} alt="" />
          </div>
        </div>
        <div className="title">
          <Title type="flex" style={{ padding: "0px" }}>
            {!sizeScreenMobile && <Text h2>Благодарственные письма</Text>}
            {sizeScreenMobile && (
              <Text h2 fontSize="20px" style={{ padding: "0px" }}>
                Благодарственные письма
              </Text>
            )}
            {!sizeScreenTablet && <Divider type="blue" />}
          </Title>
        </div>
        <div className="slider-container">
          <Slider slides={slides} type="buttonCircle" />
        </div>
      </div>
    </div>
  );
};

export default SliderBlock;
