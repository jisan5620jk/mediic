import testiImg from '/images/people2.png';
import testiImg2 from '/images/people3.png';
import testiImg3 from '/images/people.png';
import testiQuote from '/images/quote3.png';
import { MdOutlineStarPurple500 } from 'react-icons/md';
import TestimonialInnerCard from './TestimonialInnerCard';
import BreadCrumb from '../../../Shared/BreadCrumb/BreadCrumb';
import { FaArrowRightLong } from 'react-icons/fa6';
import Subscribe from '../../../Component1/Subscribe/Subscribe';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Blog from './Blog/Blog';

const testiData = [
  {
    id: 1,
    testiImg: testiImg,
    testiRatingIcon: <MdOutlineStarPurple500 />,
    testiName: 'Anjelina Watson',
    testiDesignation: 'Dentist',
    testiDesc: `Dr. Anjelina Watson conducted a thorough examination and took the time to explain my condition 
    in detail. Their compassionate approach made all the difference; I felt genuinely cared for.`,
    testiQuote: testiQuote,
  },
  {
    id: 2,
    testiImg: testiImg2,
    testiRatingIcon: <MdOutlineStarPurple500 />,
    testiName: 'Jhon D. Alexon',
    testiDesignation: 'Surjoun',
    testiDesc: `Dr. Jhon D. Alexon conducted a thorough examination and took the time to explain my condition 
    in detail. Their compassionate approach made all the difference; I felt genuinely cared for.`,
    testiQuote: testiQuote,
  },
  {
    id: 3,
    testiImg: testiImg3,
    testiRatingIcon: <MdOutlineStarPurple500 />,
    testiName: 'David Miller',
    testiDesignation: 'Therapist',
    testiDesc: `Dr. Anjelina Watson conducted a thorough examination and took the time to explain my condition 
    in detail. Their compassionate approach made all the difference; I felt genuinely cared for.`,
    testiQuote: testiQuote,
  },
];

