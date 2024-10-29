import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { EffectFlip } from 'swiper/modules';
import TestimonialCard from './TestimonialCard';
import testThumb from '/images/testi.jpg';
import testiProfile from '/images/people.png';
import testiShape from '/images/circle2.png';
import testiQuote from '/images/quote.png';
import { Link } from 'react-router-dom';
import { GoArrowRight } from 'react-icons/go';

const testiData = [
  {
    id: 1,
    testiQuote: testiQuote,
    testiDesc: `Quickly fashion backend strategic theme areas with
                virtual growth strategies. Authoritatively
                formulate competitive experiences rather than
                granular manufactured products granular intelle
                capital without equity invested`,
    testiName: 'Jisan Khan',
    testiDesignation: 'Satisfied Patient',
    testiProfile: testiProfile,
  },
  {
    id: 2,
    testiQuote: testiQuote,
    testiDesc: `Quickly fashion backend strategic theme areas with
                virtual growth strategies. Authoritatively
                formulate competitive experiences rather than
                granular manufactured products granular intelle
                capital without equity invested`,
    testiName: 'Jisan Khan',
    testiDesignation: 'Satisfied Patient',
    testiProfile: testiProfile,
  },
];

const Testimonial = () => {
  const settings = {
    loop: true,
    spaceBetween: 30,
    initialSlide: 1,
    autoplay: true,
    effect: 'flip',
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
    <section className='bg-Secondarycolor-0 py-28 relative z-10 overflow-hidden'>
      <div className='absolute top-0 right-0 -z-10'>
        <img
          src={testiShape}
          draggable='false'
        />
      </div>
      <div
        className='text-center pb-11'
        data-aos='fade-up'
        data-aos-duration='1000'
      >
        <h1 className='font-AlbertSans font-bold uppercase text-white text-xl leading-[30px] sm:text-3xl sm:leading-[40px] md:text-[40px] md:leading-[50px] lg:text-[50px] lg:leading-[60px] xl:text-[52px] xl:leading-[62px] 2xl:text-[60px] 2xl:leading-[70px]'>
          Testimonials
        </h1>
      </div>
      <div className='px-2 xl:px-5 2xl:px-20'>
        <div className='grid gap-[30px] grid-cols-6 lg:grid-cols-12 lg:items-center'>
          <div
            className='col-span-6 lg:col-span-8 relative rounded-[30px] overflow-hidden'
            data-aos='fade-up'
            data-aos-duration='1000'
          >
            <div className='relative z-10'>
              <img
                src={testThumb}
                draggable='false'
                className='lg:max-w-[inherit] lg:w-[inherit] 2xl:max-w-full'
              />
              <div className='hidden sm:block absolute top-7 left-7 px-8 pb-10 pt-7 border-2 border-white bg-white bg-opacity-15 backdrop-filter backdrop-blur-md rounded-2xl'>
                <h4 className='font-AlbertSans font-semibold text-2xl text-HeadingColor-0 pb-5'>
                  Get Free Consultation
                </h4>
                <div className='inline-block'>
                  <Link to={'/appointment'}>
                    <button className='primary-btn'>
                      Appointment
                      <GoArrowRight
                        size={'22'}
                        className='-rotate-45'
                      />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div
            className='col-span-6 lg:col-span-4'
            data-aos='fade-up'
            data-aos-duration='1000'
          >
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
                    testiProfile,
                    testiDesignation,
                    testiDesc,
                  }) => {
                    return (
                      <SwiperSlide key={id}>
                        <TestimonialCard
                          testiQuote={testiQuote}
                          testiName={testiName}
                          testiDesignation={testiDesignation}
                          testiProfile={testiProfile}
                          testiDesc={testiDesc}
                        />
                      </SwiperSlide>
                    );
                  }
                )}
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
