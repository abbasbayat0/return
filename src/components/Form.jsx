import { useState } from "react";

const Form = ({ addItems }) => {
  const [newItem, setNewItem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newItem) {
      addItems(newItem);
      setNewItem("");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex gap-5">
        <input
          type="text"
          value={newItem}
          onChange={(e) => {
            setNewItem(e.target.value);
          }}
          className="bg-pink-200 rounded-2xl"
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default Form;
