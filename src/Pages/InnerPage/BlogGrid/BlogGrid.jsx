/* eslint-disable no-unused-vars */
import { FaAngleRight, FaArrowRightLong } from "react-icons/fa6";
import blogGridImg from "/images/blog-1.png";
import blogGridImg2 from "/images/blog-2.png";
import blogGridImg3 from "/images/blog-3.png";
import blogGridImg4 from "/images/blog-4.png";
import blogGridImg5 from "/images/blog-5.png";
import blogGridImg6 from "/images/blog-6.png";
import BlogGridCard from "./BlogGridCard";
import BreadCrumb from "../../../Shared/BreadCrumb/BreadCrumb";
import { LuArrowUpRight } from "react-icons/lu";

const blogData = [
  {
    id: 1,
    blogGridImg: blogGridImg,
    thumbContent: "IT Solution",
    thumbBtn: <LuArrowUpRight />,
    blogGridUrl: "/blog_details",
    blogGridTitle: "Solution This Business For is Marketing Blog",
    postBy: "Admin : Mera",
    comments: "Comments (04)",
    blogGridDesc:
      "Monotonectaly granular to front markets task data semper maecenas ferform",
  },
  {
    id: 2,
    blogGridImg: blogGridImg2,
    thumbContent: "IT Solution",
    thumbBtn: <LuArrowUpRight />,
    blogGridUrl: "/blog_details",
    blogGridTitle: "Easy and Most Powerful Server and Platform.",
    postBy: "Admin : Mera",
    comments: "Comments (04)",
    blogGridDesc:
      "Monotonectaly granular to front markets task data semper maecenas ferform",
  },
  {
    id: 3,
    blogGridImg: blogGridImg3,
    thumbContent: "IT Solution",
    thumbBtn: <LuArrowUpRight />,
    blogGridUrl: "/blog_details",
    blogGridTitle: "In eu fringilla, accumsan purusvel sollicitudin.",
    postBy: "Admin : Mera",
    comments: "Comments (04)",
    blogGridDesc:
      "Monotonectaly granular to front markets task data semper maecenas ferform",
  },
  {
    id: 4,
    blogGridImg: blogGridImg4,
    thumbContent: "IT Solution",
    thumbBtn: <LuArrowUpRight />,
    blogGridUrl: "/blog_details",
    blogGridTitle: "Vivamus vehicula nl purus at eros interdum.",
    postBy: "Admin : Mera",
    comments: "Comments (04)",
    blogGridDesc:
      "Monotonectaly granular to front markets task data semper maecenas ferform",
  },
  {
    id: 5,
    blogGridImg: blogGridImg5,
    thumbContent: "IT Solution",
    thumbBtn: <LuArrowUpRight />,
    blogGridUrl: "/blog_details",
    blogGridTitle: "Optimizing IT Infrastructure for Cost Efficiency.",
    postBy: "Admin : Mera",
    comments: "Comments (04)",
    blogGridDesc:
      "Monotonectaly granular to front markets task data semper maecenas ferform",
  },
  {
    id: 6,
    blogGridImg: blogGridImg6,
    thumbContent: "IT Solution",
    thumbBtn: <LuArrowUpRight />,
    blogGridUrl: "/blog_details",
    blogGridTitle: "Business Rules of Running to Web Solution.",
    postBy: "Admin : Mera",
    comments: "Comments (04)",
    blogGridDesc:
      "Monotonectaly granular to front markets task data semper maecenas ferform",
  },
];

const BlogGrid = () => {
  return (
    <>
      <BreadCrumb
        breadCrumbTitle={"Blog Grid"}
        breadCrumbIcon={<FaArrowRightLong />}
        breadCrumbLink={"Blog Grid"}
      />
      <section className="pt-28">
        <div className="Container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {blogData.map(
              ({
                id,
                blogGridImg,
                thumbContent,
                thumbBtn,
                blogGridTitle,
                postBy,
                comments,
                blogGridDesc,
              }) => {
                return (
                  <div key={id}>
                    <BlogGridCard
                      blogGridImg={blogGridImg}
                      thumbContent={thumbContent}
                      thumbBtn={thumbBtn}
                      blogGridTitle={blogGridTitle}
                      postBy={postBy}
                      comments={comments}
                      blogGridDesc={blogGridDesc}
                    />
                  </div>
                );
              }
            )}
          </div>
        </div>
      </section>
      <div>
        <ul className="flex items-center gap-2 justify-center pb-[120px] pt-[80px]">
          <li>
            <button className="h-[50px] w-[50px] font-FiraSans rounded-full border-BorderColor2-0 border bg-white flex justify-center items-center text-HeadingColor-0 transition-all duration-500 hover:text-white overflow-hidden relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-10 before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100">
              01
            </button>
          </li>
          <li>
            <button className="h-[50px] w-[50px] font-FiraSans rounded-full border-BorderColor2-0 border bg-white flex justify-center items-center text-HeadingColor-0 transition-all duration-500 hover:text-white overflow-hidden relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-10 before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100">
              02
            </button>
          </li>
          <li>
            <button className="h-[50px] w-[50px] font-FiraSans rounded-full border-BorderColor2-0 border bg-white flex justify-center items-center text-HeadingColor-0 transition-all duration-500 hover:text-white overflow-hidden relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-10 before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100">
              03
            </button>
          </li>
          <li>
            <button className="h-[50px] w-[50px] font-FiraSans rounded-full border-BorderColor2-0 border bg-white flex justify-center items-center text-HeadingColor-0 transition-all duration-500 hover:text-white overflow-hidden relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-10 before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100">
              <FaAngleRight />
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default BlogGrid;
