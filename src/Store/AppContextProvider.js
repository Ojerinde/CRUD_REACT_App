import React, { useReducer } from "react";
import AppContext from "./AppContext";

const defaultPhone = {
  phones: [{name:'Infinix', price:'$200.00', image: 'https://images.unsplash.com/photo-1543900694-133f37abaaa5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60'}],
  totalAmount: 1,
};

const phoneReducer = (state, action) => {
  let updatedState;

  if (action.type === "CREATE_PHONE") {
    updatedState = state.phones.concat(action.body);
    const newState = { phones: updatedState, totalAmount: updatedState.length };
    return newState;
  }

  return defaultPhone;
};

const AppContextProvider = (props) => {
  // useReducer in place of useState to manage state.
  const [phoneState, dispatchPhone] = useReducer(phoneReducer, defaultPhone);

  ////////////// Managing state functions //////////
  // Create a new state
  const createPhone = (body) => {
    dispatchPhone({ type: "CREATE_PHONE", body: body });
  };
  const updatePhone = (id) => {};
  const deletePhone = (id) => {};

  //   The value that is made available
  const datas = {
    phones: phoneState.phones,
    totalAmount: phoneState.totalAmount,
    deletePhone: deletePhone,
    updatePhone: updatePhone,
    createPhone: createPhone,
  };

  return (
    <AppContext.Provider value={datas}>{props.children}</AppContext.Provider>
  );
};
export default AppContextProvider;
