import aboutThumb from "/images/skills_thumb.png";
import skillProfile from "/images/skill_author.png";
import ceoSign from "/images/sign.png";
import skillShape2 from "/images/service_shape1.png";
import skillShape3 from "/images/skill_shape.png";
import ProgressBar from "react-animated-progress-bar";

const Skill = () => {
  return (
    <section className="pt-[120px] pb-28 lg:pb-10 xl:pb-0 relative z-10 overflow-hidden skill-section">
      <img
        src={skillShape2}
        draggable="false"
        className="absolute top-20 right-20 animate-rotational hidden 2xl:block"
      />
      <img
        src={skillShape3}
        draggable="false"
        className="absolute -bottom-72 -right-10 animate-wiggle hidden xl:block"
      />
      <div className="Container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 lg:gap-10 2xl:gap-16 items-start">
          <div className="relative z-10 lg:top-16 xl:top-0">
            <img
              src={aboutThumb}
              draggable="false"
              className="w-full 2xl:w-[inherit]"
            />
          </div>
          <div className="relative">
            <h5 className="font-FiraSans font-medium text-sm sm:text-base text-PrimaryColor-0 uppercase mb-3">
              COMPANY OVERVIEW
            </h5>
            <h1 className="font-FiraSans font-semibold text-HeadingColor-0 text-[16px] leading-[26px] sm:text-[25px] sm:leading-[35px] md:text-[30px] md:leading-[40px] lg:text-[32px] lg:leading-[42px] xl:text-[38px] xl:leading-[48px] 2xl:text-[42px] 2xl:leading-[52px] mb-4">
              Financial Journey to Elevating <br /> Your Business Destiny
            </h1>
            <p className="font-FiraSans text-TextColor2-0">
              Globally engage cross-media leadership skills before cross-media
              innovation develop standardized platforms without robust
              applications. Conveniently go forward collaboration and
              idea-sharing
            </p>
            <div className="mb-6 mt-7">
              <h6 className="font-FiraSans text-HeadingColor-0 pb-3">
                Finance Consulting
              </h6>
              <ProgressBar
                rect
                width="100%"
                height="12px"
                fontColor="#001818"
                fontSize="16px"
                leading="10px"
                margin="0px"
                rectBorderRadius="10px"
                fontWeight="400"
                percentage="90"
                defColor={{
                  excellent: "#0c6e6d",
                  good: "#79b900",
                  fair: "green",
                  poor: "red",
                }}
                trackPathColor="#dbe9e9"
                trackBorderColor="transparent"
                trackPathBorderRadius="10px"
              />
            </div>
            <div className="mb-10">
              <h6 className="font-FiraSans text-HeadingColor-0 pb-3">
                Business Consulting
              </h6>
              <ProgressBar
                rect
                width="100%"
                height="12px"
                fontColor="#001818"
                fontSize="16px"
                leading="10px"
                margin="0px"
                rectBorderRadius="10px"
                fontWeight="400"
                percentage="85"
                defColor={{
                  excellent: "#0c6e6d",
                  good: "#79b900",
                  fair: "green",
                  poor: "red",
                }}
                trackPathColor="#dbe9e9"
                trackBorderColor="transparent"
                trackPathBorderRadius="10px"
              />
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-10">
              <div className="flex items-center gap-5">
                <div>
                  <img src={skillProfile} draggable="false" />
                </div>
                <div>
                  <h5 className="font-FiraSans inline-block text-HeadingColor-0 text-xl mb-1">
                    Jhon D. Alexon
                  </h5>
                  <p className="font-FiraSans text-[15px] font-light text-TextColor2-0">
                    CEO & Founder
                  </p>
                </div>
              </div>
              <div>
                <img src={ceoSign} draggable="false" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
