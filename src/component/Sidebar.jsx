import { Children } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

const Sidebar = ({ title, children, showSidebar, setShowSidebar }) => {
  return (
    <div
      className={` bg-gray-600 h-full relative transition-all duration-200 ${
        showSidebar ? "w-[250px]" : "-translate-x-full w-0"
      }`}
    >
      <span
        className={`w-10 h-auto absolute right-0 top-0 cursor-pointer border-2 hover:bg-gray-700 transition-all duration-100 ${
          showSidebar
            ? "right-0 top-0 border-transparent"
            : "left-full top-0 rounded-r-full border-gray-500 border-l-0 hover:text-white"
        }`}
        onClick={() => setShowSidebar(!showSidebar)}
      >
        <FaAngleLeft
          className={`p-2 transition-all duration-100 h-full w-full ${
            showSidebar ? "text-gray-200" : "text-gray-500 rotate-180 hover:text-white"
          }`}
        />
      </span>
      <div className="flex flex-col gap-5 overflow-hidden">
        <p className="text-2xl text-white font-medium p-2">{title}</p>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Sidebar;
