import { Link } from "react-router-dom";
import footerLogo from "/images/logo.png";
import footerShape3 from "/images/footer-shape.png";
import footerLine from "/images/footer-line.png";
import footerImg from "/images/blog-thumb2.jpg";
import footerImg2 from "/images/blog-thumb3.jpg";
import {
  FaChevronRight,
  FaFacebookF,
  FaLinkedinIn,
  FaPinterestP,
  FaXTwitter,
} from "react-icons/fa6";

const Footer3 = () => {
  return (
    <footer className="bg-[url('/images/footer4-bg.jpg')] bg-no-repeat bg-center bg-cover relative z-10 pt-28 overflow-hidden">
      <img
        src={footerLine}
        draggable="false"
        className="absolute -z-10 right-0 -bottom-20 opacity-70"
      />
      <img
        src={footerShape3}
        draggable="false"
        className="absolute -z-10 top-0 left-0 animate-dance2"
      />
      <div className="Container">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
          <div>
            <Link to={"/"}>
              <img src={footerLogo} draggable={false} />
            </Link>
            <p className="font-FiraSans text-white opacity-60 mt-10 mb-9">
              Sometimes goods can arrive early when creative designneed place to
              stored for desig space your needs.
            </p>
            <ul className="flex gap-3">
              <li>
                <button className="size-9 rounded-full bg-[#0b2f21] flex items-center justify-center text-white overflow-hidden transition-all duration-500 relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-10 before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100">
                  <FaFacebookF />
                </button>
              </li>
              <li>
                <button className="size-9 rounded-full bg-[#0b2f21] flex items-center justify-center text-white overflow-hidden transition-all duration-500 relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-10 before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100">
                  <FaXTwitter />
                </button>
              </li>
              <li>
                <button className="size-9 rounded-full bg-[#0b2f21] flex items-center justify-center text-white overflow-hidden transition-all duration-500 relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-10 before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100">
                  <FaLinkedinIn />
                </button>
              </li>
              <li>
                <button className="size-9 rounded-full bg-[#0b2f21] flex items-center justify-center text-white overflow-hidden transition-all duration-500 relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-10 before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100">
                  <FaPinterestP />
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-FiraSans text-2xl text-white font-semibold mb-[30px]">
              Company
            </h4>
            <p className="font-FiraSans text-white opacity-60 mb-6">
              4175 Anderson Road, Carlsbad Springs, Ontario
            </p>
            <h6 className="font-FiraSans flex items-center">
              <span className="text-white opacity-60">Phone</span>
              <span className="px-5 text-white opacity-60">:</span>
              <Link
                to={"/"}
                className=" text-white opacity-60 transition-all duration-500 hover:opacity-100"
              >
                613-822-9644
              </Link>
            </h6>
            <h6 className="font-FiraSans flex items-center my-4">
              <span className="text-white opacity-60">E-Mail</span>
              <span className="px-5 text-white opacity-60">:</span>
              <Link
                to={"/"}
                className=" text-white opacity-60 transition-all duration-500 hover:opacity-100"
              >
                info@example.com
              </Link>
            </h6>
            <h6 className="font-FiraSans flex items-center">
              <span className="text-white opacity-60">
                Mon - Sat: 09.00 to 06.30
              </span>
            </h6>
          </div>
          <div>
            <h4 className="font-FiraSans text-2xl text-white font-semibold mb-[30px]">
              Useful Links
            </h4>
            <div className="grid grid-cols-2 justify-start text-left">
              <ul>
                <li>
                  <Link to={"/"}>
                    <button className="flex items-center gap-2 font-FiraSans text-white transition-all duration-500 hover:gap-1 mb-[26px] opacity-60 hover:!opacity-100">
                      <FaChevronRight className="text-xs opacity-60 " />
                      About Us
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to={"/"}>
                    <button className="flex items-center gap-2 font-FiraSans text-white transition-all duration-500 hover:gap-1 mb-[26px] opacity-60 hover:!opacity-100">
                      <FaChevronRight className="text-xs opacity-60 " />
                      Projects
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to={"/"}>
                    <button className="flex items-center gap-2 font-FiraSans text-white transition-all duration-500 hover:gap-1 mb-[26px] opacity-60 hover:!opacity-100">
                      <FaChevronRight className="text-xs opacity-60 " />
                      Energy
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to={"/"}>
                    <button className="flex items-center gap-2 font-FiraSans text-white transition-all duration-500 hover:gap-1 mb-[26px] opacity-60 hover:!opacity-100">
                      <FaChevronRight className="text-xs opacity-60 " />
                      Controllers
                    </button>
                  </Link>
                </li>
              </ul>
              <ul>
                <li>
                  <Link to={"/"}>
                    <button className="flex items-center gap-2 font-FiraSans text-white transition-all duration-500 hover:gap-1 mb-[26px] opacity-60 hover:!opacity-100">
                      <FaChevronRight className="text-xs opacity-60 " />
                      Services
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to={"/"}>
                    <button className="flex items-center gap-2 font-FiraSans text-white transition-all duration-500 hover:gap-1 mb-[26px] opacity-60 hover:!opacity-100">
                      <FaChevronRight className="text-xs opacity-60 " />
                      Ressources
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to={"/"}>
                    <button className="flex items-center gap-2 font-FiraSans text-white transition-all duration-500 hover:gap-1 mb-[26px] opacity-60 hover:!opacity-100">
                      <FaChevronRight className="text-xs opacity-60 " />
                      Plants
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to={"/"}>
                    <button className="flex items-center gap-2 font-FiraSans text-white transition-all duration-500 hover:gap-1 mb-[26px] opacity-60 hover:!opacity-100">
                      <FaChevronRight className="text-xs opacity-60 " />
                      Solar Plants
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h4 className="font-FiraSans text-2xl text-white font-semibold mb-8">
              Recent News
            </h4>
            <Link to={"/"} className="flex items-center gap-[18px] group">
              <div>
                <img src={footerImg} className="w-[80px] h-[80px] rounded" />
              </div>
              <div className="flex-1">
                <h6 className="font-FiraSans text-sm sm:text-base lg:text-sm text-white opacity-60 transition-all duration-500 group-hover:opacity-100">
                  How to add battery backup...
                </h6>
                <p className="font-FiraSans text-sm text-PrimaryColor-0 mt-1">
                  Date: Nov 16, 2024
                </p>
              </div>
            </Link>
            <Link to={"/"} className="flex items-center gap-[18px] group mt-5">
              <div>
                <img src={footerImg2} className="w-[80px] h-[80px] rounded" />
              </div>
              <div className="flex-1">
                <h6 className="font-FiraSans text-sm sm:text-base lg:text-sm text-white opacity-60 transition-all duration-500 group-hover:opacity-100">
                  How to clean forest properly...
                </h6>
                <p className="font-FiraSans text-sm text-PrimaryColor-0 mt-1">
                  Date: Nov 16, 2024
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="text-left py-6 bg-[#78b9003b] mt-24">
        <div className="Container flex flex-col gap-5 md:flex-row md:gap-0 justify-between">
          <p className="font-FiraSans text-white opacity-60">
            Echofy © 2024 All rights reserved.
          </p>
          <div>
            <ul className="flex gap-7">
              <li>
                <Link to={"/"}>
                  <button className="font-FiraSans text-white opacity-60 transition-all duration-500 hover:opacity-100">
                    Privacy & Terms
                  </button>
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <button className="font-FiraSans text-white opacity-60 transition-all duration-500 hover:opacity-100">
                    FAQ
                  </button>
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <button className="font-FiraSans text-white opacity-60 transition-all duration-500 hover:opacity-100">
                    Contact Us
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer3;
