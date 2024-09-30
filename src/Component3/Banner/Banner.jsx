import bannerThumb from '/images/thunb.png';
import bannerShape from '/images/shape1.png';
import bannerCheck from '/images/tick.png';
import bannerHeart from '/images/banner3-heart.png';
import btnArrow from '/images/arrow.png';
import { Link } from 'react-router-dom';
import { FaCircle } from 'react-icons/fa6';
import FsLightbox from 'fslightbox-react';
import { useState } from 'react';

const Banner = () => {
  const [toggler, setToggler] = useState(false);
  return (
    <div className='bg-white'>
      <section className="bg-[url('/images/hero-bg3.jpg')] bg-cover bg-center bg-no-repeat h-[600px] sm:h-[700px] md:h-[700px] lg:h-[700px] xl:h-[790px] 2xl:h-[790px] flex items-center relative z-10 overflow-hidden rounded-t-2xl md:rounded-t-[30px]">
        <div className='flex justify-center items-center m-auto'>
          <div className='Container'>
            <div className='grid grid-cols-2 items-center'>
              <div>
                <div className='inline-block'>
                  <h6 className='flex items-center justify-start gap-2 bg-white bg-opacity-30 text-PrimaryColor-0 text-[15px] font-semibold border-2 border-white rounded-full font-AlbertSans px-[22px] py-2'>
                    <FaCircle size={'8'} />
                    WELCOME TO OUR HOSPITAL
                  </h6>
                </div>
                <h1 className='font-AlbertSans font-extrabold text-[65px] leading-[80px] text-HeadingColor-0 mt-[18px] mb-7'>
                  BETTER CARE FOR <br /> YOUR{' '}
                  <span className='text-PrimaryColor-0'>HEALTH</span>
                </h1>
                  <Link to={'/appiontment'}>
                    <button className='primary-btn3 '>
                      Research More <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <img
                        src={btnArrow}
                        draggable='false'
                      />
                    </button>
                  </Link>
                <div className='flex items-center gap-5 pt-11'>
                  <div className='relative z-30 flex flex-col md:flex-row md:justify-between lg:justify-evenly xl:justify-between md:items-center gap-8'>
                    <div className='flex flex-col sm:flex-row items-center gap-5 bg-white bg-opacity-30 backdrop-filter backdrop-blur-md border-2 border-white rounded-2xl pt-6 px-4 sm:px-8 pb-6'>
                      <div>
                        <img
                          src={bannerCheck}
                          draggable='false'
                        />
                      </div>
                      <div className='flex-1'>
                        <h5 className='font-AlbertSans font-semibold text-xl text-HeadingColor-0'>
                          Best Medical
                        </h5>
                        <p className='font-DMSans text-HeadingColor-0 xl:text-white 2xl:text-TextColor2-0 mt-[6px]'>
                          Rapidiously reinvent long-term
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <button
                      className='font-AlbertSans font-medium uppercase leading-4 text-PrimaryColor-0 border-b border-PrimaryColor-0'
                      onClick={() => setToggler(!toggler)}
                    >
                      Watch A Video
                    </button>
                    <FsLightbox
                      toggler={toggler}
                      sources={[
                        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
                      ]}
                    />
                  </div>
                </div>
              </div>
              <div className='flex justify-end'>
                <div className='relative z-10'>
                  <img
                    src={bannerThumb}
                    draggable='false'
                    className='relative top-14'
                  />
                  <img
                    src={bannerShape}
                    draggable='false'
                    className='absolute top-36 left-0 -z-10'
                  />
                  <div className='absolute top-64 -left-[50px] size-[100px] rounded-full bg-white bg-opacity-30 border-2 border-white flex items-center justify-center'>
                    <img
                      src={bannerHeart}
                      draggable='false'
                      className='animate-rotateX'
                    />
                  </div>
                  <div className='absolute top-48 -right-[102px]'>
                    <h6 className='-rotate-90 font-AlbertSans font-medium uppercase text-white bg-PrimaryColor-0 px-[26px] py-3 rounded-full'>
                      30+ Research Center
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
