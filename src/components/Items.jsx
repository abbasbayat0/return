import { v4 } from "uuid";
import SingleItem from "./SingleItem";

const Items = ({ items, removeItem }) => {
  return (
    <div>
      {items.map((item) => {
        return <SingleItem key={v4()} item={item} removeItem={removeItem} />;
      })}
    </div>
  );
};

export default Items;
