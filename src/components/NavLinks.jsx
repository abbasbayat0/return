import links from "../../data";
import useGlobalContext from "../hook/useGlobalContext";

const NavLinks = () => {
  const { setPageID } = useGlobalContext();
  return (
    <div className="hidden lg:flex w-screen justify-around items-center fixed top-0 left-1/2 -translate-x-1/2 p-10">
      {links.map((link) => {
        return (
          <p
            onMouseEnter={() => setPageID(link.id)}
            onMouseLeave={() => {
              setTimeout(() => {
                setPageID(null);
              }, 1000);
            }}
            className="cursor-pointer hover:font-bold transition-all"
            key={link.id}
          >
            {link.page}
          </p>
        );
      })}
    </div>
  );
};

export default NavLinks;
