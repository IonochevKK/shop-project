import { Value } from "sass";
import "./App.css";
import CheckBox from "./components/CheckBox/CheckBox";
import { useState } from "react";

function App() {
  const [isActive, setIsActive] = useState<boolean>(false);
  console.log(isActive);
  const onChange = () => {
    setIsActive(!isActive);
  };
  return (
    <div>
      <CheckBox type="radio" name={"check"} value={"1"}>
        12312
      </CheckBox>
      <CheckBox type="radio" name={"check"} />
      <CheckBox type="checkbox" name={"check"} />
      <CheckBox
        type="checkbox"
        name={"check"}
        onChange={onChange}
        classnames={isActive && "checked"}
      />
    </div>
  );
}

export default App;
