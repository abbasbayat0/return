import { useState } from "react";
import Form from "./components/Form";

const App = () => {
  const [items, setItems] = useState([]);
  return (
    <div>
      <Form />
    </div>
  );
};

export default App;
