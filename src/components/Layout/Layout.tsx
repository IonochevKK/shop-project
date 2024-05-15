import React, { useCallback, useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import "./layout.scss";
import Cookie from "../UI Kit/Cookie/Cookie";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { ChangeCookies } from "../../store/cookies-slise";
import { saveSessionToLocalStorage } from "../../utils/saveSessionToLocalStorage";
import { GetSessionInLocalStorage } from "../../utils/GetSessionInLocalStorage";
import { updateUserSession } from "../../store/userSession-slise";

interface LayoutProps {
  children?: React.ReactNode;
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isOpenCoockie, setIsOpenCoockie] = useState<boolean>(true);
  const handleCloseCoockie = useCallback(() => setIsOpenCoockie(false), []);
  const userSession = useSelector((state: RootState) => state.UserSession);

  const acceptedCookies = useSelector(
    (state: RootState) => state.CookiesStorage.acceptCookies
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ChangeCookies(true));
    if (userSession.id) {
      saveSessionToLocalStorage(userSession.id);
    }
    const localStorageUserSession = GetSessionInLocalStorage();
    if (localStorageUserSession) {
      dispatch(updateUserSession(localStorageUserSession));
    }
    console.log(userSession);
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
