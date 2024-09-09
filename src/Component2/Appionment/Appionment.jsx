import { BiRightTopArrowCircle } from "react-icons/bi";
import { FaUser } from "react-icons/fa6";
import { GrAlarm } from "react-icons/gr";
import { HiOutlineMailOpen } from "react-icons/hi";
import { MdCall, MdEmail } from "react-icons/md";

const Appionment = () => {
  return (
    <section className="bg-BodyBg-0">
      <div className="Container">
        <div className="bg-white p-6 sm:p-11 lg:p-5 xl:p-11 rounded-lg grid grid-cols-2 lg:grid-cols-3 gap-10 2xl:gap-[92px] items-center relative z-10">
          <div className="col-span-2">
            <h1 className="font-FiraSans font-bold text-2xl sm:text-4xl text-HeadingColor-0 pb-9">
              Write to Us Anytime
            </h1>
            <form action="#" method="post" className="flex flex-col gap-y-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
                <div className="relative inline-block">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter Name*"
                    required
                    className="font-FiraSans text-TextColor2-0 font-light bg-transparent border-2 border-BorderColor2-0 rounded py-2 px-6 h-[60px] w-full focus:outline-PrimaryColor-0"
                  />
                  <FaUser
                    size={"14"}
                    className="absolute text-PrimaryColor-0 top-1/2 -translate-y-1/2 right-5"
                  />
                </div>
                <div className="relative inline-block">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter E-Mail*"
                    required
                    className="font-FiraSans text-TextColor2-0 font-light bg-transparent border-2 border-BorderColor2-0 rounded py-2 px-6 h-[60px] w-full focus:outline-PrimaryColor-0"
                  />
                  <HiOutlineMailOpen
                    size={"16"}
                    className="absolute text-PrimaryColor-0 top-1/2 -translate-y-1/2 right-5"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
                <div className="relative inline-block">
                  <input
                    type="text"
                    name="number"
                    id="number"
                    placeholder="Enter Number*"
                    required
                    className="font-FiraSans text-TextColor2-0 font-light bg-transparent border-2 border-BorderColor2-0 rounded py-2 px-6 h-[60px] w-full focus:outline-PrimaryColor-0"
                  />
                  <MdCall
                    size={"16"}
                    className="absolute text-PrimaryColor-0 top-1/2 -translate-y-1/2 right-5"
                  />
                </div>
                <select
                  name="select"
                  id="select"
                  className="font-FiraSans text-TextColor2-0 font-light bg-transparent border-2 border-BorderColor2-0 rounded py-2 px-6 h-[60px] w-full focus:outline-PrimaryColor-0"
                >
                  <option value="subject" className="text-HeadingColor-0">
                    Your Subject
                  </option>
                  <option value="subject2" className="text-HeadingColor-0">
                    Bangla
                  </option>
                  <option value="subject3" className="text-HeadingColor-0">
                    Arabic
                  </option>
                  <option value="subject4" className="text-HeadingColor-0">
                    China
                  </option>
                </select>
              </div>
              <textarea
                name="message"
                id="message"
                placeholder="Write a short meassage..."
                className="font-FiraSans text-TextColor2-0 font-light bg-transparent border-2 border-BorderColor2-0 rounded py-2 px-6 h-[160px] w-full focus:outline-PrimaryColor-0 resize-none"
              ></textarea>
              <div className="inline-block">
                <button type="submit" className="primary-btn3">
                  Send Message
                  <BiRightTopArrowCircle size={"20"} />
                </button>
              </div>
            </form>
          </div>
          <div className="col-span-2 lg:col-span-1 bg-[url(/images/contact-info-box-bg.png)] bg-no-repeat bg-center bg-cover rounded-lg pl-8 lg:pl-4 xl:p-7 2xl:pl-[50px] pt-16 pb-[100px]">
            <h3 className="font-FiraSans font-semibold text-white text-[30px] leading-[36px] mb-12">
              Don’t Forget to <br /> Contact Us
            </h3>
            <div className="flex flex-col sm:flex-row gap-5 sm:items-center">
              <div className="w-[52px] h-[52px] rounded-full border-2 border-white bg-transparent flex justify-center items-center text-white">
                <MdCall size={"20"} />
              </div>
              <div>
                <p className="font-FiraSans text-[15px] text-white">Call Us</p>
                <h5 className="font-FiraSans font-semibold text-white text-xl mt-1">
                  +980 123 (4567) 890
                </h5>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-5 sm:items-center my-[50px]">
              <div className="w-[52px] h-[52px] rounded-full border-2 border-white bg-transparent flex justify-center items-center text-white">
                <MdEmail size={"20"} />
              </div>
              <div>
                <p className="font-FiraSans text-[15px] text-white">
                  Send E-Mail
                </p>
                <h5 className="font-FiraSans font-semibold text-white text-xl mt-1">
                  example@hotmail.com
                </h5>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-5 sm:items-center">
              <div className="w-[52px] h-[52px] rounded-full border-2 border-white bg-transparent flex justify-center items-center text-white">
                <GrAlarm size={"20"} />
              </div>
              <div>
                <p className="font-FiraSans text-[15px] text-white">
                  Office Hour
                </p>
                <h5 className="font-FiraSans font-semibold text-white text-xl mt-1">
                  9.00 AM to 5.00 PM
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appionment;
