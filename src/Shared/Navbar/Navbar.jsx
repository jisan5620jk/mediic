/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import Logo from "/images/logo.png";
import homeOne from "/images/blog.jpg";
import homeTwo from "/images/blog2.jpg";
import homeThree from "/images/blog3.jpg";
import "./navbar.css";
import { useEffect, useState, useRef } from "react";
import {
  FaChevronDown,
  FaEnvelope,
  FaFacebookF,
  FaLinkedinIn,
  FaPinterestP,
  FaXTwitter,
} from "react-icons/fa6";
import { FaPhoneAlt, FaTimes } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import { IoMdPaperPlane } from "react-icons/io";
import { LuMoveRight } from "react-icons/lu";

const Navbar = () => {
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
    <>
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
      <div id="header-sticky" className="header-area">
        <div className="Container">
          <div className="flex items-center justify-between lg:grid lg:grid-cols-12">
            <div className="col-span-2">
              <div className="header-logo">
                <Link to={"/"}>
                  <img src={Logo} draggable="false" />
                </Link>
              </div>
            </div>
            <div className="col-span-8 hidden lg:block">
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
            <div className="col-span-2">
              <div className="header-right-box flex items-center gap-10 lg:gap-0 justify-end">
                <div className="header-btn hidden lg:block">
                  <Link to={"/"}>
                    get a quote<span></span>
                    <LuMoveRight />
                  </Link>
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
    </>
  );
};

export default Navbar;
