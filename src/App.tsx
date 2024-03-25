import React, { useState } from "react";
import "./App.css";
import Search from "./components/Search/Search";
import SearchSVG from "../public/svg/search.svg?react";
import DataPicker from "./components/DataPicker/DataPicker";
import DropDown, { Option } from "./components/DropDown/DropDown";

function App() {
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const options: Option[] = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  const handleToggleDropDown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectOption = (option: Option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div style={{ maxWidth: "300px" }}>
      <DropDown
        options={options}
        selectedOption={selectedOption}
        isOpen={isOpen}
        onToggle={handleToggleDropDown}
        onSelectOption={handleSelectOption}
      />
    </div>
  );
}

export default App;
