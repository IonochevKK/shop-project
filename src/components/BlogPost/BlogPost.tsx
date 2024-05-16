import React, { useEffect, useState } from "react";
import "./blogPost.scss";
import Title from "../UI Kit/Titles/TItle";
import Text from "../UI Kit/Text/Text";
import { CardNewsList } from "../CardNews/CardNews";
import BreadCrubms from "../UI Kit/BreadCrubms/BreadCrubms";
import BreadCrumbItem, {
  BreadCrumbItemProps,
} from "../UI Kit/BreadCrubms/BreadCrumbItem/BreadCrumbItem";
import { getItemsBreadCrumbs } from "../../utils/getItemsBreadCrumbs";
import { changeDataMouth } from "../../utils/getMounth";
interface BlogPostProps {
  card: CardNewsList;
}

const BlogPost: React.FC<BlogPostProps> = ({ card }) => {
  const [listbreadCrumbs, setListbreadCrumbs] = useState<BreadCrumbItemProps[]>(
    []
  );
  useEffect(() => {
    setListbreadCrumbs(getItemsBreadCrumbs(card));
  }, []);

  return (
    <div className="blogPost">
      <div className="container-blogpost">
        <BreadCrubms>
          {listbreadCrumbs?.map((item, index) => (
            <BreadCrumbItem
              href={item.href}
              text={`${item.text} /`}
              key={index}
            />
          ))}
        </BreadCrubms>
        <div className="title">
          <Title type="flex">
            <Text h2>{card.title}</Text>
          </Title>
        </div>
        <div className="date">
          <Text color="rgba(155, 155, 155)" body5>
            {changeDataMouth(card.createAt)}
          </Text>
        </div>
        <div className="image-container">
          <img src={card?.img} alt="" />
        </div>
        <div className="container-text">
          {card?.text}
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
