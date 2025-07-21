import { useState } from "react";
import { toast } from "react-toastify";

const Form = ({ addItems }) => {
  const [newItem, setNewItem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newItem) {
      addItems(newItem);
      toast.success("new item added");
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
