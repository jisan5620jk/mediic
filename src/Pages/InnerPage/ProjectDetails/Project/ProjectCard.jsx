/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const ProjectCard = ({
  projectThumb,
  projectSubTitle,
  projectContentShape,
  projectTitle,
  projectUrl,
  buttonTitle,
  buttonIcon,
}) => {
  return (
    <div className="relative z-10 group rounded-md overflow-hidden">
      <div className="overflow-hidden relative z-10 before:absolute before:top-0 before:left-1/2 before:w-0 before:h-full before:bg-PrimaryColor-0 before:transition-all before:duration-500 group-hover:before:w-full group-hover:before:left-0 group-hover:before:opacity-0">
        <img src={projectThumb} draggable="false" className="w-full" />
      </div>
      <div className="w-11/12 -mt-[42px] bg-[#f5f8ed] rounded-md overflow-hidden border-l-[5px] border-PrimaryColor-0 px-4 md:px-8 pb-8 transition-all duration-500 relative z-10 before:absolute before:left-0 before:w-0 before:h-full before:bg-HeadingColor-0 before:-z-10 before:transition-all before:duration-500 group-hover:before:w-full group-hover:-mt-[86px]">
        <img
          src={projectContentShape}
          draggable="false"
          className="absolute bottom-0 right-10 animate-dance2 -z-10 opacity-0 transition-all
           duration-500 group-hover:opacity-100"
        />
        <h6 className="font-FiraSans font-medium text-TextColor2-0 transition-all duration-500 group-hover:text-PrimaryColor-0 pt-[30px]">
          {projectSubTitle}
        </h6>
        <h5 className="font-FiraSans font-semibold text-HeadingColor-0 text-[26px] lg:text-2xl xl:text-[26px] transition-all duration-500 group-hover:text-white pt-1">
          {projectTitle}
        </h5>
        <div className="-mt-[42px] transition-all duration-500 opacity-0 group-hover:mt-0 group-hover:border-white group-hover:opacity-100">
          <Link to={projectUrl}>
            <button className="font-FiraSans text-white text-[17px] flex gap-2 items-center pt-3">
              {buttonTitle}
              <span className="text-PrimaryColor-0">{buttonIcon}</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
