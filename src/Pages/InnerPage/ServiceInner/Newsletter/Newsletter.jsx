import Process from "./Process";

const Newsletter = () => {
  return (
    <section className="relative bg-BodyBg-0 py-28 z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-[80%] before:-z-10 before:bg-[url('/images/subscribe-bg.jpg')] before:bg-cover before:bg-no-repeat before:bg-center">
      <div className="Container">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-center">
          <div>
            <h1 className="font-FiraSans font-bold text-xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[30px] lg:leading-[40px] xl:text-[36px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[52px] text-white mt-[18px] mb-4">
              Get Latest Update from Toptech <br />
              Stay Connect with Us
            </h1>
          </div>
          <div className="flex lg:justify-end">
            <form action="#" className="inline-block relative">
              <input
                type="email"
                name="email"
                id="email1"
                placeholder="Enter Your E-Mail*"
                className="w-[288px] sm:w-[402px] h-[66px] py-2 px-6 rounded bg-transparent border border-white text-white font-FiraSans placeholder:text-white"
              />
              <button
                type="submit"
                className="absolute right-[6px] top-1/2 -translate-y-1/2 font-FiraSans text-HeadingColor-0 h-[54px] w-[122px] rounded bg-white flex justify-center items-center"
              >
                Subcribe
              </button>
            </form>
          </div>
        </div>
        <Process />
      </div>
    </section>
  );
};

export default Newsletter;
