import { createContext, useReducer } from "react";
import { reducer } from "../utils/reducer";
import { REMOVE } from "../../../actions";
import cartItems from "../../../data";

export const AppContext = createContext();

const initialState = {
  loading: false,
  cart: [...cartItems],
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  );
};
