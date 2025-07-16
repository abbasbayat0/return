const Question = ({ id, title, info, change, active }) => {
  // is this section active ?
  const activeID = active === id;
  return (
    <div>
      <p
        className="text-blue-800 cursor-pointer select-none"
        onClick={() => {
          change(id);
        }}
      >
        {activeID ? "close" : "open"}
      </p>
      <p>{title}</p>
      <p>{activeID ? info : ""}</p>
    </div>
  );
};

export default Question;
