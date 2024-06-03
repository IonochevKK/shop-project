import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Programms from "./pages/Programms/Programms";
import PageNews from "./pages/PageNews/PageNews";
import PostPage from "./pages/PostPage/PostPage";
import ContactsPage from "./pages/ContactsPage/ContactsPage";
import PersonalAccount from "./pages/PersonalАccount/PersonalAccount";
import EnterYourPersonalData from "./components/EnterYourPersonalData/EnterYourPersonalData";
import PurchaseHistory from "./pages/PersonalАccount/components/PurchaseHistory/PurchaseHistory";
import TrainingDocuments from "./pages/PersonalАccount/components/TrainingDocuments/TrainingDocuments";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="programms" element={<Programms />} />
        <Route path="novosti" element={<PageNews />} />
        <Route path="contact" element={<ContactsPage />} />
        <Route path="novosti/:postId" element={<PostPage />} />
        <Route path="personal-account/*" element={<PersonalAccount />}>
          <Route path="personal-data" element={<EnterYourPersonalData />} />
          <Route path="training-documents" element={<TrainingDocuments />} />
          <Route path="purchase-history" element={<PurchaseHistory />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
