import { useState } from "react";
import data from "./data";

const App = () => {
  const [text, setText] = useState([]);
  const [count, setCount] = useState(0);
  const handleSubmit = (e) => {
    e.preventDefault();
    const howMany = data.slice(0, e.target.count.value);
    setText(howMany);
  };
  return (
    <div>
      <form className="flex gap-5" onSubmit={handleSubmit}>
        <label htmlFor="count">how many ?</label>
        <input
          type="number"
          name="count"
          id="count"
          className="bg-gray-300"
          value={count}
          min={0}
          max={data.length}
          onChange={(e) => {
            setCount(e.target.value);
          }}
        />
        <button>Generate</button>
      </form>
      <div className="flex flex-col gap-5 mt-10">
        {text.map((t, i) => {
          return <p key={i}>{t}</p>;
        })}
      </div>
    </div>
  );
};

export default App;
