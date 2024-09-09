/* eslint-disable no-unused-vars */
import processImg from "/images/process2-1.png";
import processImg2 from "/images/process2-2.png";
import processImg3 from "/images/process2-3.png";
import boxShape from "/images/porcess-shape1.png";
import boxShape2 from "/images/porcess-shape2.png";
import ProcessCard from "./ProcessCard";

const processData = [
  {
    id: 1,
    processImg: processImg,
    processTitle: "Account Register",
    processDesc:
      "Opportunities before extensible market Dramatically pursue us",
  },

  {
    id: 2,
    processImg: processImg2,
    processTitle: "Add New Card",
    processDesc:
      "Opportunities before extensible market Dramatically pursue us",
  },
  {
    id: 3,
    processImg: processImg3,
    processTitle: "Varyfied Account",
    processDesc:
      "Opportunities before extensible market Dramatically pursue us",
  },
];

const Process = () => {
  return (
    <section className="py-[90px] pb-[76px] rounded relative bg-[url('/images/process-bg.jpg')] bg-cover bg-center bg-no-repeat z-10 mt-[74px]">
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
    </section>
  );
};

export default Process;
