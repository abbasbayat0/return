import { useState } from "react";
import { motion } from "framer-motion";
const App = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="w-full bg-green-400 h-screen flex flex-col">
      {show && (
        <motion.div
          className="flex w-full justify-around p-10 bg-amber-200 rounded-b-4xl"
          initial={{ y: -200 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p>link 1</p>
          <p>link 2</p>
          <p>link 3</p>
          <p>link 4</p>
          <p>link 5</p>
        </motion.div>
      )}
      <button
        className="cursor-pointer select-none mt-52 animate-pulse"
        onClick={() => {
          setShow(!show);
        }}
      >
        {show ? "hide" : "show"}
      </button>
    </div>
  );
};

export default App;
