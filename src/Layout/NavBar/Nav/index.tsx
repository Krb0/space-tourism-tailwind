import NavLink from "./NavLink";

const Nav = () => {
  return (
    <nav className="font-condensed text-white flex gap-14 backdrop-blur-[82px] h-[90px] items-center pr-10 xl:pr-60 pl-12 xl:pl-24 bg-[#ffffff02]">
      <NavLink path="/">
        <span className="hidden xl:block">00</span>
        HOME
      </NavLink>
      <NavLink path="/destination">
        <span className="hidden xl:block">01</span>
        DESTINATION
      </NavLink>
      <NavLink path="/crew">
        <span className="hidden xl:block">02</span>
        CREW
      </NavLink>
      <NavLink path="/technology">
        <span className="hidden xl:block">03</span>
        TECHNOLOGY
      </NavLink>
    </nav>
  );
};

export default Nav;
