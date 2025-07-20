import { useState } from "react";

const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };
  const [newItem, setNewItem] = useState("");
  return (
    <div>
      <form onSubmit={handleSubmit} className="flex gap-5">
        <input type="text" className="bg-pink-200 rounded-2xl" />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default Form;
