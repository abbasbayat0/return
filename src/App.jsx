import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import SubMenu from "./components/SubMenu";

const App = () => {
  return (
    <div className="flex flex-col gap-10">
      <Navbar />
      <Hero />
      <Sidebar />
      <SubMenu />
    </div>
  );
};

export default App;
