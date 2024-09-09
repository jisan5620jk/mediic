/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const WorkCard = ({ workThumb, workTitle, workDesc, workUrl, workBtn }) => {
  return (
    <div className="group relative z-10 overflow-hidden">
      <img src={workThumb} draggable="false" className="w-full" />
      <Link
        to={workUrl}
        className="absolute top-[110px] left-0 -translate-x-1/2 opacity-0 transition-all duration-500 group-hover:left-1/2 group-hover:opacity-100"
      >
        <button className="size-[86px] rounded-full text-xl text-white bg-PrimaryColor-0 relative flex justify-center items-center z-10 overflow-hidden before:absolute before:top-[12px] before:left-[12px] before:size-[62px] before:border before:border-dashed before:border-white before:rounded-full before:animate-rotational">
          {workBtn}
        </button>
      </Link>
      <div className="absolute left-7 bottom-6">
        <Link to={workUrl}>
          <button className="font-FiraSans text-left font-medium text-[22px] sm:text-2xl lg:text-xl xl:text-2xl text-white">
            {workTitle}
          </button>
        </Link>
        <p className="font-FiraSans text-white opacity-80">{workDesc}</p>
      </div>
    </div>
  );
};

export default WorkCard;
