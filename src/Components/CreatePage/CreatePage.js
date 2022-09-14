import React, { useContext, useRef, useState } from "react";

import Card from "../UI/Card/Card";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";

import classes from "./CreatePage.module.css";
import AppContext from "../../Store/AppContext";
import CreatePageModal from "./CreatePageModal";

const CreatePage = (props) => {
  const [modal, setModal] = useState(false);

  // Managing the context state
  const ctx = useContext(AppContext);

  // Initializing useRef for the form input.
  const idRef = useRef();
  const nameRef = useRef();
  const priceRef = useRef();
  const imageRef = useRef();

  // form submission handler
  const submitHandler = (e) => {
    e.preventDefault();

    // Converting the the string to integer
    const price = +priceRef.current.value;

    // Getting the form input value from the initialized ref.
    const formBody = {
      id: idRef.current.value,
      fullName: nameRef.current.value,
      price: `$${price.toFixed(2)}`,
      image: imageRef.current.value,
    };

    // // Posting to the database
    // const sendRequest = async () => {
    //   const response = await fetch(
    //     "https://react-http-joel-default-rtdb.firebaseio.com/phones.json",
    //     {
    //       method: "POST",
    //       body: JSON.stringify(formBody),
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //     }
    //   );

    //   if (!response.ok) {
    //     throw new Error("Could not post form");
    //   }

    //   // Activating the modal
    //   setModal(true);
    // };

    // // Calling the request function
    // sendRequest().catch((err) => {
    //   alert(err.message);
    // });


    // // Fetching from the database
    // const fetchRequest = async () => {
    //   const response = await fetch(
    //     "https://react-http-joel-default-rtdb.firebaseio.com/phones.json"
    //   );

    //   if (!response.ok) {
    //     throw new Error("Could not fetch phones");
    //   }

    //   const responseBody = await response.json();

    //   const loadedPhones = [];

    //   for (const key in responseBody) {
    //     loadedPhones.push({
    //       id: responseBody[key].id,
    //       fullName: responseBody[key].fullName,
    //       price: responseBody[key].price,
    //       image: responseBody[key].image,
    //     });
    //   }
    //   // Calling a create method from the and passing the formatted fetch results to it.
    //   ctx.createPhone(loadedPhones);
    // };

    // // Calling the fetch request function
    // fetchRequest().catch((err) => {
    //   alert(err.message);
    // });

    // Calling a create method from the  and passing the form input to it.
    ctx.createPhone(formBody);

    // Cleaning the form fields
    idRef.current.value = "";
    nameRef.current.value = "";
    priceRef.current.value = "";
    imageRef.current.value = "";

    // Activating the modal
    setModal(true);
  };

  // A function to close the modal when triggered.
  const closeModal = () => {
    setModal(false);
  };

  return (
    <>
      {modal && <CreatePageModal onClick={closeModal} />}
      <Card className={classes.box}>
        <form onSubmit={submitHandler}>
          <Input
            label="ID"
            id="id"
            type="number"
            placeholder="Enter phone ID"
            name="id"
            ref={idRef} // Custom element. React.ForwardRef
          />
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
            <Button type="submit" onClick={submitHandler}>
              Create 🤗
            </Button>
          </div>
        </form>
      </Card>
    </>
  );
};
export default CreatePage;
