import React from "react";

import Card from "../UI/Card/Card";
import Header from "../UI/Header/Header";

import classes from './Home.module.css'
import PhoneDetails from "./PhoneDetails";

const Home = () => {
  return (
    <>
      <Header></Header>
      <Card className={classes.box}>
       <PhoneDetails />
      </Card>
    </>
  );
};
export default Home;
