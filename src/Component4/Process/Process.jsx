import { Link } from "react-router-dom";
import processThumb from "/images/process-thumb.png";
import { PiStarFourFill } from "react-icons/pi";
import { useState } from "react";
import FsLightbox from "fslightbox-react";
import { HiOutlineArrowRight } from "react-icons/hi";

const Process = () => {
  const [toggler, setToggler] = useState(false);
  return (
    <section className="bg-BodyBg-0 py-28">
      <div className="Container">
        <div className="grid lg:grid-cols-2 lg:items-center gap-10 xl:gap-20 2xl:gap-[150px]">
          <div className="relative">
            <img src={processThumb} draggable="false" />
            <div className="absolute top-1/2 right-[65px] sm:right-[150px] md:right-[340px] lg:right-[128px] xl:right-[154px] 2xl:right-[210px] -translate-y-1/2">
              <button className="size-[100px] rounded-full bg-PrimaryColor-0 text-white font-FiraSans font-medium text-xl relative flex justify-center items-center z-10 overflow-hidden before:absolute before:top-[11px] before:left-[11px] before:size-[78px] before:border before:border-dashed before:border-white before:rounded-full before:animate-rotational">
                <span onClick={() => setToggler(!toggler)}>Play</span>
              </button>
              <FsLightbox
                toggler={toggler}
                sources={[
                  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
                ]}
              />
            </div>
          </div>
          <div>
            <h5 className="font-FiraSans text-lg font-medium text-PrimaryColor-0 flex items-center gap-2">
              <PiStarFourFill size={"14"} />
              WORK PROCESSING
            </h5>
            <h1 className="font-FiraSans font-bold text-[22px] leading-8 sm:text-[38px] sm:leading-[48px] md:text-[44px] md:leading-[54px] lg:text-[32px] lg:leading-[42px] xl:text-[42px] xl:leading-[52px] 2xl:text-[46px] 2xl:leading-[56px] text-HeadingColor-0 mt-4 mb-4">
              Expert Consulting for Diverse
              <br /> Financial Services.
            </h1>
            <p className="font-FiraSans text-TextColor2-0 text-lg pb-7">
              Professionaly optimize interdependent intelectual services visuali
              design infoediaries main issue state icreative planing main best
              practices.
            </p>
            <p className="font-FiraSans text-TextColor2-0 text-lg pb-6">
              Our team of seasoned experts is here to you to unlock your provid
              business’s potential and achieve remar success.
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center gap-7 mt-5">
              <Link to={"/about"}>
                <button className="primary-btn4">{`Read More`}</button>
              </Link>
              <Link to={"/home4"}>
                <button className="font-FiraSans font-medium text-TextColor2-0 flex items-center gap-2">
                  {`CUSTOMER DETAILS`}
                  <HiOutlineArrowRight size={"20"} />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
