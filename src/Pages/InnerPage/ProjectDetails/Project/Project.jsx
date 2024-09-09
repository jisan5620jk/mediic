/* eslint-disable no-unused-vars */
import { FaArrowRightLong } from "react-icons/fa6";
import projectThumb from "/images/project-1.png";
import projectThumb2 from "/images/project-2.png";
import projectThumb3 from "/images/project-3.png";
import projectContentShape from "/images/project-content-shape.png";
import ProjectCard from "./ProjectCard";

const ProjectData = [
  {
    id: 1,
    projectThumb: projectThumb,
    projectSubTitle: "Marketing",
    projectTitle: "Digital Marketing",
    projectUrl: "/project_details",
    buttonTitle: "View Details",
    buttonIcon: <FaArrowRightLong />,
    projectContentShape: projectContentShape,
  },
  {
    id: 2,
    projectThumb: projectThumb2,
    projectSubTitle: "Development",
    projectTitle: "Web Development",
    projectUrl: "/project_details",
    buttonTitle: "View Details",
    buttonIcon: <FaArrowRightLong />,
    projectContentShape: projectContentShape,
  },
  {
    id: 3,
    projectThumb: projectThumb3,
    projectSubTitle: "IT Solution",
    projectTitle: "UI/UX Design",
    projectUrl: "/project_details",
    buttonTitle: "View Details",
    buttonIcon: <FaArrowRightLong />,
    projectContentShape: projectContentShape,
  },
];

const Project = () => {
  return (
    <section className="py-28 bg-BodyBg-0 relative z-10 be">
      <div className="Container">
        <div className="text-center">
          <h1 className="font-FiraSans font-bold text-xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[30px] lg:leading-[40px] xl:text-[36px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[52px] text-HeadingColor-0 mb-12">
            Similar Completed Projects
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 pt-1">
          {ProjectData.map(
            ({
              id,
              projectThumb,
              projectShape,
              projectContentShape,
              projectSubTitle,
              projectTitle,
              projectUrl,
              buttonTitle,
              buttonIcon,
            }) => {
              return (
                <div key={id}>
                  <ProjectCard
                    projectThumb={projectThumb}
                    projectContentShape={projectContentShape}
                    projectShape={projectShape}
                    projectSubTitle={projectSubTitle}
                    projectTitle={projectTitle}
                    projectUrl={projectUrl}
                    buttonTitle={buttonTitle}
                    buttonIcon={buttonIcon}
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

export default Project;
