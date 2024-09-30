/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

const TeamCard = ({
  teamShape,
  teamThumb,
  socialIcon,
  socialIcon2,
  socialIcon3,
  teamTitle,
  teamDesc,
  teamIcon,
}) => {
  return (
    <div className='group text-center relative z-10 bg-BodyBg-0 py-10 rounded-2xl overflow-hidden before:absolute before:bottom-0 before:left-0 before:w-full before:h-1/2 before:border-x-2 before:border-b-2 before:rounded-b-2xl before:border-white before:transition-all before:duration-500 hover:before:opacity-0'>
      <div className='absolute -z-10 top-0 left-0 opacity-0 transition-all duration-500 group-hover:opacity-100'>
        <img
          src={teamShape}
          draggable='false'
        />
      </div>
      <span className='absolute bg-PrimaryColor-0 left-[12.5%] top-0 h-full w-0 transition-all duration-500 -z-20 group-hover:w-[25%] group-hover:left-0'></span>
      <span className='absolute bg-PrimaryColor-0 left-[37.5%] top-0 h-full w-0 transition-all duration-500 -z-20 group-hover:w-[25%] group-hover:left-[25%]'></span>
      <span className='absolute bg-PrimaryColor-0 left-[62.5%] top-0 h-full w-0 transition-all duration-500 -z-20 group-hover:w-[25%] group-hover:left-1/2'></span>
      <span className='absolute bg-PrimaryColor-0 left-[87.5%] top-0 h-full w-0 transition-all duration-500 -z-20 group-hover:w-[25%] group-hover:left-[75%]'></span>
      <div className='relative z-10 overflow-hidden mb-10'>
        <img
          src={teamThumb}
          draggable='false'
          className='mx-auto'
        />
      </div>
      <h5 className='font-AlbertSans font-bold text-2xl text-HeadingColor-0 transition-all duration-500 group-hover:text-white pt-7'>
        {teamTitle}
      </h5>
      <p className='font-AlbertSans text-HeadingColor-0 transition-all duration-500 uppercase pt-1 pb-7 group-hover:text-white'>
        {teamDesc}
      </p>
      <div className='flex justify-center'>
        <Link
          to={'/'}
          className='inline-block'
        >
          <button className='size-10 flex justify-center items-center rounded-full overflow-hidden relative bg-white bg-opacity-30 border-2 border-white border-opacity-60 text-HeadingColor-0 transition-all duration-500 hover:text-white z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-white before:-z-10 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100 group-hover:opacity-0'>
            {teamIcon}
          </button>
        </Link>
      </div>
      <ul className='flex justify-center gap-3 absolute z-10 -bottom-10 left-1/2 -translate-x-1/2 transition-all duration-500 group-hover:bottom-10'>
        <li>
          <Link to={'/'}>
            <button className='size-10 flex justify-center items-center rounded-full overflow-hidden relative bg-white bg-opacity-30 border-2 border-white border-opacity-60 text-white transition-all duration-500 hover:text-white z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-Secondarycolor-0 before:-z-10 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100'>
              {socialIcon}
            </button>
          </Link>
        </li>
        <li>
          <Link to={'/'}>
            <button className='size-10 flex justify-center items-center rounded-full overflow-hidden relative bg-white bg-opacity-30 border-2 border-white border-opacity-60 text-white transition-all duration-500 hover:text-white z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-Secondarycolor-0 before:-z-10 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100'>
              {socialIcon2}
            </button>
          </Link>
        </li>
        <li>
          <Link to={'/'}>
            <button className='size-10 flex justify-center items-center rounded-full overflow-hidden relative bg-white bg-opacity-30 border-2 border-white border-opacity-60 text-white transition-all duration-500 hover:text-white z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-Secondarycolor-0 before:-z-10 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100'>
              {socialIcon3}
            </button>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default TeamCard;
