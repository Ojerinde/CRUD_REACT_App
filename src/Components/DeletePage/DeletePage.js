import React, { useContext, useRef } from "react";

import Card from "../UI/Card/Card";
import Header from "../UI/Header/Header";
import ListsBox from "./ListsBox";
import AppContext from "../../Store/AppContext";
import classes from "./DeletePage.module.css";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";

const DeletePage = (props) => {
  const ctx = useContext(AppContext)
  const delete_idRef = useRef()
  const submitHandler = e => {
    e.preventDefault();
    ctx.deletePhone(+delete_idRef.current.value)

    delete_idRef.current.value = ''
  }
  return (
    <>
      <Header></Header>
      <Card className={classes.box}>
        <ListsBox />
        <div className={classes.form_box}>
          <form onSubmit={submitHandler} className={classes.form}>
            <Input
              label="ID"
              type="number"
              placeholder="Enter phone ID"
              ref={delete_idRef}
              className={classes.form_row}
            />
            <Button className={classes.button}>Sure? 🤔</Button>
          </form>
        </div>
      </Card>
    </>
  );
};
export default DeletePage;
