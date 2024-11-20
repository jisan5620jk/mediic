import bannerCheck from '/images/tick.png';
import { Link } from 'react-router-dom';
import { GoArrowRight } from 'react-icons/go';

const Banner = () => {
  return (
    <div className='bg-BodyBg-0 px-2 lg:px-[30px]'>
      <section className='bg-[url(/images/hero-bg2.png)] bg-cover bg-no-repeat h-[700px] sm:h-[700px] md:h-[700px] lg:h-[700px] xl:h-[850px] 2xl:h-[850px] flex items-center relative z-10 overflow-hidden rounded-t-2xl md:rounded-[30px]'>
        <div className='absolute z-10 top-0 left-0 w-full md:w-[834px] md:h-[447px] inline-block bg-Secondarycolor-0 rounded-[30px] pl-8 md:pl-[100px] pt-[88px] pb-20'>
          <h1 className='font-AlbertSans font-semibold text-3xl leading-[40px] sm:text-6xl sm:leading-[70px] md:text-[70px] md:leading-[80px] text-white'>
            Bringing you the <br /> Best Healthcare
          </h1>
          <div className='pt-8 inline-block'>
            <Link to={'/appointment'}>
              <button className='primary-btn'>
                Free Consultation
                <GoArrowRight
                  size={'22'}
                  className='-rotate-45'
                />
              </button>
            </Link>
          </div>
        </div>
        <div className='absolute bottom-8 right-8 xl:bottom-[100px] xl:right-[100px] ml-8  flex flex-col sm:flex-row gap-5 bg-white bg-opacity-30 backdrop-filter backdrop-blur-md border-2 border-white rounded-[30px] pt-8 px-4 sm:px-10 pb-9'>
          <div className='mt-[6px]'>
            <img
              src={bannerCheck}
              draggable='false'
            />
          </div>
          <div className='flex-1'>
            <h5 className='font-AlbertSans font-semibold text-2xl text-HeadingColor-0'>
              Best Medical
            </h5>
            <p className='font-DMSans text-HeadingColor-0 xl:text-white 2xl:text-TextColor2-0 mt-[6px]'>
              Rapidiously reinvent long-term <br className='hidden sm:block' />{' '}
              impact collaboration
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
