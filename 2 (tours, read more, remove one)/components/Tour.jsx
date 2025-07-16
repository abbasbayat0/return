import { useState } from "react";

const Tour = ({ id, image, info, name, price, remove }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <div>
      <p>id: {id}</p>
      <p>image: {image}</p>
      <p>info: {readMore ? info : `${info.substring(0, 200)}...`}</p>
      <p className="text-pink-400" onClick={() => setReadMore(!readMore)}>
        {readMore ? "show less" : "show more"}
      </p>
      <p>name: {name}</p>
      <p>price: {price}</p>
      <button
        className="text-red-500"
        onClick={() => {
          remove(id);
        }}
      >
        remove
      </button>
    </div>
  );
};

export default Tour;
