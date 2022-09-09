import React from "react";
import classes from "./Modal.module.css";
import { Link } from "react-router-dom";

const Backdrop = (props) => {
  return (
    <Link to="/">
      <div onClick={props.onClick} className={classes.backdrop}></div>
    </Link>
  );
};

const Overlay = (props) => {
  return (
    <div onClick={props.onClick} className={classes.overlay}>
      {props.children}
    </div>
  );
};

const Modal = (props) => {
  return (
    <>
      React.createPortal(
      <Backdrop onClick={props.onClick} />,
      document.getElementById('backdrop-root')) React.createPortal(
      <Overlay onClick={props.onClick}>{props.children} </Overlay>,
      document.getElementById('backdrop-root'))
    </>
  );
};
export default Modal;
