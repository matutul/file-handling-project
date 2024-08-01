import { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

const Body = ({children}) => {
  const [showSidebar, setShowSidebar] = useState(true);
  return (
    <div className="h-[calc(100vh-65px)] w-full">
      <Navbar title={"File Handling"}>
        <li className="hover:text-gray-200 cursor-pointer">Menu 1</li>
        <li className="hover:text-gray-200 cursor-pointer">Menu 2</li>
        <li className="hover:text-gray-200 cursor-pointer">Menu 3</li>
        <li className="hover:text-gray-200 cursor-pointer">Menu 4</li>
        <li className="hover:text-gray-200 cursor-pointer">Menu 5</li>
        <li className="hover:text-gray-200 cursor-pointer">Menu 6</li>
      </Navbar>
      <div className="w-full h-full flex justify-between">
        <Sidebar
          title={"Dashboard"}
          showSidebar={showSidebar}
          setShowSidebar={setShowSidebar}
        >
          <li className="submenu-list">submenu</li>
          <li className="submenu-list">Submenu</li>
          <li className="submenu-list">Submenu</li>
          <li className="submenu-list">submenu</li>
          <li className="submenu-list">Submenu</li>
          <li className="submenu-list">Submenu</li>
        </Sidebar>
        <div className={`${showSidebar?"w-[calc(100vw-250px)]":"w-full"} h-full bg-gray-200 p-10 z-100 transition-all duration-200 overflow-y-auto`}>
            {children}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Body;
