import CartItem from "./CartItem";
import useGlobalContext from "./hooks/useGlobalContext";

const CartContainer = () => {
  const { cart, clearAll } = useGlobalContext();
  const cartArray = Array.from(cart.values());

  if (!cartArray.length) {
    return <p>the bag is empty</p>;
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
          Cost: 0$
        </p>
      </div>
    </div>
  );
};

export default CartContainer;
