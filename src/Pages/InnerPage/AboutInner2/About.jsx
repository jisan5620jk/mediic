import aboutThumb from "/images/about-inner-thumb.png";
import aboutIcon from "/images/about-icon.png";
import { IoMdPlay } from "react-icons/io";
import { useState } from "react";
import FsLightbox from "fslightbox-react";

const About = () => {
  const [toggler, setToggler] = useState(false);
  return (
    <section className="py-[120px] bg-[url(/images/about-bg.jpg)] bg-no-repeat bg-center bg-cover relative">
      <div className="Container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-[92px] lg:gap-10 2xl:gap-[92px] items-center">
          <div className="relative z-10">
            <img src={aboutThumb} draggable="false" />
            <div className="h-14 w-14 sm:h-[245px] sm:w-[295px] border-8 border-white rounded bg-PrimaryColor-0 flex justify-center items-center absolute bottom-10 right-0">
              <button className="h-14 w-14 sm:h-[100px] sm:w-[100px] border-white rounded-full bg-white flex justify-center items-center relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-transparent before:border before:border-white before:-z-10 before:rounded-full before:animate-ping">
                <IoMdPlay
                  size={"35"}
                  className="text-PrimaryColor-0"
                  onClick={() => setToggler(!toggler)}
                />
              </button>
              <FsLightbox
                toggler={toggler}
                sources={[
                  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
                ]}
              />
            </div>
          </div>
          <div className="relative">
            <h5 className="font-FiraSans text-lg font-semibold text-PrimaryColor-0">
              IT Support for Business
            </h5>
            <h1 className="font-FiraSans font-bold text-xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[30px] lg:leading-[40px] xl:text-[36px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[52px] text-HeadingColor-0 mt-[18px] mb-3">
              About is Over 291+ Company
              <br />
              Business Solution.
            </h1>
            <p className="font-FiraSans text-TextColor2-0">
              Monotonectally synergize granular markets and front markets.
              Collaboratively visualize strategic infomediaries after multimedia
              based models. Synergistically task state of the art
              infrastructures for
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-[30px] mt-10 mb-7 border-b-2 border-PrimaryColor-0 relative before:absolute before:bottom-0 before:left-0 before:bg-[#d5d5d5] before:w-full before:h-1 pb-12">
              <div>
                <div className="flex gap-3 items-center">
                  <div>
                    <img src={aboutIcon} draggable="false" />
                  </div>
                  <div className="flex-1">
                    <h5 className="font-FiraSans font-semibold text-[22px] lg:text-base xl:text-xl 2xl:text-[22px] text-HeadingColor-0">
                      IT Management
                    </h5>
                  </div>
                </div>
                <p className="font-FiraSans text-TextColor2-0">
                  Proved granular markets dream team more based models clean.
                </p>
              </div>
              <div>
                <div className="flex gap-3 items-center">
                  <div>
                    <img src={aboutIcon} draggable="false" />
                  </div>
                  <div className="flex-1">
                    <h5 className="font-FiraSans font-semibold text-[22px] lg:text-base xl:text-xl 2xl:text-[22px] text-HeadingColor-0">
                      Award Ceremony
                    </h5>
                  </div>
                </div>
                <p className="font-FiraSans text-TextColor2-0">
                  Proved granular markets dream team more based models clean.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <button className="px-8 py-[6px] rounded-full bg-PrimaryColor-0 text-white font-FiraSans">
                Mission
              </button>
              <button className="px-8 py-[6px] rounded-full bg-PrimaryColor-0 text-white font-FiraSans">
                Vission
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
