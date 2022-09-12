import React from "react";

const AppContext = React.createContext({
  phones: [],
  totalAmount: 0,
  filteredPhones: [],
  createPhone: (body) => {},
  updatePhone: (id) => {},
  deletePhone: (id) => {},
  searchPhone: (word) => {},
});
export default AppContext
