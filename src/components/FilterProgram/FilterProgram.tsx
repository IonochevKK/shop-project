import Title from "../UI Kit/Titles/TItle";
import Text from "../UI Kit/Text/Text";
import Divider from "../UI Kit/Divider/Divider";
import "./filterProgram.scss";
import DropDown, { Option } from "../UI Kit/DropDown/DropDown";
import Button from "../UI Kit/Button/Button";
import { useResizeWidth } from "../../hooks/useResizeWidth";
import BreadCrubms from "../UI Kit/BreadCrubms/BreadCrubms";
import { useEffect, useState } from "react";
import {
  CountHours,
  KursDropDown,
  KursView,
  ViewSpecial,
} from "../../data/dataProgramm";
interface FilterProgramProps {
  breadCrumbs?: boolean;
}
const FilterProgram: React.FC<FilterProgramProps> = ({ breadCrumbs }) => {
  const sizeScreenTablet = useResizeWidth(1024);
  const sizeScreenMobile = useResizeWidth(550);
  const [loading, setLoading] = useState(false);

  const [viewProgramms, setviewProgramms] = useState<Option[]>([]);
  const [viewSpecialty, setviewSpecialty] = useState<Option[]>([]);
  const [viewCountHours, setviewCountHours] = useState<Option[]>([]);

  useEffect(() => {
    setLoading(true);
    setviewProgramms(KursView);
    setviewSpecialty(ViewSpecial);
    setviewCountHours(CountHours);
    setLoading(false);
  }, []);
  // const [selectedOtion, setSelectedOtion] = useState<Option | null>(null);
  // const [isOpen, setIsOpen] = useState(false);

  // const handleToggleDropDown = () => {
  //   setIsOpen(!isOpen);
  // };

  // const handleSelectOption = (option: Option) => {
  //   setSelectedOtion(option);
  //   setIsOpen(false);
  // };

  const elements = ["Главная", "1232"];
  return (
    <div className="filter-program">
      <div className="filter-container">
        {breadCrumbs && <BreadCrubms links={elements} />}
        <div className="title">
          <Title type="flex">
            <Text h2>Программы</Text>
            {!sizeScreenMobile && <Divider type="blue" />}
          </Title>
        </div>
        <div className="filter-components">
          <div className="container-filters">
            {!sizeScreenTablet && (
              <>
                <div className="item">
                  <span>
                    <Text body3>Вид программы:</Text>
                  </span>
                  <DropDown options={viewProgramms} />
                </div>
                <div className="item">
                  <span>
                    <Text body3>Специальность:</Text>
                  </span>
                  <DropDown options={viewSpecialty} />
                </div>
                <div className="item">
                  <span>
                    <Text body3>Количество часов:</Text>
                  </span>
                  <DropDown options={viewCountHours} />
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
                    <DropDown options={viewProgramms} />
                  </div>
                  <div className="item">
                    <span>
                      <Text body3>Специальность:</Text>
                    </span>
                    <DropDown options={viewSpecialty} />
                  </div>
                </div>
                <div className="items-bottom">
                  <div className="item">
                    <span>
                      <Text body3>Количество часов:</Text>
                    </span>
                    <DropDown options={viewCountHours} />
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
                  <DropDown options={viewProgramms} />
                </div>
                <div className="item">
                  <span>
                    <Text body3>Специальность:</Text>
                  </span>
                  <DropDown options={viewSpecialty} />
                </div>
                <div className="item">
                  <span>
                    <Text body3>Количество часов:</Text>
                  </span>
                  <DropDown options={viewCountHours} />
                </div>
              </>
            )}
          </div>
          {!sizeScreenTablet && (
            <div className="button">
              <Button type="primary" block>
                Найти
              </Button>
            </div>
          )}
          {sizeScreenMobile && (
            <div className="button">
              <Button type="primary" block>
                Найти
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FilterProgram;
