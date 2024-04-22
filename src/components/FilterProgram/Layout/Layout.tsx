import React, { useCallback, useState } from "react";
import Footer from "../../Footer/Footer";
import NavBar from "../../NavBar/NavBar";
import "./layout.scss";
import Cookie from "../../UI Kit/Cookie/Cookie";
interface LayoutProps {
  children?: React.ReactNode;
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isOpenCoockie, setIsOpenCoockie] = useState<boolean>(true);
  const handleCloseCoockie = useCallback(() => setIsOpenCoockie(false), []);
  return (
    <div className="layout">
      {isOpenCoockie && <Cookie onClose={handleCloseCoockie} />}
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
