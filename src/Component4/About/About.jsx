import aboutThumb from "/images/about1.png";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import { PiStarFourFill } from "react-icons/pi";

const About = () => {
  return (
    <section className="py-[120px] bg-no-repeat bg-center bg-cover relative">
      <div className="Container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-[92px] lg:gap-10 2xl:gap-[92px] items-center">
          <div className="relative">
            <h5 className="font-FiraSans text-lg font-medium text-PrimaryColor-0 flex items-center gap-2">
              <PiStarFourFill size={"14"} />
              ABOUT COMPANY
            </h5>
            <h1 className="font-FiraSans font-bold text-[22px] leading-8 sm:text-[38px] sm:leading-[48px] md:text-[44px] md:leading-[54px] lg:text-[32px] lg:leading-[42px] xl:text-[44px] xl:leading-[54px] 2xl:text-[46px] 2xl:leading-[56px] text-HeadingColor-0 mt-4 mb-4">
              Expert Consulting for Diverse
              <br /> Financial Services.
            </h1>
            <p className="font-FiraSans text-TextColor2-0 text-lg pb-6">
              Professionally optimize interdependent intellectual interoperable
              visuali design infoediaries main issue state icreative planing
              main best practices.
            </p>
            <div className="grid gap-3 sm:gap-0 sm:grid-cols-2 sm:items-center mb-11">
              <ul className="space-y-3">
                <li className="font-FiraSans text-lg text-HeadingColor-0 font-semibold flex items-center gap-2">
                  <PiStarFourFill size={"14"} className="text-PrimaryColor-0" />
                  Defining IT Solutions
                </li>
                <li className="font-FiraSans text-lg text-HeadingColor-0 font-semibold flex items-center gap-2">
                  <PiStarFourFill size={"14"} className="text-PrimaryColor-0" />
                  Evaluating Sources
                </li>
              </ul>
              <ul className="space-y-3">
                <li className="font-FiraSans text-lg text-HeadingColor-0 font-semibold flex items-center gap-2">
                  <PiStarFourFill size={"14"} className="text-PrimaryColor-0" />
                  Audience Analysis
                </li>
                <li className="font-FiraSans text-lg text-HeadingColor-0 font-semibold flex items-center gap-2">
                  <PiStarFourFill size={"14"} className="text-PrimaryColor-0" />
                  Testing the Solution
                </li>
              </ul>
            </div>
            <Link to={"/about"}>
              <button className="primary-btn4">{`Get Started Now`}</button>
            </Link>
          </div>
          <div className="relative z-10">
            <img src={aboutThumb} draggable="false" />
            <div className="absolute bottom-0 sm:bottom-11 md:bottom-[65px] lg:bottom-5 xl:bottom-11 2xl:bottom-[3.8rem] right-0 md:right-[84px] lg:right-0">
              <div className="bg-PrimaryColor-0 rounded-ee-lg pb-6 pt-5 pl-4 sm:pl-[30px] lg:pl-4 pr-5 sm:pr-10 lg:pr-5 xl:pr-10 flex justify-between overflow-hidden h-[100px] w-[142px] sm:w-[256px] md:w-[300px] lg:w-[218px] xl:w-[260px] 2xl:w-[292px] items-center text-center relative z-10 before:absolute before:top-0 before:left-0 before:w-[50px] sm:before:w-[100px] md:before:w-[118px] lg:before:w-[86px] 2xl:before:w-[115px] before:-z-10 before:h-full before:bg-HeadingColor-0">
                <CountUp
                  start={-15}
                  end={22}
                  suffix=""
                  className="text-3xl sm:text-[56px] font-FiraSans font-bold text-white"
                />
                <h6 className="font-FiraSans text-left text-sm leading-4 sm:text-xl sm:leading-6 font-semibold text-white">
                  Years Of <br /> Experiences
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
