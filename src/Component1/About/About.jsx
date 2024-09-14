import aboutThumb from "/images/about.png";
import heart from "/images/heart.png";
import aboutShape from "/images/star.png";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import { FaCircleCheck } from "react-icons/fa6";
import { GoArrowRight } from "react-icons/go";

const About = () => {
  return (
    <section className="pt-[138px] pb-[120px] bg-BodyBg-0 relative">
      <div className="Container">
        <div className="grid grid-cols-1 gap-8 lg:items-center lg:grid-cols-2 border-b border-BorderColor3-0 pb-7">
          <div className="flex items-center gap-7">
            <h1 className="font-AlbertSans font-bold uppercase text-HeadingColor-0 text-[16px] leading-[26px] sm:text-[25px] sm:leading-[35px] md:text-[30px] md:leading-[40px] lg:text-[34px] lg:leading-[44px] xl:text-[52px] xl:leading-[62px] 2xl:text-[60px] 2xl:leading-[70px]">
              About Medical
            </h1>
            <img
              src={aboutShape}
              draggable="false"
              className="animate-rotational"
            />
          </div>
          <div className="flex justify-end">
            <div className="flex items-center gap-8 ">
              <div>
                <CountUp
                  start={-11}
                  end={"10"}
                  suffix={"+"}
                  className="font-AlbertSans text-3xl sm:text-4xl md:text-[60px] leading-[50px] text-HeadingColor-0 font-bold"
                />
              </div>
              <p className="font-AlbertSans font-medium text-lg text-HeadingColor-0 uppercase">
                Years Of <br /> Experiences
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 lg:gap-10 2xl:gap-16 mt-[60px] items-center">
          <div className="relative z-10">
            <img
              src={aboutThumb}
              draggable="false"
              className="w-full 2xl:w-[inherit]"
            />
            <div className="absolute -top-4 sm:-top-16 right-9 md:-top-8 sm:right-12 md:right-24 xl:top-0 xl:right-0 2xl:-top-[70px] 2xl:right-[56px] size-[74px] sm:size-[142px] lg:size-[120px] xl:size-[170px] 2xl:size-[200px] bg-PrimaryColor-0 rounded-[30px] flex items-center justify-center">
              <div className="size-14 sm:size-24 lg:size-28 xl:size-[120px] 2xl:size-[130px] animate-rotational ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 250.5 250.5"
                  className="overflow-visible"
                >
                  <path
                    d="M.25,125.25a125,125,0,1,1,125,125,125,125,0,0,1-125-125"
                    id="e-path-35ee1b2"
                    className="fill-transparent"
                  ></path>
                  <text className="font-AlbertSans text-[32px] uppercase">
                    <textPath
                      id="e-text-path-35ee1b2"
                      href="#e-path-35ee1b2"
                      startOffset="0%"
                      className="fill-white"
                    >
                      NEOROLOGIST * GYNOCLOGIST * HEALTHCARE *
                    </textPath>
                  </text>
                </svg>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <img src={heart} draggable="false" />
              </div>
            </div>
          </div>
          <div className="relative">
            <h5 className="font-AlbertSans font-medium text-sm sm:text-base text-PrimaryColor-0 uppercase mb-4">
              FINANCE CONSULTING
            </h5>
            <h1 className="font-AlbertSans font-bold text-HeadingColor-0 text-[16px] leading-[23px] sm:text-[22px] sm:leading-[35px] md:text-[30px] md:leading-[35px] lg:text-[28px] lg:leading-[35px] xl:text-[32px] xl:leading-[39px] 2xl:text-[32px] 2xl:leading-[39px]">
              Since 2007 We’re working Medical group of more than 1200+ Patients
              help from our medical
            </h1>
            <h5 className="font-AlbertSans font-semibold text-[22px] text-HeadingColor-0 mt-10 mb-6">
              We’re Putting your Comfort List
            </h5>
            <div className="grid items-center grid-cols-1 gap-7 sm:grid-cols-2 border-t border-dashed border-HeadingColor-0 border-opacity-25 pb-[18px] pt-4">
              <div className="flex items-center gap-2">
                <div className="text-PrimaryColor-0">
                  <FaCircleCheck size={"20"} />
                </div>
                <div className="flex-1">
                  <h5 className="font-DMSans text-HeadingColor-0">
                    Completely to syndicate
                  </h5>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="text-PrimaryColor-0">
                  <FaCircleCheck size={"20"} />
                </div>
                <div className="flex-1">
                  <h5 className="font-DMSans text-HeadingColor-0">
                    24 Hrs Aumbulance Service
                  </h5>
                </div>
              </div>
            </div>
            <div className="grid items-center grid-cols-1 gap-7 sm:grid-cols-2 border-t border-dashed border-HeadingColor-0 border-opacity-25 pb-[18px] pt-4">
              <div className="flex items-center gap-2">
                <div className="text-PrimaryColor-0">
                  <FaCircleCheck size={"20"} />
                </div>
                <div className="flex-1">
                  <h5 className="font-DMSans text-HeadingColor-0">
                    Medical Surgical Services
                  </h5>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="text-PrimaryColor-0">
                  <FaCircleCheck size={"20"} />
                </div>
                <div className="flex-1">
                  <h5 className="font-DMSans text-HeadingColor-0">
                    100% Satisfaction Rate
                  </h5>
                </div>
              </div>
            </div>
            <div className="grid items-center grid-cols-1 gap-7 sm:grid-cols-2 border-y border-dashed border-HeadingColor-0 border-opacity-25 pb-[18px] pt-4 mb-12">
              <div className="flex items-center gap-2">
                <div className="text-PrimaryColor-0">
                  <FaCircleCheck size={"20"} />
                </div>
                <div className="flex-1">
                  <h5 className="font-DMSans text-HeadingColor-0">
                    Instant Operations System
                  </h5>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="text-PrimaryColor-0">
                  <FaCircleCheck size={"20"} />
                </div>
                <div className="flex-1">
                  <h5 className="font-DMSans text-HeadingColor-0">
                    Professional Doctors
                  </h5>
                </div>
              </div>
            </div>
            <Link to={"/appiontment"}>
              <button className="banner-btn mt-3">
                More About
                <GoArrowRight size={"22"} className="-rotate-45" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
