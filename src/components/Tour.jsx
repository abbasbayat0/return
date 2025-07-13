const Tour = ({ id, image, info, name, price, remove }) => {
  console.log(id);
  return (
    <div>
      <p>id: {id}</p>
      <p>image: {image}</p>
      <p>info: {info}</p>
      <p>name: {name}</p>
      <p>price: {price}</p>
      <button
        type="button"
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
