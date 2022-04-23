import NavLink from "./NavLink";
import HamburgerIcon from "../../../assets/shared/icon-hamburger.svg";
import OpenedIcon from "../../../assets/shared/icon-close.svg";
import { useState } from "react";
const Nav = ({ menu }: { menu: boolean }) => {
  return (
    <>
      <nav className="hidden lg:flex font-condensed text-white gap-14 backdrop-blur-[82px] h-[90px] items-center pr-10 xl:pr-60 pl-12 xl:pl-24 bg-[#ffffff02]">
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
      <nav className="flex lg:hidden flex-col fixed right-0 top-0 backdrop-blur-[82px] h-screen w-[200px] ">
        {menu && (
          <ul className="text-white">
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
          </ul>
        )}
      </nav>
    </>
  );
};

export default Nav;

export const HamburgerButton = ({
  menu,
  setMenu,
}: {
  menu: boolean;
  setMenu: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <button className="w-8 h-8 z-20" onClick={() => setMenu(!menu)}>
      <img
        src={menu ? OpenedIcon : HamburgerIcon}
        className="w-8 h-8"
        alt="menu button"
      />
    </button>
  );
};
