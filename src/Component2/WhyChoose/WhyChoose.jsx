import { Link } from "react-router-dom";
import CountUp from "react-countup";
import { useEffect } from "react";
import ProgressBar from "react-animated-progress-bar";
import { BiRightTopArrowCircle } from "react-icons/bi";
import { IoDiamondOutline } from "react-icons/io5";
import chooseShape from "/images/about-shape2.png";

const WhyChoose = () => {
  useEffect(() => {
    const handleMouseEnter = (event) => {
      event.target.classList.add("active");

      // Remove 'active' class from siblings
      const parent = event.target.parentElement;
      if (parent) {
        const siblings = parent.querySelectorAll(".choose-box");
        siblings.forEach((sibling) => {
          if (sibling !== event.target) {
            sibling.classList.remove("active");
          }
        });
      }
    };

    const elements = document.querySelectorAll(".choose-box");
    elements.forEach((element) => {
      element.addEventListener("mouseenter", handleMouseEnter);
    });

    // Clean up event listeners when component unmounts
    return () => {
      elements.forEach((element) => {
        element.removeEventListener("mouseenter", handleMouseEnter);
      });
    };
  }, []);

  return (
    <section className="relative overflow-hidden py-28 bg-BodyBg-0">
      <div className="Container">
        <div className="grid grid-cols-1 gap-10 lg:gap-16 xl:gap-24 2xl:gap-[110px] lg:grid-cols-2 items-center">
          <div className="relative">
            <h5 className="font-FiraSans text-lg font-semibold text-PrimaryColor-0">
              Why Choose Us?
            </h5>
            <h1 className="font-FiraSans font-bold text-xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[28px] lg:leading-[38px] xl:text-[32px] xl:leading-[42px] 2xl:text-[37px] 2xl:leading-[47px] text-HeadingColor-0 mt-[18px] mb-3">
              Building your Path to Success <br />
              with a Reliable IT Service
            </h1>
            <p className="font-FiraSans text-TextColor2-0 mt-4 mb-5">
              Monotonectally synergize granular markets front markets.
              Collaboratively visualize strategic infomediaries after multimedia
              based.Synergistically to task state of the art infrastructures
            </p>
            <div className="mb-5">
              <h6 className="font-FiraSans font-semibold text-lg text-HeadingColor-0 pb-3">
                It Solution
              </h6>
              <ProgressBar
                rect
                width="100%"
                height="9px"
                fontColor="#001818"
                fontSize="18px"
                leading="10px"
                margin="0px"
                rectBorderRadius="0"
                fontWeight="500"
                percentage="90"
                defColor={{
                  excellent: "#0c59db",
                  good: "#79b900",
                  fair: "green",
                  poor: "red",
                }}
                trackPathColor="#d0e0f9"
                trackBorderColor="transparent"
                trackPathBorderRadius="0"
              />
            </div>
            <div>
              <h6 className="font-FiraSans font-semibold text-lg text-HeadingColor-0 pb-3">
                Development
              </h6>
              <ProgressBar
                rect
                width="100%"
                height="9px"
                fontColor="#001818"
                fontSize="18px"
                leading="10px"
                margin="0px"
                rectBorderRadius="0"
                fontWeight="500"
                percentage="80"
                defColor={{
                  excellent: "#0c59db",
                  good: "#79b900",
                  fair: "green",
                  poor: "red",
                }}
                trackPathColor="#d0e0f9"
                trackBorderColor="transparent"
                trackPathBorderRadius="0"
              />
            </div>
            <Link to={"/about"} className="mt-[50px] inline-block">
              <button className="primary-btn3">
                {`More About`}
                <BiRightTopArrowCircle size={"20"} />
              </button>
            </Link>
            <img
              src={chooseShape}
              draggable="false"
              className="absolute -bottom-0 left-1/2 animate-swing hidden sm:block"
            />
          </div>
          <div className="grid gap-7 grid-cols-1 sm:grid-cols-2 items-center">
            <div className="choose-box group text-center bg-white rounded-md px-[30px] lg:px-4 xl:px-[30px] pt-9 pb-10 relative z-10  before:absolute before:top-0 before:right-0 before:-z-10 before:w-0 before:h-full before:bg-HeadingColor-0 before:rounded-md before:transition-all before:duration-500">
              <div className="choose-icon flex justify-center text-PrimaryColor-0 transition-all duration-500">
                <IoDiamondOutline size={"70px"} />
              </div>
              <h6 className="choose-title text-[26px] rounded font-FiraSans text-HeadingColor-0 font-semibold transition-all duration-500 mt-4 mb-1">
                Business Plan
              </h6>
              <p className="choose-desc font-FiraSans text-TextColor2-0 transition-all duration-500 mb-4">
                The markets and front market
              </p>
              <div className="flex items-end justify-center gap-1 border-b border-BorderColor2-0 pb-5">
                <div className="flex gap-1">
                  <h6 className="choose-price transition-all duration-500 font-FiraSans font-semibold text-2xl text-HeadingColor-0">
                    $
                  </h6>
                  <CountUp
                    start={-9}
                    end={49}
                    prefix=""
                    suffix=""
                    className="choose-price text-[50px] leading-[50px] font-FiraSans font-semibold text-HeadingColor-0 transition-all duration-500"
                  />
                </div>
                <h6 className="choose-price font-FiraSans text-TextColor2-0 text-lg transition-all duration-500">
                  / Month
                </h6>
              </div>
              <ul className="flex flex-col gap-3 mt-6 mb-9">
                <li className="choose-list font-FiraSans text-TextColor2-0 transition-all duration-500">
                  10+ user Account
                </li>
                <li className="choose-list font-FiraSans text-TextColor2-0 transition-all duration-500">
                  Moneyback Gaurentee
                </li>
                <li className="choose-list font-FiraSans text-TextColor2-0 transition-all duration-500">
                  Unlimited Database
                </li>
                <li className="choose-list font-FiraSans text-TextColor2-0 transition-all duration-500">
                  24/7 Supports
                </li>
              </ul>
              <Link to={"/"}>
                <button className="choose-btn font-FiraSans font-medium bg-[#e6eefb] text-lg text-HeadingColor-0 rounded px-8 py-[10px] transition-all duration-500">
                  Purchaces
                </button>
              </Link>
            </div>
            <div className="choose-box active group text-center bg-white rounded-md px-[30px] lg:px-4 xl:px-[30px] pt-9 pb-10 relative z-10  before:absolute before:top-0 before:right-0 before:-z-10 before:w-0 before:h-full before:bg-HeadingColor-0 before:rounded-md before:transition-all before:duration-500">
              <div className="choose-icon flex justify-center text-PrimaryColor-0 transition-all duration-500">
                <IoDiamondOutline size={"70px"} />
              </div>
              <h6 className="choose-title text-[26px] rounded font-FiraSans text-HeadingColor-0 font-semibold transition-all duration-500 mt-4 mb-1">
                Premium Plan
              </h6>
              <p className="choose-desc font-FiraSans text-TextColor2-0 transition-all duration-500 mb-4">
                The markets and front market
              </p>
              <div className="flex items-end justify-center gap-1 border-b border-BorderColor2-0 pb-5">
                <div className="flex gap-1">
                  <h6 className="choose-price transition-all duration-500 font-FiraSans font-semibold text-2xl text-HeadingColor-0">
                    $
                  </h6>
                  <CountUp
                    start={-9}
                    end={99}
                    prefix=""
                    suffix=""
                    className="choose-price text-[50px] leading-[50px] font-FiraSans font-semibold text-HeadingColor-0 transition-all duration-500"
                  />
                </div>
                <h6 className="choose-price font-FiraSans text-TextColor2-0 text-lg transition-all duration-500">
                  / Month
                </h6>
              </div>
              <ul className="flex flex-col gap-3 mt-6 mb-9">
                <li className="choose-list font-FiraSans text-TextColor2-0 transition-all duration-500">
                  10+ user Account
                </li>
                <li className="choose-list font-FiraSans text-TextColor2-0 transition-all duration-500">
                  Moneyback Gaurentee
                </li>
                <li className="choose-list font-FiraSans text-TextColor2-0 transition-all duration-500">
                  Unlimited Database
                </li>
                <li className="choose-list font-FiraSans text-TextColor2-0 transition-all duration-500">
                  24/7 Supports
                </li>
              </ul>
              <Link to={"/"}>
                <button className="choose-btn font-FiraSans font-medium bg-[#e6eefb] text-lg text-HeadingColor-0 rounded px-8 py-[10px] transition-all duration-500">
                  Purchaces
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
