/* eslint-disable no-unused-vars */
import processImg from "/images/process-1.png";
import processImg2 from "/images/process-2.png";
import processImg3 from "/images/process-3.png";
import boxShape from "/images/porcess-shape1.png";
import boxShape2 from "/images/porcess-shape2.png";
import ProcessCard from "./ProcessCard";

const processData = [
  {
    id: 1,
    processImg: processImg,
    boxNumber1: "01",
    boxShape: boxShape,
    processTitle: "Start A Project",
    processDesc:
      "Proactively drive maintainable value next mission-critical infrastructures done the new business to planning",
  },

  {
    id: 2,
    processImg: processImg2,
    boxNumber1: "02",
    boxShape: boxShape2,
    processTitle: "Project Analysis",
    processDesc:
      "Proactively drive maintainable value next mission-critical infrastructures done the new business to planning",
  },
  {
    id: 3,
    processImg: processImg3,
    boxNumber1: "03",
    processTitle: "Deliver to Succes",
    processDesc:
      "Proactively drive maintainable value next mission-critical infrastructures done the new business to planning",
  },
];

const Process = () => {
  return (
    <section className="pb-10 relative bg-HeadingColor-0 z-10 ">
      <div className="Container">
        <div className="text-center">
          <h5 className="font-FiraSans text-lg font-semibold text-PrimaryColor-0">
            Working Process
          </h5>
          <h1 className="font-FiraSans font-bold text-xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[32px] lg:leading-[42px] xl:text-[36px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[52px] text-white mt-[18px]">
            We Follow the Easy Working Steps
          </h1>
        </div>
        <div className="pb-16 mt-[60px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-10">
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
      </div>
    </section>
  );
};

export default Process;
