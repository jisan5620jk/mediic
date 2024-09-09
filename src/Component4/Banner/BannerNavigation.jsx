import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { useSwiper } from "swiper/react";

const BannerNavigation = () => {
  const swiper = useSwiper();

  return (
    <div className="flex justify-between w-full absolute px-[5%] 2xl:px-[156px] top-[80%] md:top-[50%]">
      <button
        className="size-[58px] rounded-full overflow-hidden relative bg-transparent border-2 border-TextColor-0 text-white flex items-center text-xl hover:text-white hover:border-PrimaryColor-0 justify-center transition-all duration-500 z-10 after:absolute after:top-[0] after:left-[0] after:bg-PrimaryColor-0 after:w-full after:h-full after:scale-0 after:-z-10 after:transition-all after:duration-500 hover:after:scale-100"
        onClick={() => swiper.slideNext()}
      >
        <FaChevronRight />
      </button>
      <button
        className="size-[58px] rounded-full overflow-hidden relative bg-transparent border-2 border-TextColor-0 text-white flex items-center text-xl hover:text-white hover:border-PrimaryColor-0 justify-center transition-all duration-500 z-10 after:absolute after:top-[0] after:left-[0] after:bg-PrimaryColor-0 after:w-full after:h-full after:scale-0 after:-z-10 after:transition-all after:duration-500 hover:after:scale-100"
        onClick={() => swiper.slidePrev()}
      >
        <FaChevronLeft />
      </button>
    </div>
  );
};

export default BannerNavigation;
