import aboutThumb from "/images/about-3.jpg";
import aboutIcon from '/images/about-icon.png';
import aboutIcon2 from '/images/about-icon2.png';
import { FaCircle } from "react-icons/fa6";

const About = () => {
  return (
    <section className='py-[120px] bg-gradient-to-t from-BodyBg-0 from-25% relative z-10 px-2 xl:mx-10 rounded-b-[30px] -mb-[120px]'>
      <div className='Container'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-[92px] lg:gap-10 2xl:gap-10 items-center bg-gradient-to-b from-BodyBg-0 from-60% rounded-[30px] border-2 border-white'>
          <div className='relative z-10'>
            <img
              src={aboutThumb}
              draggable='false'
              className='w-full rounded-[30px] overflow-hidden'
            />
          </div>
          <div className='relative px-2 md:px-6 lg:px-0 pb-5 lg:pb-0'>
            <div className='inline-block mb-5'>
              <h6 className='flex items-center justify-start gap-2 bg-white bg-opacity-30 text-PrimaryColor-0 text-[15px] font-semibold border border-white rounded-full font-AlbertSans px-[22px] py-2 uppercase'>
                <FaCircle size={'8'} />
                About Our Medical
              </h6>
            </div>
            <h1 className='font-AlbertSans font-bold text-HeadingColor-0 text-[20px] leading-[28px] sm:text-[38px] sm:leading-[48px] md:text-[48px] md:leading-[58px] lg:text-[40px] lg:leading-[50px] xl:text-[46px] xl:leading-[57px] 2xl:text-[55px] 2xl:leading-[67px]'>
              Start Your Adventure to <br /> Better Health Here
            </h1>
            <p className='font-DMSans text-TextColor2-0 pb-12 pt-4'>
              Continually evolve professional intellectual capital without
              enterprise user Seamlessly matrix value added e-commerce
            </p>
            <div className='flex flex-col sm:flex-row sm:items-center gap-5'>
              <div className='size-[100px] rounded-md bg-PrimaryColor-0 flex items-center justify-center'>
                <img src={aboutIcon} />
              </div>
              <div className='flex-1'>
                <h6 className='font-AlbertSans font-semibold text-PrimaryColor-0 uppercase pb-2'>
                  Infection Prevention
                </h6>
                <p className='font-DMSans text-TextColor2-0'>
                  Professional intellectual capital without enterprise users{' '}
                  <br className="hidden md:block lg:hidden xl:block"/>
                  Seamlessly matrix value e-commerce
                </p>
              </div>
            </div>
            <div className='flex flex-col sm:flex-row sm:items-center gap-5 pt-8'>
              <div className='size-[100px] rounded-md bg-Secondarycolor-0 flex items-center justify-center'>
                <img src={aboutIcon2} />
              </div>
              <div className='flex-1'>
                <h6 className='font-AlbertSans font-semibold text-PrimaryColor-0 uppercase pb-2'>
                  Preventive Care
                </h6>
                <p className='font-DMSans text-TextColor2-0'>
                  Professional intellectual capital without enterprise users{' '}
                  <br className="hidden md:block lg:hidden xl:block"/>
                  Seamlessly matrix value e-commerce
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
