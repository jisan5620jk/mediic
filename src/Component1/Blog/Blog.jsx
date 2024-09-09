/* eslint-disable no-unused-vars */
import { FaCircle } from "react-icons/fa6";
import blogThumb from "/images/blog_01.png";
import blogThumb2 from "/images/blog_02.png";
import blogThumb3 from "/images/blog_03.png";
import BlogCard from "./BlogCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { BsArrowRight } from "react-icons/bs";

const BlogData = [
  {
    id: 1,
    blogThumb: blogThumb,
    blogDateIcon: <FaCircle />,
    blogDate: "04 Mar, 2024",
    blogPostBy: "TECHNOLOGY",
    blogUrl: "/blog_details",
    blogTitle: "Globally disintermediate exten services Planning",
    blogBtn: "Read More",
    blogBtnIcon: <BsArrowRight />,
  },
  {
    id: 2,
    blogThumb: blogThumb2,
    blogDateIcon: <FaCircle />,
    blogDate: "14 Mar, 2024",
    blogPostBy: "Business",
    blogUrl: "/blog_details",
    blogTitle: "Sustainability Consulting for Business Planning",
    blogBtn: "Read More",
    blogBtnIcon: <BsArrowRight />,
  },
  {
    id: 3,
    blogThumb: blogThumb3,
    blogDate: "24 Mar, 2024",
    blogDateIcon: <FaCircle />,
    blogPostBy: "Consulting",
    blogUrl: "/blog_details",
    blogTitle: "Consulting Industry changing Business Landscape",
    blogBtn: "Read More",
    blogBtnIcon: <BsArrowRight />,
  },
  {
    id: 4,
    blogThumb: blogThumb2,
    blogDate: "24 Mar, 2024",
    blogDateIcon: <FaCircle />,
    blogPostBy: "Consulting",
    blogUrl: "/blog_details",
    blogTitle: "Consulting Industry changing Business Landscape",
    blogBtn: "Read More",
    blogBtnIcon: <BsArrowRight />,
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

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + ' pagination-bullet"></span>';
    },
  };
  return (
    <section className="py-28 blog">
      <div className="Container">
        <div className="text-center">
          <h5 className="font-FiraSans font-medium text-sm sm:text-base text-PrimaryColor-0 uppercase flex items-center justify-center gap-2 mb-3">
            LATEST BLOG
          </h5>
          <h1 className="font-FiraSans font-semibold text-HeadingColor-0 text-[16px] leading-[26px] sm:text-[25px] sm:leading-[35px] md:text-[30px] md:leading-[40px] lg:text-[38px] lg:leading-[48px] xl:text-[42px] xl:leading-[52px]">
            Read Our Latest Insights from the
            <br />
            Latest Blog Articles
          </h1>
        </div>
        <div className="mt-[56px]">
          <Swiper {...settings} pagination={pagination} modules={[Pagination]}>
            {BlogData.map(
              ({
                id,
                blogThumb,
                blogDateIcon,
                blogDate,
                blogPostBy,
                blogUrl,
                blogTitle,
                blogBtn,
                blogBtnIcon,
              }) => {
                return (
                  <SwiperSlide key={id}>
                    <div className="pb-[70px]">
                      <BlogCard
                        blogThumb={blogThumb}
                        blogDateIcon={blogDateIcon}
                        blogDate={blogDate}
                        blogPostBy={blogPostBy}
                        blogUrl={blogUrl}
                        blogTitle={blogTitle}
                        blogBtn={blogBtn}
                        blogBtnIcon={blogBtnIcon}
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
