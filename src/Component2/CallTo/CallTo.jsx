import { FaRegThumbsUp } from "react-icons/fa";
import { LuPhone } from "react-icons/lu";
import { Link } from "react-router-dom";
import callShape from "/images/call_shape.png";

const CallTo = () => {
  return (
    <section className="bg-BodyBg3-0 py-8">
      <div className="Container">
        <div className="grid grid-cols-6 gap-5 lg:gap-0 lg:grid-cols-12 items-center">
          <div className="col-span-6 xl:col-span-7 relative">
            <div className="absolute top-2 right-10 animate-swing hidden xl:block">
              <img src={callShape} draggable="false" />
            </div>
            <h5 className="font-FiraSans font-medium text-sm sm:text-base text-white uppercase mb-3">
              CALL TO ACTION
            </h5>
            <h1 className="font-FiraSans font-semibold text-white text-[16px] leading-[26px] sm:text-[25px] sm:leading-[35px] md:text-[30px] md:leading-[40px] lg:text-[32px] lg:leading-[42px] mb-4">
              Get A Free Finance Consultant
            </h1>
          </div>
          <div className="col-span-6 xl:col-span-5">
            <div className="flex flex-col gap-8 sm:gap-0 sm:flex-row sm:justify-between sm:items-center relative before:absolute before:left-1/2 before:top-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:hidden 2xl:before:block before:w-[2px] before:h-12 before:bg-BorderColor2-0">
              <div className="flex items-center gap-5">
                <div className="size-[58px] rounded-full border-2 border-white flex items-center justify-center text-white">
                  <LuPhone size={"24"} />
                </div>
                <div className="flex-1">
                  <h6 className="font-FiraSans text-white text-opacity-70 text-[15px]">
                    CALL US ANYTIME
                  </h6>
                  <Link to={"/"}>
                    <button className="font-FiraSans font-medium text-left text-lg 2xl:text-xl text-white">
                      +980 123 (4567) 890
                    </button>
                  </Link>
                </div>
              </div>
              <div className="">
                <Link to={"/contact"}>
                  <button className="primary-btn2 !border-2 !border-BorderColor2-0">
                    <FaRegThumbsUp />
                    {`Contact Us`}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallTo;
