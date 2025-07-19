import { useState } from "react";

const Form = ({ addColor }) => {
  const [color, setColor] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    addColor(color);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="color"
          className="rounded-full"
          value={color}
          onChange={(e) => {
            setColor(e.target.value);
          }}
        />
        <input
          className="bg-gray-100"
          type="text"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          placeholder={color}
        />
        <button
          className="w-16 h-10 rounded-2xl"
          style={{ backgroundColor: color }}
          type="submit"
        >
          submit
        </button>
      </form>
    </div>
  );
};

export default Form;
