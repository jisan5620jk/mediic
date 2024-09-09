/* eslint-disable no-unused-vars */
import workIcon from "/images/steps_1.png";
import workIcon2 from "/images/steps_2.png";
import workIcon3 from "/images/steps_3.png";
import WorkCard from "./WorkCard";
import { LuMoveRight } from "react-icons/lu";
import { Link } from "react-router-dom";

const WorkData = [
  {
    id: 1,
    workNumber: "01",
    workIcon: workIcon,
    workTitle: "Strategic Work Planning",
    workDesc:
      "Completely implement globals without impactful markets in conveniently done innovate customer directed",
    workUrl: "/servie_details",
    workBtn: <LuMoveRight />,
  },
  {
    id: 2,
    workNumber: "02",
    workIcon: workIcon2,
    workTitle: "Monitoring and Evaluation",
    workDesc:
      "Completely implement globals without impactful markets in conveniently done innovate customer directed",
    workUrl: "/servie_details",
    workBtn: <LuMoveRight />,
  },
  {
    id: 3,
    workNumber: "03",
    workIcon: workIcon3,
    workTitle: "Completed Works",
    workDesc:
      "Completely implement globals without impactful markets in conveniently done innovate customer directed",
    workUrl: "/servie_details",
    workBtn: <LuMoveRight />,
  },
];

const Work = () => {
  return (
    <section className="mx-2 xl:mx-5 rounded-t-[40px] pt-28 pb-[120px] bg-BodyBg-0 relative z-10">
      <div className="Container">
        <div className="text-center">
          <h5 className="font-FiraSans font-medium text-sm sm:text-base text-PrimaryColor-0 uppercase flex items-center justify-center gap-2 mb-3">
            OUR WORKING STEPS
          </h5>
          <h1 className="font-FiraSans font-semibold text-HeadingColor-0 text-[16px] leading-[26px] sm:text-[25px] sm:leading-[35px] md:text-[30px] md:leading-[40px] lg:text-[38px] lg:leading-[48px] xl:text-[42px] xl:leading-[52px]">
            Engaging {`Consulting's`} exceptional
            <br />
            Involves a series of Steps
          </h1>
          <p className="font-FiraSans text-TextColor2-0 pt-4">
            Globally engage cross-media leadership skills before cross-media
            innovation forward
            <br className="hidden md:block" /> develope standardized platforms
            without robust
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-[54px]">
          {WorkData.map(
            ({
              id,
              workNumber,
              workIcon,
              workTitle,
              workDesc,
              workUrl,
              workBtn,
            }) => {
              return (
                <>
                  <div key={id}>
                    <WorkCard
                      workNumber={workNumber}
                      workIcon={workIcon}
                      workTitle={workTitle}
                      workDesc={workDesc}
                      workUrl={workUrl}
                      workBtn={workBtn}
                    />
                  </div>
                </>
              );
            }
          )}
        </div>
        <div className="text-center mt-9">
          <p className="font-FiraSans text-HeadingColor-0 font-medium text-sm">
            Feel free to reach out to our consulting{" "}
            <Link to={"/service"} className="text-PrimaryColor-0 underline">
              Services
            </Link>{" "}
            for inquiries and assistance.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Work;
