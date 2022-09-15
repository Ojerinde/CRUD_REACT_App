import Input from "../UI/Input/Input";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import ListItem from "../Update/ListItem";
import { useContext, useRef, useState } from "react";
import AppContext from "../../Store/AppContext";
import classes from "./SearchPhones.module.css";

const SearchPhones = () => {
  const searchRef = useRef();

  const ctx = useContext(AppContext);
  
  const [searchedPhones, setSearchedPhones] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    const searchedWord = searchRef.current.value;

    ctx.searchPhone(searchedWord);

    setSearchedPhones(ctx.filteredPhones);
  };

  return (
    <Card>
      <form onSubmit={submitHandler} className={classes.form}>
        <Input
          id="search"
          placeholder="Looking for a phone..."
          type="text"
          ref={searchRef}
        />
        <Button type="submit">Search 🔎</Button>
      </form>
      <ul className={classes.ul}>
        {searchedPhones.map((phone) => {
          return (
            <ListItem className={classes.li} key={phone.id}>
              {phone.fullName}
            </ListItem>
          );
        })}
      </ul>
    </Card>
  );
};
export default SearchPhones;
