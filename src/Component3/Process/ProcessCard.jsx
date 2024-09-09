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
      <div className="inline-block m-auto relative z-10 before:absolute before:-top-9 before:-left-9 before:w-[142px] before:h-[142px] before:border-[2px] before:border-BorderColor2-0 before:transition-all before:duration-500 group-hover:before:border-dashed group-hover:before:border-PrimaryColor-0 before:rounded-full before:animate-rotate">
        <img src={processImg} draggable="false" />
        <img
          src={boxShape}
          draggable="false"
          className="absolute top-1/2 -translate-y-1/2 -right-[150px] 2xl:-right-[180px] hidden xl:block"
        />
        <h6 className="w-[40px] h-[40px] rounded-full bg-PrimaryColor-0 text-white font-FiraSans text-lg flex justify-center items-center absolute -top-8 -right-7">
          {boxNumber1}
        </h6>
      </div>
      <h5 className="font-FiraSans font-bold text-HeadingColor-0 text-2xl mt-14 mb-4">
        {processTitle}
      </h5>
      <p className="font-FiraSans text-TextColor2-0 sm:w-2/3 md:w-full 2xl:w-3/4 mx-auto">
        {processDesc}
      </p>
    </div>
  );
};

export default ProcessCard;
