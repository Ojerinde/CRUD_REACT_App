import { useEffect } from "react";
import {
  auth,
  provider,
  signInWithRedirect,
  onAuthStateChanged,
} from "../../config";

import Card from "../UI/Card/Card";
import classes from "./Form.module.css";

const Form = (props) => {
  const loginHandler = (e) => {
    e.preventDefault();
    signInWithRedirect(auth, provider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user)
        props.onSign(true);
      } else {
        props.onSign(false);
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
