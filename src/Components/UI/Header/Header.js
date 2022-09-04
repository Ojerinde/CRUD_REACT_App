import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../../Assets/img.jpg";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={classes.header}>
      <figure className={classes.logo_box}>
        <img className={classes.logo} src={logo} alt="App Logo" />
      </figure>
      <nav className={classes.nav}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/create">Create</NavLink>
        <NavLink to="/update">Update</NavLink>
        <NavLink to="/delete">Delete</NavLink>
      </nav>
    </header>
  );
};
export default Header;
