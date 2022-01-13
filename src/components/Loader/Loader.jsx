import React from "react";
import { Oval } from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./Loader.scss";

const Loader = () => {
  return (
    <div className="loader">
      <Oval heigth="100" width="100" color="tomato" arialLabel="Loading..." />
    </div>
  );
};

export default Loader;
