import { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import Sidebar from "../component/Sidebar";
import Footer from "../component/Footer";
import { Link, Outlet, useNavigate } from "react-router-dom";

const menu = [
  { id: 1, title: "Dashboard", refer: "/dashboard", defaultSubmenuId: 1 },
  { id: 2, title: "Projects", refer: "/projects", defaultSubmenuId: 1 },
  { id: 3, title: "Get brief", refer: "/get-brief", defaultSubmenuId: 1 },
  { id: 4, title: "About me", refer: "/about-me", defaultSubmenuId: 1 },
  { id: 5, title: "Contact", refer: "/contact", defaultSubmenuId: 1 },
];
const subMenu = [
  { subMenuId: 1, parentId: 1, title: "submenu 1", refer: "/submenu_1" },
  { subMenuId: 2, parentId: 1, title: "submenu 2", refer: "/submenu_2" },
  { subMenuId: 3, parentId: 1, title: "submenu 3", refer: "/submenu_3" },
  {
    subMenuId: 1,
    parentId: 2,
    title: "File handling",
    refer: "/file-handling",
  },
  {
    subMenuId: 2,
    parentId: 2,
    title: "Hamnosys play",
    refer: "/hamnosys-play",
  },
  { subMenuId: 3, parentId: 2, title: "submenu 3", refer: "/submenu_3" },
];

const Body = () => {
  const [showSidebar, setShowSidebar] = useState(true);
  const [menuId, setMenuId] = useState(2);
  const [subMenuId, setSubMenuId] = useState(0);
  const [subMenuSet, setSubMenuSet] = useState([]);
  const navigate = useNavigate();
  // const menuId = useRef();

  useEffect(() => {
    setSubMenuSet([]);
    setSubMenuSet(subMenu.filter((item) => item.parentId == menuId));
    setSubMenuId(0);
  }, [menuId]);

  useEffect(() => {
    if (!subMenuSet.length) {
      setShowSidebar(false);
    } else {
      setShowSidebar(true);
      const activeMenu = menu.find((i) => i.id == menuId);
      const activeSubMenu = subMenuSet.find(
        (item) => item.subMenuId == activeMenu.defaultSubmenuId
      );
      setSubMenuId(activeSubMenu.subMenuId);
    }
  }, [subMenuSet]);

  useEffect(() => {
    let referance = menu.find((item) => item.id == menuId).refer;
    if (subMenuId) {
      const subMenuItem = subMenuSet.find(
        (item) => item.subMenuId == subMenuId
      );
      if (subMenuItem) {
        referance += subMenuItem.refer;
      }
    }
    console.log(referance);
    navigate(referance);
  }, [subMenuId]);

  console.log(menuId);
  console.log(subMenuId);
  console.log(subMenuSet);

  return (
    <div className="h-[calc(100vh-65px)] w-full">
      <Navbar title={"Project Board"}>
        {menu.map((item, index) => (
          <Link
            key={index}
            className={`hover:text-gray-200 cursor-pointer h-full px-4 flex items-center border-b-4 border-transparent hover:border-white ${
              item.id == menuId ? "bg-slate-700 text-green-400" : ""
            }`}
            to={item.refer}
            onClick={() => setMenuId(item.id)}
          >
            {item.title}
          </Link>
        ))}
      </Navbar>
      <div className="w-full h-full flex justify-between">
        {subMenuSet.length > 0 && (
          <Sidebar
            title={menu[menuId - 1].title}
            showSidebar={showSidebar}
            setShowSidebar={setShowSidebar}
          >
            {subMenuSet.map((item, index) => (
              <li
                key={index}
                className={`submenu-list hover:bg-slate-800 ${
                  subMenuId == item.subMenuId ? "bg-green-600" : ""
                }`}
                onClick={() => setSubMenuId(item.subMenuId)}
              >
                {item.title}
              </li>
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
