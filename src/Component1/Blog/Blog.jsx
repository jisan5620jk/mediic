/* eslint-disable no-unused-vars */
import { FaCircle } from 'react-icons/fa6';
import blogThumb from '/images/blog2.jpg';
import blogThumb2 from '/images/blog2.jpg';
import blogThumb3 from '/images/blog3.jpg';
import BlogCard from './BlogCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Link } from 'react-router-dom';
import { GoArrowRight } from 'react-icons/go';

const BlogData = [
  {
    id: 1,
    blogThumb: blogThumb,
    blogPostByIcon: <FaCircle />,
    blogDateIcon: <FaCircle />,
    blogDate: 'April 04, 2024',
    blogPostBy: 'Admin',
    blogUrl: '/blog_details',
    blogTitle: 'Globally disintermediate exten services Planning',
  },
  {
    id: 2,
    blogThumb: blogThumb2,
    blogPostByIcon: <FaCircle />,
    blogDateIcon: <FaCircle />,
    blogDate: 'April 14, 2024',
    blogPostBy: 'Admin',
    blogUrl: '/blog_details',
    blogTitle: 'Sustainability Consulting for Business Planning',
  },
  {
    id: 3,
    blogThumb: blogThumb3,
    blogDate: 'April 24, 2024',
    blogPostByIcon: <FaCircle />,
    blogDateIcon: <FaCircle />,
    blogPostBy: 'Admin',
    blogUrl: '/blog_details',
    blogTitle: 'Consulting Industry changing Business Landscape',
  },
  {
    id: 4,
    blogThumb: blogThumb2,
    blogDate: 'April 28, 2024',
    blogPostByIcon: <FaCircle />,
    blogDateIcon: <FaCircle />,
    blogPostBy: 'Admin',
    blogUrl: '/blog_details',
    blogTitle: 'Consulting Industry changing Business Landscape',
  },
];

const Blog = () => {
  const settings = {
    loop: true,
    spaceBetween: 30,
    speed: 1000,
    centeredSlides: true,
    initialSlide: 1,
    autoplay: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
      1400: {
        slidesPerView: 3,
      },
    },
  };
  return (
    <section className='py-28 blog'>
      <div className='Container'>
        <div className='grid grid-cols-1 gap-8 lg:items-center lg:grid-cols-2 border-b border-BorderColor3-0 pb-7'>
          <div>
            <h1 className='font-AlbertSans font-bold uppercase text-HeadingColor-0 text-[16px] leading-[26px] sm:text-[25px] sm:leading-[35px] md:text-[30px] md:leading-[40px] lg:text-[34px] lg:leading-[44px] xl:text-[52px] xl:leading-[62px] 2xl:text-[60px] 2xl:leading-[70px]'>
              Read Our <br />
              Latest Blog
            </h1>
          </div>
          <div className='flex justify-end'>
            <Link to={'/blog_grid'}>
              <button className='primary-btn mt-3'>
                View all Blog
                <GoArrowRight
                  size={'22'}
                  className='-rotate-45'
                />
              </button>
            </Link>
          </div>
        </div>
        <div className='mt-[56px]'>
          <Swiper {...settings}>
            {BlogData.map(
              ({
                id,
                blogThumb,
                blogDateIcon,
                blogDate,
                blogPostBy,
                blogUrl,
                blogTitle,
                blogPostByIcon,
              }) => {
                return (
                  <SwiperSlide key={id}>
                    <div>
                      <BlogCard
                        blogThumb={blogThumb}
                        blogDateIcon={blogDateIcon}
                        blogDate={blogDate}
                        blogPostBy={blogPostBy}
                        blogPostByIcon={blogPostByIcon}
                        blogUrl={blogUrl}
                        blogTitle={blogTitle}
                      />
                    </div>
                  </SwiperSlide>
                );
              }
            )}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Blog;
