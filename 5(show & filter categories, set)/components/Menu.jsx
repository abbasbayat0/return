import MenuItem from "./MenuItem";

const Menu = ({ info }) => {
  return (
    <div className="flex flex-col justify-center items-center mt-10 gap-2"> 
      {info.map((i) => {
        return <MenuItem key={i.id} {...i} />;
      })}
    </div>
  );
};

export default Menu;
