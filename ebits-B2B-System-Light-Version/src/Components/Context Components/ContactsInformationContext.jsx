//Importing React hooks
import { createContext, useState, useReducer } from "react";

import dayjs from "dayjs";

export const ContactsInformationFunc = createContext();

export const ContactInfoContProvider = (props) => {
  function reducer(state, action) {
    switch (action.type) {
      case "UPDATE_NAME":
        return { ...state, name: action.payload };
      case "UPDATE_LASTNAME":
        return { ...state, lastName: action.payload };
      case "UPDATE_EMAIL":
        return { ...state, email: action.payload };
      case "UPDATE_PHONE":
        return { ...state, phone: action.payload };
      case "UPDATE_STREET":
        return { ...state, street: action.payload };
      case "UPDATE_HOUSENUMBER":
        return { ...state, houseNumber: action.payload };
      case "UPDATE_POSTNUMBER":
        return { ...state, postNumber: action.payload };
      case "UPDATE_TOWN":
        return { ...state, town: action.payload };
      case "UPDATE_DELIVERYDATE":
        return { ...state, deliveryDate: action.payload };
      case "UPDATE_NOTES":
        return { ...state, notes: action.payload };
      default:
        return state;
    }
  }

  const formInitialState = {
    name: "",
    lastName: "",
    email: "",
    phone: "",
    street: "",
    houseNumber: "",
    postNumber: "",
    town: "",
    deliveryDate: "",
    notes: "",
  };

  const [contactInfoState, dispatch] = useReducer(reducer, formInitialState);

  const todayDate = new Date();
  todayDate.setDate(todayDate.getDate() + 14);

  const [value, setValue] = useState(dayjs(todayDate));

  const getContactInfoFuncs = {
    handleNameChange: (e) => {
      dispatch({ type: "UPDATE_NAME", payload: e.target.value });
    },

    handleLastNameChange: (e) => {
      dispatch({ type: "UPDATE_LASTNAME", payload: e.target.value });
    },

    handleEmailChange: (e) => {
      dispatch({ type: "UPDATE_EMAIL", payload: e.target.value });
    },

    handlePhoneChange: (e) => {
      dispatch({ type: "UPDATE_PHONE", payload: e.target.value });
    },

    handleStreetChange: (e) => {
      dispatch({ type: "UPDATE_STREET", payload: e.target.value });
    },

    handleHouseNumberChange: (e) => {
      dispatch({ type: "UPDATE_HOUSENUMBER", payload: e.target.value });
    },

    handlePostNumberChange: (e) => {
      dispatch({ type: "UPDATE_POSTNUMBER", payload: e.target.value });
    },

    handleTownChange: (e) => {
      dispatch({ type: "UPDATE_TOWN", payload: e.target.value });
    },

    handleNotesChange: (e) => {
      dispatch({ type: "UPDATE_NOTES", payload: e.target.value });
    },

    handleDeliveryDateChange: (e) => {
      dispatch({
        type: "UPDATE_DELIVERYDATE",
        payload: value.toString(),
      });
    },
  };

  return (
    <ContactsInformationFunc.Provider
      value={{
        reducer,
        formInitialState,
        contactInfoState,
        dispatch,
        getContactInfoFuncs,
        value,
        setValue,
      }}
    >
      {props.children}
    </ContactsInformationFunc.Provider>
  );
};
