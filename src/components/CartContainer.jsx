import cartItems from "../../data";
import CartItem from "./CartItem";

const CartContainer = () => {
  if (!cartItems.length) return <p>the bag is empty</p>;

  return (
    <div className="flex flex-col">
      <div className="flex flex-col justify-center items-center mt-5 gap-10">
        {cartItems.map((cartItem) => {
          return <CartItem kay={cartItem.id} {...cartItem} />;
        })}
      </div>
      <div className="flex justify-around mt-5">
        <button
          className="cursor-pointer border p-1 rounded-3xl shadow-2xl hover:border-2"
          onClick={() => console.log("clear all")}
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
