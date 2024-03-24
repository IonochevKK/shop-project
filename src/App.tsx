import "./App.css";
import Input from "./components/Input/Input";
import LeftArrow from "../public/svg/leftarrow.svg?react";
function App() {
  return (
    <>
      <div style={{ maxWidth: "300px" }}>
        <Input placeholder="Имя" block />
        <Input placeholder="(000)-00-00" type="tel" block postfix={"+7"} />
        <Input placeholder="Email" type="email" block />
        <Input placeholder="Рун...." type="bigText" block />
      </div>
    </>
  );
}

export default App;
