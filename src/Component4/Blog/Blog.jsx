/* eslint-disable no-unused-vars */
import { FaArrowRightLong, FaStarOfLife } from "react-icons/fa6";
import blogThumb from "/images/projects-img.png";
import blogThumb2 from "/images/projects-img2.png";
import blogThumb3 from "/images/projects-img3.png";
import blogThumb4 from "/images/projects-img4.png";
import BlogCard from "./BlogCard";
import { PiStarFourFill } from "react-icons/pi";
import { RxArrowRight } from "react-icons/rx";

const blogData = [
  {
    id: 1,
    blogThumb: blogThumb,
    blogNumber: "01",
    blogUrl: "/blog_details",
    blogTitle: "Visual Design",
    blogBtn: <RxArrowRight />,
  },
  {
    id: 2,
    blogThumb: blogThumb2,
    blogNumber: "02",
    blogUrl: "/blog_details",
    blogTitle: "Business Agency",
    blogBtn: <RxArrowRight />,
  },
  {
    id: 3,
    blogThumb: blogThumb3,
    blogNumber: "03",
    blogUrl: "/blog_details",
    blogTitle: "Business Factory",
    blogBtn: <RxArrowRight />,
  },
  {
    id: 4,
    blogThumb: blogThumb4,
    blogNumber: "04",
    blogUrl: "/blog_details",
    blogTitle: "Business Consultation",
    blogBtn: <RxArrowRight />,
  },
];

const Blog = () => {
  return (
    <section className="py-28 bg-BodyBg-0">
      <div className="Container">
        <div className="grid lg:grid-cols-2 lg:items-center">
          <div>
            <h5 className="font-FiraSans text-lg font-medium text-PrimaryColor-0 flex items-center gap-2">
              <PiStarFourFill size={"14"} />
              LATEST PROJECTS
            </h5>
            <h1 className="font-FiraSans font-bold text-[22px] leading-8 sm:text-[38px] sm:leading-[48px] md:text-[44px] md:leading-[54px] lg:text-[32px] lg:leading-[42px] xl:text-[44px] xl:leading-[54px] 2xl:text-[46px] 2xl:leading-[56px] text-HeadingColor-0 mt-4 mb-4">
              Words Meant For Pages
              <br /> Not the Screens
            </h1>
          </div>
          <div>
            <p className="font-FiraSans text-TextColor2-0 text-lg">
              Professionaly optimize interdependent intelectual services visuali
              design infoediaries main issue state icreative planing main best
              practices.
            </p>
          </div>
        </div>
        <div className="mt-[30px]">
          {blogData.map(
            ({ id, blogNumber, blogThumb, blogUrl, blogTitle, blogBtn }) => {
              return (
                <div key={id}>
                  <BlogCard
                    blogNumber={blogNumber}
                    blogThumb={blogThumb}
                    blogUrl={blogUrl}
                    blogTitle={blogTitle}
                    blogBtn={blogBtn}
                  />
                </div>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
};

export default Blog;
