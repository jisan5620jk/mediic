import { FaArrowRightLong } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";
import { Link } from "react-router-dom";
import shape from "/images/appointment-shape.png";
import shape2 from "/images/appointment-shape2.png";

const Appointment = () => {
  return (
    <section className="py-28 relative bg-[linear-gradient(to_bottom,_rgba(121,185,0,1)_40%,_rgba(255,255,255,1)_32%)] sm:bg-[linear-gradient(to_bottom,_rgba(121,185,0,1)_41.5%,_rgba(255,255,255,1)_32%)] md:bg-[linear-gradient(to_top,_rgba(255,255,255,1)_52.5%,_rgba(121,185,0,1)_48.5%)] lg:bg-[linear-gradient(to_right,_rgba(121,185,0,1)_50%,_rgba(255,255,255,1)_50%)] border-r-8 border-b-8 border-PrimaryColor-0 overflow-hidden">
      <img src={shape} className="absolute -left-2 -top-2 z-20" />
      <div className="Container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-40 md:gap-40 lg:gap-28 items-center">
          <div className="relative text-center">
            <img
              src={shape2}
              className="absolute right-0 -top-20 animate-zoomInOut hidden 2xl:block"
            />
            <div className="w-[110px] h-[110px] text-white relative rounded-full flex justify-center items-center m-auto before:absolute before:top-0 before:left-0 before:w-full before:h-full before:border before:text-white before:border-dashed before:border-white before:rounded-full before:animate-rotational">
              <FiPhoneCall size={"50"} />
            </div>
            <h1 className="font-FiraSans font-bold text-[22px] leading-8 sm:text-[38px] sm:leading-[48px] md:text-[44px] md:leading-[54px] lg:text-[32px] lg:leading-[42px] xl:text-[40px] xl:leading-[50px] 2xl:text-[46px] 2xl:leading-[56px] text-white mt-9 mb-11">
              Dial for a Consultation
              <br />
              on the House!
            </h1>
            <div className="inline-block">
              <Link to={"/about"} className="flex justify-center items-center">
                <button className="primary-btn2 !border-white !border">
                  Contact Now
                  <FaArrowRightLong size={"20"} />
                </button>
              </Link>
            </div>
          </div>
          <div className="mr-2">
            <h2 className="font-FiraSans font-bold text-3xl md:text-[40px] mb-11">
              Request A Quote
            </h2>
            <form action="#" method="post" className="flex flex-col gap-7">
              <div className="flex flex-col md:flex-row gap-7">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your Name*"
                  required
                  className="border border-BorderColor2-0 rounded py-2 px-6 outline-none h-[56px] w-full"
                />
                <input
                  type="text"
                  name="number"
                  id="number"
                  placeholder="Your Number"
                  className="border border-BorderColor2-0 rounded py-2 px-6 outline-none h-[56px] w-full"
                />
              </div>
              <div className="flex flex-col md:flex-row gap-7">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your E-Mail*"
                  required
                  className="border border-BorderColor2-0 rounded py-2 px-6 outline-none h-[56px] w-full"
                />
                <input
                  type="text"
                  name="address"
                  id="address"
                  placeholder="Your Address"
                  className="border border-BorderColor2-0 rounded py-2 px-6 outline-none h-[56px] w-full"
                />
              </div>
              <textarea
                name="message"
                id="message"
                placeholder="Write A Message..."
                className="border border-BorderColor2-0 rounded py-2 px-6 outline-none resize-none h-[140px] w-full"
              ></textarea>
              <div className="inline-block">
                <button type="submit" className="primary-btn2">
                  Submit Now
                  <FaArrowRightLong size={"20"} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appointment;
