import React from "react";

import Card from "../UI/Card/Card";
import Header from "../UI/Header/Header";
import SearchBox from "./SearchBox";
import UpdateForm from "./UpdateForm";
import classes from "./UpdatePage.module.css";

const UpdatePage = () => {
  return (
    <>
      <Header></Header>
      <Card className={classes.box}>
        <SearchBox />
        <div className={classes.form_box}>
          <UpdateForm />
        </div>
      </Card>
    </>
  );
};
export default UpdatePage;
