import React from "react";
import Navbar from "./component/common/Navbar";
import Footer from "./component/common/Footer";
import { NavigationProvider } from "./component/context/NavigationContext";

const Layout = ({ children }) => {
  return (
    <>
      <NavigationProvider>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </NavigationProvider>
    </>
  );
};

export default Layout;
