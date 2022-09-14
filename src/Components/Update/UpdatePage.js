import React, { useState } from "react";

import Card from "../UI/Card/Card";
import ListsBox from "./ListsBox";
import UpdateForm from "./UpdateForm";
import classes from "./UpdatePage.module.css";
import UpdatePageModal from "./UpdatePageModal";

const UpdatePage = () => {
  const [modal, setModal] = useState(false);

  const modalCloseHandler = () => {
    setModal(false);
  };
  const modalOpenHandler = () => {
    setModal(true);
  };
  return (
    <>
      {modal && <UpdatePageModal onClick={modalCloseHandler} />}
      <Card className={classes.box}>
        <ListsBox />
        <div className={classes.form_box}>
          <UpdateForm onClick={modalOpenHandler}/>
        </div>
      </Card>
    </>
  );
};
export default UpdatePage;