const TestimonialInner = () => {
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
        768: {
          slidesPerView: 1,
        },
        992: {
          slidesPerView: 2,
        },
        1400: {
          slidesPerView: 2,
        },
      },
    };
  return (
    <>
      <BreadCrumb
        breadCrumbTitle={'Testimonial'}
        breadCrumbIcon={<FaArrowRightLong />}
        breadCrumbLink={'Testimonial'}
      />
      <section
        className='py-28 bg-BodyBg-0 relative z-10 overflow-hidden'
        data-aos='fade-up'
        data-aos-duration='1000'
      >
        <div className='Container'>
          <Tabs>
            <TabPanel>
              <div className='px-5 sm:px-10 lg:px-4 xl:px-[50px] pt-10 pb-10 bg-white bg-opacity-30 border-2 border-white rounded-3xl relative z-10 overflow-hidden'>
                <div className=''>
                  <img
                    src={testiQuote}
                    draggable='false'
                  />
                </div>
                <ul className='flex gap-1 items-center pt-9'>
                  <li className='text-[#ffb609] text-2xl'>
                    <MdOutlineStarPurple500 />
                  </li>
                  <li className='text-[#ffb609] text-2xl'>
                    <MdOutlineStarPurple500 />
                  </li>
                  <li className='text-[#ffb609] text-2xl'>
                    <MdOutlineStarPurple500 />
                  </li>
                  <li className='text-[#ffb609] text-2xl'>
                    <MdOutlineStarPurple500 />
                  </li>
                  <li className='text-[#ffb609] text-2xl'>
                    <MdOutlineStarPurple500 />
                  </li>
                </ul>
                <p className='font-AlbertSans text-base sm:text-xl text-TextColor2-0 pt-6'>
                  Osteoarthritis (OA) is a chronic joint condition characterized
                  by the gradual breakdown of cartilage, the smooth tissue that
                  cushions the ends of bones in joints. This degeneration leads
                  to pain, stiffness, swelling, and reduced mobility in the
                  affected joints, most commonly the knees, hips, hands, and
                  spine. The risk of developing OA increases with age, but other
                  factors such as previous joint injuries, obesity, genetic
                  predisposition, and repetitive stress on the joints also
                  contribute. While there is no cure for OA, treatments focus on
                  managing symptoms and improving joint function. These
                  treatments include medications for pain relief, physical
                  therapy to strengthen muscles around the joints.
                </p>
              </div>
            </TabPanel>
            <TabPanel>
              <div className='px-5 sm:px-10 lg:px-4 xl:px-[50px] pt-10 pb-10 bg-white bg-opacity-30 border-2 border-white rounded-3xl relative z-10 overflow-hidden'>
                <div className=''>
                  <img
                    src={testiQuote}
                    draggable='false'
                  />
                </div>
                <ul className='flex gap-1 items-center pt-9'>
                  <li className='text-[#ffb609] text-2xl'>
                    <MdOutlineStarPurple500 />
                  </li>
                  <li className='text-[#ffb609] text-2xl'>
                    <MdOutlineStarPurple500 />
                  </li>
                  <li className='text-[#ffb609] text-2xl'>
                    <MdOutlineStarPurple500 />
                  </li>
                  <li className='text-[#ffb609] text-2xl'>
                    <MdOutlineStarPurple500 />
                  </li>
                  <li className='text-[#ffb609] text-2xl'>
                    <MdOutlineStarPurple500 />
                  </li>
                </ul>
                <p className='font-AlbertSans text-base sm:text-xl text-TextColor2-0 pt-6'>
                  Hypertension, commonly known as high blood pressure, is a
                  chronic medical condition where the force of the blood against
                  the artery walls is consistently too high. This condition can
                  lead to serious health complications, such as heart disease,
                  stroke, and kidney damage. Hypertension is often called the
                  “silent killer” because it typically has no symptoms until
                  significant damage has occurred. Risk factors include
                  genetics, obesity, lack of physical activity, excessive salt
                  intake, and stress. Managing hypertension involves lifestyle
                  changes such as a healthy diet, regular exercise, maintaining
                  a healthy weight, and, in some cases, medication to help
                  control blood pressure levels and other health issue.
                </p>
              </div>
            </TabPanel>
            <TabPanel>
              <div className='px-5 sm:px-10 lg:px-4 xl:px-[50px] pt-10 pb-10 bg-white bg-opacity-30 border-2 border-white rounded-3xl relative z-10 overflow-hidden'>
                <div className=''>
                  <img
                    src={testiQuote}
                    draggable='false'
                  />
                </div>
                <ul className='flex gap-1 items-center pt-9'>
                  <li className='text-[#ffb609] text-2xl'>
                    <MdOutlineStarPurple500 />
                  </li>
                  <li className='text-[#ffb609] text-2xl'>
                    <MdOutlineStarPurple500 />
                  </li>
                  <li className='text-[#ffb609] text-2xl'>
                    <MdOutlineStarPurple500 />
                  </li>
                  <li className='text-[#ffb609] text-2xl'>
                    <MdOutlineStarPurple500 />
                  </li>
                  <li className='text-[#ffb609] text-2xl'>
                    <MdOutlineStarPurple500 />
                  </li>
                </ul>
                <p className='font-AlbertSans text-base sm:text-xl text-TextColor2-0 pt-6'>
                  Diabetes Mellitus is a group of metabolic disorders
                  characterized by high blood sugar levels over a prolonged
                  period. This condition occurs either because the pancreas does
                  not produce enough insulin (Type 1 Diabetes) or because the
                  body’s cells do not respond properly to insulin (Type 2
                  Diabetes). Common symptoms include frequent urination,
                  increased thirst, and unexplained weight loss. Long-term
                  complications of diabetes can include cardiovascular disease,
                  nerve damage, kidney failure, and eye damage. Managing
                  diabetes involves a combination of lifestyle changes, such as
                  a healthy diet, regular physical activity, and maintaining a
                  healthy weight, along with medication.
                </p>
              </div>
            </TabPanel>
            <TabList className='flex flex-col md:flex-row md:items-center justify-center gap-6 mt-[56px]'>
              <Tab className='bg-white bg-opacity-30 border-2 border-white rounded-2xl cursor-pointer outline-none px-10 md:px-4 xl:px-10 py-8'>
                <div className='flex flex-col sm:flex-row md:flex-col lg:flex-row gap-5 lg:gap-3 xl:gap-5'>
                  <div>
                    <img src={testiImg} />
                  </div>
                  <div className='flex-1'>
                    <h5 className='font-AlbertSans font-semibold text-HeadingColor-0 text-2xl mt-2 mb-[6px]'>
                      Anjelina Watson
                    </h5>
                    <p className='font-AlbertSans text-TextColor2-0'>
                      Osteoarthritis
                    </p>
                  </div>
                </div>
              </Tab>
              <Tab className='bg-white bg-opacity-30 border-2 border-white rounded-2xl cursor-pointer outline-none px-10 md:px-4 xl:px-10 py-8'>
                <div className='flex flex-col sm:flex-row md:flex-col lg:flex-row gap-5 lg:gap-3 xl:gap-5'>
                  <div>
                    <img src={testiImg2} />
                  </div>
                  <div className='flex-1'>
                    <h5 className='font-AlbertSans font-semibold text-HeadingColor-0 text-2xl mt-2 mb-[6px]'>
                      Jhon D. Alexon
                    </h5>
                    <p className='font-AlbertSans text-TextColor2-0'>
                      Hypertension
                    </p>
                  </div>
                </div>
              </Tab>
              <Tab className='bg-white bg-opacity-30 border-2 border-white rounded-2xl cursor-pointer outline-none px-10 md:px-4 xl:px-10 py-8'>
                <div className='flex flex-col sm:flex-row md:flex-col lg:flex-row gap-5 lg:gap-3 xl:gap-5'>
                  <div>
                    <img src={testiImg3} />
                  </div>
                  <div className='flex-1'>
                    <h5 className='font-AlbertSans font-semibold text-HeadingColor-0 text-2xl mt-2 mb-[6px]'>
                      David Miller
                    </h5>
                    <p className='font-AlbertSans text-TextColor2-0'>
                      Diabetes Mellitus
                    </p>
                  </div>
                </div>
              </Tab>
            </TabList>
          </Tabs>
        </div>
      </section>
      <section
        className='bg-BodyBg-0 relative z-10 overflow-hidden'
        data-aos='fade-up'
        data-aos-duration='1000'
      >
        <div className='Container'>
          <Swiper {...settings}>
            {testiData.map(
              ({
                id,
                testiImg,
                testiRatingIcon,
                testiName,
                testiDesignation,
                testiDesc,
                testiQuote,
              }) => {
                return (
                  <SwiperSlide key={id}>
                    <TestimonialInnerCard
                      testiImg={testiImg}
                      testiRatingIcon={testiRatingIcon}
                      testiName={testiName}
                      testiDesignation={testiDesignation}
                      testiDesc={testiDesc}
                      testiQuote={testiQuote}
                    />
                  </SwiperSlide>
                );
              }
            )}
          </Swiper>
        </div>
      </section>
      <Blog />
      <Subscribe />
    </>
  );
};

export default TestimonialInner;
