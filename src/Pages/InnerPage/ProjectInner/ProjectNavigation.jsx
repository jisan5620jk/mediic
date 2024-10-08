import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { useSwiper } from "swiper/react";

const ProjectNavigation = () => {
  const swiper = useSwiper();

  return (
    <div className='flex justify-center w-full absolute gap-5 left-0 bottom-0'>
      <button
        className='size-[46px] rounded-full overflow-hidden relative border-2 border-white bg-white bg-opacity-30 flex items-center text-2xl text-PrimaryColor-0 justify-center transition-all duration-500 hover:text-white hover:border-Secondarycolor-0 z-10 after:absolute after:top-[0] after:rotate-180 after:left-[0] after:bg-Secondarycolor-0 after:w-full after:h-full after:scale-0 after:-z-10 after:transition-all after:duration-500 hover:after:scale-100 hover:after:rotate-0'
        onClick={() => swiper.slidePrev()}
      >
        <GoArrowLeft />
      </button>
      <button
        className='size-[46px] rounded-full overflow-hidden relative border-2 border-white bg-white bg-opacity-30 flex items-center text-2xl text-PrimaryColor-0 justify-center transition-all duration-500 hover:text-white hover:border-Secondarycolor-0 z-10 after:absolute after:top-[0] after:rotate-180 after:left-[0] after:bg-Secondarycolor-0 after:w-full after:h-full after:scale-0 after:-z-10 after:transition-all after:duration-500 hover:after:scale-100 hover:after:rotate-0'
        onClick={() => swiper.slideNext()}
      >
        <GoArrowRight />
      </button>
    </div>
  );
};

export default ProjectNavigation;
