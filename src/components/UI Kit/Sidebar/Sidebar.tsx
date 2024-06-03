import React from "react";
import "./sidebar.scss";
import Text from "../Text/Text";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
interface SidebarProps {
  location?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ location }) => {
  return (
    <div className="sidebar">
      <div className="container-items1">
        <div className="item">
          <Link to="/personal-account/personal-data">
            <Button type="link">
              {location === "personal-account/personal-data" ? (
                <Text body5 fontSize="16px" lineHeight="24px">
                  <strong>Личные данные</strong>
                </Text>
              ) : (
                <Text body5 fontSize="16px" lineHeight="24px">
                  Личные данные
                </Text>
              )}
            </Button>
          </Link>
        </div>
        <div className="item">
          <Link to="/personal-account/training-documents">
            <Button type="link">
              {location === "personal-account/training-documents" ? (
                <Text body5 fontSize="16px" lineHeight="24px">
                  <strong>Документы об обучении</strong>
                </Text>
              ) : (
                <Text body5 fontSize="16px" lineHeight="24px">
                  Документы об обучении
                </Text>
              )}
            </Button>
          </Link>
        </div>
        <div className="item">
          <Link to="/personal-account/purchase-history">
            <Button type="link">
              {location === "personal-account/purchase-history" ? (
                <Text body5 fontSize="16px" lineHeight="24px">
                  <strong>История покупок</strong>
                </Text>
              ) : (
                <Text body5 fontSize="16px" lineHeight="24px">
                  История покупок
                </Text>
              )}
            </Button>
          </Link>
        </div>
        <div className="item">
          <Link to="/">
            <Button type="link">
              <Text body5 fontSize="16px" lineHeight="24px">
                Выход
              </Text>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
