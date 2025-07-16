import { v4 as uuid4 } from "uuid";
const Duties = ({ duties }) => {
  const id = uuid4();
  return (
    <div key={id} className="flex flex-col justify-center items-center">
      {duties.map((duty, index) => {
        return (
          <p key={index} className="text-amber-700 text-sm mt-5">
            {duty}
          </p>
        );
      })}
    </div>
  );
};

export default Duties;
