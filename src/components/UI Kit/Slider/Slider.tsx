import React, { useState } from "react";
import "./slider.scss";
import ArrowRight from "../../../../public/svg/arrow_right.svg?react";
import ArrowLeft from "../../../../public/svg/arrow_left.svg?react";
import { useResizeWidth } from "../../../hooks/useResizeWidth";

export interface Slide {
  id: number;
  imageUrl: string;
  description: string;
}
type SliderType = "buttonArrow" | "buttonCircle";
interface SliderProps {
  slides?: Slide[];
  type?: SliderType;
}

const Slider: React.FC<SliderProps> = ({ slides, type }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const sizeScreenMobile = useResizeWidth(550);
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = (prevIndex + 1) % slides!.length;
      if (type === "buttonArrow") {
        const root = document.getElementById("containerSlider");
        root?.style.setProperty("--current-slide", `${nextIndex}`);
      }
      return nextIndex;
    });
  };
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex === 0 ? slides!.length - 1 : prevIndex - 1;
      if (type === "buttonArrow") {
        const root = document.getElementById("containerSlider");
        console.log(root);
        root?.style.setProperty("--current-slide", `${nextIndex}`);
      }
      return nextIndex;
    });
  };
  const handleSlideClick = (index: number) => {
    setCurrentIndex(index);
  };
  return (
    <div className="slider">
      {type === "buttonCircle" && (
        <div className="container">
          <div className="container-slides">
            {!sizeScreenMobile && (
              <>
                {slides?.map((slide, index) => (
                  <div
                    className={`slide ${
                      index === currentIndex
                        ? "center"
                        : index === (currentIndex + 1) % slides!.length
                        ? "right"
                        : index ===
                          (currentIndex - 1 + slides!.length) % slides!.length
                        ? "left"
                        : "hidden"
                    }`}
                    key={slide.id}
                    onClick={() => handleSlideClick(index)}
                  >
                    <img src={slide.imageUrl} alt="" />
                  </div>
                ))}
              </>
            )}
            {sizeScreenMobile && (
              <>
                {slides?.map((slide, index) => (
                  <div
                    className={`slide ${
                      currentIndex === index ? "activeSlider" : ""
                    }`}
                    key={index}
                  >
                    <img src={slide.imageUrl} alt="" />
                  </div>
                ))}
              </>
            )}
          </div>
          <div className="buttonItems">
            {sizeScreenMobile && (
              <>
                <div className="item">
                  <button className="prev" onClick={prevSlide}>
                    <ArrowLeft />
                  </button>
                </div>
                <div className="item">
                  <button className="next" onClick={nextSlide}>
                    <ArrowRight />
                  </button>
                </div>
              </>
            )}
            {!sizeScreenMobile &&
              slides?.map((e, i) => (
                <div
                  className={`item ${
                    i === currentIndex ? "item active" : "item"
                  }`}
                  key={i}
                  onClick={() => handleSlideClick(i)}
                >
                  <span className="circle "></span>
                </div>
              ))}
          </div>
        </div>
      )}
      {type === "buttonArrow" && (
        <div className="container" id="containerSlider">
          <div className="container-items">
            {slides?.map((slide, index) => (
              <div
                className={`slide ${
                  currentIndex === index ? "activeSlider" : ""
                }`}
                key={index}
              >
                <img src={slide.imageUrl} alt="" />
              </div>
            ))}
            <div className="buttonitems">
              <>
                <div className="item">
                  <button className="prev" onClick={prevSlide}>
                    <ArrowLeft />
                  </button>
                </div>
                <div className="item">
                  <button className="next" onClick={nextSlide}>
                    <ArrowRight />
                  </button>
                </div>
              </>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Slider;
