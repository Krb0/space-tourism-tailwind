import NavBar from "./NavBar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-cover min-w-screen min-h-screen bg-right bg-home">
      <NavBar />
      {children}
    </div>
  );
};

export default Layout;
