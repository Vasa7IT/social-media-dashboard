import React, { useContext } from "react";
import './main.css';
import { ThemeContext } from "../../ThemeContext";
import Header from "../Header/Header";
import Content from "../Content/Content";
const Main = () => {
    const {dark}=useContext(ThemeContext);
  return (
    <div className={`smd__main ${dark && 'dark'}`}>
        <Header />
        <Content />
    </div>
  );
};

export default Main;
