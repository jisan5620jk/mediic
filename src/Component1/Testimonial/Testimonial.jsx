import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { EffectFlip } from 'swiper/modules';
import { MdOutlineStarPurple500 } from 'react-icons/md';
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
    testiRatingIcon: <MdOutlineStarPurple500 />,
    testiDesc: `Quickly fashion backend strategic theme areas with
                virtual growth strategies. Authoritatively
                formulate competitive experiences rather than
                granular manufactured products granular intelle
                capital without equity invested`,
    testiName: 'Jhon D. Alexon',
    testiDesignation: 'Psycologist',
    testiProfile: testiProfile,
  },
  {
    id: 2,
    testiQuote: testiQuote,
    testiRatingIcon: <MdOutlineStarPurple500 />,
    testiDesc: `Quickly fashion backend strategic theme areas with
                virtual growth strategies. Authoritatively
                formulate competitive experiences rather than
                granular manufactured products granular intelle
                capital without equity invested`,
    testiName: 'Jhon D. Alexon',
    testiDesignation: 'Psycologist',
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
      <div className='absolute top-0 right-0'>
        <img
          src={testiShape}
          draggable='false'
        />
      </div>
      <div className='text-center pb-11'>
        <h1 className='font-AlbertSans font-bold uppercase text-white text-[16px] leading-[26px] sm:text-[25px] sm:leading-[35px] md:text-[30px] md:leading-[40px] lg:text-[34px] lg:leading-[44px] xl:text-[52px] xl:leading-[62px] 2xl:text-[60px] 2xl:leading-[70px]'>
          Testimonials
        </h1>
      </div>
      <div className='px-2 xl:px-20'>
        <div className='grid grid-cols-1 gap-[30px] lg:grid-cols-12 lg:items-center'>
          <div className='col-span-8 relative rounded-[30px] overflow-hidden'>
            <div className='relative z-10'>
              <img
                src={testThumb}
                draggable='false'
              />
              <div className='absolute top-7 left-7 px-8 pb-10 pt-7 border-2 border-white bg-white bg-opacity-15 backdrop-filter backdrop-blur-md rounded-2xl'>
                <h4 className='font-AlbertSans font-semibold text-2xl text-HeadingColor-0 pb-5'>
                  Get Free Consultation
                </h4>
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
          <div className='col-span-4'>
            <Swiper
              {...settings}
              modules={[EffectFlip]}
            >
              <div>
                {testiData.map(
                  ({
                    id,
                    testiQuote,
                    testiRatingIcon,
                    testiName,
                    testiProfile,
                    testiDesignation,
                    testiDesc,
                  }) => {
                    return (
                      <SwiperSlide key={id}>
                        <TestimonialCard
                          testiQuote={testiQuote}
                          testiRatingIcon={testiRatingIcon}
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
