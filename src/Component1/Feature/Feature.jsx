import featureImg from "/images/srvc-tm.png";
import { Link } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";

const Feature = () => {
  return (
    <section className="mx-2 xl:mx-5 my-5 py-[120px] bg-BodyBg-0 bg-cover bg-no-repeat bg-left lg:bg-bottom rounded-[40px] relative z-10">
      <div className="Container relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-12">
          <div className="group px-10 py-8 bg-white bg-opacity-30 text-center rounded-3xl border-2 border-white">
           <span></span>
              <span></span>
              <span></span>
              <span></span> <div className="flex justify-between items-center border-b-2 border-white pb-4 mb-6">
              
              <h5 className="font-AlbertSans font-semibold text-[25px] text-HeadingColor-0 transition-all duration-500 group-hover:text-white">
                Our Professionals
              </h5>
              <Link to={"/"}>
                <button className="text-PrimaryColor-0 transition-all duration-500 group-hover:text-white">
                  <MdArrowOutward size={"26"} />
                </button>
              </Link>
            </div>
            <div>
              <img src={featureImg} draggable="false" className="m-auto" />
            </div>
            <h4 className="font-AlbertSans font-semibold text-[30px] text-HeadingColor-0 flex items-center gap-2 justify-center transition-all duration-500 group-hover:text-white">
              180+{" "}
              <span className="font-AlbertSans font-semibold text-lg text-PrimaryColor-0 transition-all duration-500 group-hover:text-white">
                Doctors
              </span>
            </h4>
            <p className="font-DMSans text-TextColor-0 transition-all duration-500 group-hover:text-white">
              Rapidiously reinvent long-term impact collaboration
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
