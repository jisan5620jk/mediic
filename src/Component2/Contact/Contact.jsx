import { BiRightTopArrowCircle } from "react-icons/bi";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import contactThumb from "/images/contact-thumb.png";
import contactShape from "/images/contact-shape.png";

const Contact = () => {
  return (
    <section className="bg-[url('/images/contact-bg.jpg')] bg-cover bg-center bg-no-repeat h-[1000px] sm:h-[1250px] lg:h-[732px] flex items-center relative">
      <div className="Container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-0">
          <div className="pt-[130px]">
            <div className="w-[82px] h-[82px] rounded-full bg-[#1e1e8c] text-white flex items-center justify-center relative before:absolute before:-left-[9px] before:-top-[9px] before:w-[100px] before:h-[100px] before:rounded-full before:border-2 before:border-PrimaryColor-0 before:border-dashed before:animate-rotational">
              <FaPhoneAlt size={"26"} />
            </div>
            <h5 className="font-FiraSans font-medium text-white text-[22px] mt-8 mb-4">
              Call Us Anytime
            </h5>
            <h1 className="font-FiraSans font-bold text-xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[30px] lg:leading-[40px] xl:text-[36px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[52px] text-white">
              +980 123 (4567) 890
            </h1>
            <p className="font-FiraSans text-TextColor-0 text-lg mt-6 mb-2">
              Professionally optimize interdependent intellectual interoperable{" "}
              <br className="hidden sm:block lg:hidden xl:block" />
              best practices. Progressively fabricate
            </p>
            <Link to={"/about"} className="mt-7 inline-block">
              <button className="primary-btn3">
                {`More About`}
                <BiRightTopArrowCircle size={"20"} />
              </button>
            </Link>
          </div>
          <div className="flex lg:justify-end 2xl:justify-center 2xl:ml-20 relative">
            <img src={contactThumb} draggable={false} />
            <img
              src={contactShape}
              draggable={false}
              className="absolute lg:top-32 2xl:top-48 left-0 lg:-left-20 2xl:-left-28 animate-swing hidden md:block"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
