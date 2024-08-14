import { useEffect, useRef, useState } from "react";
import Navbar from "../component/Navbar";
import Sidebar from "../component/Sidebar";
import Footer from "../component/Footer";
import { Link, Outlet } from "react-router-dom";

const menu = [
  { id: 1, title: "Dashboard", refer: "/" },
  { id: 2, title: "Projects", refer: "/projects" },
  { id: 3, title: "Get brief", refer: "/" },
  { id: 4, title: "About me", refer: "/" },
  { id: 5, title: "Contact", refer: "/" },
];
const subMenu = [
  { id: 1, parentId: 1, title: "submenu 1", refer: "/submenu_1" },
  { id: 2, parentId: 2, title: "File handling", refer: "/projects/file-handling" },
  { id: 3, parentId: 2, title: "Hamnosys play", refer: "/projects/hamnosys-play" },
  { id: 4, parentId: 2, title: "submenu 3", refer: "/projects/submenu_3" },
];

const Body = () => {
  const [showSidebar, setShowSidebar] = useState(true);
  const [activeId, setActiveId] = useState(1);
  const [subMenuSet, setSubMenuSet] = useState([]);
  // const menuId = useRef();

  useEffect(() => {
    setSubMenuSet(subMenu.filter((item) => item.parentId == activeId));
    if(!subMenuSet.length){
      setShowSidebar(false);
    }else{
      setShowSidebar(true);
    }
  }, [activeId]);

  return (
    <div className="h-[calc(100vh-65px)] w-full">
      <Navbar title={"Project Board"}>
        {menu.map((item) => (
          <Link
            id={item.id}
            className={`hover:text-gray-200 cursor-pointer h-full px-4 flex items-center border-b-4 border-transparent hover:border-white ${
              item.id == activeId ? "bg-gray-700 text-green-400" : ""
            }`}
            to={item.refer}
            onClick={() => setActiveId(item.id)}
          >
            {item.title}
          </Link>
        ))}
        {/* <li className="hover:text-gray-200 cursor-pointer h-full px-2 flex items-center border-b-4 border-transparent hover:border-white">Dashboard</li>
        <li className="hover:text-gray-200 cursor-pointer h-full px-2 flex items-center border-b-4 border-transparent hover:border-white">Projects</li>
        <li className="hover:text-gray-200 cursor-pointer h-full px-2 flex items-center border-b-4 border-transparent hover:border-white">Get brief</li>
        <li className="hover:text-gray-200 cursor-pointer h-full px-2 flex items-center border-b-4 border-transparent hover:border-white">About me</li>
        <li className="hover:text-gray-200 cursor-pointer h-full px-2 flex items-center border-b-4 border-transparent hover:border-white">Contact</li> */}
      </Navbar>
      <div className="w-full h-full flex justify-between">
        {subMenuSet.length>0 && (
          <Sidebar
            title={"Dashboard"}
            showSidebar={showSidebar}
            setShowSidebar={setShowSidebar}
          >
            {subMenuSet.map((item) => (
              <Link to={item.refer} id={item.id} className={`submenu-list`}>{item.title}</Link>
            ))}
          </Sidebar>
        )}

        <div
          className={`${
            showSidebar ? "w-[calc(100vw-250px)]" : "w-full"
          } h-full bg-gray-200 p-10 z-100 transition-all duration-200 overflow-y-auto`}
        >
          <Outlet />
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Body;
