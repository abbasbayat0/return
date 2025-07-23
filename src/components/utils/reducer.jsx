import { CLEAR_ALL, REMOVE } from "../../../actions";

export const reducer = (state, action) => {
  if (action.type === CLEAR_ALL) {
    return { ...state, cart: new Map() };
  }
  if (action.type === REMOVE) {
    const newCart = state.cart;
    newCart.delete(action.payload.id);
    return { ...state, newCart };
  }
  throw new Error(`this is an undefined action: ${action}`);
};
