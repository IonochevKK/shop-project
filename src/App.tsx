import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
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
import BasketUser from "./pages/BasketUser/BasketUser";
import ProgramDescription from "./pages/ProgramDescription/ProgramDescription";
import useAuth from "./hooks/useAuth";
import React from "react";
import Layout from "./components/Layout/Layout";

function App() {
  const RequireAuth = ({ children }: { children: JSX.Element }) => {
    const { isLogin, isLoading } = useAuth();
    console.log(isLoading)
    if (isLoading) {
      return <Layout>...Loading</Layout>;
    }

    return isLogin ? children : <Navigate to="/" replace />;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="programms" element={<Programms />} />
        <Route path="programms/:programmId" element={<ProgramDescription />} />
        <Route path="novosti" element={<PageNews />} />
        <Route path="novosti/:postId" element={<PostPage />} />
        <Route path="contact" element={<ContactsPage />} />
        <Route
          path="basket-user"
          element={
            <RequireAuth>
              <BasketUser />
            </RequireAuth>
          }
        />
        <Route
          path="personal-account/*"
          element={
            <RequireAuth>
              <PersonalAccount />
            </RequireAuth>
          }
        >
          <Route
            path="personal-data"
            element={
              <RequireAuth>
                <EnterYourPersonalData />
              </RequireAuth>
            }
          />
          <Route
            path="training-documents"
            element={
              <RequireAuth>
                <TrainingDocuments />
              </RequireAuth>
            }
          />
          <Route
            path="purchase-history"
            element={
              <RequireAuth>
                <PurchaseHistory />
              </RequireAuth>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
