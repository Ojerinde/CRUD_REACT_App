import { useContext, useEffect, useState } from "react";
import AppContext from "../../Store/AppContext";
import Card from "../UI/Card/Card";
import ListItem from "../Update/ListItem";
import classes from "./ListsBox.module.css";

const ListsBox = () => {
  const ctx = useContext(AppContext);
  const { phones } = ctx;
  const [phoneList, setPhoneList] = useState(phones);
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
