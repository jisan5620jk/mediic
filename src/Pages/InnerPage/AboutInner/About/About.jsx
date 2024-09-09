import aboutThumb from "/images/about-inner-thumb2.png";
import aboutAward from "/images/about-award-icon.png";
import aboutShape from "/images/about-inner-shape.png";
import aboutCounterIcon from "/images/about-counter-icon.png";
import { Link } from "react-router-dom";
import { RiCheckFill } from "react-icons/ri";
import { BiRightTopArrowCircle, BiSolidQuoteLeft } from "react-icons/bi";
import CountUp from "react-countup";

const About = () => {
  return (
    <section className="pt-[238px] pb-[120px] bg-white bg-no-repeat bg-center bg-cover relative">
      <div className="Container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-[92px] lg:gap-10 2xl:gap-[92px] items-center">
          <div className="relative z-10">
            <img
              src={aboutThumb}
              draggable="false"
              className="md:w-full lg:w 2xl:-ml-[38px] 2xl:max-w-[inherit]"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="bg-PrimaryColor-0 border-[6px] border-white pb-6 pt-5 flex flex-col justify-center overflow-hidden rounded-full h-[117px] sm:h-[214px] lg:h-[180px] xl:h-[214px] w-[92px] sm:w-[214px] lg:w-[180px] xl:w-[214px] items-center text-center relative z-10">
                <img src={aboutCounterIcon} draggable="false" />
                <CountUp
                  start={-9}
                  end={283}
                  suffix="k+"
                  className="text-3xl sm:text-[45px] font-FiraSans font-bold text-white mt-2 mb-2"
                />
                <h6 className="font-FiraSans font-semibold text-white">
                  Complete Projects
                </h6>
              </div>
            </div>
            <div className="absolute top-0 right-0 sm:flex gap-5 items-center animate-dance3 hidden bg-HeadingColor-0 px-12 py-[18px] rounded-lg">
              <div>
                <img src={aboutAward} draggable={false} />
              </div>
              <div>
                <h5 className="font-FiraSans font-semibold text-xl leading-8 text-white">
                  Award Wining
                </h5>
                <h5 className="font-FiraSans font-semibold text-xl leading-8 text-white border-t">
                  Best Services
                </h5>
              </div>
            </div>
            <img
              src={aboutShape}
              draggable="false"
              className="absolute bottom-10 left-24 -z-10 animate-movebtn hidden sm:block"
            />
          </div>
          <div className="relative">
            <h5 className="font-FiraSans text-lg font-semibold text-PrimaryColor-0">
              IT Support For Business
            </h5>
            <h1 className="font-FiraSans font-bold text-xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[30px] lg:leading-[40px] xl:text-[36px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[52px] text-HeadingColor-0 mt-[18px] mb-4">
              Ensuring Your Success Trusted <br />
              IT Services Source
            </h1>
            <p className="font-FiraSans text-TextColor2-0 pb-8">
              Monotonectally synergize granular markets and front markets.
              Collaboratively visualize strategic infomediaries after multimedia
              based models. Synergistically task state of the art
              infrastructures for
            </p>
            <div className="grid grid-cols-2 items-center mb-8">
              <ul>
                <li className="font-FiraSans font-medium text-HeadingColor-0 flex items-center gap-2 mb-3">
                  <span className="text-PrimaryColor-0">
                    <RiCheckFill size={"24"} />
                  </span>
                  Company and Research
                </li>
                <li className="font-FiraSans font-medium text-HeadingColor-0 flex items-center gap-2 mb-3">
                  <span className="text-PrimaryColor-0">
                    <RiCheckFill size={"24"} />
                  </span>
                  Business and research
                </li>
              </ul>
              <div className="flex items-center gap-6">
                <CountUp
                  start={-9}
                  end={45}
                  suffix="%"
                  className="text-xl sm:text-[22px] font-FiraSans flex items-center justify-center
                 font-semibold text-PrimaryColor-0 size-[65px] rounded-full border-2 border-PrimaryColor-0"
                />
                <div>
                  <h4 className="font-FiraSans font-semibold text-2xl text-HeadingColor-0">
                    Solution Business
                  </h4>
                  <p className="font-FiraSans text-lg text-TextColor2-0">
                    Level is high
                  </p>
                </div>
              </div>
            </div>
            <div className="flex gap-5 px-7 py-6 bg-[#eff6fe] rounded-md">
              <div>
                <BiSolidQuoteLeft size={"32"} className="text-PrimaryColor-0" />
              </div>
              <p className="italic font-FiraSans text-lg text-TextColor2-0">
                If you are accused of committing a crime, you will the very best
                criminal defense attorneys.
              </p>
            </div>
            <Link to={"/about"} className="mt-9 inline-block">
              <button className="primary-btn">
                {`More About`}
                <BiRightTopArrowCircle size={"20"} />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
