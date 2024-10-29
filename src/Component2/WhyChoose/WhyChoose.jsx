import whyChooseThumb from '/images/why-chs.png';
import whyChooseThumb2 from '/images/why-chse.jpg';
import heart from '/images/banner-heart.png';
import whyChooseIcon from '/images/why-icn.png';
import whyChooseIcon2 from '/images/why-icn2.png';
import whyChooseIcon3 from '/images/why-icn3.png';
import whyChooseIcon4 from '/images/why-icn4.png';
import { Link } from 'react-router-dom';

const WhyChoose = () => {
  return (
    <section className='py-[120px] bg-[url(/images/why-choose.jpg)] bg-no-repeat bg-center bg-cover relative'>
      <div className='Container'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 items-center'>
          <div
            className='relative z-30'
            data-aos='fade-up'
            data-aos-duration='1000'
          >
            <img
              src={whyChooseThumb}
              draggable='false'
              className='2xl:max-w-[inherit] 2xl:-ml-[216px]'
            />
            <div className='absolute left-2 top-2 md:top-8 lg:top-4 2xl:top-8 2xl:-left-[186px]'>
              <img
                src={heart}
                draggable='false'
                className='animate-rotateX w-3/6 sm:w-5/6 md:w-[inherit] lg:w-5/6 2xl:w-[inherit]'
              />
            </div>
            <div className='absolute z-10 -right-[222px] sm:-right-[110px] md:-right-6 lg:-right-[140px] xl:-right-[110px] 2xl:right-[70px] bottom-0 rounded-md sm:rounded-2xl lg:rounded-[30px] overflow-hidden'>
              <img
                src={whyChooseThumb2}
                draggable='false'
                className='w-4/12 sm:w-8/12 md:w-11/12 lg:w-7/12 xl:w-8/12 2xl:w-[inherit]'
              />
            </div>
          </div>
          <div
            className='relative z-30'
            data-aos='fade-up'
            data-aos-duration='1000'
          >
            <h5 className='font-AlbertSans font-medium text-sm sm:text-base text-PrimaryColor-0 uppercase mb-4'>
              why choose us?
            </h5>
            <h1 className='font-AlbertSans font-bold capitalize text-HeadingColor-0 text-xl leading-[30px] sm:text-3xl sm:leading-[40px] md:text-[40px] md:leading-[50px] lg:text-[42px] lg:leading-[52px] xl:text-[52px] xl:leading-[62px] 2xl:text-[60px] 2xl:leading-[70px]'>
              Medical Health Care <br /> Human Specialist
            </h1>
            <p className='font-DMSans text-TextColor2-0 mt-6 mb-10'>
              Continually evolve professional intellectual capital without
              enterprise users. Seamlessly matrix value added e-commerce.
              Uniquely e-enable innovative technologies via team
            </p>
            <div className='grid grid-cols-1 sm:grid-cols-2 items-center gap-5'>
              <div className='group px-[34px] sm:px-4 md:px-[34px] xl:px-4 2xl:px-[34px] pt-7 pb-[26px] bg-white bg-opacity-25 border-2 border-white rounded-2xl relative z-10 overflow-hidden flex items-center gap-5 transition-all duration-500 hover:border-PrimaryColor-0'>
                <span className='absolute bg-PrimaryColor-0 left-[12.5%] top-0 h-full w-0 transition-all duration-500 -z-10 group-hover:w-[25%] group-hover:left-0'></span>
                <span className='absolute bg-PrimaryColor-0 left-[37.5%] top-0 h-full w-0 transition-all duration-500 -z-10 group-hover:w-[25%] group-hover:left-[25%]'></span>
                <span className='absolute bg-PrimaryColor-0 left-[62.5%] top-0 h-full w-0 transition-all duration-500 -z-10 group-hover:w-[25%] group-hover:left-1/2'></span>
                <span className='absolute bg-PrimaryColor-0 left-[87.5%] top-0 h-full w-0 transition-all duration-500 -z-10 group-hover:w-[25%] group-hover:left-[75%]'></span>
                <div>
                  <img
                    src={whyChooseIcon}
                    draggable='false'
                    className='transition-all duration-500 group-hover:brightness-0 group-hover:invert-[1]'
                  />
                </div>
                <h5 className='flex-1 font-AlbertSans font-semibold text-HeadingColor-0 text-[22px] transition-all duration-500 group-hover:text-white'>
                  Individual Approach
                </h5>
              </div>
              <div className='group px-[34px] sm:px-4 md:px-[34px] xl:px-4 2xl:px-[34px] pt-7 pb-[26px] bg-white bg-opacity-25 border-2 border-white rounded-2xl relative z-10 overflow-hidden flex items-center gap-5 transition-all duration-500 hover:border-PrimaryColor-0'>
                <span className='absolute bg-PrimaryColor-0 left-[12.5%] top-0 h-full w-0 transition-all duration-500 -z-10 group-hover:w-[25%] group-hover:left-0'></span>
                <span className='absolute bg-PrimaryColor-0 left-[37.5%] top-0 h-full w-0 transition-all duration-500 -z-10 group-hover:w-[25%] group-hover:left-[25%]'></span>
                <span className='absolute bg-PrimaryColor-0 left-[62.5%] top-0 h-full w-0 transition-all duration-500 -z-10 group-hover:w-[25%] group-hover:left-1/2'></span>
                <span className='absolute bg-PrimaryColor-0 left-[87.5%] top-0 h-full w-0 transition-all duration-500 -z-10 group-hover:w-[25%] group-hover:left-[75%]'></span>
                <div>
                  <img
                    src={whyChooseIcon2}
                    draggable='false'
                    className='transition-all duration-500 group-hover:brightness-0 group-hover:invert-[1]'
                  />
                </div>
                <h5 className='flex-1 font-AlbertSans font-semibold text-HeadingColor-0 text-[22px] transition-all duration-500 group-hover:text-white'>
                  Personalized Treatment
                </h5>
              </div>
              <div className='lg:hidden group px-[34px] sm:px-4 md:px-[34px] xl:px-4 2xl:px-[34px] pt-7 pb-[26px] bg-white bg-opacity-25 border-2 border-white rounded-2xl relative z-10 overflow-hidden flex xl:flex items-center gap-5 transition-all duration-500 hover:border-PrimaryColor-0'>
                <span className='absolute bg-PrimaryColor-0 left-[12.5%] top-0 h-full w-0 transition-all duration-500 -z-10 group-hover:w-[25%] group-hover:left-0'></span>
                <span className='absolute bg-PrimaryColor-0 left-[37.5%] top-0 h-full w-0 transition-all duration-500 -z-10 group-hover:w-[25%] group-hover:left-[25%]'></span>
                <span className='absolute bg-PrimaryColor-0 left-[62.5%] top-0 h-full w-0 transition-all duration-500 -z-10 group-hover:w-[25%] group-hover:left-1/2'></span>
                <span className='absolute bg-PrimaryColor-0 left-[87.5%] top-0 h-full w-0 transition-all duration-500 -z-10 group-hover:w-[25%] group-hover:left-[75%]'></span>
                <div>
                  <img
                    src={whyChooseIcon3}
                    draggable='false'
                    className='transition-all duration-500 group-hover:brightness-0 group-hover:invert-[1]'
                  />
                </div>
                <h5 className='flex-1 font-AlbertSans font-semibold text-HeadingColor-0 text-[22px] transition-all duration-500 group-hover:text-white'>
                  Any Infections Protection
                </h5>
              </div>
              <div className='lg:hidden group px-[34px] sm:px-4 md:px-[34px] xl:px-4 2xl:px-[34px] pt-7 pb-[26px] bg-white bg-opacity-25 border-2 border-white rounded-2xl relative z-10 overflow-hidden flex xl:flex items-center gap-5 transition-all duration-500 hover:border-PrimaryColor-0'>
                <span className='absolute bg-PrimaryColor-0 left-[12.5%] top-0 h-full w-0 transition-all duration-500 -z-10 group-hover:w-[25%] group-hover:left-0'></span>
                <span className='absolute bg-PrimaryColor-0 left-[37.5%] top-0 h-full w-0 transition-all duration-500 -z-10 group-hover:w-[25%] group-hover:left-[25%]'></span>
                <span className='absolute bg-PrimaryColor-0 left-[62.5%] top-0 h-full w-0 transition-all duration-500 -z-10 group-hover:w-[25%] group-hover:left-1/2'></span>
                <span className='absolute bg-PrimaryColor-0 left-[87.5%] top-0 h-full w-0 transition-all duration-500 -z-10 group-hover:w-[25%] group-hover:left-[75%]'></span>
                <div>
                  <img
                    src={whyChooseIcon4}
                    draggable='false'
                    className='transition-all duration-500 group-hover:brightness-0 group-hover:invert-[1]'
                  />
                </div>
                <h5 className='flex-1 font-AlbertSans font-semibold text-HeadingColor-0 text-[22px] transition-all duration-500 group-hover:text-white'>
                  Healthcare Services
                </h5>
              </div>
            </div>
            <div className='border-t-2 border-BorderColor3-0  mt-[50px] pt-4'>
              <p className='font-AlbertSans font-medium text-lg text-HeadingColor-0'>
                Need any Help? Contact with{' '}
                <Link
                  to={'/'}
                  className='text-PrimaryColor-0 underline'
                >
                  Mediic
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
