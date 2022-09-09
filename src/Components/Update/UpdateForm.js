import Card from "../UI/Card/Card";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import classes from "./UpdateForm.module.css";
import { useContext, useRef } from "react";
import AppContext from "../../Store/AppContext";

const UpdateForm = (props) => {
const ctx = useContext(AppContext)

  // Getting the form input
  const idNumRef = useRef();
  const newPriceRef = useRef();
  const newNameRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const price = +newPriceRef.current.value;

    // Calling a create method from the 
    if (ctx.phones.length === 0 ) return alert`No phones to update`

    // Enabling the modal
    props.onClick()

    // Calling the update method in the context
    ctx.updatePhone({
      id: +idNumRef.current.value,
      new_price: `$${price.toFixed(2)}`,
      new_name: newNameRef.current.value,
    });

    // Clearing the input fields
    idNumRef.current.value = "";
    newPriceRef.current.value = "";
    newNameRef.current.value = "";
  };
  
  return (
    <Card className={classes.box}>
      <form onSubmit={submitHandler}>
        <Input
          label="ID"
          id="id"
          type="number"
          placeholder="Enter id number"
          name="id"
          ref={idNumRef}
        />
        <Input
          label="New Name"
          id="new_name"
          type="text"
          placeholder="Enter new name"
          name="new_name"
          ref={newNameRef}
        />
        <Input
          label=" New Price"
          id="new_price"
          type="number"
          placeholder="Enter new price"
          name="new_price"
          ref={newPriceRef}
        />
        <Button type="submit">Update ⤴️</Button>
      </form>
    </Card>
  );
};
export default UpdateForm;
