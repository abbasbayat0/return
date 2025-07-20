import { useState } from "react";

const SingleItem = ({ item, removeItem }) => {
  const [isChecked, setIsChecked] = useState(item.completed);
  return (
    <div className="mt-10 flex justify-around">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => setIsChecked(!isChecked)}
      />
      <p className={`${isChecked ? "line-through" : "font-bold "}`}>
        {item.name}
      </p>
      <button onClick={removeItem(item.id)} className="text-red-400">
        delete
      </button>
    </div>
  );
};

export default SingleItem;
