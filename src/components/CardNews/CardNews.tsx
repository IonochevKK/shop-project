import React from "react";
import "./cardNews.scss";
import Text from "../UI Kit/Text/Text";
import Button from "../UI Kit/Button/Button";
import { changeDataMouth } from "../../utils/getMounth";
import { Link } from "react-router-dom";
import PostPage from "../../pages/PostPage/PostPage";
export interface CardNewsList {
  id: number | string;
  title: string;
  desc: string;
  createAt: Date;
  img?: string;
  text?: string;
}
const CardNews: React.FC<CardNewsList> = ({ title, desc, createAt,id }) => {
  const data = changeDataMouth(createAt);
  return (
    <div className="cardNews">
      <div className="container">
        <div className="title">
          <Text body2>{title}</Text>
        </div>
        <div className="deck">
          <Text body5>{desc}</Text>
        </div>
        <div className="info">
          <div className="date">
            <span>
              <Text color="rgba(155, 155, 155)">{data}</Text>
            </span>
          </div>
          <div className="button">
            <Button type="link">
              <Link to={`/novosti/${id}`}>
                Подробнее
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardNews;
