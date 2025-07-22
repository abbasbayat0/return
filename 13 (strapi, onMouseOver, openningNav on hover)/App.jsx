import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import NavLinks from "./components/NavLinks";
import Sidebar from "./components/Sidebar";
import SubMenu from "./components/SubMenu";

const App = () => {
  return (
    <div className="flex flex-col gap-10">
      <NavLinks />
      <Navbar />
      <Hero />
      <Sidebar />
      <SubMenu />
    </div>
  );
};

export default App;
