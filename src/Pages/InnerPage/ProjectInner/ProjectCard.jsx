/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const ProjectCard = ({
  projectThumb,
  projectSubTitle,
  projectTitle,
  projectDesc,
  projectUrl,
  buttonIcon,
}) => {
  return (
    <div className='project-inner-box relative z-10 group rounded-md overflow-hidden'>
      <div className='project-inner-thumb overflow-hidden rounded-2xl relative z-10 before:absolute before:bottom-0 before:left-0 before:w-full before:h-0 before:bg-gradient-to-t before:from-Secondarycolor-0 before:from-20% before:to-transparent before:transition-all before:duration-500 group-hover:before:h-1/2'>
        <img
          src={projectThumb}
          draggable='false'
          className='w-full'
        />
      </div>
      <div className='project-inner-content sm:mx-[30px] lg:mx-0 xl:mx-7 2xl:mx-[30px] -mt-[90px] bg-gradient-to-b from-PrimaryColor-0 to-80% to-white rounded-2xl border-2 border-white overflow-hidden px-4 xl:px-5 2xl:px-9 pt-6 pb-7 transition-all duration-500 relative z-10 group-hover:-mt-[120px]'>
        <div className='flex items-center justify-between'>
          <div>
            <h6 className='project-inner-sub-title font-AlbertSans text-[15px] font-medium text-white uppercase pt-2'>
              {projectSubTitle}
            </h6>
            <h5 className='project-inner-title font-AlbertSans font-bold text-HeadingColor-0 text-xl sm:text-[22px] md:text-xl xl:text-[22px] pt-[2px] uppercase'>
              {projectTitle}
            </h5>
          </div>
          <div className='project-inner-btn inline-block transition-all duration-500 opacity-0 -mr-16 group-hover:opacity-100 group-hover:-mr-2'>
            <Link to={projectUrl}>
              <button className='size-10 rounded-full border-2 border-white bg-Secondarycolor-0 text-white text-[17px] flex justify-center items-center'>
                {buttonIcon}
              </button>
            </Link>
          </div>
        </div>
        <p className='font-AlbertSans text-TextColor2-0 pt-2'>{projectDesc}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
