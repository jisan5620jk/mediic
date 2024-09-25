import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { useSwiper } from "swiper/react";

const ServiceNavigation = () => {
  const swiper = useSwiper();

  return (
    <div className='flex justify-center w-full absolute gap-5 left-0 bottom-0'>
      <button
        className='size-[46px] rounded-full overflow-hidden relative bg-PrimaryColor-0 border-2 border-PrimaryColor-0 flex items-center text-2xl text-white justify-center transition-all duration-500 z-10 after:absolute after:top-[0] after:rotate-180 after:left-[0] after:bg-Secondarycolor-0 after:w-full after:h-full after:scale-0 after:-z-10 after:transition-all after:duration-500 hover:after:scale-100 hover:after:rotate-0'
        onClick={() => swiper.slidePrev()}
      >
        <GoArrowLeft/>
      </button>
      <button
        className='size-[46px] rounded-full overflow-hidden relative bg-PrimaryColor-0 border-2 border-PrimaryColor-0 flex items-center text-2xl text-white justify-center transition-all duration-500 z-10 after:absolute after:top-[0] after:rotate-180 after:left-[0] after:bg-Secondarycolor-0 after:w-full after:h-full after:scale-0 after:-z-10 after:transition-all after:duration-500 hover:after:scale-100 hover:after:rotate-0'
        onClick={() => swiper.slideNext()}
      >
        <GoArrowRight />
      </button>
    </div>
  );
};

export default ServiceNavigation;
