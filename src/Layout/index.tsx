import { Link } from "react-router-dom";
import Logo from "../assets/shared/logo.svg";
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-cover min-w-screen min-h-screen bg-right bg-home">
      <header className="pt-[2rem] flex items-center justify-between px-20">
        <img src={Logo} alt="logo" />
        <nav className="font-condensed text-white flex gap-8">
          <Link to="/">HOME</Link>
          <Link to="/destination">DESTINATION</Link>
          <Link to="/crew">CREW</Link>
          <Link to="/technology">TECHNOLOGY</Link>
        </nav>
      </header>
      {children}
    </div>
  );
};

export default Layout;
