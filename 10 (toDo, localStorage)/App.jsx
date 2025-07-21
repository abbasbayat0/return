import { useState } from "react";
import Form from "./components/Form";
import { v4 } from "uuid";
import Items from "./components/Items";
import { toast, ToastContainer } from "react-toastify";

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

    // show deleted item name
    const item = items.filter((item) => item.id === id);
    toast.success(`${item[0]?.name} deleted`);
    setItems(filtered);

    setLocalStorage(filtered);
  };

  const complete = (id) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        toast.success(
          `${item.completed ? `do ${item.name}` : `${item.name} done !`}`
        );
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
      <ToastContainer position="top-center" autoClose={2000} />
    </div>
  );
};

export default App;
