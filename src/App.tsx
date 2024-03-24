import "./App.css";
import Search from "./components/Search/Search";
import SearchSVG from "../public/svg/search.svg?react";
function App() {
  return (
    <>
      <Search postfix={<SearchSVG />} block />
    </>
  );
}

export default App;
