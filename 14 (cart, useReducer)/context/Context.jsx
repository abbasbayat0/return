import { createContext, useEffect, useReducer } from "react";
import { reducer } from "./reducer";
import {
  REMOVE,
  CLEAR_ALL,
  INCREASE,
  DECREASE,
  LOADING,
  FETCH,
} from "../../actions";
import { calculate } from "../utils/utils";

export const AppContext = createContext();

const initialState = {
  loading: false,
  cart: new Map(),
};
export const AppProvider = ({ children }) => {
  const url = "https://www.course-api.com/react-useReducer-cart-project";
  const [state, dispatch] = useReducer(reducer, initialState);
  const { totalAmount, totalPrice } = calculate(state.cart);

  const clearAll = () => {
    dispatch({ type: CLEAR_ALL });
  };
  const remove = (id) => {
    dispatch({ type: REMOVE, payload: { id } });
  };
  const increase = (id) => {
    dispatch({ type: INCREASE, payload: { id } });
  };
  const decrease = (id) => {
    dispatch({ type: DECREASE, payload: { id } });
  };

  const fetchItems = async () => {
    dispatch({ type: LOADING });
    const response = await fetch(url);
    const result = await response.json();
    dispatch({ type: FETCH, payload: { result } });
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <AppContext.Provider
      value={{
        ...state,
        clearAll,
        remove,
        increase,
        decrease,
        totalPrice,
        totalAmount,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
