import React, { useContext, useRef } from "react";

import Card from "../UI/Card/Card";
import Header from "../UI/Header/Header";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";

import classes from "./CreatePage.module.css";
import AppContext from "../../Store/AppContext";

const CreatePage = (props) => {
  // Managing the context state
  const ctx = useContext(AppContext);

  // Getting the form input
  const nameRef = useRef();
  const priceRef = useRef();
  const imageRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const price = +priceRef.current.value
    // Calling a create method from the context

    ctx.createPhone({
      fullName: nameRef.current.value,
      price: `$${price.toFixed(2)}`,
      image: imageRef.current.value,
    });
    nameRef.current.value = ''
    priceRef.current.value = ''
    imageRef.current.value = ''
  };

  return (
    <>
      <Header></Header>
      <Card className={classes.box}>
        <form onSubmit={submitHandler}>
          <Input
            label="Name"
            id="name"
            type="text"
            placeholder="Enter phone name"
            name="name"
            ref={nameRef} // Custom element. React.ForwardRef
          />
          <Input
            label="Price"
            id="price"
            type="number"
            placeholder="Enter phone price"
            name="price"
            ref={priceRef}
          />
          <Input
            label="Image Link"
            id="image_link"
            type="text"
            placeholder="Enter phone image link"
            name="image_link"
            ref={imageRef}
          />
          <div className={classes.btn_box}>
            <Button type="submit" onClick={submitHandler}>Create 🤗</Button>
          </div>
        </form>
      </Card>
    </>
  );
};
export default CreatePage;
