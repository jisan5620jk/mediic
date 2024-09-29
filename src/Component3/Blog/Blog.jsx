/* eslint-disable no-unused-vars */
import { FaRegCalendarCheck } from "react-icons/fa6";
import blogThumb from '/images/blog.png';
import blogThumb2 from "/images/blog2.png";
import BlogCard from "./BlogCard";
import { GoArrowRight } from "react-icons/go";
import { PiUserCircleFill } from "react-icons/pi";

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
];

const Blog = () => {
  return (
    <section className="py-28">
      <div className="Container">
        <div className="text-center">
          <h5 className="font-AlbertSans text-lg font-semibold text-PrimaryColor-0">
            IT Support For Business
          </h5>
          <h1 className="font-AlbertSans font-bold text-xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[32px] lg:leading-[42px] xl:text-[36px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[52px] text-HeadingColor-0 mt-[18px] mb-3">
            Ensuring Your Success Trusted <br />
            IT Services Source
          </h1>
        </div>
        <div className="mt-[60px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
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
                  <div key={id}>
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
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
