import { Outlet } from "react-router-dom";
import Footer4 from "../Shared/Footer/Footer4";
import Navbar4 from "../Shared/Navbar/Navbar4";
import ScrollToTop from "../Shared/ScrollToTop/ScrollToTop";

const Main4 = () => {
  return (
    <>
      <Navbar4 />
      <ScrollToTop />
      <div>
        <Outlet />
      </div>
      <Footer4 />
    </>
  );
};
export default Main4;
