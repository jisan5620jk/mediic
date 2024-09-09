/* eslint-disable react/prop-types */
const ProcessCard = ({
  processImg,
  boxNumber1,
  processTitle,
  boxShape,
  processDesc,
}) => {
  return (
    <div className="text-center group relative">
      <div className="inline-block m-auto relative z-10 before:absolute before:-top-[13px] before:-left-[13px] before:w-[242px] before:h-[242px] before:border-[2px] before:border-dashed before:border-PrimaryColor-0 before:rounded-full before:animate-rotate">
        <img src={processImg} draggable="false" />
        <img
          src={boxShape}
          draggable="false"
          className="absolute top-1/2 -translate-y-1/2 -right-[150px] 2xl:-right-[180px] hidden xl:block"
        />
        <h6 className="w-[48px] h-[48px] rounded-full bg-PrimaryColor-0 text-white font-FiraSans font-medium text-[22px] flex justify-center items-center absolute top-0 left-0">
          {boxNumber1}
        </h6>
      </div>
      <h5 className="font-FiraSans font-semibold text-white text-2xl mt-9 mb-4">
        {processTitle}
      </h5>
      <p className="font-FiraSans text-TextColor-0 sm:w-2/3 md:w-full 2xl:w-3/4 mx-auto">
        {processDesc}
      </p>
    </div>
  );
};

export default ProcessCard;
