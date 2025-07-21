import { useState } from "react";
import Form from "./components/Form";
import { v4 } from "uuid";
import Items from "./components/Items";

const setLocalStorage = (items) => {
  localStorage.setItem("list", JSON.stringify(items));
};

// defined as one line code in line 22
// const getLocalStorage = () => {
//   let localItems = localStorage.getItem("list");
//   if (localItems) {
//     localItems = JSON.parse(localItems);
//   } else {
//     localItems = [];
//   }
//   return localItems;
// };

const App = () => {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("list") || "[]")
  );
  const addItems = (itemName) => {
    const newItem = {
      id: v4(),
      name: itemName,
      completed: false,
    };
    const toSave = [...items, newItem];
    setItems(toSave);
    setLocalStorage(toSave);
  };

  const removeItem = (id) => {
    const filtered = items.filter((item) => item.id !== id);
    setItems(filtered);
    setLocalStorage(filtered);
  };

  const complete = (id) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });
    setItems(newItems);
    setLocalStorage(newItems);
  };

  return (
    <div>
      <Form addItems={addItems} />
      <Items items={items} removeItem={removeItem} complete={complete} />
    </div>
  );
};

export default App;
