import aboutThumb from "/images/about3-thumb.png";
import { Link } from "react-router-dom";
import aboutShape from "/images/about-shape.jpg";
import aboutIcon from "/images/about3-icon1.png";
import aboutIcon2 from "/images/about3-icon2.png";
import { BsArrowRightCircleFill } from "react-icons/bs";
import aboutAuthor from "/images/about-author.jpg";

const About = () => {
  return (
    <section className="pb-[120px] bg-white bg-no-repeat bg-center bg-cover relative">
      <img
        src={aboutShape}
        draggable={false}
        className="absolute top-0 right-0"
      />
      <div className="Container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-[92px] lg:gap-14 2xl:gap-[150px] items-center">
          <div className="relative z-10">
            <img src={aboutThumb} draggable="false" />
          </div>
          <div className="relative">
            <h5 className="font-FiraSans text-[19px] font-semibold text-PrimaryColor-0 relative pl-5 before:absolute before:top-1/2 before:-translate-y-1/2 before:left-0 before:h-[10px] before:w-[10px] before:bg-PrimaryColor-0 before:rounded-full">
              WHO WE ARE
            </h5>
            <h1 className="font-FiraSans font-bold text-2xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[30px] lg:leading-[40px] xl:text-[44px] xl:leading-[46px] 2xl:text-[48px] 2xl:leading-[50px] text-HeadingColor-0 mt-3 mb-4">
              Get Exclusive It Solutions & <br />
              Services With <span className="text-PrimaryColor-0">TopTech</span>
            </h1>
            <p className="font-FiraSans text-TextColor2-0 pb-8">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which is best for IT solution
              service and consulting for your business.
            </p>
            <div className="flex items-center gap-5">
              <div className="w-[74px] h-[74px] rounded bg-[#d4e1f7] flex items-center justify-center">
                <img src={aboutIcon} />
              </div>
              <div className="flex-1">
                <h6 className="font-FiraSans font-bold text-[22px] text-HeadingColor-0">
                  Certified Company
                </h6>
                <p className="font-FiraSans text-TextColor2-0">
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin lorem
                  awesome.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-5 mt-9">
              <div className="w-[74px] h-[74px] rounded bg-[#d4e1f7] flex items-center justify-center">
                <img src={aboutIcon2} />
              </div>
              <div className="flex-1">
                <h6 className="font-FiraSans font-bold text-[22px] text-HeadingColor-0">
                  Internet Networking
                </h6>
                <p className="font-FiraSans text-TextColor2-0">
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin lorem
                  awesome.
                </p>
              </div>
            </div>
            <div className="mt-10 flex flex-col sm:flex-row gap-6 sm:items-center">
              <Link to={"/about"} className="inline-block">
                <button className="primary-btn">
                  {`More About`}
                  <BsArrowRightCircleFill size={"20"} />
                </button>
              </Link>
              <div className="flex items-center gap-5">
                <div className="inline-block rounded-full overflow-hidden">
                  <img src={aboutAuthor} />
                </div>
                <div className="flex-1">
                  <h6 className="font-FiraSans font-semibold text-xl text-HeadingColor-0">
                    Kevin Martin
                  </h6>
                  <p className="font-FiraSans text-TextColor2-0">
                    CEO & Founder
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
