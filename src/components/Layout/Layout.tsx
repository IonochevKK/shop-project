import React, { useCallback, useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import "./layout.scss";
import Cookie from "../UI Kit/Cookie/Cookie";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { ChangeCookies } from "../../store/cookies-slise";
import { saveSessionToLocalStorage } from "../../utils/saveSessionToLocalStorage";
import { GetSessionInLocalStorage } from "../../utils/GetSessionInLocalStorage";
import { updateUserSession } from "../../store/userSession-slise";
import { fetchBasketItems } from "../../store/basketUser-slise";

interface LayoutProps {
  children?: React.ReactNode;
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
  const dispatch: AppDispatch = useDispatch();
  const [isOpenCoockie, setIsOpenCoockie] = useState<boolean>(true);
  const handleCloseCoockie = useCallback(() => setIsOpenCoockie(false), []);
  const userSession = useSelector((state: RootState) => state.UserSession);

  const acceptedCookies = useSelector(
    (state: RootState) => state.CookiesStorage.acceptCookies
  );

  useEffect(() => {
    dispatch(ChangeCookies(true));
    if (userSession.id) {
      dispatch(fetchBasketItems(userSession.id));
    }
    if (userSession.id) {
      saveSessionToLocalStorage(userSession.id);
    }
    const localStorageUserSession = GetSessionInLocalStorage();
    if (localStorageUserSession) {
      dispatch(updateUserSession(localStorageUserSession));
    }
  }, [dispatch, userSession]);

  return (
    <div className="layout">
      {isOpenCoockie && (
        <Cookie
          onClose={handleCloseCoockie}
          acceptedCookies={acceptedCookies}
        />
      )}
      <div className="layout-content">
        <NavBar />
      </div>
      {children}
      <div className="layout-content">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
