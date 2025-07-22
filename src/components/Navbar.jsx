import useGlobalContext from "../hook/useGlobalContext";

const Navbar = () => {
  const { openSidebar } = useGlobalContext();
  return (
    <div className="lg:hidden">
      <button
        onClick={openSidebar}
        className="border rounded-2xl p-1 text-sm shadow"
      >
        open the Sidebar
      </button>
    </div>
  );
};

export default Navbar;
