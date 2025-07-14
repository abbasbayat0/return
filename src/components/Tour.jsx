const Tour = ({ id, image, info, name, price, remove }) => {
  return (
    <div>
      <p>id: {id}</p>
      <p>image: {image}</p>
      <p>info: {info}</p>
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
