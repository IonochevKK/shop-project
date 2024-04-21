import React, { MouseEventHandler } from "react";
import "./blockContact.scss";
import Title from "../UI Kit/Titles/TItle";
import Text from "../UI Kit/Text/Text";
import { useResizeWidth } from "../../hooks/useResizeWidth";
import Divider from "../UI Kit/Divider/Divider";

import MapImg from "../../../public/img/map.png";
import Form from "../UI Kit/Form/Form";
const BlockContact = () => {
  const sizeScreenMobile = useResizeWidth(550);
  const sizeScreenTablet = useResizeWidth(830);

  return (
    <div className="blockContact">
      <div className="container">
        <div className="title">
          <Title type="flex" style={{ padding: "0px" }}>
            {!sizeScreenMobile && <Text h2>Связаться с нами</Text>}
            {sizeScreenMobile && (
              <Text h2 fontSize="20px" style={{ padding: "0px" }}>
                Связаться с нами
              </Text>
            )}
            {!sizeScreenTablet && <Divider type="blue" />}
          </Title>
        </div>
        <div className="container-form">
          <div className="blockForm">
            <Form
              type="noText"
              title={<Text body2>Оставьте заявку</Text>}
              desc={
                <Text body5>
                  Мы свяжемся с вами в течение 24 часов, чтобы обсудить
                  дальнейшие детали.
                </Text>
              }
            />
          </div>
          {!sizeScreenMobile && (
            <div className="map">
              <img src={MapImg} alt="" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlockContact;
