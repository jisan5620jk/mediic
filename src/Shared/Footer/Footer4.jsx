import { Link } from "react-router-dom";
import footerLogo from "/images/logo-2.png";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaPhoneVolume,
  FaPinterestP,
  FaXTwitter,
} from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";

const Footer4 = () => {
  return (
    <footer className="bg-HeadingColor-0 relative z-10 overflow-hidden">
      <div className="Container">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-8 border-b border-BorderColor-0 py-[105px]">
          <div>
            <Link to={"/"}>
              <img src={footerLogo} draggable={false} />
            </Link>
          </div>
          <ul className="flex gap-3">
            <li>
              <button className="size-9 rounded-full bg-[#051b71] flex items-center justify-center text-white overflow-hidden transition-all duration-500 relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-10 before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100">
                <FaFacebookF />
              </button>
            </li>
            <li>
              <button className="size-9 rounded-full bg-[#051b71] flex items-center justify-center text-white overflow-hidden transition-all duration-500 relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-10 before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100">
                <FaXTwitter />
              </button>
            </li>
            <li>
              <button className="size-9 rounded-full bg-[#051b71] flex items-center justify-center text-white overflow-hidden transition-all duration-500 relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-10 before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100">
                <FaLinkedinIn />
              </button>
            </li>
            <li>
              <button className="size-9 rounded-full bg-[#051b71] flex items-center justify-center text-white overflow-hidden transition-all duration-500 relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-10 before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100">
                <FaPinterestP />
              </button>
            </li>
          </ul>
        </div>
        <div className="grid grid-cols-12 gap-5 lg:gap-0 mt-24">
          <div className="col-span-12 md:col-span-6 lg:col-span-2">
            <h4 className="font-FiraSans text-2xl text-white font-semibold mb-[38px]">
              Company
            </h4>
            <ul>
              <li>
                <Link to={"/"}>
                  <button className="flex items-center gap-2 font-FiraSans text-TextColor-0 transition-all duration-500 relative before:absolute before:bottom-0 before:right-0 before:w-0 before:h-[1px] before:bg-PrimaryColor-0 before:transition-all before:duration-500 hover:before:w-full hover:before:left-0 hover:text-PrimaryColor-0 mb-[18px]">
                    Help Center
                  </button>
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <button className="flex items-center gap-2 font-FiraSans text-TextColor-0 transition-all duration-500 relative before:absolute before:bottom-0 before:right-0 before:w-0 before:h-[1px] before:bg-PrimaryColor-0 before:transition-all before:duration-500 hover:before:w-full hover:before:left-0 hover:text-PrimaryColor-0 mb-[18px]">
                    Terms & Conditions
                  </button>
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <button className="flex items-center gap-2 font-FiraSans text-TextColor-0 transition-all duration-500 relative before:absolute before:bottom-0 before:right-0 before:w-0 before:h-[1px] before:bg-PrimaryColor-0 before:transition-all before:duration-500 hover:before:w-full hover:before:left-0 hover:text-PrimaryColor-0 mb-[18px]">
                    Privacy Policy
                  </button>
                </Link>
              </li>{" "}
              <li>
                <Link to={"/"}>
                  <button className="flex items-center gap-2 font-FiraSans text-TextColor-0 transition-all duration-500 relative before:absolute before:bottom-0 before:right-0 before:w-0 before:h-[1px] before:bg-PrimaryColor-0 before:transition-all before:duration-500 hover:before:w-full hover:before:left-0 hover:text-PrimaryColor-0 mb-[18px]">
                    Contact Us
                  </button>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-3">
            <h4 className="font-FiraSans text-2xl text-white font-semibold mb-[38px]">
              Get In Touch
            </h4>
            <div className="flex items-center gap-3">
              <div>
                <FaPhoneVolume className="text-xl text-white" />
              </div>
              <p className="font-FiraSans text-TextColor-0">
                +258 (549) 2158 3215
              </p>
            </div>
            <div className="flex items-center gap-3 my-7">
              <div>
                <HiOutlineMail className="text-2xl text-white" />
              </div>
              <p className="font-FiraSans text-TextColor-0">
                support@example.com
              </p>
            </div>
            <p className="font-FiraSans text-TextColor-0">
              2589 Dorland Street Luke INUA Berlin, Germany
            </p>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-3">
            <h4 className="font-FiraSans text-2xl text-white font-semibold mb-11">
              Working Time
            </h4>
            <p className="font-FiraSans text-TextColor-0">
              Mon - Fri: 9:00 AM - 5:00 PM
            </p>
            <p className="font-FiraSans text-TextColor-0 my-7">
              Saturday: 10:00 AM - 6:00 PM
            </p>
            <p className="font-FiraSans text-TextColor-0">
              Sunday & Friday Closed
            </p>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-4 xl:mr-10 2xl:mr-16">
            <h4 className="font-FiraSans text-2xl text-white font-semibold pb-5">
              Newsletter
            </h4>
            <p className="font-FiraSans text-white opacity-70 mt-10 mb-9">
              I’m okay with getting emails and having that tracked to improve my
              experience
            </p>
            <form action="#" method="post" className="relative">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter Your E-Mail*"
                required
                className="w-full h-[58px] font-FiraSans rounded-full bg-[#031b75] px-6 py-2 text-white placeholder:text-white placeholder:opacity-50 mb-4"
              />
              <button
                type="submit"
                className="absolute right-0 top-0 h-[58px] rounded-full border border-PrimaryColor-0 uppercase bg-PrimaryColor-0 gap-2 px-8 py-2 text-white font-FiraSans flex items-center justify-cente"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="text-left py-6 bg-[#0d0d53] mt-24">
        <div className="Container flex flex-col gap-5 md:flex-row md:gap-0 justify-between">
          <p className="font-FiraSans text-white">
            TopTech © Copyright 2024 All Rights Reserved.
          </p>
          <div>
            <ul className="flex gap-7">
              <li>
                <Link to={"/"}>
                  <button className="font-FiraSans text-white transition-all duration-500 hover:opacity-100">
                    Privacy & Terms.
                  </button>
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <button className="font-FiraSans text-white transition-all duration-500 hover:opacity-100">
                    FAQ
                  </button>
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <button className="font-FiraSans text-white transition-all duration-500 hover:opacity-100">
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

export default Footer4;
