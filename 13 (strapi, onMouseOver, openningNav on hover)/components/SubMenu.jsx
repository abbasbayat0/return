import links from "../data";
import useGlobalContext from "../hook/useGlobalContext";

const SubMenu = () => {
  const { pageID } = useGlobalContext();
  const hoveredLink = links.find((item) => item.id === pageID);

  return (
    <div
      className={
        hoveredLink
          ? "bg-pink-300 w-10/12 fixed top-20 left-1/2 -translate-x-1/2 flex justify-around items-center rounded-3xl p-5 one"
          : null
      }
    >
      {hoveredLink?.subLinks?.map((subLink) => {
        return (
          <div key={subLink.id}>
            <p>{subLink.label}</p>
          </div>
        );
      })}
    </div>
  );
};

export default SubMenu;
