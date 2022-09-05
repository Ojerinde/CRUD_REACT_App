import React from "react";

const AppContext = React.createContext({
  phones: [],
  totalAmount: 0,
  createPhone: (body) => {},
  updatePhone: (id) => {},
  deletePhone: (id) => {},
});
export default AppContext
