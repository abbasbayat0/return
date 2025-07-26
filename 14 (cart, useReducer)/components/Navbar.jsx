import useGlobalContext from "../hooks/useGlobalContext";

const Navbar = () => {
  const { totalAmount } = useGlobalContext();
  return (
    <div className="w-screen flex items-center justify-around p-5">
      <p>NavBar</p>
      <p>All Items {totalAmount}</p>
    </div>
  );
};

export default Navbar;
