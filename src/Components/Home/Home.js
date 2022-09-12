import React from "react";

import Header from "../UI/Header/Header";

import PhoneDetails from "./PhoneDetails";
import SearchPhones from "./SearchPhones";

const Home = () => {
  return (
    <>
      <Header></Header>
      <SearchPhones />
      <PhoneDetails />
    </>
  );
};
export default Home;
