import React from "react";
import classes from "./Input.module.css";

const Input = (props) => {

  return (
    <>
      <div className={classes.form_group}>
        <label className={classes.form_label} htmlFor={props.id}>
          {props.label}
        </label>
        <input
          className={`${classes.form_input} ${
            props.isValid === false ? classes.invalid : ""
          } `}
          type={props.type}
          placeholder={props.placeholder}
          id={props.id}
          name={props.name}
          onChange={props.onChange}
          onBlur={props.onBlur}
          value={props.value}
        />
      </div>
      {props.isValid === false && <p className={classes.invalid_input}>Invalid Input</p>}
    </>
  );
};
export default Input;


