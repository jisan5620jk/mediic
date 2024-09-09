import { Link } from "react-router-dom";
import footerLogo from "/images/logo.png";
import footerImg from "/images/footer_1.png";
import footerImg2 from "/images/footer_2.png";
import {
  FaAnglesRight,
  FaCircle,
  FaInstagram,
  FaLinkedinIn,
  FaRegEnvelope,
  FaXTwitter,
} from "react-icons/fa6";
import { ImFacebook2 } from "react-icons/im";
import { IoIosSend } from "react-icons/io";

const Footer2 = () => {
  return (
    <footer className="bg-BodyBg2-0 relative z-10 overflow-hidden">
      <div className="bg-PrimaryColor-0 py-9 mb-[88px]">
        <div className="Container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7 lg:gap-0 lg:grid-cols-3 lg:items-center">
            <div className="flex items-center gap-5">
              <div className="size-[60px] bg-BorderColor2-0 rounded-full flex items-center justify-center text-white">
                <FaRegEnvelope size={"22"} />
              </div>
              <div>
                <h6 className="font-FiraSans text-[15px] text-white">
                  Say Hello
                </h6>
                <Link to={"/"}>
                  <button className="font-FiraSans text-xl text-white font-medium">
                    example@gmail.com
                  </button>
                </Link>
              </div>
            </div>
            <div className="flex lg:justify-center md:border-l lg:border-l-0 lg:border-x-2 border-BorderColor2-0 py-2">
              <Link to={"/"}>
                <img src={footerLogo} draggable="false" />
              </Link>
            </div>
            <div className="flex lg:justify-end">
              <ul className="flex gap-3 items-center">
                <li>
                  <Link
                    to={"/"}
                    className="size-[48px] flex justify-center items-center rounded-full bg-BorderColor2-0 transition-all duration-500 text-white hover:text-PrimaryColor-0 relative z-10 after:absolute after:rounded-full after:top-0 after:left-0 after:bg-white after:w-full after:h-full after:scale-0 after:-z-10 after:transition-all after:duration-500 hover:after:scale-100"
                  >
                    <ImFacebook2 size={"15"} />
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/"}
                    className="size-[48px] flex justify-center items-center rounded-full bg-BorderColor2-0 transition-all duration-500 text-white hover:text-PrimaryColor-0 relative z-10 after:absolute after:rounded-full after:top-0 after:left-0 after:bg-white after:w-full after:h-full after:scale-0 after:-z-10 after:transition-all after:duration-500 hover:after:scale-100"
                  >
                    <FaXTwitter />
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/"}
                    className="size-[48px] flex justify-center items-center rounded-full bg-BorderColor2-0 transition-all duration-500 text-white hover:text-PrimaryColor-0 relative z-10 after:absolute after:rounded-full after:top-0 after:left-0 after:bg-white after:w-full after:h-full after:scale-0 after:-z-10 after:transition-all after:duration-500 hover:after:scale-100"
                  >
                    <FaLinkedinIn />
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/"}
                    className="size-[48px] flex justify-center items-center rounded-full bg-BorderColor2-0 transition-all duration-500 text-white hover:text-PrimaryColor-0 relative z-10 after:absolute after:rounded-full after:top-0 after:left-0 after:bg-white after:w-full after:h-full after:scale-0 after:-z-10 after:transition-all after:duration-500 hover:after:scale-100"
                  >
                    <FaInstagram />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="Container">
        <div className="grid gap-y-7 grid-cols-12">
          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <h4 className="font-FiraSans text-[22px] text-white font-medium mb-[33px]">
              About Us
            </h4>
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
                  className="rounded-full border border-PrimaryColor-0 bg-PrimaryColor-0 size-9 text-white font-FiraSans flex items-center justify-center relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:rounded-full before:bg-HeadingColor-0 before:-z-10 before:scale-0 before:transition-all before:duration-500 hover:before:scale-100"
                >
                  <IoIosSend size={"20"} />
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
                  <button className="flex items-center justify-start gap-2 font-FiraSans -ml-5 hover:ml-0 text-[15px] text-TextColor-0 transition-all duration-500 hover:text-white hover:gap-1 mb-4">
                    <FaAnglesRight className="text-xs text-white" />
                    About Us
                  </button>
                </Link>
              </li>
              <li>
                <Link to={"/"} className="inline-block">
                  <button className="flex items-center justify-start gap-2 font-FiraSans -ml-5 hover:ml-0 text-[15px] text-TextColor-0 transition-all duration-500 hover:text-white hover:gap-1 mb-4">
                    <FaAnglesRight className="text-xs text-white" />
                    Our Team
                  </button>
                </Link>
              </li>
              <li>
                <Link to={"/"} className="inline-block">
                  <button className="flex items-center justify-start gap-2 font-FiraSans -ml-5 hover:ml-0 text-[15px] text-TextColor-0 transition-all duration-500 hover:text-white hover:gap-1 mb-4">
                    <FaAnglesRight className="text-xs text-white" />
                    Pricing Plan
                  </button>
                </Link>
              </li>
              <li className="block">
                <Link to={"/"}>
                  <button className="flex items-center justify-start gap-2 font-FiraSans -ml-5 hover:ml-0 text-[15px] text-TextColor-0 transition-all duration-500 hover:text-white hover:gap-1 mb-4">
                    <FaAnglesRight className="text-xs text-white" />
                    Latest Blog
                  </button>
                </Link>
              </li>
              <li className="block">
                <Link to={"/"}>
                  <button className="flex items-center justify-start gap-2 font-FiraSans -ml-5 hover:ml-0 text-[15px] text-TextColor-0 transition-all duration-500 hover:text-white hover:gap-1">
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
                  <button className="flex items-center justify-start gap-2 font-FiraSans -ml-5 hover:ml-0 text-[15px] text-TextColor-0 transition-all duration-500 hover:text-white hover:gap-1 mb-4">
                    <FaAnglesRight className="text-xs text-white" />
                    IT Solutions
                  </button>
                </Link>
              </li>
              <li>
                <Link to={"/"} className="inline-block">
                  <button className="flex items-center justify-start gap-2 font-FiraSans -ml-5 hover:ml-0 text-[15px] text-TextColor-0 transition-all duration-500 hover:text-white hover:gap-1 mb-4">
                    <FaAnglesRight className="text-xs text-white" />
                    Cyber Security
                  </button>
                </Link>
              </li>
              <li>
                <Link to={"/"} className="inline-block">
                  <button className="flex items-center justify-start gap-2 font-FiraSans -ml-5 hover:ml-0 text-[15px] text-TextColor-0 transition-all duration-500 hover:text-white hover:gap-1 mb-4">
                    <FaAnglesRight className="text-xs text-white" />
                    Digital Marketing
                  </button>
                </Link>
              </li>
              <li>
                <Link to={"/"} className="inline-block">
                  <button className="flex items-center justify-start gap-2 font-FiraSans -ml-5 hover:ml-0 text-[15px] text-TextColor-0 transition-all duration-500 hover:text-white hover:gap-1 mb-4">
                    <FaAnglesRight className="text-xs text-white" />
                    Brand Identity
                  </button>
                </Link>
              </li>
              <li>
                <Link to={"/"} className="inline-block">
                  <button className="flex items-center justify-start gap-2 font-FiraSans -ml-5 hover:ml-0 text-[15px] text-TextColor-0 transition-all duration-500 hover:text-white hover:gap-1">
                    <FaAnglesRight className="text-xs text-white" />
                    SEO Marketing
                  </button>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-3">
            <h4 className="font-FiraSans text-[22px] text-white font-medium mb-[33px]">
              Latest Blog
            </h4>
            <div className="flex gap-5 lg:gap-3 xl:gap-5 pt-1 mb-6">
              <Link to={"/"} className="">
                <img src={footerImg} draggable="false" />
              </Link>
              <div className="flex-1 -mt-1">
                <Link to={"/"}>
                  <button className="font-FiraSans text-left lg:text-sm xl:text-base text-white transition-all duration-500 hover:text-PrimaryColor-0">
                    Sustainable Consulting for Business Planning
                  </button>
                </Link>
                <p className="font-FiraSans text-sm text-TextColor-0 flex items-center gap-2 mt-2">
                  <FaCircle size={"8"} className="text-PrimaryColor-0" />
                  Nov 12, 2024
                </p>
              </div>
            </div>
            <div className="flex gap-5 lg:gap-3 xl:gap-5 pt-1">
              <Link to={"/"} className="">
                <img src={footerImg2} draggable="false" />
              </Link>
              <div className="flex-1 -mt-1">
                <Link to={"/"}>
                  <button className="font-FiraSans text-left lg:text-sm xl:text-base text-white transition-all duration-500 hover:text-PrimaryColor-0">
                    Globally Services for IT Solution Planning
                  </button>
                </Link>
                <p className="font-FiraSans text-sm text-TextColor-0 flex items-center gap-2 mt-2">
                  <FaCircle size={"8"} className="text-PrimaryColor-0" />
                  Nov 24, 2024
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-y-7 md: md:col-span-6 justify-between md:items-center py-8 mt-[94px] border-t border-BorderColor2-0">
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

export default Footer2;
