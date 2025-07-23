import { createContext, useReducer } from "react";
import { reducer } from "../utils/reducer";
import { REMOVE, CLEAR_ALL } from "../../../actions";
import cartItems from "../../../data";

export const AppContext = createContext();

const initialState = {
  loading: false,
  cart: new Map(cartItems.map((item) => [item.id, item])),
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const clearAll = () => {
    dispatch({ type: CLEAR_ALL });
  };
  const remove = (id) => {
    dispatch({ type: REMOVE, payload: { id } });
  };

  return (
    <AppContext.Provider value={{ ...state, clearAll, remove }}>
      {children}
    </AppContext.Provider>
  );
};
