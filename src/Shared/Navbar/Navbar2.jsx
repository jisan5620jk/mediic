/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import Logo from "/images/logo.png";
import homeOne from "/images/home-one.jpg";
import homeTwo from "/images/home-three.jpg";
import homeThree from "/images/home-two.jpg";
import "./navbar.css";
import { useEffect, useState, useRef } from "react";
import {
  FaChevronDown,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
  FaXTwitter,
} from "react-icons/fa6";
import { FaPhoneAlt, FaTimes } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import { IoMdPaperPlane } from "react-icons/io";
import { LuMoveRight } from "react-icons/lu";
import { ImFacebook2 } from "react-icons/im";
import { BiSearch } from "react-icons/bi";

const Navbar2 = () => {
  //Menu Sidebar

  const menuSideBarRef = useRef(null);
  const sidebarContentRef = useRef(null);
  const bodyOverlay2Ref = useRef(null);
  const closeBtn2Ref = useRef(null);

  useEffect(() => {
    const menuSideBar = menuSideBarRef.current;
    const sidebarContent = sidebarContentRef.current;
    const bodyOverlay2 = bodyOverlay2Ref.current;
    const closeBtn2 = closeBtn2Ref.current;

    const addClasses = () => {
      sidebarContent.classList.add("opened");
      bodyOverlay2.classList.add("apply");
    };

    const removeClasses = () => {
      sidebarContent.classList.remove("opened");
      bodyOverlay2.classList.remove("apply");
    };

    if (menuSideBar && sidebarContent && bodyOverlay2 && closeBtn2) {
      menuSideBar.addEventListener("click", addClasses);
      closeBtn2.addEventListener("click", removeClasses);
      bodyOverlay2.addEventListener("click", removeClasses);
    }

    return () => {
      if (menuSideBar && sidebarContent && bodyOverlay2 && closeBtn2) {
        menuSideBar.removeEventListener("click", addClasses);
        closeBtn2.removeEventListener("click", removeClasses);
        bodyOverlay2.removeEventListener("click", removeClasses);
      }
    };
  }, []);

  const menuBarRef = useRef(null);
  const offcanvasRef = useRef(null);
  const bodyOverlayRef = useRef(null);
  const closeBtnRef = useRef(null);

  useEffect(() => {
    const menuBar = menuBarRef.current;
    const offcanvas = offcanvasRef.current;
    const bodyOverlay = bodyOverlayRef.current;
    const closeBtn = closeBtnRef.current;

    const addClasses = () => {
      offcanvas.classList.add("opened");
      bodyOverlay.classList.add("apply");
    };

    const removeClasses = () => {
      offcanvas.classList.remove("opened");
      bodyOverlay.classList.remove("apply");
    };

    if (menuBar && offcanvas && bodyOverlay && closeBtn) {
      menuBar.addEventListener("click", addClasses);
      closeBtn.addEventListener("click", removeClasses);
      bodyOverlay.addEventListener("click", removeClasses);
    }

    return () => {
      if (menuBar && offcanvas && bodyOverlay && closeBtn) {
        menuBar.removeEventListener("click", addClasses);
        closeBtn.removeEventListener("click", removeClasses);
        bodyOverlay.removeEventListener("click", removeClasses);
      }
    };
  }, []);

  let headerIcon = `  
  <span class="header-icon">  
    <svg fill="currentColor" viewBox="0 0 320 512" height="15px" width="15px" xmlns="http://www.w3.org/2000/svg">
      <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"></path>
    </svg>
  </span>  
`;

  useEffect(() => {
    const mainMenuContent = document.querySelector(".main-menu-content");
    const mainMenuMobile = document.querySelector(".main-menu-mobile");

    if (mainMenuContent && mainMenuMobile) {
      const navContent = mainMenuContent.outerHTML;
      mainMenuMobile.innerHTML = navContent;

      const arrows = document.querySelectorAll(
        ".main-menu-mobile .has-dropdown > a"
      );

      arrows.forEach((arrow) => {
        const arrowBtn = document.createElement("BUTTON");
        arrowBtn.classList.add("dropdown-toggle-btn");
        arrowBtn.innerHTML = headerIcon;

        arrow.appendChild(arrowBtn);

        arrowBtn.addEventListener("click", (e) => {
          e.preventDefault();
          arrowBtn.classList.toggle("dropdown-opened");
          arrow.parentElement.classList.toggle("expanded");
          arrow.parentElement.parentElement.classList.add("dropdown-opened");
          arrow.parentElement.parentElement
            .querySelectorAll(".submenu")
            .forEach((submenu) => {
              submenu.style.display =
                submenu.style.display === "block" ? "none" : "block";
            });
          arrow.parentElement.parentElement
            .querySelectorAll(".has-dropdown")
            .forEach((sibling) => {
              if (sibling !== arrow.parentElement) {
                sibling.classList.remove("dropdown-opened");
                sibling.querySelectorAll(".submenu").forEach((submenu) => {
                  submenu.style.display = "none";
                });
              }
            });
        });
      });
    }
  }, []);

  return (
    <div className="absolute z-50 w-full">
      <div className="offcanvas-area">
        <div ref={offcanvasRef} className="offcanvas">
          <div className="offcanvas_close-btn">
            <button ref={closeBtnRef} className="close-btn">
              <FaTimes />
            </button>
          </div>
          <div className="offcanvas_logo">
            <Link to={"/"}>
              <img src={Logo} draggable="false" />
            </Link>
          </div>
          <div className="offcanvas_title">
            <p>
              Business consultation provides expert advice to improve
              performance.
            </p>
          </div>
          <div className="main-menu-mobile lg:none"></div>
          <div className="offcanvas_contact-info">
            <div className="offcanvas_contact-title">
              <h5>Contact Us</h5>
            </div>
            <ul>
              <li>
                <MdLocationPin />
                <Link to={"/"}>Melbone st, Australia, Ny 12099</Link>
              </li>
              <li>
                <FaEnvelope />
                <Link to={"/"}>needhelp@company.com</Link>
              </li>
              <li>
                <FaPhoneAlt />
                <Link to={"/"}>+48 555 223 224</Link>
              </li>
            </ul>
          </div>
          <div className="offcanvas_input">
            <div className="offcanvas_input-title">
              <h4>Get Update</h4>
            </div>
            <form action="#" method="post">
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter E-Mail"
                  required
                />
                <button type="submit">
                  <IoMdPaperPlane />
                </button>
              </div>
            </form>
            <div className="status"></div>
          </div>
          <div className="offcanvas_social">
            <div className="social-icon">
              <Link to={"/"}>
                <FaFacebookF />
              </Link>
              <Link to={"/"}>
                <FaXTwitter />
              </Link>
              <Link to={"/"}>
                <FaPinterestP />
              </Link>
              <Link to={"/"}>
                <FaLinkedinIn />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div ref={bodyOverlayRef} className="body-overlay"></div>
      <header className="bg-transparent relative z-10">
        <div className="Container flex items-center justify-between h-[52px]">
          <div className="flex items-center gap-8">
            <div className=" sm:flex items-center gap-2 hidden">
              <h6 className="font-FiraSans text-[15px] text-white">Mial :</h6>
              <Link
                to={"/"}
                className="font-FiraSans text-[15px] text-TextColor-0 transition-all duration-500 hover:text-white"
              >
                example@gmail.com
              </Link>
            </div>
            <div className=" md:flex items-center gap-2 hidden">
              <h6 className="font-FiraSans text-[15px] text-white">
                Call Us :
              </h6>
              <Link
                to={"/"}
                className="font-FiraSans text-[15px] text-TextColor-0 transition-all duration-500 hover:text-white"
              >
                +980 123 (4587) 584
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-16">
            <ul className="flex gap-5 items-center">
              <li>
                <Link
                  to={"/"}
                  className="transition-all duration-500 text-white hover:text-PrimaryColor-0"
                >
                  <ImFacebook2 size={"14"} />
                </Link>
              </li>
              <li>
                <Link
                  to={"/"}
                  className="transition-all duration-500 text-white hover:text-PrimaryColor-0"
                >
                  <FaXTwitter />
                </Link>
              </li>
              <li>
                <Link
                  to={"/"}
                  className="transition-all duration-500 text-white hover:text-PrimaryColor-0"
                >
                  <FaLinkedinIn />
                </Link>
              </li>
              <li>
                <Link
                  to={"/"}
                  className="transition-all duration-500 text-white hover:text-PrimaryColor-0"
                >
                  <FaInstagram />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <div id="header-sticky" className="header-area style-two">
        <div className="Container">
          <div className="bg-PrimaryColor-0 rounded-md px-8 flex items-center justify-between lg:grid lg:grid-cols-12">
            <div className="col-span-2">
              <div className="header-logo">
                <Link to={"/"}>
                  <img src={Logo} draggable="false" />
                </Link>
              </div>
            </div>
            <div className="col-span-7 hidden lg:block">
              <div className="header-main-menu text-center">
                <nav className="main-menu-content">
                  <ul>
                    <li className="has-dropdown">
                      <Link to={"/"}>
                        Home
                        <span>
                          <FaChevronDown />
                        </span>
                      </Link>
                      <div className="submenu has-homemenu mega-menu">
                        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-3">
                          <div className="homemenu">
                            <div className="homemenu-thumb">
                              <Link to={"/"}>
                                <img src={homeOne} />
                                <h6>Live Demo</h6>
                              </Link>
                            </div>
                          </div>{" "}
                          <div className="homemenu">
                            <div className="homemenu-thumb">
                              <Link to={"/home2"}>
                                <img src={homeTwo} />
                                <h6>Live Demo</h6>
                              </Link>
                            </div>
                          </div>{" "}
                          <div className="homemenu">
                            <div className="homemenu-thumb">
                              <Link to={"/"}>
                                <img src={homeThree} />
                                <h6>Live Demo</h6>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="has-dropdown">
                      <Link to={"/"}>
                        Pages
                        <span>
                          <FaChevronDown />
                        </span>
                      </Link>
                      <ul className="submenu">
                        <li>
                          <Link to={"/"}>about us</Link>
                        </li>
                        <li>
                          <Link to={"/"}>team</Link>
                        </li>
                        <li>
                          <Link to={"/"}>testimonial</Link>
                        </li>
                        <li>
                          <Link to={"/"}>cart</Link>
                        </li>
                        <li>
                          <Link to={"/"}>checkout</Link>
                        </li>
                        <li>
                          <Link to={"/"}>faq</Link>
                        </li>
                      </ul>
                    </li>
                    <li className="has-dropdown">
                      <Link to={"/"}>
                        Service
                        <span>
                          <FaChevronDown />
                        </span>
                      </Link>
                      <ul className="submenu">
                        <li>
                          <Link to={"/"}>service</Link>
                        </li>
                        <li>
                          <Link to={"/"}>service details</Link>
                        </li>
                      </ul>
                    </li>
                    <li className="has-dropdown">
                      <Link to={"/"}>
                        Project
                        <span>
                          <FaChevronDown />
                        </span>
                      </Link>
                      <ul className="submenu">
                        <li>
                          <Link to={"/"}>project</Link>
                        </li>
                        <li>
                          <Link to={"/"}>project details</Link>
                        </li>
                      </ul>
                    </li>
                    <li className="has-dropdown">
                      <Link to={"/"}>
                        Shop
                        <span>
                          <FaChevronDown />
                        </span>
                      </Link>
                      <ul className="submenu">
                        <li>
                          <Link to={"/"}>shop</Link>
                        </li>
                        <li>
                          <Link to={"/"}>shop details</Link>
                        </li>
                        <li>
                          <Link to={"/"}>cart</Link>
                        </li>
                        <li>
                          <Link to={"/"}>checkout</Link>
                        </li>
                      </ul>
                    </li>
                    <li className="has-dropdown">
                      <Link to={"/"}>
                        Blog
                        <span>
                          <FaChevronDown />
                        </span>
                      </Link>
                      <ul className="submenu">
                        <li>
                          <Link to={"/"}>blog grid</Link>
                        </li>
                        <li>
                          <Link to={"/"}>blog right sidebar</Link>
                        </li>
                        <li>
                          <Link to={"/"}>blog left sidebar</Link>
                        </li>
                        <li>
                          <Link to={"/"}>blog details</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to={"/"}>Contact</Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="col-span-3">
              <div className="header-right-box flex items-center gap-10 lg:gap-6 xl:gap-6 2xl:gap-12 justify-end">
                <div className="hidden lg:block">
                  <Link to={"/"}>
                    <button className="text-white relative top-1">
                      <BiSearch size={"20"} />
                    </button>
                  </Link>
                </div>
                <div className="hidden lg:block">
                  <Link
                    to={"/"}
                    className="font-FiraSans font-medium capitalize text-white flex items-center gap-1"
                  >
                    get a quote<span></span>
                    <LuMoveRight size={"19"} />
                  </Link>
                </div>
                <div className="header-sidebar hidden lg:block">
                  <button ref={menuSideBarRef} className="menu-sidebar">
                    <span></span>
                    <span></span>
                    <span></span>
                  </button>
                </div>
                <div className="header-bar lg:hidden">
                  <button ref={menuBarRef} className="menu-bar">
                    <span></span>
                    <span></span>
                    <span></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sidebar-content">
        <div ref={sidebarContentRef} className="sidebar">
          <div className="sidebar_close-btn">
            <button ref={closeBtn2Ref} className="close-btn2">
              <FaTimes />
            </button>
          </div>
          <div className="sidebar_logo">
            <Link to={"/"}>
              <img src={Logo} draggable="false" />
            </Link>
          </div>
          <div className="sidebar_title">
            <p>
              Business consultation provides expert advice to improve
              performance.
            </p>
          </div>
          <div>
            <ul>
              <li>
                <Link to={"/"}>
                  <button>Managed IT Services</button>
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <button>Cloud Services</button>
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <button>Cybersecurity Services</button>
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <button>Network Services</button>
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <button>Data Analytics</button>
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <button>IT Consulting Services</button>
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <button>Backup and Disaster Recovery</button>
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <button>Website Development</button>
                </Link>
              </li>
            </ul>
          </div>
          <div className="sidebar_contact-info">
            <div className="sidebar_contact-title">
              <h5>Contact Us</h5>
            </div>
            <ul>
              <li>
                <MdLocationPin />
                <Link to={"/"}>Melbone st, Australia, Ny 12099</Link>
              </li>
              <li>
                <FaEnvelope />
                <Link to={"/"}>needhelp@company.com</Link>
              </li>
              <li>
                <FaPhoneAlt />
                <Link to={"/"}>+48 555 223 224</Link>
              </li>
            </ul>
          </div>
          <div className="sidebar_input">
            <div className="offcanvas_input-title">
              <h4>Get Update</h4>
            </div>
            <form action="#" method="post">
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter E-Mail"
                  required
                />
                <button type="submit">
                  <IoMdPaperPlane />
                </button>
              </div>
            </form>
            <div className="status"></div>
          </div>
          <div className="sidebar_social">
            <div className="sidebar-social-icon">
              <Link to={"/"}>
                <FaFacebookF />
              </Link>
              <Link to={"/"}>
                <FaXTwitter />
              </Link>
              <Link to={"/"}>
                <FaPinterestP />
              </Link>
              <Link to={"/"}>
                <FaLinkedinIn />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div ref={bodyOverlay2Ref} className="body-overlay2"></div>
    </div>
  );
};

export default Navbar2;
