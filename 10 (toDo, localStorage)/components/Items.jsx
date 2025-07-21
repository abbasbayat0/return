import { v4 } from "uuid";
import SingleItem from "./SingleItem";

const Items = ({ items, removeItem, complete }) => {
  return (
    <div>
      {items.map((item) => {
        return (
          <SingleItem
            key={v4()}
            item={item}
            removeItem={removeItem}
            complete={complete}
          />
        );
      })}
    </div>
  );
};

export default Items;
