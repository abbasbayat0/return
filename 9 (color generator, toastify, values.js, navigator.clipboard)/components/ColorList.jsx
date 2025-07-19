import SingleColor from "./SingleColor";
import { v4 } from "uuid";

const ColorList = ({ colors }) => {
  return (
    <div>
      {colors.map((color, index) => {
        return <SingleColor color={color} key={v4()} index={index} />;
      })}
    </div>
  );
};

export default ColorList;
