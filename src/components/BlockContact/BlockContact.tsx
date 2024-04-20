import React, { MouseEventHandler } from "react";
import "./blockContact.scss";
import Title from "../UI Kit/Titles/TItle";
import Text from "../UI Kit/Text/Text";
import { useResizeWidth } from "../../hooks/useResizeWidth";
import Divider from "../UI Kit/Divider/Divider";
import Input from "../UI Kit/Input/Input";
import Button from "../UI Kit/Button/Button";
import MapImg from "../../../public/img/map.png";
const BlockContact = () => {
  const sizeScreenMobile = useResizeWidth(550);
  const sizeScreenTablet = useResizeWidth(830);
  const handleSumbmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const { username, email, phone } = Object.fromEntries(formData);
    console.log(username, email, phone);
  };
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
            <div className="form">
              <div className="title">
                <Text body2>Оставьте заявку</Text>
              </div>
              <div className="desc">
                <Text body5>
                  Мы свяжемся с вами в течение 24 часов, чтобы обсудить
                  дальнейшие детали.
                </Text>
              </div>
              <form onClick={handleSumbmit}>
                <Input type="text" name="username" block placeholder="Имя" />
                <Input
                  type="tel"
                  name="phone"
                  block
                  placeholder="(000) 000-00-00"
                  postfix="+7"
                />
                <Input type="email" name="email" block placeholder="Email" />
                <div className="button">
                  <Button type="primary" block={sizeScreenMobile}>
                    Отправить
                  </Button>
                </div>
              </form>
              <div className="lisenc">
                <Text caption1 color="rgba(155, 155, 155, 1)">
                  *Нажимая на кнопку, вы даёте согласие на обработку
                  персональных данных
                </Text>
              </div>
            </div>
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
