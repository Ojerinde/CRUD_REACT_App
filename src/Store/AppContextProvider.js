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
      fullName: "Samsung s22 Ultra",
      price: "$500.00",
      id: 3,
      image:
        "https://media.wired.com/photos/6202b99c2c286ef2d70b5b0a/master/pass/Gear-Samsung-Galaxy-S22-Ultra.jpg",
    },
    {
      fullName: "iPhone 13",
      price: "$570.00",
      id: 4,
      image:
        "https://uandu.com.ng/wp-content/uploads/2021/12/Apple-iPhone-13-Pro-Max-539.jpg",
    },
    {
      fullName: "Google Pixel 7",
      price: "$520.00",
      id: 5,
      image:
        "https://www.electrorates.com/blogimg/Google_Pixel_7_XL.png",
    },
    {
      fullName: "Nokia",
      price: "$700.00",
      id: 6,
      image:
        "https://cdn11.bigcommerce.com/s-d9fb5mh9xf/images/stencil/720x720/products/552/737/nokia-G50-OceanBlue-front_back-int__82786.1631718019.png",
    },
    {
      fullName: "Redmi 11 Ultra",
      price: "$400.00",
      id: 7,
      image:
        "https://www.gizmochina.com/wp-content/uploads/2021/02/mi11ultra-white.jpg",
    },
    {
      fullName: "Oppo",
      price: "$320.00",
      id: 8,
      image:
        "https://image.oppo.com/content/dam/oppo/common/mkt/v2-2/find-x5-pro-en/middlebanner/findx5-pro-mobile.jpg.thumb.webp",
    },
    {
      fullName: "Black Shark",
      price: "$680.00",
      id: 9,
      image:
        "https://fdn2.mobgsm.com/vv/pics/xiaomi/xiaomi-black-shark-3-pro-1.jpg",
    },
    {
      fullName: "Itel s17",
      price: "$150.00",
      id: 10,
      image:
        "https://i0.wp.com/www.purchgadgets.com/wp-content/uploads/2021/10/S17.gif?fit=1080%2C1080&ssl=1",
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
