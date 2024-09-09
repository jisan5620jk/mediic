import { Link } from "react-router-dom";
import footerLogo from "/images/logo.png";
import { FaAnglesRight, FaPhone } from "react-icons/fa6";
import { MdLocationPin } from "react-icons/md";
import { HiOutlineMailOpen } from "react-icons/hi";

const Footer = () => {
  return (
    <footer className="bg-BodyBg2-0 relative z-10 pt-28 overflow-hidden">
      <div className="Container">
        <div className="grid gap-y-7 grid-cols-12">
          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <Link to={"/"}>
              <img src={footerLogo} draggable={false} />
            </Link>
            <p className="font-FiraSans text-[15px] text-TextColor-0 opacity-80 mt-7 mb-6">
              Continually plagiarize virtual web service{" "}
              <br className="hidden lg:block xl:hidden" /> pro{" "}
              <br className="hidden xl:block" /> with planning maximizing action
            </p>
            <form action="#" method="post" className="relative w-10/12">
              <label htmlFor="email" className="relative">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter Your E-Mail*"
                  required
                  className="w-full h-[56px] outline-none font-FiraSans border-b border-BorderColor2-0 bg-transparent py-4 text-white placeholder:text-white mb-4"
                />
              </label>
              <div className="absolute top-3 right-0">
                <button
                  type="submit"
                  className="rounded-full border border-PrimaryColor-0 bg-PrimaryColor-0 gap-2 px-6 py-[6px] text-sm text-white font-FiraSans flex items-center justify-center relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:rounded before:bg-HeadingColor-0 before:-z-10 before:scale-0 before:transition-all before:duration-500 hover:before:scale-100"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-2">
            <h4 className="font-FiraSans text-[22px] text-white font-medium mb-[33px]">
              Company
            </h4>
            <ul className="overflow-hidden">
              <li>
                <Link to={"/"} className="inline-block">
                  <button className="flex items-center gap-2 font-FiraSans -ml-5 hover:ml-0 text-[15px] text-TextColor-0 transition-all duration-500 hover:text-white hover:gap-1 mb-4">
                    <FaAnglesRight className="text-xs text-white" />
                    About Us
                  </button>
                </Link>
              </li>
              <li>
                <Link to={"/"} className="inline-block">
                  <button className="flex items-center gap-2 font-FiraSans -ml-5 hover:ml-0 text-[15px] text-TextColor-0 transition-all duration-500 hover:text-white hover:gap-1 mb-4">
                    <FaAnglesRight className="text-xs text-white" />
                    Our Team
                  </button>
                </Link>
              </li>
              <li>
                <Link to={"/"} className="inline-block">
                  <button className="flex items-center gap-2 font-FiraSans -ml-5 hover:ml-0 text-[15px] text-TextColor-0 transition-all duration-500 hover:text-white hover:gap-1 mb-4">
                    <FaAnglesRight className="text-xs text-white" />
                    Pricing Plan
                  </button>
                </Link>
              </li>
              <li>
                <Link to={"/"} className="inline-block">
                  <button className="flex items-center gap-2 font-FiraSans -ml-5 hover:ml-0 text-[15px] text-TextColor-0 transition-all duration-500 hover:text-white hover:gap-1 mb-4">
                    <FaAnglesRight className="text-xs text-white" />
                    Latest Blog
                  </button>
                </Link>
              </li>
              <li>
                <Link to={"/"} className="inline-block">
                  <button className="flex items-center gap-2 font-FiraSans -ml-5 hover:ml-0 text-[15px] text-TextColor-0 transition-all duration-500 hover:text-white hover:gap-1">
                    <FaAnglesRight className="text-xs text-white" />
                    Careers
                  </button>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-3">
            <h4 className="font-FiraSans text-[22px] text-white font-medium mb-[33px]">
              Services
            </h4>
            <ul className="overflow-hidden">
              <li>
                <Link to={"/"} className="inline-block">
                  <button className="flex items-center gap-2 font-FiraSans -ml-5 hover:ml-0 text-[15px] text-TextColor-0 transition-all duration-500 hover:text-white hover:gap-1 mb-4">
                    <FaAnglesRight className="text-xs text-white" />
                    IT Solutions
                  </button>
                </Link>
              </li>
              <li>
                <Link to={"/"} className="inline-block">
                  <button className="flex items-center gap-2 font-FiraSans -ml-5 hover:ml-0 text-[15px] text-TextColor-0 transition-all duration-500 hover:text-white hover:gap-1 mb-4">
                    <FaAnglesRight className="text-xs text-white" />
                    Cyber Security
                  </button>
                </Link>
              </li>
              <li>
                <Link to={"/"} className="inline-block">
                  <button className="flex items-center gap-2 font-FiraSans -ml-5 hover:ml-0 text-[15px] text-TextColor-0 transition-all duration-500 hover:text-white hover:gap-1 mb-4">
                    <FaAnglesRight className="text-xs text-white" />
                    Digital Marketing
                  </button>
                </Link>
              </li>
              <li>
                <Link to={"/"} className="inline-block">
                  <button className="flex items-center gap-2 font-FiraSans -ml-5 hover:ml-0 text-[15px] text-TextColor-0 transition-all duration-500 hover:text-white hover:gap-1 mb-4">
                    <FaAnglesRight className="text-xs text-white" />
                    Brand Identity
                  </button>
                </Link>
              </li>
              <li>
                <Link to={"/"} className="inline-block">
                  <button className="flex items-center gap-2 font-FiraSans -ml-5 hover:ml-0 text-[15px] text-TextColor-0 transition-all duration-500 hover:text-white hover:gap-1">
                    <FaAnglesRight className="text-xs text-white" />
                    SEO Marketing
                  </button>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-3">
            <h4 className="font-FiraSans text-[22px] text-white font-medium mb-[33px]">
              Contact
            </h4>
            <div className="flex gap-3 pt-1 border-b border-dashed border-BorderColor2-0 pb-3">
              <div className="size-[26px] rounded-full bg-PrimaryColor-0 text-white flex items-center justify-center">
                <MdLocationPin />
              </div>
              <div className="flex-1 -mt-1">
                <h6 className="font-FiraSans text-[15px] text-white">
                  Our address:
                </h6>
                <p className="font-FiraSans text-[15px] text-TextColor-0">
                  Old Westbury 256, New York 11201,{" "}
                  <br className="hidden 2xl:block" /> United States
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 pb-3 pt-5">
              <div className="size-[26px] rounded-full bg-PrimaryColor-0 text-white flex items-center justify-center">
                <FaPhone size={"12"} />
              </div>
              <Link to={"/"} className="flex-1">
                <button className="font-FiraSans text-[15px] text-white">
                  +880 123 (4567) 890
                </button>
              </Link>
            </div>
            <div className="flex items-center gap-3 pt-1">
              <div className="size-[26px] rounded-full bg-PrimaryColor-0 text-white flex items-center justify-center">
                <HiOutlineMailOpen size={"15"} />
              </div>
              <Link to={"/"} className="flex-1">
                <button className="font-FiraSans text-[15px] text-white">
                  example@gmail.com
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-y-7 md: md:col-span-6 justify-between md:items-center py-8 mt-[108px] border-t border-BorderColor2-0">
          <div>
            <p className="font-FiraSans text-[15px] flex items-center text-white">
              Copyright &copy; 2024 Consalt. Designed & Developed by Dream-IT
            </p>
          </div>
          <div>
            <ul className="flex gap-3 sm:gap-6">
              <li>
                <button className="font-FiraSans text-[15px] flex items-center transition-all duration text-TextColor-0 hover:text-white uppercase">
                  Facebook
                </button>
              </li>
              <li>
                <button className="font-FiraSans text-[15px] flex items-center transition-all duration text-TextColor-0 hover:text-white uppercase">
                  Pinterest
                </button>
              </li>
              <li>
                <button className="font-FiraSans text-[15px] flex items-center transition-all duration text-TextColor-0 hover:text-white uppercase">
                  LinkedIn
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
