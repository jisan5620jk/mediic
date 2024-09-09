/* eslint-disable no-unused-vars */
import ProcessBoxCard from "./ProcessBoxCard";
import { HiOutlineArrowRight } from "react-icons/hi";

const ProcessBoxData = [
  {
    id: 1,
    boxNumber: "01",
    processBoxTitle: "Project Processing",
    processBoxDesc:
      "Process optimize developer in provid creative main issue finance.",
    processBoxBtn: "Read More",
    processBtnIcon: <HiOutlineArrowRight />,
  },
  {
    id: 2,
    boxNumber: "02",
    processBoxTitle: "High Quality Products",
    processBoxDesc:
      "Process optimize developer in provid creative main issue finance.",
    processBoxBtn: "Read More",
    processBtnIcon: <HiOutlineArrowRight />,
  },
  {
    id: 3,
    boxNumber: "03",
    processBoxTitle: "Quality Finished",
    processBoxDesc:
      "Process optimize developer in provid creative main issue finance.",
    processBoxBtn: "Read More",
    processBtnIcon: <HiOutlineArrowRight />,
  },
  {
    id: 4,
    boxNumber: "04",
    processBoxTitle: "Huge Choice Products",
    processBoxDesc:
      "Process optimize developer in provid creative main issue finance.",
    processBoxBtn: "Read More",
    processBtnIcon: <HiOutlineArrowRight />,
  },
];

const ProcessBox = () => {
  return (
    <section className="py-[120px] relative bg-[url('/images/project-bg.png')] bg-cover bg-center bg-no-repeat">
      <div className="Container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
            {ProcessBoxData.map(
              ({
                id,
                processBoxTitle,
                boxNumber,
                processBoxDesc,
                processBoxBtn,
                processBtnIcon,
              }) => {
                return (
                  <div key={id}>
                    <ProcessBoxCard
                      boxNumber={boxNumber}
                      processBoxTitle={processBoxTitle}
                      processBoxDesc={processBoxDesc}
                      processBoxBtn={processBoxBtn}
                      processBtnIcon={processBtnIcon}
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

export default ProcessBox;
