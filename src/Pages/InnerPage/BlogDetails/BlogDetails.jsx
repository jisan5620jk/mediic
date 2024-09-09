import { Link } from "react-router-dom";
import BreadCrumb from "../../../Shared/BreadCrumb/BreadCrumb";
import blog_detailsThumb from "/images/blog-details.jpg";
import blog_detailsImg from "/images/blog-details-benifis-thumb-1.png";
import blog_detailsImg2 from "/images/blog-details-benifis-thumb-2.png";
import itemthumb from "/images/recent-post-1.png";
import itemthumb2 from "/images/recent-post-2.png";
import itemthumb3 from "/images/recent-post-3.png";
import { IoSearch } from "react-icons/io5";
import {
  FaArrowRightLong,
  FaCircleCheck,
  FaFacebookF,
  FaLinkedinIn,
  FaPinterestP,
  FaRegFolderOpen,
  FaXTwitter,
} from "react-icons/fa6";
import { BiSolidQuoteAltRight } from "react-icons/bi";

const BlogDetails = () => {
  return (
    <>
      <BreadCrumb
        breadCrumbTitle={"Blog Details"}
        breadCrumbIcon={<FaArrowRightLong />}
        breadCrumbLink={"Blog Details"}
      />
      <section className="py-28">
        <div className="Container">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="col-span-2">
              <div className="border-l border-b border-BorderColor2-0 rounded-md">
                <div className="relative overflow-hidden rounded-md">
                  <img
                    draggable="false"
                    src={blog_detailsThumb}
                    className="w-full"
                  />
                  <div className="absolute top-0 left-0">
                    <h6 className="font-FiraSans text-white pl-7 pr-12 py-2 overflow-hidden bg-PrimaryColor-0 relative z-10 before:absolute before:-right-4 before:top-1 before:w-8 before:h-8 before:!rotate-45 before:bg-HeadingColor-0">
                      Cyber Security
                    </h6>
                  </div>
                </div>
                <div className="px-4 sm:px-8 ml-8 bg-white shadow-cases rounded-b-md rounded-ss-md -mt-[50px] relative z-10">
                  <div className="flex items-center justify-between gap-5 pt-9 pb-7 border-b-2  relative before:absolute before:left-0 before:-bottom-[2px] before:w-8 before:h-[2px] before:bg-PrimaryColor-0 before:animate-dance5">
                    <h6 className="flex items-center gap-2 font-FiraSans text-[17px] text-PrimaryColor-0 font-medium">
                      Admin : Mera
                    </h6>
                    <h6 className="flex items-center font-FiraSans text-[17px] text-TextColor2-0 font-medium">
                      Comments (04)
                    </h6>
                  </div>
                  <Link to={"blog_details"}>
                    <button className="font-FiraSans font-bold text-left text-lg sm:text-2xl text-HeadingColor-0 transition-all duration-500 hover:text-PrimaryColor-0 mt-7 mb-5">
                      Solution This Business For is Marketing Blog
                    </button>
                  </Link>
                  <p className="font-FiraSans text-TextColor2-0 pb-9">
                    Alternative innovation to ethical network environmental
                    whiteboard pursue compelling results for methods
                    empowerment. Dramatically architect go forward opportunities
                    transition mission top critical supply chains after
                    enterprise
                  </p>
                </div>{" "}
                <div className="px-4 sm:px-8">
                  <div className="flex flex-col bg-[#f3f4f8] sm:flex-row gap-7 px-4 sm:px-11 py-4 sm:py-10 rounded-md mt-12">
                    <div className="text-6xl text-PrimaryColor-0">
                      <BiSolidQuoteAltRight />
                    </div>
                    <div className="flex-1">
                      <p className="font-FiraSans text-HeadingColor-0 sm:text-lg italic">
                        “Competently architect intermandated deliverables client
                        with niches continually underwhelm build cross-media
                        growth strategies without robust.”
                      </p>
                      <h6 className="font-FiraSans text-HeadingColor-0 pl-16 mt-4 relative before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:w-14 before:h-[1px] before:bg-PrimaryColor-0">
                        CEO & Founder
                      </h6>
                    </div>
                  </div>
                  <Link to={"/blog_details"}>
                    <button className="font-FiraSans font-bold text-left text-[28px] text-HeadingColor-0 transition-all duration-500 hover:text-PrimaryColor-0 mt-14 mb-4">
                      Our Begin Now To Beingonl
                    </button>
                  </Link>
                  <p className="font-FiraSans text-TextColor2-0">
                    Dramatically matrix cross-media vortals wireless
                    deliverables. Phosfluorescently underwhelm market driven
                    e-services and 24/365 infrastructures. Intrinsicly
                    incentivize resource.
                  </p>
                  <ul className="flex flex-col gap-[14px] mt-7">
                    <li className="flex gap-3 items-center font-FiraSans font-light text-TextColor2-0">
                      <FaCircleCheck
                        size={"20"}
                        className="text-PrimaryColor-0"
                      />
                      Innovate wireless market
                    </li>
                    <li className="flex gap-3 items-center font-FiraSans font-light text-TextColor2-0">
                      <FaCircleCheck
                        size={"20"}
                        className="text-PrimaryColor-0"
                      />
                      Productivate resource sucking
                    </li>
                    <li className="flex gap-3 items-center font-FiraSans font-light text-TextColor2-0">
                      <FaCircleCheck
                        size={"20"}
                        className="text-PrimaryColor-0"
                      />
                      Proactively unleash oriented communities
                    </li>
                    <li className="flex gap-3 items-center font-FiraSans font-light text-TextColor2-0">
                      <FaCircleCheck
                        size={"20"}
                        className="text-PrimaryColor-0"
                      />
                      Credibly develop progressive archi
                    </li>
                    <li className="flex gap-3 items-center font-FiraSans font-light text-TextColor2-0">
                      <FaCircleCheck
                        size={"20"}
                        className="text-PrimaryColor-0"
                      />
                      Phosfluorescently to customer
                    </li>
                  </ul>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mt-16">
                    <div>
                      <img draggable="false" src={blog_detailsImg} />
                    </div>
                    <div>
                      <img draggable="false" src={blog_detailsImg2} />
                    </div>
                  </div>
                  <Link to={"/blog_details"}>
                    <button className="font-FiraSans font-bold text-left text-[28px] text-HeadingColor-0 transition-all duration-500 hover:text-PrimaryColor-0 mt-10 mb-4">
                      Tree Plantation for Human
                    </button>
                  </Link>
                  <p className="font-FiraSans font-light text-TextColor2-0">
                    Dramatically matrix cross-media vortals wireless
                    deliverables. Phosfluorescently underwhelm market driven
                    e-services and 24/365 infrastructures. Intrinsicly
                    incentivize resource.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-5 items-start sm:justify-between border-t border-BorderColor1-0 mt-9 py-5 px-4 sm:px-8 border-r border-BorderColor2-0">
                  <div className="font-FiraSans text-lg font-medium">
                    <Link to={"/"}>
                      <button className="font-FiraSans px-5 py-2 text-HeadingColor-0 text-sm rounded bg-[#f3f4f8] transition-all duration-500 hover:bg-PrimaryColor-0 hover:text-white mr-2 ml-1">
                        Digital Marketing
                      </button>
                    </Link>
                    <Link to={"/"}>
                      <button className="font-FiraSans px-5 py-2 text-HeadingColor-0 text-sm rounded bg-[#f3f4f8] transition-all duration-500 hover:bg-PrimaryColor-0 hover:text-white">
                        Development
                      </button>
                    </Link>
                  </div>
                  <div>
                    <ul className="flex justify-center items-center gap-2">
                      <li>
                        <Link to={"/"}>
                          <button className="text-white w-9 h-9 rounded-full bg-[#1673ea] flex justify-center items-center">
                            <FaFacebookF size={"13"} />
                          </button>
                        </Link>
                      </li>
                      <li>
                        <Link to={"/"}>
                          <button className="text-white w-9 h-9 rounded-full bg-[#38ceff] flex justify-center items-center">
                            <FaXTwitter size={"13"} />
                          </button>
                        </Link>
                      </li>
                      <li>
                        <Link to={"/"}>
                          <button className="text-white w-9 h-9 rounded-full bg-[#0b4ab1] flex justify-center items-center">
                            <FaLinkedinIn size={"13"} />
                          </button>
                        </Link>
                      </li>
                      <li>
                        <Link to={"/"}>
                          <button className="text-white w-9 h-9 rounded-full bg-[#e92928] flex justify-center items-center">
                            <FaPinterestP size={"13"} />
                          </button>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-2 lg:col-span-1">
              <div className="relative inline-block w-full mb-7 p-4 sm:p-8 lg:p-6 xl:p-8 rounded-md bg-[#f3f4f8]">
                <input
                  type="text"
                  name="search"
                  id="search"
                  placeholder="Search here..."
                  required
                  className="w-full h-[56px] p-6 rounded font-FiraSans"
                />
                <button
                  type="submit"
                  className=" text-xl text-white rounded h-[56px] w-[56px] bg-PrimaryColor-0 transition-all duration-500 flex items-center justify-center hover:hue-rotate-[360deg] absolute right-7 top-1/2 -translate-y-1/2"
                >
                  <IoSearch />
                </button>
              </div>
              <div className="bg-[#f3f4f8] rounded-md px-4 sm:px-8 lg:px-6 xl:px-8 pt-7 pb-4 mb-7">
                <h4 className="font-FiraSans font-bold text-left text-[28px] text-HeadingColor-0 pb-3 mb-8 relative before:absolute before:bottom-0 before:left-0 before:w-7 before:h-[2px] before:bg-PrimaryColor-0">
                  Categories
                </h4>
                <ul className="mt-8">
                  <li>
                    <Link to={"/service_details"}>
                      <button className="w-full font-FiraSans text-left text-HeadingColor-0 transition-all duration-500 group px-7 py-4 flex items-center justify-between rounded bg-white mb-3 overflow-hidden z-[1] relative before:absolute before:top-0 before:right-0 before:w-0 before:-z-[1] before:h-full before:bg-PrimaryColor-0 before:rounded before:transition-all before:duration-500 hover:before:w-full hover:before:left-0 hover:text-white">
                        <span className="flex items-center gap-3">
                          <FaRegFolderOpen className="text-PrimaryColor-0 transition-all duration-500 group-hover:text-white" />
                          Web Development
                        </span>
                        <FaArrowRightLong className="text-PrimaryColor-0 transition-all duration-500 group-hover:text-white" />
                      </button>
                    </Link>
                  </li>
                  <li>
                    <Link to={"/service_details2"}>
                      <button className="w-full font-FiraSans text-left text-HeadingColor-0 transition-all duration-500 group px-7 py-4 flex items-center justify-between rounded bg-white mb-3 overflow-hidden z-[1] relative before:absolute before:top-0 before:right-0 before:w-0 before:-z-[1] before:h-full before:bg-PrimaryColor-0 before:rounded before:transition-all before:duration-500 hover:before:w-full hover:before:left-0 hover:text-white">
                        <span className="flex items-center gap-3">
                          <FaRegFolderOpen className="text-PrimaryColor-0 transition-all duration-500 group-hover:text-white" />
                          Digital Marketing
                        </span>
                        <FaArrowRightLong className="text-PrimaryColor-0 transition-all duration-500 group-hover:text-white" />
                      </button>
                    </Link>
                  </li>
                  <li>
                    <Link to={"/service_details3"}>
                      <button className="w-full font-FiraSans text-left text-HeadingColor-0 transition-all duration-500 group px-7 py-4 flex items-center justify-between rounded bg-white mb-3 overflow-hidden z-[1] relative before:absolute before:top-0 before:right-0 before:w-0 before:-z-[1] before:h-full before:bg-PrimaryColor-0 before:rounded before:transition-all before:duration-500 hover:before:w-full hover:before:left-0 hover:text-white">
                        <span className="flex items-center gap-3">
                          <FaRegFolderOpen className="text-PrimaryColor-0 transition-all duration-500 group-hover:text-white" />
                          IT Solution
                        </span>
                        <FaArrowRightLong className="text-PrimaryColor-0 transition-all duration-500 group-hover:text-white" />
                      </button>
                    </Link>
                  </li>
                  <li>
                    <Link to={"/service_details4"}>
                      <button className="w-full font-FiraSans text-left text-HeadingColor-0 transition-all duration-500 group px-7 py-4 flex items-center justify-between rounded bg-white mb-3 overflow-hidden z-[1] relative before:absolute before:top-0 before:right-0 before:w-0 before:-z-[1] before:h-full before:bg-PrimaryColor-0 before:rounded before:transition-all before:duration-500 hover:before:w-full hover:before:left-0 hover:text-white">
                        <span className="flex items-center gap-3">
                          <FaRegFolderOpen className="text-PrimaryColor-0 transition-all duration-500 group-hover:text-white" />
                          App Development
                        </span>
                        <FaArrowRightLong className="text-PrimaryColor-0 transition-all duration-500 group-hover:text-white" />
                      </button>
                    </Link>
                  </li>
                  <li>
                    <Link to={"/service_details5"}>
                      <button className="w-full font-FiraSans text-left text-HeadingColor-0 transition-all duration-500 group px-7 py-4 flex items-center justify-between rounded bg-white mb-3 overflow-hidden z-[1] relative before:absolute before:top-0 before:right-0 before:w-0 before:-z-[1] before:h-full before:bg-PrimaryColor-0 before:rounded before:transition-all before:duration-500 hover:before:w-full hover:before:left-0 hover:text-white">
                        <span className="flex items-center gap-3">
                          <FaRegFolderOpen className="text-PrimaryColor-0 transition-all duration-500 group-hover:text-white" />
                          Web Design
                        </span>
                        <FaArrowRightLong className="text-PrimaryColor-0 transition-all duration-500 group-hover:text-white" />
                      </button>
                    </Link>
                  </li>
                  <li>
                    <Link to={"/service_details6"}>
                      <button className="w-full font-FiraSans text-left text-HeadingColor-0 transition-all duration-500 group px-7 py-4 flex items-center justify-between rounded bg-white mb-3 overflow-hidden z-[1] relative before:absolute before:top-0 before:right-0 before:w-0 before:-z-[1] before:h-full before:bg-PrimaryColor-0 before:rounded before:transition-all before:duration-500 hover:before:w-full hover:before:left-0 hover:text-white">
                        <span className="flex items-center gap-3">
                          <FaRegFolderOpen className="text-PrimaryColor-0 transition-all duration-500 group-hover:text-white" />
                          UI/UX Design
                        </span>
                        <FaArrowRightLong className="text-PrimaryColor-0 transition-all duration-500 group-hover:text-white" />
                      </button>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="px-4 sm:px-8 lg:px-6 xl:px-8 bg-[#f3f4f8] rounded-md pt-7 pb-4 mb-7">
                <h4 className="font-FiraSans font-bold text-left text-[28px] text-HeadingColor-0 pb-3 mb-8 relative before:absolute before:bottom-0 before:left-0 before:w-7 before:h-[2px] before:bg-PrimaryColor-0">
                  Popular Post
                </h4>
                <Link to={"/blog-details"}>
                  <button className="group flex gap-4 mb-6">
                    <div className="rounded overflow-hidden">
                      <img draggable="false" src={itemthumb} />
                    </div>
                    <div className="flex-1 text-left">
                      <h6 className="font-FiraSans font-semibold text-lg lg:text-base 2xl:text-lg leading-6 text-HeadingColor-0 transition-all duration-500 group-hover:text-PrimaryColor-0">
                        Digital Marketing Strategy Action P…
                      </h6>
                      <p className="font-FiraSans text-PrimaryColor-0 text-sm mt-1">
                        01 Jan, 2024
                      </p>
                    </div>
                  </button>
                </Link>
                <Link to={"/blog_details"}>
                  <button className="group flex gap-4 my-6">
                    <div className="rounded overflow-hidden">
                      <img draggable="false" src={itemthumb2} />
                    </div>
                    <div className="flex-1 text-left">
                      <h6 className="font-FiraSans font-semibold text-lg lg:text-base 2xl:text-lg leading-6 text-HeadingColor-0 transition-all duration-500 group-hover:text-PrimaryColor-0">
                        6 Things You Must Know Before Hirin…
                      </h6>
                      <p className="font-FiraSans text-PrimaryColor-0 text-sm mt-1">
                        16 Jan, 2024
                      </p>
                    </div>
                  </button>
                </Link>
                <Link to={"/blog_details"}>
                  <button className="group flex gap-4 my-6">
                    <div className="rounded overflow-hidden">
                      <img draggable="false" src={itemthumb3} />
                    </div>
                    <div className="flex-1 text-left">
                      <h6 className="font-FiraSans font-semibold text-lg lg:text-base 2xl:text-lg leading-6 text-HeadingColor-0 transition-all duration-500 group-hover:text-PrimaryColor-0">
                        In eu fringilla, accumsan vel sollicitudin…
                      </h6>
                      <p className="font-FiraSans text-PrimaryColor-0 text-sm mt-1">
                        27 Jan, 2024
                      </p>
                    </div>
                  </button>
                </Link>
              </div>
              <div className="bg-[#f3f4f8] rounded-md px-4 sm:px-8 lg:px-6 xl:px-8 pt-7 pb-10 mb-7">
                <h4 className="font-FiraSans font-bold text-left text-[28px] text-HeadingColor-0 pb-3 mb-8 relative before:absolute before:bottom-0 before:left-0 before:w-7 before:h-[2px] before:bg-PrimaryColor-0">
                  Tags
                </h4>
                <ul className="inline-block">
                  <li className="inline-block mr-[10px] mb-[10px]">
                    <Link to={"/"}>
                      <button className="bg-white rounded flex items-center justify-center text-HeadingColor-0 transition-all duration-500 font-medium px-5 py-2 font-FiraSans text-sm relative z-[1] before:absolute before:top-0 before:left-0 before:rounded before:w-full before:h-full before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:scale-0 before:-z-[1] hover:before:scale-100 hover:text-white">
                        Cyber Security
                      </button>
                    </Link>
                  </li>
                  <li className="inline-block mr-[10px] mb-[10px]">
                    <Link to={"/"}>
                      <button className="bg-white rounded flex items-center justify-center text-HeadingColor-0 transition-all duration-500 font-medium px-5 py-2 font-FiraSans text-sm relative z-[1] before:absolute before:top-0 before:left-0 before:rounded before:w-full before:h-full before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:scale-0 before:-z-[1] hover:before:scale-100 hover:text-white">
                        Learning
                      </button>
                    </Link>
                  </li>
                  <li className="inline-block mr-[10px] mb-[10px]">
                    <Link to={"/"}>
                      <button className="bg-white rounded flex items-center justify-center text-HeadingColor-0 transition-all duration-500 font-medium px-5 py-2 font-FiraSans text-sm relative z-[1] before:absolute before:top-0 before:left-0 before:rounded before:w-full before:h-full before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:scale-0 before:-z-[1] hover:before:scale-100 hover:text-white">
                        Web Drvelopment
                      </button>
                    </Link>
                  </li>
                  <li className="inline-block mr-[10px] mb-[10px]">
                    <Link to={"/"}>
                      <button className="bg-white rounded flex items-center justify-center text-HeadingColor-0 transition-all duration-500 font-medium px-5 py-2 font-FiraSans text-sm relative z-[1] before:absolute before:top-0 before:left-0 before:rounded before:w-full before:h-full before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:scale-0 before:-z-[1] hover:before:scale-100 hover:text-white">
                        IT Solution
                      </button>
                    </Link>
                  </li>
                  <li className="inline-block mr-[10px] mb-[10px]">
                    <Link to={"/"}>
                      <button className="bg-white rounded flex items-center justify-center text-HeadingColor-0 transition-all duration-500 font-medium px-5 py-2 font-FiraSans text-sm relative z-[1] before:absolute before:top-0 before:left-0 before:rounded before:w-full before:h-full before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:scale-0 before:-z-[1] hover:before:scale-100 hover:text-white">
                        Marketing
                      </button>
                    </Link>
                  </li>
                  <li className="inline-block mr-[10px] mb-[10px]">
                    <Link to={"/"}>
                      <button className="bg-white rounded flex items-center justify-center text-HeadingColor-0 transition-all duration-500 font-medium px-5 py-2 font-FiraSans text-sm relative z-[1] before:absolute before:top-0 before:left-0 before:rounded before:w-full before:h-full before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:scale-0 before:-z-[1] hover:before:scale-100 hover:text-white">
                        Technology
                      </button>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetails;
