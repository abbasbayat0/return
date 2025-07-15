import { useState } from "react";
import data from "../data";
import Menu from "./components/Menu";
import Categories from "./components/Categories";

const App = () => {
  const [info, setInfo] = useState(data);

  // const allCategories = info.map((info) => info.category);
  // const newSet = new Set(allCategories);
  // const resultOfCategories = Array.from(newSet);
  // All in one :
  const allCategories = ["all", ...new Set(data.map((i) => i.category))];

  const filterFunc = (category) => {
    if (category === "all") {
      setInfo(data);
      return;
    }
    const newInfo = data.filter((item) => item.category === category);
    setInfo(newInfo);
  };
  return (
    <div>
      <Categories allCategories={allCategories} filter={filterFunc} />
      <Menu info={info} />
    </div>
  );
};

export default App;
