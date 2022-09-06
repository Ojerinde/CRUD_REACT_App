import React, { useReducer } from "react";
import AppContext from "./AppContext";

const defaultPhone = {
  phones: [
    {
      fullName: "Infinix",
      price: "$200.00",
      id:1,
      image:
        "https://images.unsplash.com/photo-1543900694-133f37abaaa5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60",
    },
    {
      fullName: "Tecno Spark",
      price: "$350.00",
      id:2,
      image:
        "https://images.unsplash.com/photo-1543900694-133f3…hcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60",
    },
    {
      fullName: "Samsung",
      price: "$500.00",
      id:3,
      image:
        "https://images.unsplash.com/photo-1549213783-8284d…hcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    },
  ],
  totalAmount: 3,
};
// const defaultPhone = {
//   phones: [],
//   totalAmount: 0,
// };

const phoneReducer = (state, action) => {
  let updatedState;
  if (action.type === "CREATE_PHONE") {
    console.log(action.body)
    updatedState = state.phones.concat(action.body);
    const newState = { phones: updatedState, totalAmount: updatedState.length };
    return newState;
  }
  if (action.type === "UPDATE_PHONE") {
    const index = action.body.id - 1;
    updatedState = [...state.phones];

    setTimeout(() => {
      updatedState[index].fullName = action.body.new_name;
      updatedState[index].price = action.body.new_price;
      const newState = {
        phones: updatedState,
        totalAmount: updatedState.length,
      };
      return newState;
    }, 1000);
  }
  if (action.type === "DELETE_PHONE") {
    updatedState = state.phones.filter(el => el.id !== action.id);
    const newState = {
      phones: updatedState,
      totalAmount: updatedState.length,
    };
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

  const updatePhone = (body) => {
    dispatchPhone({ type: "UPDATE_PHONE", body: body });
  };

  const deletePhone = (id) => {
    dispatchPhone({ type: "DELETE_PHONE", id: id });
  };

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
