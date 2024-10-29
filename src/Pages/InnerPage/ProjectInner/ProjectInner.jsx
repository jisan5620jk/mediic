import { FaArrowRightLong } from 'react-icons/fa6';
import BreadCrumb from '../../../Shared/BreadCrumb/BreadCrumb';
import projectThumb from '/images/project.jpg';
import projectThumb2 from '/images/project2.jpg';
import projectThumb3 from '/images/project3.png';
import ProjectCard from './ProjectCard';
import Blog from '../../../Component1/Blog/Blog';
import Subscribe from '../../../Component1/Subscribe/Subscribe';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import ProjectNavigation from './ProjectNavigation';
import Brand from './Brand/Brand';

const ProjectData = [
  {
    id: 1,
    projectThumb: projectThumb,
    projectSubTitle: 'Frustation',
    projectTitle: 'Cardiothoracic',
    projectUrl: '/project_details',
    buttonTitle: 'View Details',
    buttonIcon: <FaArrowRightLong />,
    projectDesc:
      'Mediic design and develop for high class innovative medical...',
  },
  {
    id: 2,
    projectThumb: projectThumb2,
    projectSubTitle: 'Frustation',
    projectTitle: 'Supraventricular',
    projectUrl: '/project_details',
    buttonTitle: 'View Details',
    buttonIcon: <FaArrowRightLong />,
    projectDesc:
      'Mediic design and develop for high class innovative medical...',
  },
  {
    id: 3,
    projectThumb: projectThumb3,
    projectSubTitle: 'Frustation',
    projectTitle: 'Cardiothoracic',
    projectUrl: '/project_details',
    buttonTitle: 'View Details',
    buttonIcon: <FaArrowRightLong />,
    projectDesc:
      'Mediic design and develop for high class innovative medical...',
  },
  {
    id: 4,
    projectThumb: projectThumb2,
    projectSubTitle: 'Frustation',
    projectTitle: 'Cardiothoracic',
    projectUrl: '/project_details',
    buttonTitle: 'View Details',
    buttonIcon: <FaArrowRightLong />,
    projectDesc:
      'Mediic design and develop for high class innovative medical...',
  },
];

const ProjectInner = () => {
  const settings = {
    loop: true,
    spaceBetween: 30,
    speed: 1000,
    initialSlide: 1,
    centeredSlides: true,
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
    <>
      <BreadCrumb
        breadCrumbTitle={'Projects'}
        breadCrumbIcon={<FaArrowRightLong />}
        breadCrumbLink={'Projects'}
      />
      <section className='py-28 bg-BodyBg-0'>
        <div className='Container'>
          <Swiper {...settings}>
            {ProjectData.map(
              ({
                id,
                projectThumb,
                projectSubTitle,
                projectTitle,
                projectUrl,
                buttonIcon,
                projectDesc,
              }) => {
                return (
                  <SwiperSlide key={id}>
                    <div
                      className='pb-[64px]'
                      data-aos='fade-up'
                      data-aos-duration='1000'
                    >
                      <ProjectCard
                        projectThumb={projectThumb}
                        projectSubTitle={projectSubTitle}
                        projectTitle={projectTitle}
                        projectUrl={projectUrl}
                        buttonIcon={buttonIcon}
                        projectDesc={projectDesc}
                      />
                    </div>
                  </SwiperSlide>
                );
              }
            )}
            <ProjectNavigation />
          </Swiper>
        </div>
      </section>
      <Brand />
      <Blog />
      <Subscribe />
    </>
  );
};

export default ProjectInner;
