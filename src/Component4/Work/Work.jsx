/* eslint-disable no-unused-vars */
import workThumb from "/images/work1.png";
import workThumb2 from "/images/work2.png";
import workThumb3 from "/images/work3.png";
import workThumb4 from "/images/work4.png";
import WorkCard from "./WorkCard";
import { PiStarFourFill } from "react-icons/pi";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const WorkData = [
  {
    id: 1,
    workThumb: workThumb,
    workTitle: "Market Analysis",
    workDesc: "Tecnology",
    workUrl: "/servie_details",
    workBtn: <HiOutlineArrowRight />,
  },
  {
    id: 2,
    workThumb: workThumb2,
    workTitle: "Risk Assesment",
    workDesc: "Tecnology",
    workUrl: "/servie_details",
    workBtn: <HiOutlineArrowRight />,
  },
  {
    id: 3,
    workThumb: workThumb3,
    workTitle: "Invest Insights",
    workDesc: "Tecnology",
    workUrl: "/servie_details",
    workBtn: <HiOutlineArrowRight />,
  },
  {
    id: 4,
    workThumb: workThumb4,
    workTitle: "Estate planning",
    workDesc: "Tecnology",
    workUrl: "/servie_details",
    workBtn: <HiOutlineArrowRight />,
  },
];

const Work = () => {
  return (
    <section className="pt-28 pb-[120px] relative z-10">
      <div className="Container">
        <div className="text-center">
          <h5 className="font-FiraSans text-lg font-medium text-PrimaryColor-0 flex items-center justify-center gap-2">
            <PiStarFourFill size={"14"} />
            OUR WORK SHOWCASE
            <PiStarFourFill size={"14"} />
          </h5>
          <h1 className="font-FiraSans font-bold text-[22px] leading-8 sm:text-[38px] sm:leading-[48px] md:text-[44px] md:leading-[54px] lg:text-[32px] lg:leading-[42px] xl:text-[44px] xl:leading-[54px] 2xl:text-[46px] 2xl:leading-[56px] text-HeadingColor-0 mt-4 mb-4">
            Where Innovation Meets Success
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 mt-[56px]">
          {WorkData.map(
            ({ id, workThumb, workTitle, workDesc, workUrl, workBtn }) => {
              return (
                <>
                  <div key={id}>
                    <WorkCard
                      workThumb={workThumb}
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
      </div>
    </section>
  );
};

export default Work;
