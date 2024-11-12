import { Link } from 'react-router-dom';
import BreadCrumb from '../../../Shared/BreadCrumb/BreadCrumb';
import projectDetailsThumb from '/images/service.jpg';
import { FaArrowRight, FaArrowRightLong, FaUserDoctor } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import icon from '/images/dtls-icn.png';
import icon2 from '/images/dtls-icn2.png';
import icon3 from '/images/doctor-icon.png';
import callIcon from '/images/call3..png';
import Faq from './Accordion/Faq';
import { HiDownload } from 'react-icons/hi';
import { BsFileEarmarkPdf } from 'react-icons/bs';
import Subscribe from '../../../Component1/Subscribe/Subscribe';

const ProjectDetails = () => {
  return (
    <>
      <BreadCrumb
        breadCrumbTitle={'Project Details'}
        breadCrumbIcon={<FaArrowRightLong />}
        breadCrumbLink={'Project Details'}
      />
      <section className='project-details py-[120px] bg-BodyBg-0'>
        <div className='Container'>
          <div className='grid grid-cols-3 gap-[50px] lg:gap-8 xl:gap-[50px]'>
            <div className='col-span-3 lg:col-span-2'>
              <div
                className='rounded-[30px] overflow-hidden'
                data-aos='fade-up'
                data-aos-duration='1000'
              >
                <img
                  src={projectDetailsThumb}
                  draggable='false'
                  className='w-full'
                />
              </div>
              <h2
                className='font-AlbertSans font-bold text-[28px] text-HeadingColor-0 capitalize mt-8'
                data-aos='fade-up'
                data-aos-duration='1000'
              >
                Delivering world class medical care
              </h2>
              <p
                className='font-AlbertSans text-TextColor2-0 mt-5'
                data-aos='fade-up'
                data-aos-duration='1000'
              >
                Alternative innovation to ethical network environmental
                whiteboard pursue compelling results premier methods
                empowerment. Dramatically architect go forward opportunities
                before user-centric partner Credibly implement exceptional
              </p>
              <p
                className='font-AlbertSans text-TextColor2-0 mt-7 mb-11'
                data-aos='fade-up'
                data-aos-duration='1000'
              >
                Continually fashion orthogonal leadership skills whereas
                wireless metrics. Uniquely syndicate exceptio opportunities with
                interdependent users. Globally enhance fully tested
                meta-services rather than pan solutions. Proactively integrate
                client-integrate go forward architectures and turnkey
                meta-services. Interactively harness integrated ROI whereas
                frictionless products.
              </p>
              <div className='grid grid-cols-1 md:grid-cols-2 sm:items-center gap-8 mb-14'>
                <div
                  className='flex flex-col sm:flex-row md:flex-col xl:flex-row gap-6 rounded-2xl border-2 border-white bg-white bg-opacity-25 px-[30px] py-8'
                  data-aos='fade-up'
                  data-aos-duration='1000'
                >
                  <div className='size-20 rounded-full border-2 border-white bg-white bg-opacity-25 flex items-center justify-center'>
                    <img
                      src={icon}
                      draggable='false'
                    />
                  </div>
                  <div className='flex-1'>
                    <h5 className='font-AlbertSans font-bold text-[22px] text-HeadingColor-0'>
                      Make Appointment
                    </h5>
                    <p className='font-AlbertSans text-TextColor2-0 mt-1'>
                      Ethical network environmental architect go forward opportu
                      credibly implement
                    </p>
                  </div>
                </div>
                <div
                  className='flex flex-col sm:flex-row md:flex-col xl:flex-row gap-6 rounded-2xl border-2 border-white bg-white bg-opacity-25 px-[30px] py-8'
                  data-aos='fade-up'
                  data-aos-duration='1000'
                >
                  <div className='size-20 rounded-full border-2 border-white bg-white bg-opacity-25 flex items-center justify-center'>
                    <img
                      src={icon2}
                      draggable='false'
                    />
                  </div>
                  <div className='flex-1'>
                    <h5 className='font-AlbertSans font-bold text-[22px] text-HeadingColor-0'>
                      Get Consultation
                    </h5>
                    <p className='font-AlbertSans text-TextColor2-0 mt-1'>
                      Ethical network environmental architect go forward opportu
                      credibly implement
                    </p>
                  </div>
                </div>
              </div>
              <div className='flex flex-col sm:flex-row sm:items-center gap-8 sm:gap-[64px] bg-PrimaryColor-0 rounded-2xl px-4 sm:px-10 py-7'>
                <div
                  className='text-white relative before:absolute before:top-0 before:hidden sm:before:block before:-right-8 before:w-[2px] before:h-[48px] before:bg-white before:bg-opacity-25'
                  data-aos='fade-up'
                  data-aos-duration='1000'
                >
                  <FaUserDoctor size={'50'} />
                </div>
                <h4
                  className='font-DMSans font-medium text-xl sm:text-[22px] text-white italic'
                  data-aos='fade-up'
                  data-aos-duration='1000'
                >
                  Competently architect intermandated deliverables client niches
                  continually underwhelm
                </h4>
              </div>
              <h2
                className='font-AlbertSans font-bold text-[28px] text-HeadingColor-0 capitalize mt-24'
                data-aos='fade-up'
                data-aos-duration='1000'
              >
                What the Benifits?
              </h2>
              <p
                className='font-AlbertSans text-TextColor2-0 mt-6 mb-11'
                data-aos='fade-up'
                data-aos-duration='1000'
              >
                Methods empowerment. Dramatically architect go forward
                opportunities credibly revolutionize front-end initiatives for
                interoperable outsourcing. Conveniently repurpose market-driven
                deliverables without holistic potentialitiess distinctively
                integrate
              </p>
              <Faq />
            </div>
            <div className='col-span-3 lg:col-span-1'>
              <div
                className='rounded-2xl px-7 py-7 overflow-hidden bg-white bg-opacity-20 border-2 border-white border-opacity-80 mb-7'
                data-aos='fade-up'
                data-aos-duration='1000'
              >
                <h4 className='font-AlbertSans font-semibold text-2xl text-HeadingColor-0 pb-2 mb-8 relative before:absolute before:bottom-0 before:left-0 before:w-7 before:h-[2px] before:bg-PrimaryColor-0'>
                  Portfolio Details
                </h4>
                <div className='flex gap-3 px-6 py-3 rounded-xl bg-white bg-opacity-20 border-2 border-white border-opacity-80 mb-7'>
                  <div className='mt-2'>
                    <img
                      src={icon3}
                      draggable='false'
                    />
                  </div>
                  <div>
                    <Link to={'/team_details'}>
                      <button className='font-AlbertSans font-bold text-lg text-HeadingColor-0'>
                        Dr. Atif Aslam
                      </button>
                    </Link>
                    <p className='font-AlbertSans text-[15px] text-HeadingColor-0 uppercase'>
                      Surjuon
                    </p>
                  </div>
                </div>
                <div className='flex gap-3 px-6 py-3 rounded-xl bg-white bg-opacity-20 border-2 border-white border-opacity-80 mb-7'>
                  <div className='mt-2'>
                    <img
                      src={icon3}
                      draggable='false'
                    />
                  </div>
                  <div>
                    <Link to={'/team_details'}>
                      <button className='font-AlbertSans font-bold text-lg text-HeadingColor-0'>
                        Dr. David Miller
                      </button>
                    </Link>
                    <p className='font-AlbertSans text-[15px] text-HeadingColor-0 uppercase'>
                      Dentist
                    </p>
                  </div>
                </div>
                <div className='flex gap-3 px-6 py-3 rounded-xl bg-white bg-opacity-20 border-2 border-white border-opacity-80 mb-7'>
                  <div className='mt-2'>
                    <img
                      src={icon3}
                      draggable='false'
                    />
                  </div>
                  <div>
                    <Link to={'/team_details'}>
                      <button className='font-AlbertSans font-bold text-lg text-HeadingColor-0'>
                        Dr. Michel Jhon
                      </button>
                    </Link>
                    <p className='font-AlbertSans text-[15px] text-HeadingColor-0 uppercase'>
                      Psychologist
                    </p>
                  </div>
                </div>
                <div className='flex gap-3 px-6 py-3 rounded-xl bg-white bg-opacity-20 border-2 border-white border-opacity-80'>
                  <div className='mt-2'>
                    <img
                      src={icon3}
                      draggable='false'
                    />
                  </div>
                  <div>
                    <Link to={'/team_details'}>
                      <button className='font-AlbertSans font-bold text-lg text-HeadingColor-0'>
                        Dr. Neha Natasha
                      </button>
                    </Link>
                    <p className='font-AlbertSans text-[15px] text-HeadingColor-0 uppercase'>
                      Therapist
                    </p>
                  </div>
                </div>
              </div>
              <div
                className='rounded-2xl px-7 pt-7 pb-6 overflow-hidden bg-white bg-opacity-20 border-2 border-white border-opacity-80 mb-7'
                data-aos='fade-up'
                data-aos-duration='1000'
              >
                <h4 className='font-AlbertSans font-semibold text-2xl text-HeadingColor-0 pb-2 mb-8 relative before:absolute before:bottom-0 before:left-0 before:w-7 before:h-[2px] before:bg-PrimaryColor-0'>
                  Downloads
                </h4>
                <ul className='mt-8'>
                  <li>
                    <Link to={'/'}>
                      <button className='w-full font-AlbertSans bg-HeadingColor-0 text-left text-white transition-all duration-500 group px-7 py-4 flex items-center justify-between rounded-lg bg-HoverColor-0 mb-3 overflow-hidden z-[1] relative before:absolute before:top-0 before:right-0 before:w-0 before:-z-[1] before:h-full before:bg-PrimaryColor-0 before:rounded before:transition-all before:duration-500 hover:before:w-full hover:before:left-0 hover:text-white'>
                        <span className='flex items-center gap-3'>
                          <BsFileEarmarkPdf
                            size={'20'}
                            className='text-PrimaryColor-0 transition-all duration-500 group-hover:text-white'
                          />
                          Service Report
                        </span>
                        <HiDownload
                          size={'24'}
                          className='text-white'
                        />
                      </button>
                    </Link>
                  </li>
                  <li>
                    <Link to={'/'}>
                      <button className='w-full font-AlbertSans bg-HeadingColor-0 text-left text-white transition-all duration-500 group px-7 py-4 flex items-center justify-between rounded-lg bg-HoverColor-0 mb-3 overflow-hidden z-[1] relative before:absolute before:top-0 before:right-0 before:w-0 before:-z-[1] before:h-full before:bg-PrimaryColor-0 before:rounded before:transition-all before:duration-500 hover:before:w-full hover:before:left-0 hover:text-white'>
                        <span className='flex items-center gap-3'>
                          <BsFileEarmarkPdf
                            size={'20'}
                            className='text-PrimaryColor-0 transition-all duration-500 group-hover:text-white'
                          />
                          Service Lists
                        </span>
                        <HiDownload
                          size={'24'}
                          className='text-white'
                        />
                      </button>
                    </Link>
                  </li>
                </ul>
              </div>
              <div
                className="rounded-2xl px-9 overflow-hidden bg-[url('/images/company-bg.png')] bg-cover bg-no-repeat bg-center py-[50px]"
                data-aos='fade-up'
                data-aos-duration='1000'
              >
                <div className='relative before:absolute before:size-[90px] before:-top-[10px] before:-left-[10px] before:animate-rotational before:rounded-full before:border-[3px] before:border-dashed before:border-PrimaryColor-0 '>
                  <img
                    src={callIcon}
                    draggable='false'
                  />
                </div>
                <h6 className='font-AlbertSans font-medium text-lg text-white mt-9 mb-2'>
                  Call Us Anytime
                </h6>
                <Link to={'/'}>
                  <button className='font-AlbertSans font-semibold text-2xl text-white'>
                    +123 (4567) 890
                  </button>
                </Link>
                <Link to={'/'}>
                  <button className='font-AlbertSans text-white flex gap-2 items-center mt-4 mb-[52px]'>
                    <MdEmail className='text-xl text-PrimaryColor-0' />
                    example@gmail.com
                  </button>
                </Link>
                <Link to={'/contact'}>
                  <button className='font-AlbertSans text-white flex gap-2 items-center bg-PrimaryColor-0 w-full h-[58px] rounded-md justify-center z-10 relative before:absolute before:top-0 before:right-0 before:scale-0 before:-z-10 before:w-full before:h-full before:bg-SecondaryColor-0 before:rounded before:transition-all before:duration-500 hover:before:scale-100 hover:text-white'>
                    Contact Us
                    <FaArrowRight />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Subscribe />
    </>
  );
};

export default ProjectDetails;
