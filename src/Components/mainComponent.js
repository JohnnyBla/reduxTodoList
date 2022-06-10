import React from "react";
import Navigation from "./navigationComponent";
import Popup from "./Modal";
import Footer from "./footer";

import { useSelector } from "react-redux";
import Calendar from "./calendar";

const Main = () => {
  const { isOpen } = useSelector((state) => state.modal);

  return (
    <div className="vh-100 main">
      {isOpen && <Popup />}
      <Navigation />
      <Calendar />
      <Footer />
    </div>
  );
};

export default Main;
