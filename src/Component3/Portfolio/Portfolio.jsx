import PortfolioCard from './PortfolioCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import portfolioThumb from '/images/port1.jpg';
import 'swiper/css';
import { FaCircle, FaSquareFull } from 'react-icons/fa6';
import { HiOutlineArrowRight } from 'react-icons/hi2';

const PortfolioData = [
  {
    id: 1,
    portfolioThumb: portfolioThumb,
    portfolioShape: <FaSquareFull />,
    portfolioTitle: 'Dental Whitening',
    portfolioUrl: '/',
    btnIcon: <HiOutlineArrowRight />,
  },
];

const Portfolio = () => {
  const settings = {
    loop: true,
    spaceBetween: 30,
    speed: 1000,
    initialSlide: 1,
    autoplay: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 4,
      },
      1400: {
        slidesPerView: 4,
      },
    },
  };

  return (
    <section className='mx-2 lg:mx-[50px] px-2 lg:px-[50px]  bg-gradient-to-t from-BodyBg-0 from-25% py-[120px] relative rounded-b-[30px]'>
      <div className='text-center'>
        <div className='inline-block mb-5'>
          <h6 className='flex items-center justify-start gap-2 bg-white bg-opacity-0 text-white text-[15px] font-semibold border border-white border-opacity-10 rounded-full font-AlbertSans px-[22px] py-2 uppercase'>
            <FaCircle size={'8'} />
            Hospital Motivation
          </h6>
        </div>
        <h1 className='font-AlbertSans font-bold uppercase text-white text-[20px] leading-[28px] sm:text-[38px] sm:leading-[48px] md:text-[48px] md:leading-[58px] lg:text-[40px] lg:leading-[50px] xl:text-[46px] xl:leading-[57px] 2xl:text-[55px] 2xl:leading-[67px]'>
          Medical Department
        </h1>
      </div>
      <div className='relative z-10 mt-[44px]'>
        <Swiper {...settings}>
          {PortfolioData.map(
            ({
              id,
              portfolioThumb,
              portfolioShape,
              portfolioTitle,
              portfolioUrl,
              btnIcon,
            }) => {
              return (
                <SwiperSlide key={id}>
                  <div className='pb-[94px]'>
                    <PortfolioCard
                      portfolioThumb={portfolioThumb}
                      portfolioShape={portfolioShape}
                      portfolioTitle={portfolioTitle}
                      portfolioUrl={portfolioUrl}
                      btnIcon={btnIcon}
                    />
                  </div>
                </SwiperSlide>
              );
            }
          )}
        </Swiper>
      </div>
    </section>
  );
};

export default Portfolio;
