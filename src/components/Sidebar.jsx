import links from "../../data";
import useGlobalContext from "../hook/useGlobalContext";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();

  return (
    <div className="lg:hidden">
      {isSidebarOpen ? (
        <div className="border border-amber-500 p-5 rounded-2xl">
          <p>sidebar is here</p>
          {links.map((link) => {
            return (
              <div className="mt-5">
                <div>
                  <p>{link.page}</p>
                  {link.subLinks.map((sub) => {
                    return (
                      <a href={sub.url} className="p-2">
                        {sub.label}
                      </a>
                    );
                  })}
                </div>
              </div>
            );
          })}
          <button
            onClick={closeSidebar}
            className="border rounded-2xl p-1 text-sm shadow"
          >
            click here if you want to close it
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default Sidebar;
