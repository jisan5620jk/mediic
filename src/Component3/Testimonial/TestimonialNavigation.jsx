import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { useSwiper } from "swiper/react";

const BannerNavigation = () => {
  const swiper = useSwiper();

  return (
    <div className="flex justify-between w-full absolute px-0 top-[80%] md:top-[50%]">
      <button
        className="w-[60px] h-[60px] rounded-full overflow-hidden relative bg-white flex items-center text-2xl text-PrimaryColor-0 hover:text-white justify-center transition-all duration-500 z-10 after:absolute after:top-[0] after:left-[0] after:bg-PrimaryColor-0 after:w-full after:h-full after:scale-0 after:-z-10 after:transition-all after:duration-500 hover:after:scale-100"
        onClick={() => swiper.slidePrev()}
      >
        <GoArrowLeft />
      </button>
      <button
        className="w-[60px] h-[60px] rounded-full overflow-hidden relative bg-white flex items-center text-2xl text-PrimaryColor-0 hover:text-white justify-center transition-all duration-500 z-10 after:absolute after:top-[0] after:left-[0] after:bg-PrimaryColor-0 after:w-full after:h-full after:scale-0 after:-z-10 after:transition-all after:duration-500 hover:after:scale-100"
        onClick={() => swiper.slideNext()}
      >
        <GoArrowRight />
      </button>
    </div>
  );
};

export default BannerNavigation;
