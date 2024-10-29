import aboutThumb from '/images/about.png';
import heart from '/images/heart.png';
import aboutShape from '/images/star.png';
import aboutContentShape from '/images/dctr.png';
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';
import { FaCircleCheck } from 'react-icons/fa6';
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
        <div className='grid grid-cols-1 gap-8 lg:items-center lg:grid-cols-2 border-b border-BorderColor3-0 pb-7'>
          <div
            className='flex items-center gap-7'
            data-aos='fade-up'
            data-aos-duration='1000'
          >
            <h1 className='font-AlbertSans font-bold uppercase text-HeadingColor-0 text-xl leading-[30px] sm:text-3xl sm:leading-[40px] md:text-[40px] md:leading-[50px] lg:text-[42px] lg:leading-[52px] xl:text-[52px] xl:leading-[62px] 2xl:text-[60px] 2xl:leading-[70px]'>
              About Medical
            </h1>
            <img
              src={aboutShape}
              draggable='false'
              className='animate-rotational'
            />
          </div>
          <div
            className='flex lg:justify-end'
            data-aos='fade-up'
            data-aos-duration='1000'
          >
            <div className='flex items-center gap-8 '>
              <div>
                <CountUp
                  start={-11}
                  end={'10'}
                  suffix={'+'}
                  className='font-AlbertSans text-3xl sm:text-4xl md:text-[60px] leading-[50px] text-HeadingColor-0 font-bold'
                />
              </div>
              <p className='font-AlbertSans font-medium text-lg text-HeadingColor-0 uppercase'>
                Years Of <br /> Experiences
              </p>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 lg:gap-10 2xl:gap-16 mt-[60px] items-center'>
          <div
            className='relative z-10'
            data-aos='fade-up'
            data-aos-duration='1000'
          >
            <img
              src={aboutThumb}
              draggable='false'
              className='w-full 2xl:w-[inherit]'
            />
            <div className='absolute top-0 right-0 xl:top-0 xl:right-0 size-[90px] sm:size-[162px] md:size-[220px] lg:size-[150px] xl:size-[170px] 2xl:size-[200px] bg-PrimaryColor-0 rounded-[30px] flex items-center justify-center'>
              <div className='size-14 sm:size-24 md:size-36 lg:size-28 xl:size-[120px] 2xl:size-[130px] animate-rotational '>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 250.5 250.5'
                  className='overflow-visible'
                >
                  <path
                    d='M.25,125.25a125,125,0,1,1,125,125,125,125,0,0,1-125-125'
                    id='e-path-35ee1b2'
                    className='fill-transparent'
                  ></path>
                  <text className='font-AlbertSans text-[32px] uppercase'>
                    <textPath
                      id='e-text-path-35ee1b2'
                      href='#e-path-35ee1b2'
                      startOffset='0%'
                      className='fill-white'
                    >
                      NEOROLOGIST * GYNOCLOGIST * HEALTHCARE *
                    </textPath>
                  </text>
                </svg>
              </div>
              <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                <img
                  src={heart}
                  draggable='false'
                  className='animate-pulse'
                />
              </div>
            </div>
          </div>
          <div
            className='relative'
            data-aos='fade-up'
            data-aos-duration='1000'
          >
            <h5 className='font-AlbertSans font-medium text-sm sm:text-base text-PrimaryColor-0 uppercase mb-4'>
              FINANCE CONSULTING
            </h5>
            <h1 className='font-AlbertSans font-bold text-HeadingColor-0 text-[16px] leading-[23px] sm:text-[22px] sm:leading-[35px] md:text-[30px] md:leading-[35px] lg:text-[26px] lg:leading-[33px] xl:text-[32px] xl:leading-[39px] 2xl:text-[32px] 2xl:leading-[39px]'>
              Since 2007 We’re working Medical group of more than 1200+ Patients
              help from our medical
            </h1>
            <h5 className='font-AlbertSans font-semibold text-lg sm:text-[22px] text-HeadingColor-0 mt-10 mb-6'>
              We’re Putting your Comfort List
            </h5>
            <div className='grid items-center grid-cols-1 gap-7 sm:grid-cols-2 border-t border-dashed border-HeadingColor-0 border-opacity-25 pb-[18px] pt-4'>
              <div className='flex items-center gap-2'>
                <div className='text-PrimaryColor-0'>
                  <FaCircleCheck size={'20'} />
                </div>
                <div className='flex-1'>
                  <h5 className='font-DMSans text-HeadingColor-0'>
                    Completely to syndicate
                  </h5>
                </div>
              </div>
              <div className='flex items-center gap-2'>
                <div className='text-PrimaryColor-0'>
                  <FaCircleCheck size={'20'} />
                </div>
                <div className='flex-1'>
                  <h5 className='font-DMSans text-HeadingColor-0'>
                    24 Hrs Aumbulance Service
                  </h5>
                </div>
              </div>
            </div>
            <div className='grid items-center grid-cols-1 gap-7 sm:grid-cols-2 border-t border-dashed border-HeadingColor-0 border-opacity-25 pb-[18px] pt-4'>
              <div className='flex items-center gap-2'>
                <div className='text-PrimaryColor-0'>
                  <FaCircleCheck size={'20'} />
                </div>
                <div className='flex-1'>
                  <h5 className='font-DMSans text-HeadingColor-0'>
                    Medical Surgical Services
                  </h5>
                </div>
              </div>
              <div className='flex items-center gap-2'>
                <div className='text-PrimaryColor-0'>
                  <FaCircleCheck size={'20'} />
                </div>
                <div className='flex-1'>
                  <h5 className='font-DMSans text-HeadingColor-0'>
                    100% Satisfaction Rate
                  </h5>
                </div>
              </div>
            </div>
            <div className='grid items-center grid-cols-1 gap-7 sm:grid-cols-2 border-y border-dashed border-HeadingColor-0 border-opacity-25 pb-[18px] pt-4 mb-12'>
              <div className='flex items-center gap-2'>
                <div className='text-PrimaryColor-0'>
                  <FaCircleCheck size={'20'} />
                </div>
                <div className='flex-1'>
                  <h5 className='font-DMSans text-HeadingColor-0'>
                    Instant Operations System
                  </h5>
                </div>
              </div>
              <div className='flex items-center gap-2'>
                <div className='text-PrimaryColor-0'>
                  <FaCircleCheck size={'20'} />
                </div>
                <div className='flex-1'>
                  <h5 className='font-DMSans text-HeadingColor-0'>
                    Professional Doctors
                  </h5>
                </div>
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
