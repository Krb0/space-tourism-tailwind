import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/shared/logo.svg";
import Nav, { HamburgerButton } from "./Nav";

const NavBar = () => {
  const [menu, setMenu] = useState<boolean>(false);
  return (
    <header className="pt-[2rem] flex items-center justify-between pl-20 flex-wrap pr-10 lg:pr-0">
      <Link to="/">
        <img src={Logo} alt="logo" className="h-[48px] w-[48px] " />
      </Link>
      <hr className="line xl:block" />
      <HamburgerButton menu={menu} setMenu={setMenu} />
      <Nav menu={menu} />
    </header>
  );
};

export default NavBar;
