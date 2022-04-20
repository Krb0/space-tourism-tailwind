import { Link } from "react-router-dom";
import Logo from "../../assets/shared/logo.svg";
import Nav from "./Nav";

const NavBar = () => {
  return (
    <header className="pt-[2rem] flex items-center justify-between pl-20 flex-wrap">
      <Link to="/">
        <img src={Logo} alt="logo" className="h-[48px] w-[48px] " />
      </Link>
      <hr className="line xl:block" />
      <Nav />
    </header>
  );
};

export default NavBar;
