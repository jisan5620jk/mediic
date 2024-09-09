import { FaRegEnvelope, FaRegUser } from "react-icons/fa6";
import bannerShape from "/images/hero_dot_shape.png";
import bannerShape3 from "/images/hero_shape2.png";
import { FaPhoneAlt } from "react-icons/fa";

const CallBack = () => {
  return (
    <section className="bg-[url(/images/call_bg.png)] bg-no-repeat bg-cover bg-center py-28 relative z-10">
      <div className="Container">
        <div className="grid grid-cols-1 gap-8 lg:gap-0 lg:grid-cols-2 lg:items-center">
          <div>
            <h5 className="font-FiraSans font-medium text-sm sm:text-base text-white uppercase mb-3">
              Call Back
            </h5>
            <h1 className="font-FiraSans font-semibold text-white text-[16px] leading-[26px] sm:text-[25px] sm:leading-[35px] md:text-[30px] md:leading-[40px] lg:text-[38px] lg:leading-[48px] xl:text-[40px] xl:leading-[50px] 2xl:text-[42px] 2xl:leading-[52px] mb-4">
              Request A Free Consulting
            </h1>
            <p className="font-FiraSans text-TextColor-0">
              Media leadership skills before cross-media innovation testing
              <br />
              develop standardized platforms without
            </p>
          </div>
          <div>
            <form
              action="#"
              method="post"
              className="grid grid-cols-1 sm:grid-cols-2 items-center gap-5"
            >
              <label htmlFor="name" className="relative">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your Name*"
                  required
                  className="h-[56px] w-full rounded px-6 py-2 font-FiraSans text-sm placeholder:text-TextColor2-0 text-HeadingColor-0 bg-white border-none outline-none"
                />
                <span className="absolute top-1/2 -translate-y-1/2 right-6 text-TextColor2-0">
                  <FaRegUser />
                </span>
              </label>
              <label htmlFor="email" className="relative">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your E-Mail*"
                  required
                  className="h-[56px] w-full rounded px-6 py-2 font-FiraSans text-sm placeholder:text-TextColor2-0 text-HeadingColor-0 bg-white border-none outline-none"
                />
                <span className="absolute top-1/2 -translate-y-1/2 right-6 text-TextColor2-0">
                  <FaRegEnvelope />
                </span>
              </label>
              <label htmlFor="phone" className="relative">
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="Phone No.*"
                  required
                  className="h-[56px] w-full rounded px-6 py-2 font-FiraSans text-sm placeholder:text-TextColor2-0 text-HeadingColor-0 bg-white border-none outline-none"
                />
                <span className="absolute top-1/2 -translate-y-1/2 right-6 text-TextColor2-0">
                  <FaPhoneAlt size={"15"} />
                </span>
              </label>
              <button
                type="submit"
                className="h-[56px] w-full bg-PrimaryColor-0 text-white font-FiraSans
                           rounded relative z-10 before:absolute before:left-1/2 before:top-0 before:bg-Secondarycolor-0 before:w-0 before:h-full before:transition-all before:duration-500 before:rounded before:-z-10 hover:before:w-full hover:before:left-0"
              >
                Request Call Back
              </button>
            </form>
          </div>
        </div>
      </div>
      <img
        src={bannerShape}
        draggable={false}
        className="absolute -z-10 top-28 left-[90%] animate-wiggle hidden sm:block"
      />
      <img
        src={bannerShape3}
        draggable={false}
        className="absolute -z-10 top-28 left-10 2xl:left-28 animate-dance2 hidden sm:block"
      />
    </section>
  );
};

export default CallBack;
