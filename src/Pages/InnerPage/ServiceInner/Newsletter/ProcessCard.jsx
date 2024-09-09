/* eslint-disable react/prop-types */
const ProcessCard = ({ processImg, processTitle, processDesc }) => {
  return (
    <div className="text-center group relative">
      <div className="inline-block m-auto relative">
        <div className="w-20 h-20 rounded-full bg-PrimaryColor-0 flex justify-center items-center relative z-10 before:absolute before:-top-[10px] before:-left-[10px] before:w-[100px] before:h-[100px] before:border-[2px] before:border-dashed before:border-PrimaryColor-0 before:rounded-full before:animate-rotate">
          <img src={processImg} draggable="false" />
        </div>
      </div>
      <h5 className="font-FiraSans font-semibold text-HeadingColor-0 text-2xl mt-9 mb-4">
        {processTitle}
      </h5>
      <p className="font-FiraSans text-TextColor2-0 sm:w-2/3 md:w-full 2xl:w-3/4 mx-auto">
        {processDesc}
      </p>
    </div>
  );
};

export default ProcessCard;
