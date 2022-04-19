import NavLink from "./NavLink";

const Nav = () => {
  return (
    <nav className="font-condensed text-white flex gap-14 backdrop-blur-[82px] h-[90px] items-center pr-10 xl:pr-60 pl-24 bg-[#ffffff02]">
      <NavLink path="/">
        <span>01</span>
        HOME
      </NavLink>
      <NavLink path="/destination">
        <span>02</span>
        DESTINATION
      </NavLink>
      <NavLink path="/crew">
        <span>03</span>
        CREW
      </NavLink>
      <NavLink path="/technology">
        <span>04</span>
        TECHNOLOGY
      </NavLink>
    </nav>
  );
};

export default Nav;
