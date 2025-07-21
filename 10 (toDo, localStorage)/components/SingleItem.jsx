const SingleItem = ({ item, removeItem, complete }) => {
  return (
    <div className="mt-10 flex justify-around">
      <input
        type="checkbox"
        checked={item.completed}
        onChange={() => complete(item.id)}
      />
      <p className={`${item.completed ? "line-through" : "font-bold "}`}>
        {item.name}
      </p>
      <button onClick={() => removeItem(item.id)} className="text-red-400">
        delete
      </button>
    </div>
  );
};

export default SingleItem;
