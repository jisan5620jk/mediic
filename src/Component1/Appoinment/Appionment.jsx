import { FaUser } from 'react-icons/fa6';
import { GoArrowRight } from 'react-icons/go';
import { HiOutlineMailOpen } from 'react-icons/hi';
import { MdCall } from 'react-icons/md';
import Heart from '/images/banner-heart.png';
import circleShape from '/images/crcle-bg.png';

const Appoinment = () => {
  return (
    <section className='px-5 2xl:px-20 bg-BodyBg-0 pt-[106px] relative z-10'>
      <div className='absolute -z-10 -top-1/2 left-1/2 -translate-x-1/2'>
        <img
          src={circleShape}
          draggable='false'
          className='max-w-[inherit] w-[inherit]'
        />
      </div>
      <div className='text-center mb-12'>
        <h1 className='font-AlbertSans font-bold uppercase text-HeadingColor-0 text-[16px] leading-[26px] sm:text-[25px] sm:leading-[35px] md:text-[30px] md:leading-[40px] lg:text-[34px] lg:leading-[44px] xl:text-[52px] xl:leading-[62px] 2xl:text-[60px] 2xl:leading-[70px]'>
          Make Appionment
        </h1>
      </div>
      <div className='bg-[url(/images/appoinment.png)] bg-cover bg-no-repeat bg-center grid grid-cols-2 pt-[110px] pb-[118px] lg:border-x-2 2xl:border-x-0 border-white rounded-[30px] relative z-10'>
        <div></div>
        <div className='relative z-10 pr-5 2xl:pr-[230px]'>
          <div className='absolute -top-2 -left-[190px] 2xl:-left-40'>
            <img
              src={Heart}
              draggable='false'
              className='animate-rotateX'
            />
          </div>
          <h5 className='font-AlbertSans font-medium text-sm sm:text-base text-PrimaryColor-0 uppercase mb-4'>
            FINANCE CONSULTING
          </h5>
          <h1 className='font-AlbertSans font-bold text-HeadingColor-0 text-[16px] leading-[23px] sm:text-[22px] sm:leading-[35px] md:text-[30px] md:leading-[35px] lg:text-[28px] lg:leading-[35px] xl:text-[32px] xl:leading-[39px] 2xl:text-[32px] 2xl:leading-[39px]'>
            Make an Online Appoinemnt <br /> Booking For Treatment Patients
          </h1>
          <form
            action='#'
            method='post'
            className='flex flex-col gap-y-5 mt-9'
          >
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
              <div className='relative inline-block'>
                <input
                  type='text'
                  name='name'
                  id='name'
                  placeholder='Enter Name*'
                  required
                  className='font-AlbertSans text-HeadingColor-0 placeholder:text-HeadingColor-0 font-light bg-transparent border border-Secondarycolor-0 border-opacity-45 rounded-xl py-2 px-6 h-[60px] w-full focus:outline-PrimaryColor-0'
                />
                <FaUser
                  size={'14'}
                  className='absolute text-PrimaryColor-0 top-1/2 -translate-y-1/2 right-5'
                />
              </div>
              <div className='relative inline-block'>
                <input
                  type='email'
                  name='email'
                  id='email'
                  placeholder='Enter E-Mail*'
                  required
                  className='font-AlbertSans text-HeadingColor-0 placeholder:text-HeadingColor-0 font-light bg-transparent border border-Secondarycolor-0 border-opacity-45 rounded-xl py-2 px-6 h-[60px] w-full focus:outline-PrimaryColor-0'
                />
                <HiOutlineMailOpen
                  size={'16'}
                  className='absolute text-PrimaryColor-0 top-1/2 -translate-y-1/2 right-5'
                />
              </div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
              <select
                name='select'
                id='select'
                className='font-AlbertSans text-HeadingColor-0 placeholder:text-HeadingColor-0 font-light bg-transparent border border-Secondarycolor-0 border-opacity-45 rounded-xl py-2 px-6 h-[60px] w-full focus:outline-PrimaryColor-0'
              >
                <option
                  value='subject'
                  className='text-HeadingColor-0'
                >
                  Your Subject
                </option>
                <option
                  value='subject2'
                  className='text-HeadingColor-0'
                >
                  Bangla
                </option>
                <option
                  value='subject3'
                  className='text-HeadingColor-0'
                >
                  Arabic
                </option>
                <option
                  value='subject4'
                  className='text-HeadingColor-0'
                >
                  China
                </option>
              </select>
              <div className='relative inline-block'>
                <input
                  type='text'
                  name='number'
                  id='number'
                  placeholder='Enter Number*'
                  required
                  className='font-AlbertSans text-HeadingColor-0 placeholder:text-HeadingColor-0 font-light bg-transparent border border-Secondarycolor-0 border-opacity-45 rounded-xl py-2 px-6 h-[60px] w-full focus:outline-PrimaryColor-0'
                />
                <MdCall
                  size={'16'}
                  className='absolute text-PrimaryColor-0 top-1/2 -translate-y-1/2 right-5'
                />
              </div>
            </div>
            <textarea
              name='message'
              id='message'
              placeholder='Write a short meassage...'
              className='font-AlbertSans text-HeadingColor-0 placeholder:text-HeadingColor-0 font-light bg-transparent border border-Secondarycolor-0 border-opacity-45 rounded-2xl py-2 px-6 h-[150px] w-full focus:outline-PrimaryColor-0 resize-none'
            ></textarea>
            <div className='inline-block mt-2'>
              <button
                type='submit'
                className='primary-btn'
              >
                Send Now
                <GoArrowRight
                  size={'22'}
                  className='-rotate-45'
                />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Appoinment;