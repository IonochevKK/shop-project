import "./App.css";
import Button from "./components/UI Kit/Button/Button";
import Arrow from "../public/svg/rigtharrow.svg?react";
import Divider from "./components/UI Kit/Divider/Divider";
import CheckBox from "./components/UI Kit/CheckBox/CheckBox";
import DataPicker from "./components/UI Kit/DataPicker/DataPicker";
import DropDown, { Option } from "./components/UI Kit/DropDown/DropDown";
import { useState } from "react";
function App() {
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const options = [
    { value: "1", label: "Option 1" },
    { value: "2", label: "Option 2" },
    { value: "3", label: "Option 3" },
  ];
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectOption = (option: Option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div>
      <DropDown
        options={options}
        selectedOption={selectedOption}
        isOpen={isOpen}
        onToggle={handleToggle}
        onSelectOption={handleSelectOption}
      />
    </div>
  );
}

export default App;
