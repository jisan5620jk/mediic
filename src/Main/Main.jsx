import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import ScrollToTop from "../Shared/ScrollToTop/ScrollToTop";
import Footer from "../Shared/Footer/Footer";
import Cursor from "../Shared/Cursor/Cursor";
import Search from "../Shared/Search/Search";

const Main = () => {
  return (
    <>
      <Navbar />
      <Cursor />
      <ScrollToTop />
      <div>
        <Outlet />
      </div>
      <Search />
      <Footer />
    </>
  );
};
export default Main;
