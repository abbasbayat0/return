import { useState } from "react";
import data from "./data";
// import useCheck from "./hooks/useCheck";

const App = () => {
  const [index, setIndex] = useState(0);
  const { id, name, age } = data[index];

  // const check = useCheck(data);

  const prev = () => {
    setIndex((current) => {
      const newIndex = (current - 1 + data.length) % data.length;
      // return check(newIndex);
      return newIndex;
    });
  };
  const next = () => {
    setIndex((current) => {
      const newIndex = (current + 1) % data.length;
      // return check(newIndex);
      return newIndex;
    });
  };
  const random = () => {
    setIndex((current) => {
      let randomNumber = Math.floor(Math.random() * data.length);
      if (randomNumber === current) {
        randomNumber = randomNumber + 1;
      }
      // return check(randomNumber);
      return randomNumber % data.length;
    });
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <p>{id}</p>
      <p>{name}</p>
      <p>{age}</p>
      <div className="flex gap-3 mt-10">
        <p onClick={() => prev()} className="cursor-pointer select-none">
          prev
        </p>
        <p onClick={() => next()} className="cursor-pointer select-none">
          next
        </p>
      </div>
      <p onClick={() => random()} className="cursor-pointer select-none">
        random
      </p>
    </div>
  );
};

export default App;
