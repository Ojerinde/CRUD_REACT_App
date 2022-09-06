import React from "react";
import classes from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  return (
    <>
      <div className={`${props.className || classes.form_group}`}>
        <label className={classes.form_label} htmlFor={props.id}>
          {props.label}
        </label>
        <input
          className={classes.form_input}
          type={props.type}
          placeholder={props.placeholder}
          id={props.id}
          name={props.name}
          ref={ref}
        />
      </div>
    </>
  );
});
export default Input;
