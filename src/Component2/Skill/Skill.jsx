import ProgressBar from 'react-animated-progress-bar';
import { Link } from 'react-router-dom';
import skillThumb from '/images/featur.jpg';
import skillThumb2 from '/images/featur2.jpg';
import skillIcon from '/images/icon2.png';
import skillIcon2 from '/images/icon.png';
import { GoArrowUpRight } from 'react-icons/go';

const Skill = () => {
  return (
    <section className='bg-BodyBg-0 pt-[120px] relative z-10 overflow-hidden skill-section'>
      <div className='Container'>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-20 lg:gap-10 2xl:gap-16 items-center'>
          <div className='col-span-1 lg:col-span-7'>
            <h5 className='font-AlbertSans font-medium text-sm sm:text-base text-PrimaryColor-0 uppercase mb-4'>
              SKILLS AND ABILITIES
            </h5>
            <h1 className='font-AlbertSans font-bold text-HeadingColor-0 text-[16px] leading-[23px] sm:text-[22px] sm:leading-[35px] md:text-[30px] md:leading-[35px] lg:text-[26px] lg:leading-[33px] xl:text-[32px] xl:leading-[39px] 2xl:text-[32px] 2xl:leading-[39px]'>
              Since 2007 We’re working Medical{' '}
              <br className='hidden md:block' /> group of more than 1200+
              Patients <br className='hidden md:block' />
              help from our medical
            </h1>
          </div>
          <div className='col-span-1 lg:col-span-5 relative'>
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
            <div>
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
          </div>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mt-20'>
          <div className='flex items-center gap-10 p-7 bg-white bg-opacity-20 backdrop-filter backdrop-blur-md border-2 border-white rounded-[30px] group overflow-hidden transition-all duration-500 hover:border-PrimaryColor-0'>
            <div className='rounded-3xl overflow-hidden inline-block'>
              <img
                src={skillThumb}
                draggable='false'
              />
            </div>
            <div className='flex-1'>
              <div>
                <img
                  src={skillIcon}
                  draggable='false'
                />
              </div>
              <h4 className='font-AlbertSans font-semibold text-2xl text-HeadingColor-0 border-b border-BorderColor3-0 pb-5 mt-6 mb-6 relative before:absolute before:-bottom-[1px] before:left-0 before:w-0 before:h-[2px] before:bg-PrimaryColor-0 before:transition-all before:duration-500 group-hover:before:w-full'>
                Make An Online Appointment
              </h4>
              <Link to={'/'}>
                <button className='text-Secondarycolor-0 transition-all duration-500 group-hover:text-PrimaryColor-0'>
                  <GoArrowUpRight size={'24'} />
                </button>
              </Link>
            </div>
          </div>
          <div className='flex items-center gap-10 p-7 bg-white bg-opacity-20 backdrop-filter backdrop-blur-md border-2 border-white rounded-[30px] group overflow-hidden transition-all duration-500 hover:border-PrimaryColor-0'>
            <div className='rounded-3xl overflow-hidden inline-block'>
              <img
                src={skillThumb2}
                draggable='false'
              />
            </div>
            <div className='flex-1'>
              <div>
                <img
                  src={skillIcon2}
                  draggable='false'
                />
              </div>
              <h4 className='font-AlbertSans font-semibold text-2xl text-HeadingColor-0 border-b border-BorderColor3-0 pb-5 mt-6 mb-6 relative before:absolute before:-bottom-[1px] before:left-0 before:w-0 before:h-[2px] before:bg-PrimaryColor-0 before:transition-all before:duration-500 group-hover:before:w-full'>
               Meet Professional Expert Doctors
              </h4>
              <Link to={'/'}>
                <button className='text-Secondarycolor-0 transition-all duration-500 group-hover:text-PrimaryColor-0'>
                  <GoArrowUpRight size={'24'} />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
