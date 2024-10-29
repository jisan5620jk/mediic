import aboutThumb from '/images/about3.jpg';
import aboutContentShape from '/images/dctr.png';
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';
import { FaCircle } from 'react-icons/fa6';
import { GoArrowRight } from 'react-icons/go';

const About = () => {
  return (
    <section className='py-[120px] bg-BodyBg-0 relative z-10'>
      <div className='absolute top-1/3 right-24 -z-10 hidden xl:block'>
        <img
          src={aboutContentShape}
          draggable='false'
          className='animate-wiggle'
        />
      </div>
      <div className='Container'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 lg:gap-10 2xl:gap-14 items-center'>
          <div
            className='relative z-10 rounded-[30px] overflow-hidden 2xl:mr-14'
            data-aos='fade-up'
            data-aos-duration='1000'
          >
            <img
              src={aboutThumb}
              draggable='false'
              className='w-full'
            />
            <div className='bg-PrimaryColor-0 flex items-center justify-evenly pt-10 pb-9 pl-4 sm:pl-0'>
              <div>
                <div>
                  <CountUp
                    start={-11}
                    end={'275'}
                    suffix={'k'}
                    className='font-AlbertSans text-3xl sm:text-4xl md:text-[45px] leading-10 text-white font-bold'
                  />
                </div>
                <p className='font-AlbertSans text-white uppercase mt-2'>
                  Recovered Patients
                </p>
              </div>
              <div>
                <div>
                  <CountUp
                    start={-11}
                    end={'90'}
                    suffix={'%'}
                    className='font-AlbertSans text-3xl sm:text-4xl md:text-[45px] leading-10 text-white font-bold'
                  />
                </div>
                <p className='font-AlbertSans text-white uppercase mt-2'>
                  Satisfaction Rate
                </p>
              </div>
            </div>
          </div>
          <div
            className='relative'
            data-aos='fade-up'
            data-aos-duration='1000'
          >
            <h5 className='font-AlbertSans font-medium text-sm sm:text-base text-PrimaryColor-0 uppercase mb-4'>
              About Company
            </h5>
            <h1 className='font-AlbertSans font-bold capitalize text-HeadingColor-0 text-xl leading-[30px] sm:text-3xl sm:leading-[40px] md:text-[40px] md:leading-[50px] lg:text-[42px] lg:leading-[52px] xl:text-[52px] xl:leading-[62px] 2xl:text-[60px] 2xl:leading-[70px]'>
              Best Health Center <br /> Since - 2007
            </h1>
            <p className='font-DMSans text-TextColor2-0 mt-4 mb-5'>
              Continually evolve professional intellectual capital without
              enterprise users. Seamlessly matrix value added e-commerce.
              Uniquely e-enable innovative technologies via team
            </p>
            <div className='grid items-center grid-cols-1 gap-7 sm:grid-cols-2 pb-[18px] pt-4'>
              <div className='flex items-center gap-3'>
                <div className='text-PrimaryColor-0'>
                  <FaCircle size={'10'} />
                </div>
                <div className='flex-1'>
                  <h5 className='font-DMSans text-HeadingColor-0'>
                    Psychodynamic Therapy
                  </h5>
                </div>
              </div>
              <div className='flex items-center gap-3'>
                <div className='text-PrimaryColor-0'>
                  <FaCircle size={'10'} />
                </div>
                <div className='flex-1'>
                  <h5 className='font-DMSans text-HeadingColor-0'>
                    Free Consultants
                  </h5>
                </div>
              </div>
            </div>
            <div className='grid items-center grid-cols-1 gap-7 sm:grid-cols-2 pb-8'>
              <div className='flex items-center gap-3'>
                <div className='text-PrimaryColor-0'>
                  <FaCircle size={'10'} />
                </div>
                <div className='flex-1'>
                  <h5 className='font-DMSans text-HeadingColor-0'>
                    Mental Problem Therapy
                  </h5>
                </div>
              </div>
              <div className='flex items-center gap-3'>
                <div className='text-PrimaryColor-0'>
                  <FaCircle size={'10'} />
                </div>
                <div className='flex-1'>
                  <h5 className='font-DMSans text-HeadingColor-0'>
                    Patient Satisfications
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
