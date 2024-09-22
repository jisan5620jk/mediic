import aboutThumb from '/images/about2.png';
import heart from '/images/shape2.jpg';
import thumbShape from '/images/dots.png';
import aboutIcon from '/images/icon3.png';
import aboutIcon2 from '/images/icon4.png';
import aboutContentShape from '/images/dctr.png';
import { Link } from 'react-router-dom';
import { GoArrowRight } from 'react-icons/go';
import { RiPhoneFill } from 'react-icons/ri';

const About = () => {
  return (
    <section className='py-[120px] bg-BodyBg-0 relative'>
      <div className='absolute top-1/3 right-24 -z-10 hidden xl:block'>
        <img
          src={aboutContentShape}
          draggable='false'
          className='animate-wiggle'
        />
      </div>
      <div className='Container'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 items-center'>
          <div className='relative z-30'>
            <img
              src={aboutThumb}
              draggable='false'
              className='w-full 2xl:w-[inherit]'
            />
            <div className='absolute bottom-0 left-0 rounded-[30px]'>
              <img
                src={heart}
                draggable='false'
                className='animate-pulse'
              />
            </div>
            <div className='absolute -z-10 right-10 -bottom-16'>
              <img
                src={thumbShape}
                draggable='false'
                className='animate-wiggle'
              />
            </div>
          </div>
          <div className='relative z-30'>
            <h5 className='font-AlbertSans font-medium text-sm sm:text-base text-PrimaryColor-0 uppercase mb-4'>
              About Company
            </h5>
            <h1 className='font-AlbertSans font-bold capitalize text-HeadingColor-0 text-xl leading-[30px] sm:text-3xl sm:leading-[40px] md:text-[40px] md:leading-[50px] lg:text-[42px] lg:leading-[52px] xl:text-[52px] xl:leading-[62px] 2xl:text-[60px] 2xl:leading-[70px]'>
              Best Health Center <br /> Since - 2007
            </h1>
            <p className='font-DMSans text-TextColor2-0 mt-4 mb-8'>
              Continually evolve professional intellectual capital without
              enterprise users. Seamlessly matrix value added e-commerce.
              Uniquely e-enable innovative technologies via team
            </p>
            <div className='grid grid-cols-2 items-center gap-[30px]'>
              <div className='group px-4 sm:px-10 lg:px-5 xl:px-8 2xl:px-10 pt-9 pb-[26px] bg-PrimaryColor-0 rounded-2xl relative z-10 overflow-hidden'>
                <span className='absolute bg-Secondarycolor-0 left-[12.5%] top-0 h-full w-0 transition-all duration-500 -z-10 group-hover:w-[25%] group-hover:left-0'></span>
                <span className='absolute bg-Secondarycolor-0 left-[37.5%] top-0 h-full w-0 transition-all duration-500 -z-10 group-hover:w-[25%] group-hover:left-[25%]'></span>
                <span className='absolute bg-Secondarycolor-0 left-[62.5%] top-0 h-full w-0 transition-all duration-500 -z-10 group-hover:w-[25%] group-hover:left-1/2'></span>
                <span className='absolute bg-Secondarycolor-0 left-[87.5%] top-0 h-full w-0 transition-all duration-500 -z-10 group-hover:w-[25%] group-hover:left-[75%]'></span>
                <h3 className='absolute top-0 right-5 z-10 font-AlbertSans font-bold text-[60px] text-white text-opacity-15'>
                  01
                </h3>
                <div>
                  <img
                    src={aboutIcon}
                    draggable='false'
                  />
                </div>
                <h5 className='font-AlbertSans font-semibold text-white text-[22px] pt-4'>
                  Latest Equipments
                </h5>
              </div>
              <div className='group px-4 sm:px-10 lg:px-5 xl:px-8 2xl:px-10 pt-9 pb-[26px] bg-Secondarycolor-0 rounded-2xl relative z-10 overflow-hidden'>
                <span className='absolute bg-PrimaryColor-0 left-[12.5%] top-0 h-full w-0 transition-all duration-500 -z-10 group-hover:w-[25%] group-hover:left-0'></span>
                <span className='absolute bg-PrimaryColor-0 left-[37.5%] top-0 h-full w-0 transition-all duration-500 -z-10 group-hover:w-[25%] group-hover:left-[25%]'></span>
                <span className='absolute bg-PrimaryColor-0 left-[62.5%] top-0 h-full w-0 transition-all duration-500 -z-10 group-hover:w-[25%] group-hover:left-1/2'></span>
                <span className='absolute bg-PrimaryColor-0 left-[87.5%] top-0 h-full w-0 transition-all duration-500 -z-10 group-hover:w-[25%] group-hover:left-[75%]'></span>
                <h3 className='absolute top-0 right-5 z-10 font-AlbertSans font-bold text-[60px] text-white text-opacity-15'>
                  02
                </h3>
                <div>
                  <img
                    src={aboutIcon2}
                    draggable='false'
                  />
                </div>
                <h5 className='font-AlbertSans font-semibold text-white text-[22px] pt-4'>
                  Patient Satisfaction
                </h5>
              </div>
            </div>
            <div className='flex items-center gap-[46px] mt-[54px]'>
              <Link to={'/about'}>
                <button className='primary-btn'>
                  More About
                  <GoArrowRight
                    size={'22'}
                    className='-rotate-45'
                  />
                </button>
              </Link>
              <div className='flex items-center gap-6'>
                <span className='size-[30px] flex items-center justify-center rounded-full text-PrimaryColor-0 border-2 border-PrimaryColor-0 relative before:absolute before:-top-[17px] before:-left-[17px] before:size-[60px] before:rounded-full before:border-2 before:border-PrimaryColor-0 before:border-dashed before:animate-rotational'>
                  <RiPhoneFill size={'18'} />
                </span>
                <Link to={'/'}>
                  <button className='font-AlbertSans font-semibold text-2xl text-HeadingColor-0 transition-all duration-500 hover:text-PrimaryColor-0'>
                    +123 (4567) 890
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
