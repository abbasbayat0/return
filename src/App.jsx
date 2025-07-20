import { useState } from "react";
import Form from "./components/Form";
import { v4 } from "uuid";
import Items from "./components/Items";

const App = () => {
  const [items, setItems] = useState([]);
  console.log(items);
  const addItems = (itemName) => {
    const newItem = {
      id: v4(),
      name: itemName,
      completed: false,
    };
    setItems([...items, newItem]);
  };

  const removeItem = (id) => {};

  return (
    <div>
      <Form addItems={addItems} />
      <Items items={items} removeItem={removeItem} />
    </div>
  );
};

export default App;
