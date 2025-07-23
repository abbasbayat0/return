import useGlobalContext from "./hooks/useGlobalContext";

const CartItem = ({ id, title, price, img, amount }) => {
  const { remove } = useGlobalContext();
  return (
    <div className="flex justify-around items-center w-3/12">
      <div className="flex flex-col justify-center items-center">
        <img src={img} alt={title} className="w-20 h-20" />
        <p
          className="text-xs mt-1 text-red-700 cursor-pointer select-none"
          onClick={() => {
            remove(id);
          }}
        >
          remove
        </p>
      </div>
      <p className="w-1/2">
        {title} : <br />
        <span className="text-sm text-green-800">{price}$</span>
      </p>
      <div>
        <p
          className="text-lg font-bold cursor-pointer"
          onClick={() => console.log("increase")}
        >
          +
        </p>
        <p className="text-sm select-none">{amount}</p>
        <p
          className="text-xl font-bold cursor-pointer"
          onClick={() => console.log("decrease")}
        >
          -
        </p>
      </div>
    </div>
  );
};

export default CartItem;
