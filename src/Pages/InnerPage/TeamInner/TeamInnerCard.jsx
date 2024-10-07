/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

const TeamInnerCard = ({
  teamThumb,
  socialIcon,
  socialIcon2,
  socialIcon3,
  teamTitle,
  teamDesc,
}) => {
  return (
    <div className='group relative bg-white bg-opacity-30 rounded-3xl z-10 overflow-hidden before:absolute before:top-0 before:left-0 before:w-full before:h-0 before:bg-Secondarycolor-0 before:-z-10 before:transition-all before:duration-500 hover:before:h-full'>
      <div className='relative rounded-t-3xl overflow-hidden border-t-2 border-white border-opacity-80 transition-all duration-500 group-hover:border-Secondarycolor-0 text-center pt-[22px] pb-7 z-10'>
        <h5 className='font-AlbertSans font-bold text-[26px] text-HeadingColor-0 transition-all duration-500 group-hover:text-white pb-[2px]'>
          {teamTitle}
        </h5>
        <p className='font-AlbertSans text-TextColor2-0 text-[15px] transition-all duration-500 group-hover:text-white'>
          {teamDesc}
        </p>
      </div>
      <div className='relative overflow-hidden rounded-3xl before:absolute before:top-0 before:left-0 before:bg-gradient-to-br before:from-PrimaryColor-0 before:from-10% before:via-blue-500/0 before:to-blue-500/0 before:w-0 before:h-0 before:transition-all before:duration-500 before:z-10 group-hover:before:h-full group-hover:before:w-full'>
        <img
          src={teamThumb}
          className='w-full xl:w-[inherit] m-auto'
        />
        <ul>
          <li className='absolute z-20 -left-10 transition-all duration-300 group-hover:left-7 top-7'>
            <Link to={'/'}>
              <button className='size-9 border-2 border-white hover:border-Secondarycolor-0 flex justify-center items-center rounded-full overflow-hidden relative bg-white bg-opacity-20 transition-all duration-500 hover:text-white text-HeadingColor-0 z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-Secondarycolor-0 before:-z-10 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100'>
                {socialIcon}
              </button>
            </Link>
          </li>
          <li className='absolute z-20 -left-10 transition-all duration-500 group-hover:left-7 top-[70px]'>
            <Link to={'/'}>
              <button className='size-9 border-2 border-white hover:border-Secondarycolor-0 flex justify-center items-center rounded-full overflow-hidden relative bg-white bg-opacity-20 transition-all duration-500 hover:text-white text-HeadingColor-0 z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-Secondarycolor-0 before:-z-10 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100'>
                {socialIcon2}
              </button>
            </Link>
          </li>
          <li className='absolute z-20 -left-10 transition-all duration-700 group-hover:left-7 top-28'>
            <Link to={'/'}>
              <button className='size-9 border-2 border-white hover:border-Secondarycolor-0 flex justify-center items-center rounded-full overflow-hidden relative bg-white bg-opacity-20 transition-all duration-500 hover:text-white text-HeadingColor-0 z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-Secondarycolor-0 before:-z-10 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100'>
                {socialIcon3}
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TeamInnerCard;
