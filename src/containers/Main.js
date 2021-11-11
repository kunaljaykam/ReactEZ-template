import React from "react";
import Header from "../components/header/Header";

import Info from "./info/Info";
import Content from './contents/Contents'



import "./Main.scss";

const Main = () => {


  return (
    <div className="main">
      <Header />

      <div className="main-content">

        <Info/>
      </div>

      <Content/>
    </div>
  );
};

export default Main;
