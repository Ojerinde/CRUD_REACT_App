import { useContext, useEffect, useState } from "react";
import AppContext from "../../Store/AppContext";
import Card from "../UI/Card/Card";
import ListItem from "../Update/ListItem";
import classes from "./ListsBox.module.css";

const ListsBox = () => {
  // Getting the context data
  const ctx = useContext(AppContext);

  // Desctructuring to get the phones array only
  const { phones } = ctx;

  // Managing Phonelists state to cause reevaluation on change
  const [phoneList, setPhoneList] = useState(phones);

  // to  make sure that new phone deleted is removed.
  useEffect(() => {
    setPhoneList(ctx.phones);
  }, [ctx]);

  return (
    <Card className={classes.box}>
      <p className={classes.p}>All available phones</p>
      <ul className={classes.ul}>
        {phoneList.map((phone,index) => (
          <ListItem key={index}>{index + 1}: {phone.fullName}</ListItem>
        ))}
      </ul>
    </Card>
  );
};
export default ListsBox;
