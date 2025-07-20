import { useState } from "react";
import Form from "./components/Form";
import { v4 } from "uuid";

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

  return (
    <div>
      <Form addItems={addItems} />
    </div>
  );
};

export default App;
