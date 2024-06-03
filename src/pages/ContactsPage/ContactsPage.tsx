import { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import BreadCrubms from "../../components/UI Kit/BreadCrubms/BreadCrubms";
import BreadCrumbItem, {
  BreadCrumbItemProps,
} from "../../components/UI Kit/BreadCrubms/BreadCrumbItem/BreadCrumbItem";
import "./contactsPage.scss";
import { getItemsBreadCrumbs } from "../../utils/getItemsBreadCrumbs";
import { cardsList } from "../../data/dataProgramm";
import Text from "../../components/UI Kit/Text/Text";
import ImgBack from "../../../public/img/crop-mini.png";
const ContactsPage = () => {
  const [listbreadCrumbs, setListBreadCrumbs] = useState<BreadCrumbItemProps[]>(
    []
  );

  useEffect(() => {
    setListBreadCrumbs(getItemsBreadCrumbs(cardsList));
  }, []);

  return (
    <div className="contactsPage">
      <Layout>
        <div className="container">
          <div className="imgBackground">
            <div className="item-1">
              <img src={ImgBack} alt="" />
            </div>
          </div>
          <BreadCrubms>
            {listbreadCrumbs?.map((item, index) => (
              <BreadCrumbItem
                href={item.href}
                text={`${item.text} /`}
                key={index}
              />
            ))}
          </BreadCrubms>
          <div className="contact">
            <div className="item-list">
              <ul>
                <li>
                  <Text body5>
                    <strong>Юридический и фактический адрес:</strong>
                  </Text>
                  <Text body5>
                    614007, ул. Николая Островского, д. 59/1, 10 этаж, БЦ
                    «Парус»
                  </Text>
                </li>
                <li>
                  <Text body5>
                    <strong>Телефон</strong> : 8 800 250-13-53
                  </Text>
                </li>
                <li>
                  <Text body5>
                    <strong>Email</strong> : edupcpo@gmail.com,
                    pcpomed@gmail.com, epidem517@gmail.com
                  </Text>
                </li>
                <li>
                  <Text body5>
                    <strong>Сокращённое наименование организации:</strong>
                  </Text>
                  <Text body5>
                    АНО ДПО «Приволжский центр профессионального обучения»
                  </Text>
                </li>
                <li>
                  <Text body5>
                    <strong>Полное наименование организации:</strong>
                  </Text>
                  <Text body5>
                    Автономная некоммерческая организация дополнительного
                    профессионального образования «Приволжский центр
                    профессионального обучения»
                  </Text>
                </li>
                <li>
                  <Text body5>
                    <strong>ОГРН:</strong> ?
                  </Text>
                </li>
                <li>
                  <Text body5>
                    <strong>ИНН:</strong> ?
                  </Text>
                </li>
                <li>
                  <Text body5>
                    <strong>КПП:</strong> ?
                  </Text>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default ContactsPage;
