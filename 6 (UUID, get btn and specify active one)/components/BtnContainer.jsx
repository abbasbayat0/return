import { v4 as uuid4 } from "uuid";
const BtnContainer = ({ jobs, current, setCurrent }) => {
  const id = uuid4();
  return (
    <div className="flex gap-2" key={id}>
      {jobs.map((job, index) => {
        return (
          <p
            key={index}
            onClick={() => {
              setCurrent(index);
            }}
            className={
              current === index
                ? "text-blue-800 font-bold cursor-pointer select-none underline"
                : "text-blue-600 font-bold cursor-pointer select-none"
            }
          >
            {job.company}
          </p>
        );
      })}
    </div>
  );
};

export default BtnContainer;
