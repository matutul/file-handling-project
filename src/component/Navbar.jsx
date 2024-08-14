const Navbar = ({ children, title }) => {
  return (
    <div className="w-full h-[65px] bg-green-600 text-white flex justify-center">
      <div className="mx-10 w-full flex justify-between items-center">
        <div className="text-2xl font-semibold cursor-default">{title}</div>
        <ul className="flex hover:leading-3 h-full">{children}</ul>
      </div>
    </div>
  );
};

export default Navbar;
