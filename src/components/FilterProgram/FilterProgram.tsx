import React, { useState } from "react";
import Title from "../UI Kit/Titles/TItle";
import Text from "../UI Kit/Text/Text";
import Divider from "../UI Kit/Divider/Divider";
import "./filterProgram.scss";
import DropDown, { Option } from "../UI Kit/DropDown/DropDown";
import Button from "../UI Kit/Button/Button";
import { useResizeWidth } from "../../hooks/useResizeWidth";
const FilterProgram: React.FC = () => {
  const sizeScreenTablet = useResizeWidth(1024);
  const sizeScreenMobile = useResizeWidth(550);
  console.log(sizeScreenMobile);
  const [selectedOtion, setSelectedOtion] = useState<Option | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const options: Option[] = [
    {
      value: "option1",
      label: "Option 1",
    },
    {
      value: "option1",
      label: "Option 1",
    },
    {
      value: "option1",
      label: "Option 1",
    },
  ];

  const handleToggleDropDown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectOption = (option: Option) => {
    setSelectedOtion(option);
    setIsOpen(false);
  };
  return (
    <div className="filter-program">
      <div className="filter-container">
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
                  <DropDown
                    options={options}
                    selectedOption={selectedOtion}
                    isOpen={isOpen}
                    onToggle={handleToggleDropDown}
                    onSelectOption={handleSelectOption}
                  />
                </div>
                <div className="item">
                  <span>
                    <Text body3>Специальность:</Text>
                  </span>
                  <DropDown
                    options={options}
                    selectedOption={selectedOtion}
                    isOpen={isOpen}
                    onToggle={handleToggleDropDown}
                    onSelectOption={handleSelectOption}
                  />
                </div>
                <div className="item">
                  <span>
                    <Text body3>Количество часов:</Text>
                  </span>
                  <DropDown
                    options={options}
                    selectedOption={selectedOtion}
                    isOpen={isOpen}
                    onToggle={handleToggleDropDown}
                    onSelectOption={handleSelectOption}
                  />
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
                    <DropDown
                      options={options}
                      selectedOption={selectedOtion}
                      isOpen={isOpen}
                      onToggle={handleToggleDropDown}
                      onSelectOption={handleSelectOption}
                    />
                  </div>
                  <div className="item">
                    <span>
                      <Text body3>Специальность:</Text>
                    </span>
                    <DropDown
                      options={options}
                      selectedOption={selectedOtion}
                      isOpen={isOpen}
                      onToggle={handleToggleDropDown}
                      onSelectOption={handleSelectOption}
                    />
                  </div>
                </div>
                <div className="items-bottom">
                  <div className="item">
                    <span>
                      <Text body3>Количество часов:</Text>
                    </span>
                    <DropDown
                      options={options}
                      selectedOption={selectedOtion}
                      isOpen={isOpen}
                      onToggle={handleToggleDropDown}
                      onSelectOption={handleSelectOption}
                    />
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
                  <DropDown
                    options={options}
                    selectedOption={selectedOtion}
                    isOpen={isOpen}
                    onToggle={handleToggleDropDown}
                    onSelectOption={handleSelectOption}
                  />
                </div>
                <div className="item">
                  <span>
                    <Text body3>Специальность:</Text>
                  </span>
                  <DropDown
                    options={options}
                    selectedOption={selectedOtion}
                    isOpen={isOpen}
                    onToggle={handleToggleDropDown}
                    onSelectOption={handleSelectOption}
                  />
                </div>
                <div className="item">
                  <span>
                    <Text body3>Количество часов:</Text>
                  </span>
                  <DropDown
                    options={options}
                    selectedOption={selectedOtion}
                    isOpen={isOpen}
                    onToggle={handleToggleDropDown}
                    onSelectOption={handleSelectOption}
                  />
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
