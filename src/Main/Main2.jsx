import { Outlet } from "react-router-dom";
import Footer2 from "../Shared/Footer/Footer2";
import Navbar2 from "../Shared/Navbar/Navbar2";
import ScrollToTop from "../Shared/ScrollToTop/ScrollToTop";

const Main2 = () => {
  return (
    <>
      <Navbar2 />
      <ScrollToTop />
      <div>
        <Outlet />
      </div>
      <Footer2 />
    </>
  );
};
export default Main2;
