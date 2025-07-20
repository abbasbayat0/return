import { v4 } from "uuid";
import SingleItem from "./SingleItem";

const Items = ({ items, removeItem }) => {
  console.log(items);
  return (
    <div>
      {items.map((item) => {
        return <SingleItem key={v4()} item={item} removeItems={removeItem} />;
      })}
    </div>
  );
};

export default Items;
