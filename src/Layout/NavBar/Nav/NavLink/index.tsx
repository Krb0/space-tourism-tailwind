import { Link, useLocation } from "react-router-dom";

const NavLink = ({
  children,
  path,
}: {
  path: string;
  children: React.ReactNode;
}) => {
  const { pathname } = useLocation();
  return (
    <Link
      className={`nav-link ${pathname === path && "active-link"} `}
      to={path}
    >
      {children}
    </Link>
  );
};

export default NavLink;
