import React from "react";
import "./enterYourPersonalData.scss";
import Title from "../UI Kit/Titles/TItle";
import Text from "../UI Kit/Text/Text";
import Input from "../UI Kit/Input/Input";
import DatePickerSVG from "../../../public/svg/datePicker.svg?react";
import LoadDocuments from "../LoadDocuments/LoadDocuments";
const EnterYourPersonalData: React.FC = () => {
  return (
    <>
      <div className="enterYourPersonalData">
        <div className="container">
          <div className="container-personalData">
            <div className="personalData">
              <div className="title">
                <Title type="flexText">
                  <Text body2>Личные данные</Text>
                </Title>
              </div>
              <div className="items">
                <div className="item">
                  <Input type="text" placeholder="Имя" block name="name" />
                </div>
                <div className="item">
                  <Input
                    type="text"
                    placeholder="Фамилия"
                    block
                    name="surname"
                  />
                </div>
                <div className="item">
                  <Input
                    type="text"
                    placeholder="Отчество"
                    block
                    name="patronymic"
                  />
                </div>
                <div className="item">
                  <Input
                    type="text" //TODO Сделать инпут специально для DatePicker
                    placeholder="Дата рождения"
                    name="date-of-birth"
                    block
                    postfix={<DatePickerSVG />}
                  />
                </div>
                <div className="item">
                  <Input
                    type="tel"
                    name="phone"
                    block
                    placeholder="(000) 000-00-00"
                    postfix="+7"
                  />
                </div>
                <div className="item">
                  <Input type="email" block placeholder="Email" name="email" />
                </div>
                <div className="item">
                  <Input type="text" block placeholder="СНИЛС" name="snils" />
                </div>
              </div>
            </div>
            <div className="residence">
              <div className="title">
                <Title type="flexText">
                  <Text body5>Место жительства *</Text>
                </Title>
              </div>
              <div className="items">
                <div className="item">
                  <Input type="text" placeholder="Регион" block name="region" />
                </div>
                <div className="item">
                  <Input
                    type="text"
                    placeholder="Населенный пункт"
                    block
                    name="settlement"
                  />
                </div>
                <div className="item">
                  <Input type="text" placeholder="Улица" block name="street" />
                </div>
                <div className="item">
                  <Input type="text" placeholder="Индекс" block name="index" />
                </div>
                <div className="item">
                  <Input type="text" placeholder="Дом" block name="home" />
                </div>
                <div className="item">
                  <Input
                    type="text"
                    placeholder="квартира"
                    block
                    name="apartament"
                  />
                </div>
              </div>
            </div>
            <Text body6>
              *Данные будут использованы для отправки документов и составления
              договора
            </Text>
          </div>
        </div>
      </div>
      <LoadDocuments />
    </>
  );
};

export default EnterYourPersonalData;
