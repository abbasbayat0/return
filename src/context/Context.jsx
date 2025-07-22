import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const openSidebar = () => setIsSidebarOpen(true);
  const closeSidebar = () => setIsSidebarOpen(false);

  const [pageID, setPageID] = useState(null);

  return (
    <AppContext.Provider
      value={{ isSidebarOpen, openSidebar, closeSidebar, pageID, setPageID }}
    >
      {children}
    </AppContext.Provider>
  );
};
