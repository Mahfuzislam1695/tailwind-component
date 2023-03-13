import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../views/Components/Footer/Footer";
import Navbar from "../views/Components/Header/Navbar";

const Main = () => {
  return (
    <>
      <Navbar />
      <Outlet></Outlet>
      <Footer />
    </>
  );
};

export default Main;
