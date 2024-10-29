import { FaPhoneAlt } from 'react-icons/fa';
import teamDetailsImg from '/images/team-details-thumb.jpg';
import {
  FaFacebookF,
  FaLinkedinIn,
  FaPinterestP,
  FaUser,
  FaXTwitter,
} from 'react-icons/fa6';
import { MdCall, MdOutlineMail } from 'react-icons/md';
import { TfiLocationPin } from 'react-icons/tfi';
import ProgressBar from 'react-animated-progress-bar';
import { GoArrowRight } from 'react-icons/go';
import { HiOutlineMailOpen } from 'react-icons/hi';

const TeamDetailsMain = () => {
  return (
    <section className='bg-BodyBg-0 py-28'>
      <div className='Container'>
        <div className='bg-white bg-opacity-20 border-2 rounded-3xl border-white grid grid-cols-1 lg:grid-cols-2 items-center gap-10 xl:gap-12 2xl:gap-20 overflow-hidden'>
          <div
            data-aos='fade-up'
            data-aos-duration='1000'
          >
            <img
              src={teamDetailsImg}
              draggable='false'
              className='w-full'
            />
          </div>
          <div
            className='px-4 lg:px-0 pb-10 lg:py-6 xl:py-0 inline-block'
            data-aos='fade-up'
            data-aos-duration='1000'
          >
            <h2 className='font-AlbertSans font-bold text-3xl sm:text-4xl text-HeadingColor-0 mb-1'>
              Dr. Anjelina Jholi
            </h2>
            <p className='font-AlbertSans text-TextColor2-0'>
              Senior Heart Specialist
            </p>
            <p className='font-AlbertSans text-TextColor2-0 mt-9 mb-10'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod <br className='hidden 2xl:block' /> tempor creative labore
              et dolore magna aliqua ipsum suspendisse ultrices gravida commodo
              viverra accu eiusmod
            </p>
            <div className='flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-10 sm:items-center lg:items-start xl:items-center'>
              <div className='flex items-center gap-5'>
                <div className='size-[60px] rounded-full border-2 border-PrimaryColor-0 flex justify-center items-center text-PrimaryColor-0 transition-all duration-500 group-hover:text-white group-hover:border-white'>
                  <FaPhoneAlt size={'26'} />
                </div>
                <div className='flex-1'>
                  <h5 className='font-AlbertSans font-semibold text-xl text-HeadingColor-0 transition-all duration-500 group-hover:text-white mb-2'>
                    Call Us Anytime
                  </h5>
                  <p className='font-AlbertSans text-PrimaryColor-0 font-semibold md:text-2xl lg:text-xl 2xl:text-2xl transition-all duration-500 group-hover:text-white'>
                    +123 (4547) 563
                  </p>
                </div>
              </div>
              <div className='flex items-center gap-5'>
                <div className='size-[60px] rounded-full border-2 border-PrimaryColor-0 flex justify-center items-center text-PrimaryColor-0  transition-all duration-500 group-hover:text-white group-hover:border-white'>
                  <MdOutlineMail size={'26'} />
                </div>
                <div className='flex-1'>
                  <h5 className='font-AlbertSans font-semibold text-xl text-HeadingColor-0 transition-all duration-500 group-hover:text-white mb-2'>
                    Send E-Mail
                  </h5>
                  <p className='font-AlbertSans text-PrimaryColor-0 font-semibold md:text-2xl lg:text-xl 2xl:text-2x transition-all duration-500 group-hover:text-white'>
                    info@gmail.com
                  </p>
                </div>
              </div>
            </div>
            <div className='flex flex-col sm:flex-row sm:items-center gap-6 my-10'>
              <h5 className='font-AlbertSans font-semibold text-xl sm:text-2xl text-HeadingColor-0'>
                Social Media :
              </h5>
              <ul className='flex gap-3'>
                <li>
                  <button className='size-10 rounded-full text-sm border-2 border-white bg-white bg-opacity-20 hover:border-PrimaryColor-0 flex items-center justify-center text-HeadingColor-0 hover:text-white overflow-hidden transition-all duration-500 relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-10 before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100'>
                    <FaFacebookF />
                  </button>
                </li>
                <li>
                  <button className='size-10 rounded-full text-sm border-2 border-white bg-white bg-opacity-20 hover:border-PrimaryColor-0 flex items-center justify-center text-HeadingColor-0 hover:text-white overflow-hidden transition-all duration-500 relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-10 before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100'>
                    <FaXTwitter />
                  </button>
                </li>
                <li>
                  <button className='size-10 rounded-full text-sm border-2 border-white bg-white bg-opacity-20 hover:border-PrimaryColor-0 flex items-center justify-center text-HeadingColor-0 hover:text-white overflow-hidden transition-all duration-500 relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-10 before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100'>
                    <FaLinkedinIn />
                  </button>
                </li>
                <li>
                  <button className='size-10 rounded-full text-sm border-2 border-white bg-white bg-opacity-20 hover:border-PrimaryColor-0 flex items-center justify-center text-HeadingColor-0 hover:text-white overflow-hidden transition-all duration-500 relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-10 before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100'>
                    <FaPinterestP />
                  </button>
                </li>
              </ul>
            </div>
            <div className='flex items-center gap-5'>
              <div className='size-[56px] rounded-full border-2 border-PrimaryColor-0 flex justify-center items-center text-PrimaryColor-0 text-3xl transition-all duration-500 group-hover:text-white group-hover:border-white'>
                <TfiLocationPin />
              </div>
              <div className='flex-1'>
                <h5 className='font-AlbertSans font-semibold text-lg text-HeadingColor-0 transition-all duration-500 group-hover:text-white mb-1'>
                  Location
                </h5>
                <p className='font-AlbertSans text-PrimaryColor-0 text-lg transition-all duration-500 group-hover:text-white'>
                  21 King Street 5th Floor Hamilton, Ontario Canada
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className='bg-white bg-opacity-20 border-2 rounded-3xl border-white p-4 sm:p-10 my-10'
          data-aos='fade-up'
          data-aos-duration='1000'
        >
          <h2 className='font-AlbertSans font-bold text-3xl sm:text-4xl text-HeadingColor-0 mb-7'>
            Biagraphy
          </h2>
          <p className='font-AlbertSans text-TextColor2-0'>
            A vast majority of the app marketers mainly concentrate on the
            post-launch app marketing techniques and measures while completely
            missing on the pre-launch campaign. This prevents the app to create
            buzz and hype just around the time when the app is launched. As and
            when you launch the app, already a considerable number of people
            should expectantly look forward to your app and this requires
            long-drawn marketing efforts leading up to the app launch event. To
            create pre-launch buzz and hype about the app a mobile app
            development company has an array of marketing options like social
            media campaign, search engine ads, video ads, email campaigns, etc.
            Apart from online options, you can also reach out to the wider
            audience with traditional marketing options like outdoor ads, print
            ads, media ads, and promotional events
          </p>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 items-center'>
          <div
            className='p-4 sm:p-10 bg-white bg-opacity-20 border-2 rounded-3xl border-white'
            data-aos='fade-up'
            data-aos-duration='1000'
          >
            <h2 className='font-AlbertSans font-bold text-3xl sm:text-4xl text-HeadingColor-0 mb-7'>
              My Skills
            </h2>
            <div className='mb-[22px]'>
              <h6 className='font-AlbertSans font-medium text-lg text-HeadingColor-0 pb-3'>
                Human Brain Surgery
              </h6>
              <ProgressBar
                rect
                width='100%'
                height='5px'
                fontColor='#002570'
                fontSize='18px'
                leading='10px'
                margin='0px'
                rectBorderRadius='10px'
                fontWeight='500'
                percentage='95'
                defColor={{
                  excellent: '#002570',
                  good: '#002570',
                  fair: 'green',
                  poor: 'red',
                }}
                trackPathColor='#b8c8e2'
                trackBorderColor='transparent'
                trackPathBorderRadius='10px'
              />
            </div>
            <div className='mb-[22px]'>
              <h6 className='font-AlbertSans font-medium text-lg text-HeadingColor-0 pb-3'>
                Dental Fixing
              </h6>
              <ProgressBar
                rect
                width='100%'
                height='5px'
                fontColor='#002570'
                fontSize='18px'
                leading='10px'
                margin='0px'
                rectBorderRadius='10px'
                fontWeight='500'
                percentage='85'
                defColor={{
                  excellent: '#002570',
                  good: '#002570',
                  fair: 'green',
                  poor: 'red',
                }}
                trackPathColor='#b8c8e2'
                trackBorderColor='transparent'
                trackPathBorderRadius='10px'
              />
            </div>
            <div className='mb-[22px]'>
              <h6 className='font-AlbertSans font-medium text-lg text-HeadingColor-0 pb-3'>
                Digital X-Ray
              </h6>
              <ProgressBar
                rect
                width='100%'
                height='5px'
                fontColor='#002570'
                fontSize='18px'
                leading='10px'
                margin='0px'
                rectBorderRadius='10px'
                fontWeight='500'
                percentage='75'
                defColor={{
                  excellent: '#002570',
                  good: '#002570',
                  fair: 'green',
                  poor: 'red',
                }}
                trackPathColor='#b8c8e2'
                trackBorderColor='transparent'
                trackPathBorderRadius='10px'
              />
            </div>
            <div className='mb-[22px]'>
              <h6 className='font-AlbertSans font-medium text-lg text-HeadingColor-0 pb-3'>
                Human Brain Surgery
              </h6>
              <ProgressBar
                rect
                width='100%'
                height='5px'
                fontColor='#002570'
                fontSize='18px'
                leading='10px'
                margin='0px'
                rectBorderRadius='10px'
                fontWeight='500'
                percentage='95'
                defColor={{
                  excellent: '#002570',
                  good: '#002570',
                  fair: 'green',
                  poor: 'red',
                }}
                trackPathColor='#b8c8e2'
                trackBorderColor='transparent'
                trackPathBorderRadius='10px'
              />
            </div>
            <div className='mb-[22px]'>
              <h6 className='font-AlbertSans font-medium text-lg text-HeadingColor-0 pb-3'>
                Human Brain Surgery
              </h6>
              <ProgressBar
                rect
                width='100%'
                height='5px'
                fontColor='#002570'
                fontSize='18px'
                leading='10px'
                margin='0px'
                rectBorderRadius='10px'
                fontWeight='500'
                percentage='95'
                defColor={{
                  excellent: '#002570',
                  good: '#002570',
                  fair: 'green',
                  poor: 'red',
                }}
                trackPathColor='#b8c8e2'
                trackBorderColor='transparent'
                trackPathBorderRadius='10px'
              />
            </div>
            <div>
              <h6 className='font-AlbertSans font-medium text-lg text-HeadingColor-0 pb-3'>
                Dental Fixing
              </h6>
              <ProgressBar
                rect
                width='100%'
                height='5px'
                fontColor='#002570'
                fontSize='18px'
                leading='10px'
                margin='0px'
                rectBorderRadius='10px'
                fontWeight='500'
                percentage='85'
                defColor={{
                  excellent: '#002570',
                  good: '#002570',
                  fair: 'green',
                  poor: 'red',
                }}
                trackPathColor='#b8c8e2'
                trackBorderColor='transparent'
                trackPathBorderRadius='10px'
              />
            </div>
          </div>
          <div
            className='p-4 sm:p-10 bg-white bg-opacity-20 border-2 rounded-3xl border-white'
            data-aos='fade-up'
            data-aos-duration='1000'
          >
            <h2 className='font-AlbertSans font-bold text-2xl sm:text-3xl md:text-4xl text-HeadingColor-0 mb-7'>
              Get a Consultation
            </h2>
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
      </div>
    </section>
  );
};

export default TeamDetailsMain;
