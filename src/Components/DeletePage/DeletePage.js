import React, { useContext, useRef, useState } from "react";

import Card from "../UI/Card/Card";
import Header from "../UI/Header/Header";
import ListsBox from "./ListsBox";
import AppContext from "../../Store/AppContext";
import classes from "./DeletePage.module.css";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import DeletePageModal from "./DeletePageModal";

const DeletePage = (props) => {
  // Manageing the modal state
  const [modal, setModal] = useState(false);

  // A function to close the modal
  const modalCloseHandler = () => {
    setModal(false);
  };

  // Getting the context value
  const ctx = useContext(AppContext);

  // Initializing the form input
  const delete_idRef = useRef();

  // Form submit handler
  const submitHandler = (e) => {
    e.preventDefault();

    // Calling the context delete function and passing the id to it
    ctx.deletePhone(+delete_idRef.current.value);

    // CLearing the input field
    delete_idRef.current.value = "";

    // Activating the modal
    setModal(true);
  };
  return (
    <>
      {modal && <DeletePageModal onClick={modalCloseHandler} />}
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
