import CartItem from "./CartItem";
import useGlobalContext from "../hooks/useGlobalContext";

const CartContainer = () => {
  const { cart, clearAll, totalPrice } = useGlobalContext();
  const cartArray = Array.from(cart.values());
  console.log(cartArray);
  if (cartArray.length === 0) {
    return <p className="capitalize flex justify-center items-center">the bag is empty</p>;
  }
  return (
    <div className="flex flex-col">
      <div className="flex flex-col justify-center items-center mt-5 gap-10">
        {cartArray.map((cartItem) => {
          return <CartItem key={cartItem.id} {...cartItem} />;
        })}
      </div>
      <div className="flex justify-around mt-5">
        <button
          className="cursor-pointer border p-1 rounded-3xl shadow-2xl hover:border-2"
          onClick={clearAll}
        >
          Clear All
        </button>
        <p className="select-none text-sm p-1 rounded-4xl flex items-center justify-center bg-green-300">
          Cost: {totalPrice.toFixed(2)}$
        </p>
      </div>
    </div>
  );
};

export default CartContainer;
