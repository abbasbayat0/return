import React from "react";
import People from "./People";

const List = ({ data }) => {
  return (
    <div className="flex justify-center items-center flex-col gap-1">
      <h1 className="mb-4 font-black">there is {data.length} people</h1>
      {data.map((people) => {
        return <People key={people.id} {...people} />;
      })}
    </div>
  );
};

export default List;
