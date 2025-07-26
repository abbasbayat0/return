import CartContainer from "./components/CartContainer";
import useGlobalContext from "./hooks/useGlobalContext";
import Navbar from "./components/Navbar";

const App = () => {
  const { loading } = useGlobalContext();

  if (loading) return <p>loading ......</p>;
  return (
    <div className="h-screen">
      <Navbar />
      <CartContainer />
    </div>
  );
};

export default App;
