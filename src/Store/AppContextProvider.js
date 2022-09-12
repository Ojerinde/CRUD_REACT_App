import React, { useReducer } from "react";
import AppContext from "./AppContext";

const defaultPhone = {
  phones: [
    {
      fullName: "Infinix Hot 10",
      price: "$200.00",
      id: 1,
      image: "https://fdn2.gsmarena.com/vv/pics/infinix/infinix-hot10-2.jpg",
    },
    {
      fullName: "Tecno Phantom",
      price: "$350.00",
      id: 2,
      image:
        "https://www.pointekonline.com/wp-content/uploads/2021/06/Tecno-Phantom-X-DroidAfrica-main-600x600-1.jpg",
    },
    {
      fullName: "Samsung",
      price: "$500.00",
      id: 3,
      image:
        "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/I/L/200700_1649171771.jpg",
    },
    {
      fullName: "iPhone",
      price: "$570.00",
      id: 4,
      image:
        "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/I/L/200700_1649171771.jpg",
    },
    {
      fullName: "Google Pixel",
      price: "$520.00",
      id: 5,
      image:
        "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/I/L/200700_1649171771.jpg",
    },
    {
      fullName: "Nokia",
      price: "$700.00",
      id: 6,
      image:
        "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/I/L/200700_1649171771.jpg",
    },
    {
      fullName: "Redmi",
      price: "$400.00",
      id: 7,
      image:
        "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/I/L/200700_1649171771.jpg",
    },
    {
      fullName: "Oppo",
      price: "$320.00",
      id: 8,
      image:
        "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/I/L/200700_1649171771.jpg",
    },
    {
      fullName: "Shark",
      price: "$380.00",
      id: 9,
      image:
        "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/I/L/200700_1649171771.jpg",
    },
    {
      fullName: "Itel",
      price: "$150.00",
      id: 10,
      image:
        "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/I/L/200700_1649171771.jpg",
    },
  ],
  totalAmount: 10,
  filteredPhones: [],
};

// const defaultPhone = {
//   phones: [],
//   totalAmount: 0,
// };

const phoneReducer = (state, action) => {
  if (action.type === "CREATE_PHONE") {
    const updatedState = state.phones.concat(action.body);
    const newState = { phones: updatedState, totalAmount: updatedState.length };
    console.log(newState);
    return newState;
  }

  if (action.type === "UPDATE_PHONE") {
    const index = action.body.id - 1;
    const updatedState = [...state.phones];

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
    const updatedState = state.phones.filter((el) => el.id !== action.id);
    const newState = {
      phones: updatedState,
      totalAmount: updatedState.length,
    };
    return newState;
  }

  if (action.type === "SEARCH_PHONE") {
    const reg = new RegExp(`${action.word}`, "gi");
    const matched = state.phones.filter((phone) => reg.test(phone.fullName));
    const newState = {
      phones: state.phones,
      totalAmount: state.totalAmount,
      filteredPhones: matched,
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
  const searchPhone = (word) => {
    dispatchPhone({ type: "SEARCH_PHONE", word: word });
  };
  //   The value that is made available
  const datas = {
    phones: phoneState.phones,
    totalAmount: phoneState.totalAmount,
    filteredPhones: phoneState.filteredPhones,
    deletePhone: deletePhone,
    updatePhone: updatePhone,
    createPhone: createPhone,
    searchPhone: searchPhone,
  };

  return (
    <AppContext.Provider value={datas}>{props.children}</AppContext.Provider>
  );
};
export default AppContextProvider;
