import { useEffect } from "react";
import { auth, provider, signInWithPopup, onAuthStateChanged } from "../../config";

import Card from "../UI/Card/Card";
import classes from "./Form.module.css";

const Form = (props) => {
  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      const result = await signInWithPopup(auth, provider);
      console.log(result);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        props.onSign(true)
      } else {
        props.onSign(false)
      }
    });
  }, [props]);
  return (
    <Card className={classes.box}>
      <div className={classes.div}>Click on the button below to sign in</div>
      <button className={classes.button} onClick={loginHandler}>
        Login
      </button>
    </Card>
  );
};
export default Form;
