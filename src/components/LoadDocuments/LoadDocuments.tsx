import React from "react";
import Title from "../UI Kit/Titles/TItle";
import Text from "../UI Kit/Text/Text";
import "./loadDocuments.scss";
import Button from "../UI Kit/Button/Button";
import Label from "../UI Kit/Label/Label";
const LoadDocuments: React.FC = () => {
  return (
    <div className="loadDocuments">
      <div className="container">
        <div className="title">
          <Title type="flexText">
            <Text body2>Загрузка документов</Text>
          </Title>
        </div>
        <div className="items">
          <div className="item">
            <div className="subtitle">
              <Text body5>Загрузите скан диплома об образовании (ВУЗ/СУЗ)</Text>
              <div className="buttons">
                <div className="button">
                  <Button type="secondary_1">
                    <Text body3>Загрузить</Text>
                  </Button>
                </div>
                <div className="label">
                  <Label type="danger" sizeTypeCards="largeCard">
                    <Text body6>Нет данных</Text>
                  </Label>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="subtitle">
              <Text body5>
                Загрузите скан подтверждающий фамилию в дипломе (при смене
                фамилии)
              </Text>
              <div className="buttons">
                <div className="button">
                  <Button type="secondary_1">
                    <Text body3>Загрузить</Text>
                  </Button>
                </div>
                <div className="label">
                  <Label type="success" sizeTypeCards="largeCard">
                    <Text body6>Принят</Text>
                  </Label>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="subtitle">
              <Text body5>Загрузите скан СНИЛС</Text>
              <div className="buttons">
                <div className="button">
                  <Button type="secondary_1" block>
                    <Text body3>Загрузить</Text>
                  </Button>
                </div>
                <div className="label">
                  <Label type="success" sizeTypeCards="largeCard" block>
                    <Text body6>Принят</Text>
                  </Label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadDocuments;
