import { useEffect, useState } from "react";
import data from "../../data";

const Carouser = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => {
    setCurrent((now) => {
      return (now - 1 + data.length) % data.length;
    });
  };
  const next = () => {
    setCurrent((now) => {
      return (now + 1) % data.length;
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 2000);
    return () => clearInterval(interval);
  }, [current]);

  return (
    <div className="h-[300px] w-[500px] flex flex-col justify-center items-center relative overflow-hidden">
      {data.map((data, index) => {
        const { id, name, title } = data;
        return (
          <div
            key={index}
            className={
              current === index
                ? "flex flex-col justify-center text-center gap-2 bg-amber-300 p-10 absolute opacity-100 transition-opacity duration-1000"
                : "flex flex-col justify-center text-center gap-2 bg-amber-300 p-10 absolute opacity-0 transition-opacity duration-1000"
            }
          >
            <p>{id}</p>
            <p>{name}</p>
            <p>{title}</p>
          </div>
        );
      })}

      {/* controller buttons */}
      <div className="w-full flex justify-between px-5">
        <p
          onClick={() => prev()}
          className="text-blue-600 cursor-pointer select-none"
        >
          prev
        </p>
        <p
          onClick={() => next()}
          className="text-blue-600 cursor-pointer select-none"
        >
          next
        </p>
      </div>
    </div>
  );
};

export default Carouser;
