/* eslint-disable no-unused-vars */
import processImg from "/images/process-icon-1.png";
import processImg2 from "/images/process-icon-2.png";
import processImg3 from "/images/process-icon-3.png";
import processImg4 from "/images/process-icon-4.png";
import boxShape from "/images/process3-shape.png";
import boxShape2 from "/images/process3-shape2.png";
import ProcessCard from "./ProcessCard";

const processData = [
  {
    id: 1,
    processImg: processImg,
    boxNumber1: "1",
    boxShape: boxShape,
    processTitle: "Select A Project",
    processDesc: "We have the technology and IT expertise to develop.",
  },

  {
    id: 2,
    processImg: processImg2,
    boxNumber1: "2",
    boxShape: boxShape2,
    processTitle: "Project Analysis",
    processDesc: "We have the technology and IT expertise to develop.",
  },
  {
    id: 3,
    processImg: processImg3,
    boxNumber1: "3",
    boxShape: boxShape,
    processTitle: "Start a Project",
    processDesc: "We have the technology and IT expertise to develop.",
  },
  {
    id: 4,
    processImg: processImg4,
    boxNumber1: "4",
    processTitle: "Deliver to Succes",
    processDesc: "We have the technology and IT expertise to develop.",
  },
];

const Process = () => {
  return (
    <section className="py-28 relative z-10 ">
      <div className="Container">
        <div className="text-center">
          <h5 className="font-FiraSans text-[19px] font-semibold text-PrimaryColor-0 inline-block relative pl-5 before:absolute before:top-1/2 before:-translate-y-1/2 before:left-0 before:h-[10px] before:w-[10px] before:bg-PrimaryColor-0 before:rounded-full">
            WORK PROCESS
          </h5>
          <h1 className="font-FiraSans font-bold text-xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[30px] lg:leading-[40px] xl:text-[44px] xl:leading-[46px] 2xl:text-[48px] 2xl:leading-[50px] text-HeadingColor-0 mt-3 mb-4">
            Working Process For{" "}
            <span className="text-PrimaryColor-0">Technology</span>
          </h1>
        </div>
        <div className="mt-[94px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-7 gap-y-16">
          {processData.map(
            ({
              id,
              processImg,
              boxNumber1,
              processTitle,
              boxShape,
              processDesc,
            }) => {
              return (
                <div key={id}>
                  <ProcessCard
                    processImg={processImg}
                    boxNumber1={boxNumber1}
                    boxShape={boxShape}
                    processTitle={processTitle}
                    processDesc={processDesc}
                  />
                </div>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
};

export default Process;
