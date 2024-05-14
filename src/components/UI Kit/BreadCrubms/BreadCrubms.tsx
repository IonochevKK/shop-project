import React from "react";
import Text from "../Text/Text";
import "./breadCrubms.scss";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

interface BreadCrubmsProps {
  links: string[];
}

const BreadCrubms: React.FC<BreadCrubmsProps> = ({ links }) => {
  return (
    <div className="breadCrubms">
      {links.map((element, index) => {
        return (
          <div className="item" key={index}>
            <Link to={""}>
              <Text body4>{`${
                links.length === index + 1 ? element : `${element} / `
              }`}</Text>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default BreadCrubms;
