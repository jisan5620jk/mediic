import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { EffectFlip } from 'swiper/modules';
import TestimonialCard from './TestimonialCard';
import testiThumb from '/images/testi-thumb.jpg';
import testiQuote from '/images/testi-quote.png';
import { FaCircle } from 'react-icons/fa6';
import circleShape from '/images/crcle-bg.png';
import TestimonialNavigation from './TestimonialNavigation';

const testiData = [
  {
    id: 1,
    testiQuote: testiQuote,
    testiDesc: `Doctean is the best medical in the world I have great
                experience with them the provide authentic results &
                have the best environment the inside here. I can't
                express enough gratitude for the exceptional care
                experienced at doctean kudos to the remarkable team for
                press support!, I highly recommend them.`,
    testiName: 'Jhon D. Alexon',
    testiDesignation: 'Mental Patient',
  },
  {
    id: 2,
    testiQuote: testiQuote,
    testiDesc: `Doctean is the best medical in the world I have great
                experience with them the provide authentic results &
                have the best environment the inside here. I can't
                express enough gratitude for the exceptional care
                experienced at doctean kudos to the remarkable team for
                press support!, I highly recommend them.`,
    testiName: 'Jhon D. Alexon',
    testiDesignation: 'Dental Patient',
  },
];

const Testimonial = () => {
  const settings = {
    loop: true,
    spaceBetween: 30,
    initialSlide: 1,
    autoplay: true,
    speed: 1000,
    effect: 'ease',
    grabCursor: true,
    flipEffect: {
      slideShadows: false,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1,
      },
      992: {
        slidesPerView: 1,
      },
      1400: {
        slidesPerView: 1,
      },
    },
  };
  return (
    <section className='bg-[url(/images/motivation-bg.jpg)] bg-cover bg-center bg-no-repeat pt-[200px] pb-28 relative z-10 overflow-hidden'>
      <div className='absolute -z-10 top-16 -translate-y-1/2 left-1/2 -translate-x-1/2'>
        <img
          src={circleShape}
          draggable='false'
          className='max-w-[inherit] w-[inherit]'
        />
      </div>
      <div className='Container'>
        <div className='-mb-[116px] border-b border-BorderColor2-0 pb-10'>
          <div className='inline-block mb-5'>
            <h6 className='flex items-center justify-start gap-2 bg-white bg-opacity-0 text-PrimaryColor-0 text-[15px] font-semibold border border-PrimaryColor-0 border-opacity-100 rounded-full font-AlbertSans px-[22px] py-2 uppercase'>
              <FaCircle size={'8'} />
              PATIENTS Feedback
            </h6>
          </div>
          <h1 className='font-AlbertSans font-bold uppercase text-white text-[20px] leading-[28px] sm:text-[38px] sm:leading-[48px] md:text-[48px] md:leading-[58px] lg:text-[40px] lg:leading-[50px] xl:text-[46px] xl:leading-[57px] 2xl:text-[55px] 2xl:leading-[67px]'>
            OUR HAPPY PATIENTS
          </h1>
        </div>
        <div className='grid gap-8 lg:gap-0 grid-cols-6 lg:grid-cols-12 lg:items-center pt-5'>
          <div className='col-span-6 lg:col-span-4 relative pt-[154px] lg:pt-36 2xl:pt-[140px]'>
            <div className='relative z-10 rounded-[30px] overflow-hidden'>
              <img
                src={testiThumb}
                draggable='false'
                className='w-full lg:max-w-[inherit] lg:w-[inherit] 2xl:max-w-full'
              />
            </div>
          </div>
          <div className='col-span-6 lg:col-span-8 lg:ml-7 xl:ml-20'>
            <Swiper
              {...settings}
              modules={[EffectFlip]}
            >
              <div>
                {testiData.map(
                  ({
                    id,
                    testiQuote,
                    testiName,
                    testiDesignation,
                    testiDesc,
                  }) => {
                    return (
                      <SwiperSlide
                        key={id}
                        className='mt-28 lg:mt-36 2xl:pt-0'
                      >
                        <TestimonialCard
                          testiQuote={testiQuote}
                          testiName={testiName}
                          testiDesignation={testiDesignation}
                          testiDesc={testiDesc}
                        />
                      </SwiperSlide>
                    );
                  }
                )}
              </div>
              <TestimonialNavigation />
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
