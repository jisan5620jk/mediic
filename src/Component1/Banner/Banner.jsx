import bannerThumb from "/images/hero-img.png";
import bannerHeart from "/images/banner-heart.png";
import bannerTeam from "/images/team-img.png";
import bannerCheck from "/images/tick.png";
import { Link } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";

const Banner = () => {
  return (
    <div className="bg-BodyBg-0 px-2 lg:px-[30px]">
      <section className="bg-[url('/images/hero-bg.png')] bg-cover bg-center bg-no-repeat h-[600px] sm:h-[700px] md:h-[1100px] lg:h-[700px] xl:h-[790px] 2xl:h-[790px] flex items-center relative z-10 overflow-hidden rounded-t-[40px]">
        <div className="flex justify-center items-center m-auto">
          <div className="Container">
            <div className="relative z-10">
              <div className="flex items-center justify-center gap-5">
                <h1 className="font-AlbertSans font-extrabold text-[110px] text-white uppercase">
                  HealthCare
                </h1>
                <img src={bannerHeart} draggable="false" />
              </div>
              <div className="absolute z-10 left-1/2 -translate-x-1/2 top-0">
                <img src={bannerThumb} draggable="false" />
              </div>
              <div className="flex items-center justify-center gap-6 relative z-20 -mt-8">
                <div className="bg-white bg-opacity-20 backdrop-filter filter-blur-[5px] backdrop-blur-lg flex items-center gap-[15px] rounded-full py-[14px] px-5">
                  <img src={bannerTeam} draggable="false" />
                  <h5 className="font-AlbertSans font-semibold text-white text-lg uppercase">
                    Memebers
                  </h5>
                </div>
                <h1 className="font-AlbertSans font-extrabold text-[110px] text-white uppercase">
                  Doctors
                </h1>
              </div>
            </div>
            <div className="relative z-30 flex justify-between items-center mt-[130px]">
              <div className="flex gap-5">
                <div className="mt-[6px]">
                  <img src={bannerCheck} draggable="false" />
                </div>
                <div>
                  <h5 className="font-AlbertSans font-semibold text-2xl text-white">
                    Best Medical
                  </h5>
                  <p className="font-DMSans text-TextColor-0 mt-[6px]">
                    Rapidiously reinvent long-term <br /> impact collaboration
                  </p>
                </div>
              </div>
              <div>
                <Link to={"/appiontment"}>
                  <button className="font-AlbertSans font-medium text-lg text-white flex items-center gap-2 bg-PrimaryColor-0 px-9 py-[18px] rounded-full">
                    Free Consultation
                    <GoArrowRight />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
