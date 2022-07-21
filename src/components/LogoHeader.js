import React from 'react';
import logo from "../images/logo.svg";
import classes from "./css/LogoHeader.module.css";

function LogoHeader() {
  return (
    <div className={classes.logoBar}>
      <img className={classes.logo} src={logo} alt="" />
      <h1 className={classes.fontlogo}>Eden</h1>
    </div>
  )
}

export default LogoHeader