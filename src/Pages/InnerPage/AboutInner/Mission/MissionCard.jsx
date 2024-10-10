/* eslint-disable react/prop-types */
const MissionCard = ({ missionIcon, missionTitle, missionDesc }) => {
  return (
    <div className='px-9 lg:px-4 xl:px-9 pt-10 pb-9 rounded-3xl relative z-10 border-2 border-white overflow-hidden transition-all duration-500 hover:border-Secondarycolor-0 group'>
      <span className='absolute bg-Secondarycolor-0 left-[12.5%] top-0 h-full w-0 transition-all duration-500 -z-10 group-hover:w-[25%] group-hover:left-0'></span>
      <span className='absolute bg-Secondarycolor-0 left-[37.5%] top-0 h-full w-0 transition-all duration-500 -z-10 group-hover:w-[25%] group-hover:left-[25%]'></span>
      <span className='absolute bg-Secondarycolor-0 left-[62.5%] top-0 h-full w-0 transition-all duration-500 -z-10 group-hover:w-[25%] group-hover:left-1/2'></span>
      <span className='absolute bg-Secondarycolor-0 left-[87.5%] top-0 h-full w-0 transition-all duration-500 -z-10 group-hover:w-[25%] group-hover:left-[75%]'></span>
      <div className='flex items-center gap-5'>
        <div className='size-[66px] border-2 border-white bg-white bg-opacity-15 flex items-center justify-center rounded-full'>
          <img
            src={missionIcon}
            draggable='false'
            className="transition-all duration-500 group-hover:brightness-0 group-hover:invert-[1]"
          />
        </div>
        <h5 className='font-AlbertSans font-bold text-2xl text-HeadingColor-0 transition-all duration-500 group-hover:text-white'>
          {missionTitle}
        </h5>
      </div>
      <p className='font-AlbertSans text-TextColor2-0 transition-all duration-500 group-hover:text-TextColor-0 mt-7'>
        {missionDesc}
      </p>
    </div>
  );
};

export default MissionCard;
