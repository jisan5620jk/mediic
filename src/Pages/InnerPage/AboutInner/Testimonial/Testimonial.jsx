import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination } from 'swiper/modules';
import { MdOutlineStarPurple500 } from 'react-icons/md';
import TestimonialCard from './TestimonialCard';
import testThumb from '/images/testi2.jpg';
import testiProfile from '/images/testi-thumb3.jpg';
import testiQuote from '/images/quote2.png';

const testiData = [
  {
    id: 1,
    testiQuote: testiQuote,
    testiRatingIcon: <MdOutlineStarPurple500 />,
    testiDesc: `Commerce end interfaces with collaborative growth
                strategies wireless recaptiualize one-to-one
                potentialities through client-focused mediic of
                web-readiness. Appropriately enhance seamless
                alignments after team solutions forward growth for
                corporate web-readiness.`,
    testiName: 'Jisan Khan',
    testiDesignation: 'Satisfied Patient',
    testiProfile: testiProfile,
  },
  {
    id: 2,
    testiQuote: testiQuote,
    testiRatingIcon: <MdOutlineStarPurple500 />,
    testiDesc: `Commerce end interfaces with collaborative growth
                strategies wireless recaptiualize one-to-one
                potentialities through client-focused mediic of
                web-readiness. Appropriately enhance seamless
                alignments after team solutions forward growth for
                corporate web-readiness.`,
    testiName: 'Jisan Khan',
    testiDesignation: 'Satisfied Patient',
    testiProfile: testiProfile,
  },
  {
    id: 3,
    testiQuote: testiQuote,
    testiRatingIcon: <MdOutlineStarPurple500 />,
    testiDesc: `Commerce end interfaces with collaborative growth
                strategies wireless recaptiualize one-to-one
                potentialities through client-focused mediic of
                web-readiness. Appropriately enhance seamless
                alignments after team solutions forward growth for
                corporate web-readiness.`,
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

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + ' pagination-bullet"></span>';
    },
  };
  return (
    <section className='bg-BodyBg-0 py-28 relative z-10 overflow-hidden'>
      <div className='px-2 xl:px-5 2xl:px-20'>
        <div className='Container'>
          <div className='grid grid-cols-1 lg:grid-cols-2 lg:items-center'>
            <div
              data-aos='fade-up'
              data-aos-duration='1000'
            >
              <div>
                <h5 className='font-AlbertSans font-medium text-sm sm:text-base text-PrimaryColor-0 uppercase mb-4'>
                  Our Testimonial
                </h5>
                <h1 className='font-AlbertSans font-bold capitalize text-HeadingColor-0 text-xl leading-[30px] sm:text-3xl sm:leading-[40px] md:text-[40px] md:leading-[50px] lg:text-[42px] lg:leading-[52px] xl:text-[52px] xl:leading-[62px] 2xl:text-[60px] 2xl:leading-[70px]'>
                  Our Happy Patients
                </h1>
                <p className='font-DMSans text-TextColor2-0 mt-4 mb-9'>
                  Professional without enterprisee-commerce. Uniquely happy
                  clinets <br className='lg:hidden xl:block' />
                  innovative technologies via team member.
                </p>
              </div>
              <div>
                <Swiper
                  {...settings}
                  modules={[Pagination]}
                  pagination={pagination}
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
                          <SwiperSlide
                            key={id}
                            className='pb-[50px]'
                          >
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
            <div
              className='ml-8 relative rounded-[30px] overflow-hidden pt-10 lg:pt-0'
              data-aos='fade-up'
              data-aos-duration='1000'
            >
              <div className='relative z-10'>
                <img
                  src={testThumb}
                  draggable='false'
                  className='w-full'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
