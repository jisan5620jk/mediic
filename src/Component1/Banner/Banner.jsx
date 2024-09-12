import bannerThumb from "/images/hero-img.png";
import bannerHeart from "/images/banner-heart.png";
import bannerTeam from "/images/team-img.png";
import bannerCheck from "/images/tick.png";
import bannerPlus from "/images/plus.png";
import bannerShape from "/images/banner-arrow.png";
import { Link } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";
import { FaInstagram, FaLinkedinIn, FaPinterestP, FaSquareFacebook } from "react-icons/fa6";

const Banner = () => {
  return (
    <div className="bg-BodyBg-0 px-2 lg:px-[30px]">
      <section className="bg-[url('/images/hero-bg.png')] bg-cover bg-center bg-no-repeat h-[600px] sm:h-[700px] md:h-[1100px] lg:h-[700px] xl:h-[790px] 2xl:h-[790px] flex items-center relative z-10 overflow-hidden rounded-t-[30px]">
        <div className="absolute top-1/2 -translate-y-1/2 -left-10">
          <Link to={"/"}>
            <button className="font-AlbertSans font-medium inline-block text-lg text-white rotate-90 relative before:absolute before:-left-[72px] before:-bottom-[35px] before:rotate-90 before:w-[2px] before:h-[100px] before:bg-[linear-gradient(_180deg,_rgba(255,_255,_255,_0.9999999999999999)_0%,_rgba(27,_31,_73,_0)_100%_)]">
              +980 123 (4567) 890
            </button>
          </Link>
        </div>
        <div className="flex justify-center items-center m-auto">
          <div className="Container">
            <div className="relative z-10">
              <div className="absolute top-0 -left-10  -z-10">
                <img
                  src={bannerPlus}
                  draggable="false"
                  className="animate-rotational"
                />
              </div>
              <div className="flex items-center justify-center gap-5">
                <h1 className="font-AlbertSans font-extrabold text-[110px] text-white uppercase">
                  HealthCare
                </h1>
                <img src={bannerHeart} draggable="false" className="animate-rotateX"/>
              </div>
              <div className="absolute z-10 left-1/2 -translate-x-1/2 -top-28">
                <img
                  src={bannerThumb}
                  draggable="false"
                  className="max-w-[inherit]"
                />
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
                  <button className="banner-btn">
                    Free Consultation
                    <GoArrowRight size={"22"} className="-rotate-45" />
                  </button>
                </Link>
              </div>
              <div className="absolute -bottom-10 -right-10  -z-10">
                <img
                  src={bannerPlus}
                  draggable="false"
                  className="animate-rotational"
                />
              </div>
              <div className="absolute bottom-24 right-0  -z-10">
                <img
                  src={bannerShape}
                  draggable="false"
                  className="animate-swing"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 right-10">
          <ul className="flex flex-col items-center gap-[26px]">
            <li>
              <Link to={"/"}>
                <button className="text-white">
                  <FaSquareFacebook size={"20"} />
                </button>
              </Link>
            </li>
            <li>
              <Link to={"/"}>
                <button className="text-white">
                  <FaLinkedinIn size={"20"} />
                </button>
              </Link>
            </li>
            <li>
              <Link to={"/"}>
                <button className="text-white">
                  <FaPinterestP size={"20"} />
                </button>
              </Link>
            </li>
            <li>
              <Link to={"/"}>
                <button className="text-white">
                  <FaInstagram size={"20"} />
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Banner;
