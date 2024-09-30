/* eslint-disable no-unused-vars */
import { FaCircle, FaRegCalendarCheck } from 'react-icons/fa6';
import blogThumb from '/images/blog.png';
import blogThumb2 from '/images/blog2.png';
import BlogCard from './BlogCard';
import { GoArrowRight } from 'react-icons/go';
import { PiUserCircleFill } from 'react-icons/pi';
import blogShape from '/images/blog-shape.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import BlogNavigation from './BlogNavigation';

const blogData = [
  {
    id: 1,
    blogThumb: blogThumb,
    blogDateIcon: <FaRegCalendarCheck />,
    blogDate: '24 Mar, 2024',
    blogTagIcon: <PiUserCircleFill />,
    blogTag: 'Admin',
    blogUrl: '/blog_details',
    blogTitle: 'Transfusion strategy and heart surgery',
    blogDesc: 'Professional capital without pros users matrix value e-commerce',
    blogBtnIcon: <GoArrowRight />,
  },
  {
    id: 2,
    blogThumb: blogThumb2,
    blogDateIcon: <FaRegCalendarCheck />,
    blogDate: '24 Mar, 2024',
    blogTagIcon: <PiUserCircleFill />,
    blogTag: 'Admin',
    blogUrl: '/blog_details',
    blogTitle: 'Goals Setting the people Heart is Healthy',
    blogDesc: 'Professional capital without pros users matrix value e-commerce',
    blogBtnIcon: <GoArrowRight />,
  },
  {
    id: 3,
    blogThumb: blogThumb,
    blogDateIcon: <FaRegCalendarCheck />,
    blogDate: '24 Mar, 2024',
    blogTagIcon: <PiUserCircleFill />,
    blogTag: 'Admin',
    blogUrl: '/blog_details',
    blogTitle: 'Goals Setting the people Heart is Healthy',
    blogDesc: 'Professional capital without pros users matrix value e-commerce',
    blogBtnIcon: <GoArrowRight />,
  },
];

const Blog = () => {
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
    <section className='py-28 bg-gradient-to-t from-BodyBg-0 from-10% mx-2 xl:mx-10 rounded-b-[30px] relative z-10'>
      <div className='absolute -left-20 top-0 -z-10'>
        <img
          src={blogShape}
          draggable='false'
        />
      </div>
      <div className='Container'>
        <div className='-mb-[116px] border-b border-BorderColor3-0 pb-10'>
          <div className='inline-block mb-5'>
            <h6 className='flex items-center justify-start gap-2 bg-white bg-opacity-30 text-PrimaryColor-0 text-[15px] font-semibold border border-white border-opacity-60 rounded-full font-AlbertSans px-[22px] py-2 uppercase'>
              <FaCircle size={'8'} />
              our recent blog post
            </h6>
          </div>
          <h1 className='font-AlbertSans font-bold uppercase text-HeadingColor-0 text-[20px] leading-[28px] sm:text-[38px] sm:leading-[48px] md:text-[48px] md:leading-[58px] lg:text-[40px] lg:leading-[50px] xl:text-[46px] xl:leading-[57px] 2xl:text-[55px] 2xl:leading-[67px]'>
            OUR HAPPY PATIENTS
          </h1>
        </div>
        <div className='pt-[20px]'>
          <Swiper {...settings}>
            {blogData.map(
              ({
                id,
                blogThumb,
                blogDateIcon,
                blogDate,
                blogTagIcon,
                blogTag,
                blogUrl,
                blogTitle,
                blogDesc,
                blogBtnIcon,
              }) => {
                return (
                  <SwiperSlide key={id} className='pt-[154px]'>
                    <BlogCard
                      blogThumb={blogThumb}
                      blogDateIcon={blogDateIcon}
                      blogDate={blogDate}
                      blogTagIcon={blogTagIcon}
                      blogTag={blogTag}
                      blogUrl={blogUrl}
                      blogTitle={blogTitle}
                      blogDesc={blogDesc}
                      blogBtnIcon={blogBtnIcon}
                    />
                  </SwiperSlide>
                );
              }
            )}
            <BlogNavigation />
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Blog;
