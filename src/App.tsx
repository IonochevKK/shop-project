import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Programms from "./pages/Programms/Programms";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="programms" element={<Programms />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
