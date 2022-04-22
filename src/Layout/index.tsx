import { useLocation } from "react-router-dom";
import NavBar from "./NavBar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { pathname } = useLocation();
  return (
    <div
      className={`bg-cover min-w-screen min-h-screen bg-right bg-blur bg-${normalizePath(
        pathname
      )} `}
    >
      <div className="fixed w-screen h-screen  bg-[rgba(0,0,0,0.2)] z-[0] "></div>
      <div className="relative z-[4] min-h-screen flex flex-col">
        <NavBar />
        <main className="flex flex-col flex-1">{children}</main>
      </div>
    </div>
  );
};

export default Layout;

const normalizePath = (pathname: any) => {
  const path = pathname.split("/").find((p: any) => p !== "");
  if (path) {
    return path;
  } else {
    return "home";
  }
};
