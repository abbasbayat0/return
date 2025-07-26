import {
  CLEAR_ALL,
  DECREASE,
  FETCH,
  INCREASE,
  LOADING,
  REMOVE,
} from "../../actions";

export const reducer = (state, action) => {
  if (action.type === CLEAR_ALL) {
    return { ...state, cart: new Map() };
  }
  if (action.type === REMOVE) {
    const newCart = state.cart;
    newCart.delete(action.payload.id);
    return { ...state, newCart };
  }
  if (action.type === INCREASE) {
    const currentCart = state.cart;
    const specifyItem = currentCart.get(action.payload.id);
    const newSpecifyItem = { ...specifyItem, amount: specifyItem.amount + 1 };
    const newCart = currentCart.set(action.payload.id, newSpecifyItem);
    return { ...state, cart: newCart };
  }
  if (action.type === DECREASE) {
    const currentCart = state.cart;
    const specifyItem = currentCart.get(action.payload.id);
    if (specifyItem?.amount === 1) {
      currentCart.delete(action.payload.id);
      return { ...state, cart: currentCart };
    }
    const newSpecifyItem = { ...specifyItem, amount: specifyItem.amount - 1 };
    const newCart = currentCart.set(action.payload.id, newSpecifyItem);
    return { ...state, cart: newCart };
  }
  if (action.type === FETCH) {
    return {
      ...state,
      loading: false,
      cart: new Map(action.payload.result.map((item) => [item.id, item])),
    };
  }
  if (action.type === LOADING) return { ...state, loading: true };
  throw new Error(`this is an undefined action: ${action.type}`);
};
