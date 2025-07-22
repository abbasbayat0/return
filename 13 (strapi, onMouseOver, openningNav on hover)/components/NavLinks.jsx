import links from "../data";
import useGlobalContext from "../hook/useGlobalContext";

const NavLinks = () => {
  const { setPageID } = useGlobalContext();
  const handleOver = (e) => {
    if (!e.target.classList.contains("one")) setPageID(null);
  };
  return (
    <div
      onMouseOver={handleOver}
      className="hidden lg:flex w-screen justify-around fixed top-0 left-1/2 -translate-x-1/2 p-10 h-44"
    >
      {links.map((link) => {
        return (
          <p
            onMouseEnter={() => setPageID(link.id)}
            className="cursor-pointer hover:font-bold transition-all one h-10"
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
