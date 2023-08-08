import React from "react";
import {Outlet} from "react-router-dom";
import Navbar from "./scrollers/nav";
import Footer from "./scrollers/footer";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;