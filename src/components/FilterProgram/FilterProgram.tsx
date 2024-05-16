import Title from "../UI Kit/Titles/TItle";
import Text from "../UI Kit/Text/Text";
import Divider from "../UI Kit/Divider/Divider";
import "./filterProgram.scss";
import DropDown from "../UI Kit/DropDown/DropDown";
import Button from "../UI Kit/Button/Button";
import { useResizeWidth } from "../../hooks/useResizeWidth";
import BreadCrubms from "../UI Kit/BreadCrubms/BreadCrubms";
import useGetDropDownData from "../../hooks/useGetDropDownData";
import { useDispatch } from "react-redux";
import { filterCards } from "../../store/cards-slise";
import { Link } from "react-router-dom";
import BreadCrumbItem, {
  BreadCrumbItemProps,
} from "../UI Kit/BreadCrubms/BreadCrumbItem/BreadCrumbItem";
import { useEffect, useState } from "react";
import { getItemsBreadCrumbs } from "../../utils/getItemsBreadCrumbs";
interface FilterProgramProps {
  isbreadCrumbs?: boolean;
  link?: boolean;
}

const FilterProgram: React.FC<FilterProgramProps> = ({
  isbreadCrumbs,
  link,
}) => {
  const dispatch = useDispatch();
  const sizeScreenTablet = useResizeWidth(1024);
  const sizeScreenMobile = useResizeWidth(550);

  const { viewProgramms, viewSpecialty, viewCountHours } = useGetDropDownData();

  const [listbreadCrumbs, setListBreadCrumbs] = useState<BreadCrumbItemProps[]>(
    []
  );

  useEffect(() => {
    setListBreadCrumbs(getItemsBreadCrumbs());
  }, []);

  const handleSumbmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const { programms, special, time } = Object.fromEntries(formData) as {
      programms: string;
      special: string;
      time: string;
    };
    console.log(programms, special, time);
    dispatch(filterCards({ programms, special, time }));
  };

  return (
    <div className="filter-program">
      <div className="filter-container">
        {isbreadCrumbs && (
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
        <div className="title">
          <Title type="flex">
            <Text h2>Программы</Text>
            {!sizeScreenMobile && <Divider type="blue" />}
          </Title>
        </div>
        <form onSubmit={handleSumbmit}>
          <div className="filter-components">
            <div className="container-filters">
              {!sizeScreenTablet && (
                <>
                  <div className="item">
                    <span>
                      <Text body3>Вид программы:</Text>
                    </span>
                    <DropDown options={viewProgramms} name="programms" />
                  </div>
                  <div className="item">
                    <span>
                      <Text body3>Специальность:</Text>
                    </span>
                    <DropDown options={viewSpecialty} name="special" />
                  </div>
                  <div className="item">
                    <span>
                      <Text body3>Количество часов:</Text>
                    </span>
                    <DropDown options={viewCountHours} name="time" />
                  </div>
                </>
              )}

              {sizeScreenTablet && !sizeScreenMobile && (
                <>
                  <div className="items-top">
                    <div className="item">
                      <span>
                        <Text body3>Вид программы:</Text>
                      </span>
                      <DropDown options={viewProgramms} name="programms" />
                    </div>
                    <div className="item">
                      <span>
                        <Text body3>Специальность:</Text>
                      </span>
                      <DropDown options={viewSpecialty} name="special" />
                    </div>
                  </div>
                  <div className="items-bottom">
                    <div className="item">
                      <span>
                        <Text body3>Количество часов:</Text>
                      </span>
                      <DropDown options={viewCountHours} name="time" />
                    </div>
                    <div className="item ite">
                      <div className="button">
                        <Button type="primary" block>
                          Найти
                        </Button>
                      </div>
                    </div>
                  </div>
                </>
              )}
              {sizeScreenMobile && (
                <>
                  <div className="item">
                    <span>
                      <Text body3>Вид программы:</Text>
                    </span>
                    <DropDown options={viewProgramms} name="programms" />
                  </div>
                  <div className="item">
                    <span>
                      <Text body3>Специальность:</Text>
                    </span>
                    <DropDown options={viewSpecialty} name="special" />
                  </div>
                  <div className="item">
                    <span>
                      <Text body3>Количество часов:</Text>
                    </span>
                    <DropDown options={viewCountHours} name="time" />
                  </div>
                </>
              )}
            </div>
            {!sizeScreenTablet && (
              <>
                {!link && (
                  <div className="button">
                    <Button type="primary" block>
                      Найти
                    </Button>
                  </div>
                )}
                {link && (
                  <div className="button">
                    <Link to="/programms">
                      <Button type="primary" block>
                        Найти
                      </Button>
                    </Link>
                  </div>
                )}
              </>
            )}
            {sizeScreenMobile && (
              <>
                {!link && (
                  <div className="button">
                    <Button type="primary" block>
                      Найти
                    </Button>
                  </div>
                )}
                {link && (
                  <div className="button">
                    <Link to="/programms">
                      <Button type="primary" block>
                        Найти
                      </Button>
                    </Link>
                  </div>
                )}
              </>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default FilterProgram;
