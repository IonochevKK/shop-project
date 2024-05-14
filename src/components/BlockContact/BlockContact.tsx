import React, { MouseEventHandler } from "react";
import "./blockContact.scss";
import Title from "../UI Kit/Titles/TItle";
import Text from "../UI Kit/Text/Text";
import { useResizeWidth } from "../../hooks/useResizeWidth";
import Divider from "../UI Kit/Divider/Divider";

import MapImg from "../../../public/img/map.png";
import Form from "../UI Kit/Form/Form";
import ImgLogo from "../../../public/img/logo-spa.png";
interface BlockContactProps {
  bakcground?: React.CSSProperties;
  imgLogo?: boolean;
  title?: boolean;
}

const BlockContact: React.FC<BlockContactProps> = ({
  bakcground,
  imgLogo,
  title,
}) => {
  const sizeScreenMobile = useResizeWidth(550);
  const sizeScreenTablet = useResizeWidth(830);

  return (
    <div className="blockContact" style={bakcground}>
      <div className="container">
        <div className="title">
          {title && (
            <Title type="flex" style={{ padding: "0px" }}>
              {!sizeScreenMobile && <Text h2>Связаться с нами</Text>}
              {sizeScreenMobile && (
                <Text h2 fontSize="20px" style={{ padding: "0px" }}>
                  Связаться с нами
                </Text>
              )}
              {!sizeScreenTablet && <Divider type="blue" />}
            </Title>
          )}
        </div>
        <div className="container-form">
          <div className="blockForm">
            {!imgLogo && (
              <Form
                style={{ maxWidth: "430px" }}
                type="noText"
                title={<Text body2>Оставьте заявку</Text>}
                desc={
                  <Text body5>
                    Мы свяжемся с вами в течение 24 часов, чтобы обсудить
                    дальнейшие детали
                  </Text>
                }
              />
            )}
            {imgLogo && (
              <Form
                style={{ maxWidth: "430px" }}
                type="phone/name"
                title={<Text h2>Поможем с выбором программмы!</Text>}
                desc={
                  <Text body5>
                    Оставьте свои контактные данные, мысвяжемся с вами и
                    подберём нужную для вас программу обучения.
                  </Text>
                }
              />
            )}
          </div>
          {!sizeScreenMobile && (
            <div className="map">
              {imgLogo ? (
                <div className="svg-logo">
                  <img src={ImgLogo} alt="logo-header" />
                </div>
              ) : (
                <img src={MapImg} alt="" />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlockContact;
