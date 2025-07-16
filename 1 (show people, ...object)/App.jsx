import List from "./components/List";
import data from "../data";
import { useState } from "react";

function App() {
  const [people, setPeople] = useState(data);
  return (
    <div className="flex justify-center items-center flex-col gap-1">
      <List data={people} />
      <button
        className="mt-4 font-bold border-2 p-1 rounded-2xl"
        onClick={() => {
          people.length === 0 ? setPeople(data) : setPeople([]);
        }}
      >
        {people.length === 0 ? "Reset" : "Clear All"}
      </button>
    </div>
  );
}

export default App;
