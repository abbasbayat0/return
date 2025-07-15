import { useState } from "react";
import Questions from "./components/Questions";
import data from "../data";

const App = () => {
  // active section
  const [active, setActive] = useState(null);

  // controller function
  const change = (id) => {
    // what is the situation of this id ?
    const isActive = active === id ? null : id;
    setActive(isActive);
  };

  return (
    <div>
      <Questions data={data} active={active} change={change} />
    </div>
  );
};

export default App;
