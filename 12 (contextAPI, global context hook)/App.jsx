import { useGlobalContext } from "./hooks/useGlobalContext";

const App = () => {
  const {
    isModalOpen,
    isSidebarOpen,
    closeSidebar,
    openSidebar,
    closeModal,
    openModal,
  } = useGlobalContext();
  console.log(isModalOpen);
  return (
    <div>
      {isModalOpen && <div>modal</div>}
      {isSidebarOpen && <div>sidebar</div>}
      <p onClick={() => closeModal()}>close modal</p>
      <p onClick={() => openModal()}>open modal</p>
      <p onClick={() => closeSidebar()}>close sidebar</p>
      <p onClick={() => openSidebar()}>open sidebar</p>
    </div>
  );
};

export default App;
