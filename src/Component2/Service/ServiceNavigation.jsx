import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useSwiper } from "swiper/react";

const ServiceNavigation = () => {
  const swiper = useSwiper();

  return (
    <div className="2xl:flex flex-col justify-between w-full absolute gap-[10px] left-0 bottom-[170px] hidden">
      <button
        className="w-[52px] h-[52px] rounded-full overflow-hidden relative bg-transparent border-2 border-BorderColor2-0 hover:border-PrimaryColor-0 flex items-center text-2xl text-white justify-center transition-all duration-500 z-10 after:absolute after:top-[0] after:rotate-180 after:left-[0] after:bg-PrimaryColor-0 after:w-full after:h-full after:scale-0 after:-z-10 after:transition-all after:duration-500 hover:after:scale-100 hover:after:rotate-0"
        onClick={() => swiper.slidePrev()}
      >
        <IoIosArrowBack />
      </button>
      <button
        className="w-[52px] h-[52px] rounded-full overflow-hidden relative bg-transparent border-2 border-BorderColor2-0 hover:border-PrimaryColor-0 flex items-center text-2xl text-white justify-center transition-all duration-500 z-10 after:absolute after:top-[0] after:rotate-180 after:left-[0] after:bg-PrimaryColor-0 after:w-full after:h-full after:scale-0 after:-z-10 after:transition-all after:duration-500 hover:after:scale-100 hover:after:rotate-0"
        onClick={() => swiper.slideNext()}
      >
        <IoIosArrowForward />
      </button>
    </div>
  );
};

export default ServiceNavigation;
