import Question from "./Question";

const Questions = ({ data, active, change }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-5">
      {data.map((d) => {
        return <Question key={d.id} {...d} active={active} change={change} />;
      })}
    </div>
  );
};

export default Questions;
