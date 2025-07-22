import links from "../../data";
import useGlobalContext from "../hook/useGlobalContext";

const SubMenu = () => {
  const { pageID } = useGlobalContext();
  const hoveredLink = links.find((item) => item.id === pageID);

  return (
    <div className="bg-red-200 w-screen fixed top-20 left-1/2 -translate-x-1/2 flex justify-around items-center">
      {hoveredLink?.subLinks.map((subLink) => {
        return <p key={subLink.id}>{subLink.label}</p>;
      })}
    </div>
  );
};

export default SubMenu;
