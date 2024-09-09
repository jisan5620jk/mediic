import { Link } from "react-router-dom";
import bannerThumb from "/images/hero_thumb_2.png";
import bannerShape from "/images/hero_dot_shape.png";
import bannerShape2 from "/images/hero_shape1.png";
import bannerShape3 from "/images/hero_shape2.png";
import { useState } from "react";
import FsLightbox from "fslightbox-react";
import { LuPlaySquare } from "react-icons/lu";
import { FaRegThumbsUp } from "react-icons/fa";

const Banner = () => {
  const [toggler, setToggler] = useState(false);
  return (
    <section className="bg-[url('/images/banner_2.png')] bg-cover bg-center bg-no-repeat h-[900px] sm:h-[1100px] md:h-[1300px] lg:h-[700px] xl:h-[780px] 2xl:h-[900px] flex items-center relative z-10 overflow-hidden">
      <div className="Container">
        <div className="grid lg:grid-cols-2 items-center gap-16 lg:gap-0 mt-[72px]">
          <div className="relative">
            <h1 className="font-FiraSans font-semibold text-white text-[26px] leading-[32px] sm:text-[46px] sm:leading-[52px] md:text-[68x] lg:text-[46px] xl:text-[54px] xl:leading-[68px] 2xl:text-[56px] 2xl:leading-[70px]">
              Digital Finance Const.
              <br />
              Growing Business
            </h1>
            <p className="font-FiraSans text-TextColor-0 mb-[38px] mt-[22px]">
              Continually plagiarize virtual web services with resource{" "}
              <br className="hidden xl:block 2xl:hidden" />
              maximizing <br className="hidden 2xl:block" /> action items.
              Globally build front-end
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center gap-8">
              <Link to={"/contact"}>
                <button className="primary-btn2">
                  <FaRegThumbsUp />
                  {`Get Started now`}
                </button>
              </Link>
              <div>
                <button
                  className="flex items-center gap-3 text-white font-FiraSans font-medium"
                  onClick={() => setToggler(!toggler)}
                >
                  <LuPlaySquare size={"24"} className="text-white" />
                  How It Works
                </button>
                <FsLightbox
                  toggler={toggler}
                  sources={[
                    "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
                  ]}
                />
              </div>
            </div>
            <img
              src={bannerShape2}
              draggable="false"
              className="absolute bottom-0 right-14 animate-zoomInOut"
            />
          </div>
          <div className="flex justify-center lg:justify-end">
            <img
              src={bannerThumb}
              draggable="false"
              className="-mb-40 md:-mb-56 lg:-mb-44 2xl:max-w-[inherit] "
            />
          </div>
        </div>
      </div>
      <img
        src={bannerShape}
        draggable={false}
        className="absolute -z-10 top-52 2xl:top-[200px] left-[40%] md:left-3/4 lg:left-[40%] -translate-x-1/2 animate-wiggle hidden sm:block"
      />
      <img
        src={bannerShape2}
        draggable={false}
        className="absolute -z-10 top-52 2xl:top-[200px] left-[90%] md:left-3/4 lg:left-[90%] -translate-x-1/2 animate-wiggle hidden sm:block"
      />
      <img
        src={bannerShape3}
        draggable={false}
        className="absolute -z-10 top-1/2 left-0  -translate-x-1/2 animate-dance2 hidden sm:block"
      />
    </section>
  );
};

export default Banner;
