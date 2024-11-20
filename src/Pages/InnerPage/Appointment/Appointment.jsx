import { FaUser } from 'react-icons/fa6';
import { GoArrowRight } from 'react-icons/go';
import { HiOutlineMailOpen } from 'react-icons/hi';
import { MdCall } from 'react-icons/md';
import Heart from '/images/banner-heart.png';
import circleShape from '/images/crcle-bg.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { EffectCreative } from 'swiper/modules';
import TestimonialCard from './TestimonialCard';
import testiProfile from '/images/people.png';
import testiQuote from '/images/quote.png';

const TestiData = [
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
const Appoinment = () => {
  const settings = {
    loop: true,
    initialSlide: 1,
    autoplay: {
      delay: 3000, // Adjust the autoplay delay as needed
      disableOnInteraction: false, // Continue autoplay after interactions
    },
    effect: 'creative',
    grabCursor: true,
    creativeEffect: {
      slideShadows: false, // Disable shadows on slides
      prev: {
        shadow: true, // Enable shadow for previous slide
        translate: [0, 0, -400], // Translate properties for previous slide
      },
      next: {
        translate: ['100%', 0, 0], // Translate properties for next slide
      },
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
    <section className='px-5 2xl:px-20 bg-BodyBg-0 pt-[106px] pb-[120px] relative z-10 overflow-hidden'>
      <div className='absolute -z-10 -top-1/2 left-1/2 -translate-x-1/2'>
        <img
          src={circleShape}
          draggable='false'
          className='max-w-[inherit] w-[inherit]'
        />
      </div>
      <div className='text-center mb-12'>
        <h1 className='font-AlbertSans font-bold uppercase text-HeadingColor-0 text-xl leading-[30px] sm:text-3xl sm:leading-[40px] md:text-[40px] md:leading-[50px] lg:text-[50px] lg:leading-[60px] xl:text-[52px] xl:leading-[62px] 2xl:text-[60px] 2xl:leading-[70px]'>
          Make Appointment
        </h1>
      </div>
      <div className='bg-white bg-opacity-20 border-2 border-white border-opacity-80 rounded-[30px] py-[120px]'>
        <div className='Container'>
          <div className='grid grid-cols-1 lg:grid-cols-2 lg:items-center relative z-10'>
            <div
              className='lg:mr-10 xl:mr-16 2xl:mr-[130px]'
              data-aos='fade-up'
              data-aos-duration='1000'
            >
              <Swiper
                {...settings}
                modules={[EffectCreative]}
              >
                <div>
                  {TestiData.map(
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
            <div
              className='relative z-10 pt-10 lg:pt-0'
              data-aos='fade-up'
              data-aos-duration='1000'
            >
              <div className='absolute -top-2 -right-[190px] xl:-right-40 2xl:-right-40'>
                <img
                  src={Heart}
                  draggable='false'
                  className='animate-rotateX'
                />
              </div>
              <h5 className='font-AlbertSans font-medium text-sm sm:text-base text-PrimaryColor-0 uppercase mb-4'>
                FINANCE CONSULTING
              </h5>
              <h1 className='font-AlbertSans font-bold text-HeadingColor-0 text-[16px] leading-[23px] sm:text-[22px] sm:leading-[35px] md:text-[30px] md:leading-[35px] lg:text-[28px] lg:leading-[35px] xl:text-[32px] xl:leading-[39px] 2xl:text-[32px] 2xl:leading-[39px]'>
                Make an Online Appoinemnt <br /> Booking For Treatment Patients
              </h1>
              <form
                action='#'
                method='post'
                className='flex flex-col gap-y-5 mt-9'
              >
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
                  <div className='relative inline-block'>
                    <input
                      type='text'
                      name='name'
                      id='name'
                      placeholder='Enter Name*'
                      required
                      className='font-AlbertSans text-HeadingColor-0 placeholder:text-HeadingColor-0 font-light bg-transparent border border-Secondarycolor-0 border-opacity-45 rounded-xl py-2 px-6 h-[60px] w-full focus:outline-PrimaryColor-0'
                    />
                    <FaUser
                      size={'14'}
                      className='absolute text-PrimaryColor-0 top-1/2 -translate-y-1/2 right-5'
                    />
                  </div>
                  <div className='relative inline-block'>
                    <input
                      type='email'
                      name='email'
                      id='email'
                      placeholder='Enter E-Mail*'
                      required
                      className='font-AlbertSans text-HeadingColor-0 placeholder:text-HeadingColor-0 font-light bg-transparent border border-Secondarycolor-0 border-opacity-45 rounded-xl py-2 px-6 h-[60px] w-full focus:outline-PrimaryColor-0'
                    />
                    <HiOutlineMailOpen
                      size={'16'}
                      className='absolute text-PrimaryColor-0 top-1/2 -translate-y-1/2 right-5'
                    />
                  </div>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
                  <select
                    name='select'
                    id='select'
                    className='font-AlbertSans text-HeadingColor-0 placeholder:text-HeadingColor-0 font-light bg-transparent border border-Secondarycolor-0 border-opacity-45 rounded-xl py-2 px-6 h-[60px] w-full focus:outline-PrimaryColor-0'
                  >
                    <option
                      value='subject'
                      className='text-HeadingColor-0'
                    >
                      Your Subject
                    </option>
                    <option
                      value='subject2'
                      className='text-HeadingColor-0'
                    >
                      Bangla
                    </option>
                    <option
                      value='subject3'
                      className='text-HeadingColor-0'
                    >
                      Arabic
                    </option>
                    <option
                      value='subject4'
                      className='text-HeadingColor-0'
                    >
                      China
                    </option>
                  </select>
                  <div className='relative inline-block'>
                    <input
                      type='text'
                      name='number'
                      id='number'
                      placeholder='Enter Number*'
                      required
                      className='font-AlbertSans text-HeadingColor-0 placeholder:text-HeadingColor-0 font-light bg-transparent border border-Secondarycolor-0 border-opacity-45 rounded-xl py-2 px-6 h-[60px] w-full focus:outline-PrimaryColor-0'
                    />
                    <MdCall
                      size={'16'}
                      className='absolute text-PrimaryColor-0 top-1/2 -translate-y-1/2 right-5'
                    />
                  </div>
                </div>
                <textarea
                  name='message'
                  id='message'
                  placeholder='Write a short meassage...'
                  className='font-AlbertSans text-HeadingColor-0 placeholder:text-HeadingColor-0 font-light bg-transparent border border-Secondarycolor-0 border-opacity-45 rounded-2xl py-2 px-6 h-[150px] w-full focus:outline-PrimaryColor-0 resize-none'
                ></textarea>
                <div className='inline-block mt-2'>
                  <button
                    type='submit'
                    className='primary-btn'
                  >
                    Send Now
                    <GoArrowRight
                      size={'22'}
                      className='-rotate-45'
                    />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appoinment;
