import React, { useContext, useState } from "react";
import { ImArrowLeft } from "react-icons/im";
import { ImArrowRight } from "react-icons/im";
import AppContext from "../../Store/AppContext";
import classes from "./PhoneDetails.module.css";

const PhoneDetails = () => {
  // State to manange current page
  const [curPage, setCurPage] = useState(0);

  // Getting context datas.
  const ctx = useContext(AppContext);
  console.log(ctx)

  const leftArrowHandler = () => {
    if (curPage === 0) {
      setCurPage(ctx.phones.length - 1);
    } else {
      setCurPage((curPage) => curPage - 1);
    }
  };
  const rightArrowHandler = () => {
    if (curPage === ctx.phones.length - 1) {
      setCurPage(0);
    } else {
      setCurPage((curPage) => curPage + 1);
    }
  };

  return (
    <>
      <figure className={classes.figure}>
        <img
          className={classes.image}
          src={ctx.phones[curPage].image}
          alt="Phone"
        />
      </figure>
      <div className={classes.details}>
        <p className={classes.id}>
          ID: <span>{curPage + 1}</span>
        </p>
        <p className={classes.name}>
          Name: <span>{ctx.phones[curPage].name}</span>
        </p>
        <p className={classes.price}>
          Price: <span>{ctx.phones[curPage].price}</span>
        </p>
      </div>
      <ImArrowLeft onClick={leftArrowHandler} className={classes.arrow_left} />
      <ImArrowRight
        onClick={rightArrowHandler}
        className={classes.arrow_right}
      />
    </>
  );
};
export default PhoneDetails;
