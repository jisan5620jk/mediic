import { useState } from "react";
import FsLightbox from "fslightbox-react";
import { IoMdPlay } from "react-icons/io";

const Video = () => {
  const [toggler, setToggler] = useState(false);
  return (
    <section className="bg-[url('/images/video-bg.jpg')] bg-no-repeat bg-cover bg-center pt-[144px] pb-[150px]">
      <div className="Container">
        <div className="text-center">
          <h5 className="font-FiraSans text-lg font-semibold text-PrimaryColor-0">
            Watch Now
          </h5>
          <h1 className="font-FiraSans font-bold text-lg leading-7 sm:text-[32px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[32px] lg:leading-[42px] xl:text-[36px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[52px] text-white mt-[18px]">
            Our Best Working Process System <br />
            with Team Expert Leaders
          </h1>
          <div className="flex justify-center mt-10">
            <button className="h-[80px] w-[80px] rounded-full bg-PrimaryColor-0 flex justify-center items-center relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-PrimaryColor-0 before:opacity-50 before:-z-10 before:rounded-full before:animate-ping">
              <IoMdPlay
                size={"30"}
                className="text-white"
                onClick={() => setToggler(!toggler)}
              />
            </button>
            <FsLightbox
              toggler={toggler}
              sources={[
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Video;
