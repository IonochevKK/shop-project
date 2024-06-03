import React, { useEffect, useState } from "react";
import { useLocation, Outlet } from "react-router-dom";
import "./personalAccount.scss";
import Layout from "../../components/Layout/Layout";
import { cardsList } from "../../data/dataProgramm";
import { getItemsBreadCrumbs } from "../../utils/getItemsBreadCrumbs";
import BreadCrubms from "../../components/UI Kit/BreadCrubms/BreadCrubms";
import BreadCrumbItem, {
  BreadCrumbItemProps,
} from "../../components/UI Kit/BreadCrubms/BreadCrumbItem/BreadCrumbItem";
import Title from "../../components/UI Kit/Titles/TItle";
import Text from "../../components/UI Kit/Text/Text";
import Sidebar from "../../components/UI Kit/Sidebar/Sidebar";
import Label from "../../components/UI Kit/Label/Label";
import WarnLabelSvg from "../../../public/svg/warn-label.svg?react";
import { useResizeWidth } from "../../hooks/useResizeWidth";
import DropDown from "../../components/UI Kit/DropDown/DropDown";

const PersonalAccount = () => {
  const [listbreadCrumbs, setListBreadCrumbs] = useState<BreadCrumbItemProps[]>(
    []
  );
  const [nowLocation, setNowLocation] = useState("");
  const location = useLocation();

  const sizeScreenTablet = useResizeWidth(1024);
  const sizeScreenMobile = useResizeWidth(700);

  useEffect(() => {
    setNowLocation(getLocation(location.pathname));
    setListBreadCrumbs(getItemsBreadCrumbs(cardsList));
  }, [location.pathname]);

  const getLocation = (pathname: string) => {
    const locationHref = pathname.split("/").splice(1);
    return locationHref.join("/");
  };

  return (
    <div className="personalAccount">
      <Layout>
        <div className="container-background">
          <div className="container">
            {!sizeScreenMobile && (
              <BreadCrubms>
                {listbreadCrumbs?.map((item, index) => (
                  <BreadCrumbItem
                    href={item.href}
                    text={`${item.text} /`}
                    key={index}
                  />
                ))}
              </BreadCrubms>
            )}

            {sizeScreenMobile && (
              <div className="sidebar-mobile">
                <DropDown
                  isLinks
                  options={[
                    {
                      label: "Личные данные",
                      value: "/personal-account/personal-data",
                    },
                    {
                      label: "Документы об обучении",
                      value: "/personal-account/training-documents",
                    },
                    {
                      label: "История Покупок",
                      value: "/personal-account/purchase-history",
                    },
                    {
                      label: "Выход",
                      value: "/",
                    },
                  ]}
                />
              </div>
            )}
            <div className="title">
              <Title type="flexText">
                <Text h2>Личные данные</Text>
              </Title>
            </div>
            <div className="label-item">
              <Label
                type="warn"
                classname={{
                  background: "rgba(255, 249, 212, 1)",
                  padding: "20px",
                  width: "100%",
                  maxWidth: "500px",
                  textAlign: "left",
                  display: "flex",
                  gap: "10px",
                  alignItems: "center",
                }}
              >
                <div className="icon-label">
                  <WarnLabelSvg />
                </div>
                <div className="text-label">
                  <Text caption2>
                    Пожалуйста, заполните все поля и загрузите необходимые
                    документы, для того чтобы начать обучение.
                  </Text>
                </div>
              </Label>
            </div>
            <div className="container-items">
              {!sizeScreenMobile && (
                <div className="item-left">
                  <Sidebar location={nowLocation} />
                </div>
              )}
              <div className="item-right">
                <Outlet /> 
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default PersonalAccount;
