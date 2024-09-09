import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const processBoxCard = ({
  processBoxTitle,
  boxNumber,
  processBoxDesc,
  processBoxBtn,
  processBtnIcon,
}) => {
  return (
    <div className="group relative">
      <h6 className="size-[76px] rounded-full bg-[#ffffff1a] text-2xl font-FiraSans text-white font-semibold relative flex justify-center items-center z-10 overflow-hidden before:absolute before:top-[10px] before:left-[10px] before:size-[56px] before:border before:border-dashed before:border-white before:rounded-full before:animate-rotational">
        {boxNumber}
      </h6>
      <h5 className="font-FiraSans font-semibold inline-block text-white text-[22px] mt-6 mb-3">
        {processBoxTitle}
      </h5>
      <p className="font-FiraSans text-white opacity-70 sm:w-2/3 md:w-full mb-5">
        {processBoxDesc}
      </p>
      <Link to={"/"}>
        <button className="flex items-center gap-2 font-FiraSans text-white uppercase relative z-10 before:absolute before:bottom-0 before:right-0 before:w-0 before:h-[1px] before:-z-10 before:bg-white before:transition-all before:duration-500 hover:before:w-full hover:before:left-0">
          {processBoxBtn}
          {processBtnIcon}
        </button>
      </Link>
    </div>
  );
};

export default processBoxCard;
