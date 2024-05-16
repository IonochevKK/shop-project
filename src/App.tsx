import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Programms from "./pages/Programms/Programms";
import PageNews from "./pages/PageNews/PageNews";
import PostPage from "./pages/PostPage/PostPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="programms" element={<Programms />} />
        <Route path="novosti" element={<PageNews />}/>
        <Route path="novosti/:id" element={<PostPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
