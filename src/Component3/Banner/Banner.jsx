import { Link } from "react-router-dom";
import { useState } from "react";
import FsLightbox from "fslightbox-react";

const Banner = () => {
  const [toggler, setToggler] = useState(false);
  return (
    <section className="bg-[url('/images/hero3-bg.jpg')] bg-cover bg-center bg-no-repeat h-[1000px] sm:h-[900px] lg:h-[660px] xl:h-[900px] flex items-center relative z-10 overflow-hidden">
      <div className="Container">
        <div className="grid gap-16 lg:gap-0 lg:grid-cols-12 items-center">
          <div className="col-span-9 relative">
            <h5 className="font-FiraSans text-white text-xl sm:text-2xl uppercase font-medium flex items-center gap-2 mb-5">
              Welcome to Toptech
            </h5>
            <h1 className="font-FiraSans font-extrabold text-white text-[26px] leading-[30px] sm:text-[48px] sm:leading-[50px] md:text-[62px] md:leading-[62px] lg:text-[50px] lg:leading-[50px] xl:text-[74px] xl:leading-[74px]">
              TOP IT SOLUTIONS AGENCY
              <br />
              IN THE WORLD
            </h1>
            <p className="font-FiraSans sm:text-[17px] text-white mb-[50px] mt-6">
              Play In Order To Make A Business, Brand Advertising And Marketing
              Plays An
              <br className="hidden md:block" /> Important Role. Similarly, In
              Making Cultivation Business
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <Link to={"/"}>
                <button className="primary-btn3 !py-4 !px-10 !rounded-none">
                  {`How IT Works`}
                </button>
              </Link>
              <Link to={"/"}>
                <button className="primary-btn3 !py-4 !px-10 !rounded-none !border-white hover:!border-PrimaryColor-0 !bg-transparent before:!bg-PrimaryColor-0">{`It Services`}</button>
              </Link>
            </div>
          </div>
          <div className="col-span-3 flex justify-center">
            <button className="size-[120px] border-2 border-white rounded-full bg-transparent flex justify-center items-center relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-white before:opacity-50 before:-z-10 before:rounded-full before:animate-ping">
              <span
                className="text-white uppercase font-FiraSans text-2xl"
                onClick={() => setToggler(!toggler)}
              >
                Play
              </span>
            </button>
            <FsLightbox
              toggler={toggler}
              sources={[
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
