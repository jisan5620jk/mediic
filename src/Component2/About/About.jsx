import aboutThumb from '/images/about2.png';
import heart from '/images/shape2.jpg';
import aboutIcon2 from '/images/icon4.png';
import aboutContentShape from '/images/dctr.png';
import { Link } from 'react-router-dom';
import { GoArrowRight } from 'react-icons/go';

const About = () => {
  return (
    <section className='pt-[138px] pb-[120px] bg-BodyBg-0 relative z-10'>
      <div className='absolute top-1/3 right-24 -z-10 hidden xl:block'>
        <img
          src={aboutContentShape}
          draggable='false'
          className='animate-wiggle'
        />
      </div>
      <div className='Container'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 mt-[60px] items-center'>
          <div className='relative z-10'>
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
          </div>
          <div className='relative'>
            <h5 className='font-AlbertSans font-medium text-sm sm:text-base text-PrimaryColor-0 uppercase mb-4'>
              About Company
            </h5>
            <h1 className='font-AlbertSans font-bold capitalize text-HeadingColor-0 text-xl leading-[30px] sm:text-3xl sm:leading-[40px] md:text-[40px] md:leading-[50px] lg:text-[42px] lg:leading-[52px] xl:text-[52px] xl:leading-[62px] 2xl:text-[60px] 2xl:leading-[70px]'>
              Best Health Center <br /> Since - 2007
            </h1>
            <p className='font-AlbertSans text-lg text-TextColor2-0 mt-10 mb-6'>
              Continually evolve professional intellectual capital without
              enterprise users. Seamlessly matrix value added e-commerce.
              Uniquely e-enable innovative technologies via team
            </p>
            <div>
              <div className='group px-4 sm:px-10 lg:px-5 xl:px-8 2xl:px-10 pt-10 pb-11 bg-Secondarycolor-0 rounded-3xl relative z-10 overflow-hidden'>
                <span className='absolute bg-PrimaryColor-0 left-[12.5%] top-0 h-full w-0 transition-all duration-500 -z-10 group-hover:w-[25%] group-hover:left-0'></span>
                <span className='absolute bg-PrimaryColor-0 left-[37.5%] top-0 h-full w-0 transition-all duration-500 -z-10 group-hover:w-[25%] group-hover:left-[25%]'></span>
                <span className='absolute bg-PrimaryColor-0 left-[62.5%] top-0 h-full w-0 transition-all duration-500 -z-10 group-hover:w-[25%] group-hover:left-1/2'></span>
                <span className='absolute bg-PrimaryColor-0 left-[87.5%] top-0 h-full w-0 transition-all duration-500 -z-10 group-hover:w-[25%] group-hover:left-[75%]'></span>
                <h3 className='absolute top-2 right-2 z-10 font-AlbertSans font-bold text-[60px] text-white text-opacity-15'>
                  02
                </h3>
                <div>
                  <img
                    src={aboutIcon2}
                    draggable='false'
                  />
                </div>
                <h5 className='font-AlbertSans font-semibold text-white text-[22px]'>
                  Patient Satisfaction
                </h5>
              </div>
            </div>
            <Link to={'/about'}>
              <button className='primary-btn mt-3'>
                More About
                <GoArrowRight
                  size={'22'}
                  className='-rotate-45'
                />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
