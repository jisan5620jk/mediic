import { Link } from "react-router-dom";
import caseShape from "/images/case_shape.png";
import projectThumb from "/images/case_1.png";
import projectThumb2 from "/images/case_2.png";
import projectThumb3 from "/images/case_3.png";
import projectThumb4 from "/images/case_4.png";
import projectThumb5 from "/images/case_5.png";
import { useEffect } from "react";

const Project = () => {
  useEffect(() => {
    const handleMouseEnter = (event) => {
      event.target.classList.add("active");

      // Remove 'active' class from siblings
      const parent = event.target.parentElement;
      if (parent) {
        const siblings = parent.querySelectorAll(".project-box2");
        siblings.forEach((sibling) => {
          if (sibling !== event.target) {
            sibling.classList.remove("active");
          }
        });
      }
    };

    const elements = document.querySelectorAll(".project-box2");
    elements.forEach((element) => {
      element.addEventListener("mouseenter", handleMouseEnter);
    });

    // Clean up event listeners when component unmounts
    return () => {
      elements.forEach((element) => {
        element.removeEventListener("mouseenter", handleMouseEnter);
      });
    };
  }, []);
  return (
    <section className="project relative z-10 pt-28 pb-28 lg:pb-0 xl:pb-[176px] 2xl:pb-[188px] bg-BodyBg4-0">
      <div className="Container">
        <div className="grid grid-cols-6 lg:grid-cols-12 items-center mb-10 lg:mb-0">
          <div className="col-span-6 lg:col-span-7">
            <h5 className="font-FiraSans font-medium text-sm sm:text-base text-PrimaryColor-0 uppercase mb-3">
              LATEST WORKS
            </h5>
            <h1 className="font-FiraSans font-semibold text-HeadingColor-0 text-[16px] leading-[26px] sm:text-[25px] sm:leading-[35px] md:text-[30px] md:leading-[40px] lg:text-[34px] lg:leading-[44px] xl:text-[40px] xl:leading-[50px] 2xl:text-[42px] 2xl:leading-[52px] mb-4">
              Visit the Real Results of <br /> Latest Case Studies
            </h1>
          </div>
          <div className="col-span-6 lg:col-span-5">
            <p className="font-FiraSans text-TextColor2-0">
              Globally engage cross-media leadership skills before cross-media
              develop standardized platforms without robust applications are go
              forward collaboration
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-7 items-baseline mt-0 mx-2 2xl:mx-20">
        <div className="relative md:-top-[88px] lg:-top-[109px] xl:top-0 project-box2 rounded overflow-hidden z-10 group">
          <img src={projectThumb} draggable="false" className="w-full" />
          <div className="project-bg absolute top-0 left-0 bg-PrimaryColor-0 bg-opacity-0 transition-all duration-500 group-hover:bg-opacity-90 h-full w-full">
            <div className="relative z-10 h-full w-full">
              <div className="project-content absolute -top-1/3 transition-all duration-500 opacity-0 group-hover:opacity-100 group-hover:top-[34px] left-7 lg:left-2 xl:left-4 2xl:left-10">
                <h6 className="font-FiraSans text-[15px] text-white text-opacity-80 mb-2">
                  Technology
                </h6>
                <Link to={"/project_details"}>
                  <button className="font-FiraSans font-medium text-xl lg:text-lg xl:text-xl 2xl:text-2xl text-white text-left">
                    Business Implement
                  </button>
                </Link>
                <p className="font-FiraSans text-white text-opacity-80 mt-3 lg:hidden 2xl:block">
                  Media leadership skill before cross platforms without done
                </p>
              </div>
              <div className="project-btn absolute -bottom-1/3 transition-all duration-500 opacity-0 group-hover:opacity-100 group-hover:bottom-10 left-7 lg:left-2 xl:left-4 2xl:left-10">
                <Link to={"project_details"}>
                  <button className="rounded-full flex items-center justify-center px-7 py-3 bg-BodyBg4-0 text-HeadingColor-0 font-FiraSans text-[15px] transition-all duration-500 hover:text-white font-medium relative z-10 before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-Secondarycolor-0 before:rounded-full before:transition-all before:duration-500 before:-z-10 before:scale-0 hover:before:scale-100">
                    View Details
                  </button>
                </Link>
              </div>
              <img
                src={caseShape}
                draggable="false"
                className="project-shape absolute -z-10 left-full bottom-16 animate-swing opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:left-2/3"
              />
            </div>
          </div>
        </div>
        <div className="lg:-top-[34px] xl:top-0 project-box2 rounded overflow-hidden relative z-10 group">
          <img src={projectThumb2} draggable="false" className="w-full" />
          <div className="project-bg absolute top-0 left-0 bg-PrimaryColor-0 bg-opacity-0 transition-all duration-500 group-hover:bg-opacity-90 h-full w-full">
            <div className="relative z-10 h-full w-full">
              <div className="project-content absolute -top-1/3 transition-all duration-500 opacity-0 group-hover:opacity-100 group-hover:top-[34px] left-7 lg:left-2 xl:left-4 2xl:left-10">
                <h6 className="font-FiraSans text-[15px] text-white text-opacity-80 mb-2">
                  Technology
                </h6>
                <Link to={"/project_details"}>
                  <button className="font-FiraSans font-medium text-xl lg:text-lg xl:text-xl 2xl:text-2xl text-white text-left">
                    Business Implement
                  </button>
                </Link>
                <p className="font-FiraSans text-white text-opacity-80 mt-3 lg:hidden 2xl:block">
                  Media leadership skill before cross platforms without done
                </p>
              </div>
              <div className="project-btn absolute -bottom-1/3 transition-all duration-500 opacity-0 group-hover:opacity-100 group-hover:bottom-10 left-7 lg:left-2 xl:left-4 2xl:left-10">
                <Link to={"project_details"}>
                  <button className="rounded-full flex items-center justify-center px-7 py-3 bg-BodyBg4-0 text-HeadingColor-0 font-FiraSans text-[15px] transition-all duration-500 hover:text-white font-medium relative z-10 before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-Secondarycolor-0 before:rounded-full before:transition-all before:duration-500 before:-z-10 before:scale-0 hover:before:scale-100">
                    View Details
                  </button>
                </Link>
              </div>
              <img
                src={caseShape}
                draggable="false"
                className="project-shape absolute -z-10 left-full bottom-16 animate-swing opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:left-2/3"
              />
            </div>
          </div>
        </div>
        <div className="relative md:-top-[88px] lg:top-[48px] xl:top-[58px] 2xl:top-[90px] project-box2 active rounded overflow-hidden z-10 group">
          <img src={projectThumb3} draggable="false" className="w-full" />
          <div className="project-bg absolute top-0 left-0 bg-PrimaryColor-0 bg-opacity-0 transition-all duration-500 group-hover:bg-opacity-90 h-full w-full">
            <div className="relative z-10 h-full w-full">
              <div className="project-content absolute -top-1/3 transition-all duration-500 opacity-0 group-hover:opacity-100 group-hover:top-[34px] left-7 lg:left-2 xl:left-4 2xl:left-10">
                <h6 className="font-FiraSans text-[15px] text-white text-opacity-80 mb-2">
                  Technology
                </h6>
                <Link to={"/project_details"}>
                  <button className="font-FiraSans font-medium text-xl lg:text-lg xl:text-xl 2xl:text-2xl text-white text-left">
                    Business Implement
                  </button>
                </Link>
                <p className="font-FiraSans text-white text-opacity-80 mt-3 lg:hidden 2xl:block">
                  Media leadership skill before cross platforms without done
                </p>
              </div>
              <div className="project-btn absolute -bottom-1/3 transition-all duration-500 opacity-0 group-hover:opacity-100 group-hover:bottom-10 left-7 lg:left-2 xl:left-4 2xl:left-10">
                <Link to={"project_details"}>
                  <button className="rounded-full flex items-center justify-center px-7 py-3 bg-BodyBg4-0 text-HeadingColor-0 font-FiraSans text-[15px] transition-all duration-500 hover:text-white font-medium relative z-10 before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-Secondarycolor-0 before:rounded-full before:transition-all before:duration-500 before:-z-10 before:scale-0 hover:before:scale-100">
                    View Details
                  </button>
                </Link>
              </div>
              <img
                src={caseShape}
                draggable="false"
                className="project-shape absolute -z-10 left-full bottom-16 animate-swing opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:left-2/3"
              />
            </div>
          </div>
        </div>
        <div className="md:-top-[100px] lg:-top-[110px] xl:top-0 project-box2 rounded overflow-hidden relative z-10 group">
          <img src={projectThumb4} draggable="false" className="w-full" />
          <div className="project-bg absolute top-0 left-0 bg-PrimaryColor-0 bg-opacity-0 transition-all duration-500 group-hover:bg-opacity-90 h-full w-full">
            <div className="relative z-10 h-full w-full">
              <div className="project-content absolute -top-1/3 transition-all duration-500 opacity-0 group-hover:opacity-100 group-hover:top-[34px] left-7 lg:left-2 xl:left-4 2xl:left-10">
                <h6 className="font-FiraSans text-[15px] text-white text-opacity-80 mb-2">
                  Technology
                </h6>
                <Link to={"/project_details"}>
                  <button className="font-FiraSans font-medium text-xl lg:text-lg xl:text-xl 2xl:text-2xl text-white text-left">
                    Business Implement
                  </button>
                </Link>
                <p className="font-FiraSans text-white text-opacity-80 mt-3 lg:hidden 2xl:block">
                  Media leadership skill before cross platforms without done
                </p>
              </div>
              <div className="project-btn absolute -bottom-1/3 transition-all duration-500 opacity-0 group-hover:opacity-100 group-hover:bottom-10 left-7 lg:left-2 xl:left-4 2xl:left-10">
                <Link to={"project_details"}>
                  <button className="rounded-full flex items-center justify-center px-7 py-3 bg-BodyBg4-0 text-HeadingColor-0 font-FiraSans text-[15px] transition-all duration-500 hover:text-white font-medium relative z-10 before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-Secondarycolor-0 before:rounded-full before:transition-all before:duration-500 before:-z-10 before:scale-0 hover:before:scale-100">
                    View Details
                  </button>
                </Link>
              </div>
              <img
                src={caseShape}
                draggable="false"
                className="project-shape absolute -z-10 left-full bottom-16 animate-swing opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:left-2/3"
              />
            </div>
          </div>
        </div>
        <div className="md:-top-[88px] lg:-top-[106px] xl:top-0 project-box2 rounded overflow-hidden relative z-10 group">
          <img src={projectThumb5} draggable="false" className="w-full" />
          <div className="project-bg absolute top-0 left-0 bg-PrimaryColor-0 bg-opacity-0 transition-all duration-500 group-hover:bg-opacity-90 h-full w-full">
            <div className="relative z-10 h-full w-full">
              <div className="project-content absolute -top-1/3 transition-all duration-500 opacity-0 group-hover:opacity-100 group-hover:top-[34px] left-7 lg:left-2 xl:left-4 2xl:left-10">
                <h6 className="font-FiraSans text-[15px] text-white text-opacity-80 mb-2">
                  Technology
                </h6>
                <Link to={"/project_details"}>
                  <button className="font-FiraSans font-medium text-xl lg:text-lg xl:text-xl 2xl:text-2xl text-white text-left">
                    Business Implement
                  </button>
                </Link>
                <p className="font-FiraSans text-white text-opacity-80 mt-3 lg:hidden 2xl:block">
                  Media leadership skill before cross platforms without done
                </p>
              </div>
              <div className="project-btn absolute -bottom-1/3 transition-all duration-500 opacity-0 group-hover:opacity-100 group-hover:bottom-10 left-7 lg:left-2 xl:left-4 2xl:left-10">
                <Link to={"project_details"}>
                  <button className="rounded-full flex items-center justify-center px-7 py-3 bg-BodyBg4-0 text-HeadingColor-0 font-FiraSans text-[15px] transition-all duration-500 hover:text-white font-medium relative z-10 before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-Secondarycolor-0 before:rounded-full before:transition-all before:duration-500 before:-z-10 before:scale-0 hover:before:scale-100">
                    View Details
                  </button>
                </Link>
              </div>
              <img
                src={caseShape}
                draggable="false"
                className="project-shape absolute -z-10 left-full bottom-16 animate-swing opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:left-2/3"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
