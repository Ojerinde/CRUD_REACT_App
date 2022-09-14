import { auth, signOut } from "../../config";

import React from "react";
import Button from "../UI/Button/Button";

import PhoneDetails from "./PhoneDetails";
import SearchPhones from "./SearchPhones";

const Home = () => {
  const logoutHandler = async () => {
    try {
      const response = signOut(auth);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <SearchPhones />
      <PhoneDetails />
      <Button onClick={logoutHandler}>Sign Out</Button>
    </>
  );
};
export default Home;
