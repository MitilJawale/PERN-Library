import Navbar from "./navbar";

const Layout = ({ children }) => {
  return (
    <div className="studentbg" >
      <Navbar />
      <div className="container" >{children}</div>
    </div>
  );
};

export default Layout;
