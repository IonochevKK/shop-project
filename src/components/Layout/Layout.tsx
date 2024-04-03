import React from "react";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import "./layout.scss";
interface LayoutProps {
  children?: React.ReactNode;
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout">
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
