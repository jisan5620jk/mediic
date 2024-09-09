/* eslint-disable no-unused-vars */
import { Link, NavLink } from "react-router-dom";
import {
  FaBars,
  FaFacebookF,
  FaLinkedinIn,
  FaPinterestP,
  FaXTwitter,
} from "react-icons/fa6";
import { BiChevronDown } from "react-icons/bi";
import Logo from "/images/logo-2.png";
import { useState, useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { HiOutlineMailOpen } from "react-icons/hi";
import { CiLocationOn } from "react-icons/ci";
import { GrAlarm } from "react-icons/gr";

const Navbar3 = () => {
  //sticky

  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });

  /* Method that will fix header after a specific scrollable */

  const isSticky = (e) => {
    const header = document.querySelector(".header-section");
    const scrollTop = window.scrollY;
    scrollTop >= 250
      ? header.classList.add("is-sticky")
      : header.classList.remove("is-sticky");
  };

  // modal openar

  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={`w-full transition-all duration-300 bg-transparent relative z-[99999]`}
    >
      <header
        className="header-section navbar2 bg-transparent absolute w-full z-10"
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        <div className="Container">
          {/* main Navbar */}
          <div className="flex flex-col lg:flex-row items-center justify-between lg:h-[100px] ">
            {/* website Logo */}
            <div className=" w-48 lg:w-52">
              <Link to="/">
                <img
                  draggable="false"
                  src={Logo}
                  className="hidden lg:block"
                  alt="website_logo"
                />
              </Link>
            </div>
            {/* small screen size */}
            <div className="w-full lg:hidden flex justify-between h-[70px] items-center p-3">
              <div className="w-28">
                <Link to="/">
                  <img
                    draggable="false"
                    src={Logo}
                    className="block lg:hidden "
                  />
                </Link>
              </div>
              {/* toggle bar mode. */}
              <button
                className="lg:hidden block focus:outline-none "
                onClick={toggleNavbar}
              >
                {/* modal open and close */}
                {isOpen ? (
                  <IoMdClose className="w-6 h-6 text-white" />
                ) : (
                  <FaBars className="w-5 h-5 text-white" />
                )}
              </button>
            </div>
            {/* All navLink are hear with active */}
            <div className="flex gap-8 items-center">
              <ul
                className={`${
                  isOpen ? "block" : "hidden"
                } text-right lg:w-fit ease-in-out flex-1 lg:flex space-y-2 lg:space-y-0 space-x-0 flex flex-col lg:flex-row capitalize text-sm lg:bg-transparent py-3 lg:py-0 font-FiraSans font-medium sm:text-base text-HeadingColor-0 transition-all duration-500
                `}
              >
                <NavLink
                  to="/"
                  className={`${({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "active"
                      : ""} text-white text-left hover:text-PrimaryColor-0 lg:border-b-0 px-3 lg:px-2 xl:px-5 w-full block transition-all duration-300 group relative`}
                >
                  <span className="flex items-center">
                    Home
                    <BiChevronDown className="ml-1" />
                  </span>
                  <div
                    className="absolute pt-5 lg:pt-8 z-[1]"
                    data-aos="zoom-in-left"
                    data-aos-duration="1000"
                  >
                    <ul className="shadow-lg hidden group-hover:block rounded-sm text-white w-[220px] text-left transition-all duration-500 text-sm sm:text-base py-4 bg-PrimaryColor-0 ">
                      <div className="px-5 group hover:bg-HeadingColor-0 ">
                        <li className="hover:ml-3 duration-300">
                          <Link to="/" className="py-2 block">
                            Home One
                          </Link>
                        </li>
                      </div>
                      <div className="px-5 group hover:bg-HeadingColor-0 ">
                        <li className="hover:ml-3 duration-300">
                          <Link to="/home2" className="py-2 block">
                            Home Two
                          </Link>
                        </li>
                      </div>
                      <div className="px-5 group hover:bg-HeadingColor-0 ">
                        <li className="hover:ml-3 duration-300">
                          <Link to="/home3" className="py-2 block">
                            Home Three
                          </Link>
                        </li>
                      </div>
                      <div className="px-5 group hover:bg-HeadingColor-0 ">
                        <li className="hover:ml-3 duration-300">
                          <Link to="/home4" className="py-2 block">
                            Home Four
                          </Link>
                        </li>
                      </div>
                      <div className="px-5 group hover:bg-HeadingColor-0 ">
                        <li className="hover:ml-3 duration-300">
                          <Link to="/home5" className="py-2 block">
                            Home Five
                          </Link>
                        </li>
                      </div>
                    </ul>
                  </div>
                </NavLink>
                <NavLink
                  className={`${({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "active"
                      : ""} text-white text-left hover:text-PrimaryColor-0 lg:border-b-0 px-3 lg:px-2 xl:px-5 w-full block transition-all duration-300 group relative `}
                  to="#"
                >
                  <span className="flex items-center">
                    About
                    <BiChevronDown className="ml-1" />
                  </span>
                  <div className="absolute pt-5 lg:pt-8 z-20">
                    <ul className="shadow-lg hidden group-hover:block rounded-sm text-white w-[220px] text-left transition-all duration-500 text-sm sm:text-base py-4 bg-HeadingColor-0">
                      <div className="px-5 group hover:bg-PrimaryColor-0 ">
                        <li className="hover:ml-3 duration-300">
                          <Link to="/about" className="py-2 block">
                            About us 01
                          </Link>
                        </li>
                      </div>
                      <div className="px-5 group hover:bg-PrimaryColor-0 ">
                        <li className="hover:ml-3 duration-300">
                          <Link to="/about2" className="py-2 block">
                            About Us 02
                          </Link>
                        </li>
                      </div>
                    </ul>
                  </div>
                </NavLink>
                <NavLink
                  className={`${({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "active"
                      : ""} text-white text-left hover:text-PrimaryColor-0 lg:border-b-0 px-3 lg:px-2 xl:px-5 w-full block transition-all duration-300 group relative `}
                  to="#"
                >
                  <span className="flex items-center">
                    Service
                    <BiChevronDown className="ml-1" />
                  </span>
                  <div className="absolute pt-5 lg:pt-8 z-20">
                    <ul className="shadow-lg hidden group-hover:block rounded-sm text-white w-[220px] text-left transition-all duration-500 text-sm sm:text-base py-4 bg-HeadingColor-0">
                      <div className="px-5 group hover:bg-PrimaryColor-0 ">
                        <li className="hover:ml-3 duration-300">
                          <Link to="/service" className="py-2 block">
                            Service
                          </Link>
                        </li>
                      </div>
                      <div className="px-5 group hover:bg-PrimaryColor-0 ">
                        <li className="hover:ml-3 duration-300">
                          <Link to="/service_details" className="py-2 block">
                            Service Details
                          </Link>
                        </li>
                      </div>
                    </ul>
                  </div>
                </NavLink>
                <NavLink
                  className={`${({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "active"
                      : ""} text-white text-left hover:text-PrimaryColor-0 lg:border-b-0 px-3 lg:px-2 xl:px-5 w-full block transition-all duration-300 group relative `}
                  to="#"
                >
                  <span className="flex items-center">
                    Pages
                    <BiChevronDown className="ml-1" />
                  </span>
                  <div className="absolute pt-5 lg:pt-8 z-20">
                    <ul className="shadow-lg hidden group-hover:block rounded-sm text-white w-[220px] text-left transition-all duration-500 text-sm sm:text-base py-4 bg-HeadingColor-0 ">
                      <div className="px-5 group hover:bg-PrimaryColor-0">
                        <li className="hover:ml-3 duration-300">
                          <Link to="/about" className="py-2 block">
                            About Us
                          </Link>
                        </li>
                      </div>
                      <div className="px-5 group hover:bg-PrimaryColor-0">
                        <li className="hover:ml-3 duration-300">
                          <Link to="/service" className="py-2 block">
                            Service
                          </Link>
                        </li>
                      </div>
                      <div className="px-5 group hover:bg-PrimaryColor-0">
                        <li className="hover:ml-3 duration-300">
                          <Link to="/service_details" className="py-2 block">
                            Service Details
                          </Link>
                        </li>
                      </div>
                      <div className="px-5 group hover:bg-PrimaryColor-0">
                        <li className="hover:ml-3 duration-300">
                          <Link to="/mission_inner" className="py-2 block">
                            Our Mission
                          </Link>
                        </li>
                      </div>
                      <div className="px-5 group hover:bg-PrimaryColor-0">
                        <li className="hover:ml-3 duration-300">
                          <Link to="/why_choose" className="py-2 block">
                            Why Choose Us
                          </Link>
                        </li>
                      </div>
                      <div className="px-5 group hover:bg-PrimaryColor-0">
                        <li className="hover:ml-3 duration-300">
                          <Link to="/team_inner" className="py-2 block">
                            Team Member
                          </Link>
                        </li>
                      </div>
                      <div className="px-5 group hover:bg-PrimaryColor-0">
                        <li className="hover:ml-3 duration-300">
                          <Link to="/team_details" className="py-2 block">
                            Team Details
                          </Link>
                        </li>
                      </div>
                      <div className="px-5 group hover:bg-PrimaryColor-0">
                        <li className="hover:ml-3 duration-300">
                          <Link to="/project" className="py-2 block">
                            Projects
                          </Link>
                        </li>
                      </div>
                      <div className="px-5 group hover:bg-PrimaryColor-0">
                        <li className="hover:ml-3 duration-300">
                          <Link to="/project_details" className="py-2 block">
                            Project Details
                          </Link>
                        </li>
                      </div>
                      <div className="px-5 group hover:bg-PrimaryColor-0">
                        <li className="hover:ml-3 duration-300">
                          <Link to="/pricing_inner" className="py-2 block">
                            Pricing Plan
                          </Link>
                        </li>
                      </div>
                      <div className="px-5 group hover:bg-PrimaryColor-0">
                        <li className="hover:ml-3 duration-300">
                          <Link to="/testimonial" className="py-2 block">
                            Testimonial
                          </Link>
                        </li>
                      </div>
                      <div className="px-5 group hover:bg-PrimaryColor-0">
                        <li className="hover:ml-3 duration-300">
                          <Link to="/appointment" className="py-2 block">
                            Appointment
                          </Link>
                        </li>
                      </div>
                      <div className="px-5 group hover:bg-PrimaryColor-0">
                        <li className="hover:ml-3 duration-300">
                          <Link to="/faq_inner" className="py-2 block">
                            Faq
                          </Link>
                        </li>
                      </div>
                      <div className="px-5 group hover:bg-PrimaryColor-0">
                        <li className="hover:ml-3 duration-300">
                          <Link to="/location" className="py-2 block">
                            Our Location
                          </Link>
                        </li>
                      </div>
                    </ul>
                  </div>
                </NavLink>
                {/* blog sub menu link */}
                <NavLink
                  className={`${({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "active"
                      : ""} text-white text-left hover:text-PrimaryColor-0 lg:border-b-0 px-3 lg:px-2 xl:px-5 w-full block transition-all duration-300 group relative `}
                  to="#"
                >
                  <span className="flex items-center">
                    Blog
                    <BiChevronDown className="ml-1" />
                  </span>
                  <div className="absolute pt-5 lg:pt-8 z-20">
                    <ul className="shadow-lg hidden group-hover:block rounded-sm text-white w-[220px] text-left transition-all duration-500 text-sm sm:text-base py-4 bg-HeadingColor-0">
                      <div className="px-5 group hover:bg-PrimaryColor-0">
                        <li className="hover:ml-3 duration-300">
                          <Link to="/blog_grid" className="py-2 block">
                            Blog Grid
                          </Link>
                        </li>
                      </div>
                      <div className="px-5 group hover:bg-PrimaryColor-0">
                        <li className="hover:ml-3 duration-300">
                          <Link to="/blog_left_sidebar" className="py-2 block">
                            Blog Left Sidebar
                          </Link>
                        </li>
                      </div>
                      <div className="px-5 group hover:bg-PrimaryColor-0">
                        <li className="hover:ml-3 duration-300">
                          <Link to="/blog_right_sidebar" className="py-2 block">
                            Blog Right Sidebar
                          </Link>
                        </li>
                      </div>
                      <div className="px-5 group hover:bg-PrimaryColor-0">
                        <li className="hover:ml-3 duration-300">
                          <Link to="/blog_details" className="py-2 block">
                            Blog Details
                          </Link>
                        </li>
                      </div>
                    </ul>
                  </div>
                </NavLink>
                <NavLink
                  className={`${({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "active"
                      : ""} text-white text-left lg:border-b-0 px-3 lg:px-2 xl:px-5 w-full block transition-all duration-300`}
                  to="/contact"
                >
                  Contact
                </NavLink>
              </ul>
              <div className="hidden lg:flex items-center">
                <button>
                  <IoSearch className="text-xl ml-2 mr-10 text-white" />
                </button>
                <Link to={"/appointment"} className="header-btn">
                  Get A Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </nav>
  );
};

export default Navbar3;
