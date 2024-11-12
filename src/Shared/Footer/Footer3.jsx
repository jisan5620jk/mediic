import { Link } from 'react-router-dom';
import footerLogo from '/images/logo2.png';
import footerShape from '/images/footer-img-1.png';
import footerShape2 from '/images/footer-img-2.png';
import { FaInstagram, FaPinterestP } from 'react-icons/fa6';
import { FaLinkedinIn, FaFacebookF } from 'react-icons/fa';
import { IoStar } from 'react-icons/io5';
import { MdOutlineArrowOutward } from 'react-icons/md';

const Footer = () => {
  return (
    <footer className='bg-[url(/images/footer-bg.jpg)] bg-no-repeat bg-center bg-cover relative z-10 pt-[166px] overflow-hidden'>
      <div className='absolute -top-2 -left-11 -z-10 hidden 2xl:block'>
        <img
          src={footerShape}
          draggable='false'
        />
      </div>
      <div className='Container'>
        <div className='grid gap-y-7 grid-cols-12'>
          <div className='col-span-12 md:col-span-6 lg:col-span-4'>
            <div className='inline-block'>
              <Link
                to={'/'}
                title='Mediic'
              >
                <img
                  src={footerLogo}
                  draggable={false}
                />
              </Link>
            </div>
            <p className='font-AlbertSans text-white mt-7 mb-11'>
              Evolve professional intellectual capital from
              <br className='hidden sm:block' /> professional capital without
              pros users tod
              <br className='hidden sm:block' /> need and clean development.
            </p>
            <Link to={'/'}>
              <button className='font-AlbertSans text-xl text-white font-bold'>
                +123 (4567) - 890
              </button>
            </Link>
            <div className='font-DMSans text-white mt-2'>
              E-Mail Us:{' '}
              <Link to={'/'}>
                <button className='text-PrimaryColor-0'>
                  mediic@example.com
                </button>
              </Link>
            </div>
          </div>
          <div className='col-span-12 md:col-span-6 lg:col-span-2'>
            <h4 className='font-AlbertSans text-2xl text-white font-semibold mb-[42px]'>
              Useful Links
            </h4>
            <ul className='overflow-hidden'>
              <li>
                <Link
                  to={'/'}
                  className='inline-block'
                >
                  <button className='flex items-center gap-2 font-AlbertSans font-medium text-white transition-all duration-500 hover:text-PrimaryColor-0 hover:gap-1 mb-[14px] group'>
                    <IoStar className='text-xs text-TextColor-0 relative -top-[1px] transition-all duration-500 group-hover:text-PrimaryColor-0' />
                    <span className='relative z-10 before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[1px] before:bg-PrimaryColor-0 before:transition-all before:duration-500 group-hover:before:w-full'>
                      About Company
                    </span>
                  </button>
                </Link>
              </li>
              <li>
                <Link
                  to={'/'}
                  className='inline-block'
                >
                  <button className='flex items-center gap-2 font-AlbertSans font-medium text-white transition-all duration-500 hover:text-PrimaryColor-0 hover:gap-1 mb-[14px] group'>
                    <IoStar className='text-xs text-TextColor-0 relative -top-[1px] transition-all duration-500 group-hover:text-PrimaryColor-0' />
                    <span className='relative z-10 before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[1px] before:bg-PrimaryColor-0 before:transition-all before:duration-500 group-hover:before:w-full'>
                      Meet Our Team
                    </span>
                  </button>
                </Link>
              </li>
              <li>
                <Link
                  to={'/'}
                  className='inline-block'
                >
                  <button className='flex items-center gap-2 font-AlbertSans font-medium text-white transition-all duration-500 hover:text-PrimaryColor-0 hover:gap-1 mb-[14px] group'>
                    <IoStar className='text-xs text-TextColor-0 relative -top-[1px] transition-all duration-500 group-hover:text-PrimaryColor-0' />
                    <span className='relative z-10 before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[1px] before:bg-PrimaryColor-0 before:transition-all before:duration-500 group-hover:before:w-full'>
                      Latest Blog
                    </span>
                  </button>
                </Link>
              </li>
              <li>
                <Link
                  to={'/'}
                  className='inline-block'
                >
                  <button className='flex items-center gap-2 font-AlbertSans font-medium text-white transition-all duration-500 hover:text-PrimaryColor-0 hover:gap-1 mb-[14px] group'>
                    <IoStar className='text-xs text-TextColor-0 relative -top-[1px] transition-all duration-500 group-hover:text-PrimaryColor-0' />
                    <span className='relative z-10 before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[1px] before:bg-PrimaryColor-0 before:transition-all before:duration-500 group-hover:before:w-full'>
                      Testimonial
                    </span>
                  </button>
                </Link>
              </li>
              <li>
                <Link
                  to={'/'}
                  className='inline-block'
                >
                  <button className='flex items-center gap-2 font-AlbertSans font-medium text-white transition-all duration-500 hover:text-PrimaryColor-0 hover:gap-1 mb-[14px] group'>
                    <IoStar className='text-xs text-TextColor-0 relative -top-[1px] transition-all duration-500 group-hover:text-PrimaryColor-0' />
                    <span className='relative z-10 before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[1px] before:bg-PrimaryColor-0 before:transition-all before:duration-500 group-hover:before:w-full'>
                      Contact Us
                    </span>
                  </button>
                </Link>
              </li>
            </ul>
          </div>
          <div className='col-span-12 md:col-span-6 lg:col-span-3'>
            <h4 className='font-AlbertSans text-2xl text-white font-semibold mb-[42px]'>
              Services
            </h4>
            <ul className='overflow-hidden'>
              <li>
                <Link
                  to={'/'}
                  className='inline-block'
                >
                  <button className='flex items-center gap-2 font-AlbertSans font-medium text-white transition-all duration-500 hover:text-PrimaryColor-0 hover:gap-1 mb-[14px] group'>
                    <IoStar className='text-xs text-TextColor-0 relative -top-[1px] transition-all duration-500 group-hover:text-PrimaryColor-0' />
                    <span className='relative z-10 before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[1px] before:bg-PrimaryColor-0 before:transition-all before:duration-500 group-hover:before:w-full'>
                      Our Service
                    </span>
                  </button>
                </Link>
              </li>
              <li>
                <Link
                  to={'/'}
                  className='inline-block'
                >
                  <button className='flex items-center gap-2 font-AlbertSans font-medium text-white transition-all duration-500 hover:text-PrimaryColor-0 hover:gap-1 mb-[14px] group'>
                    <IoStar className='text-xs text-TextColor-0 relative -top-[1px] transition-all duration-500 group-hover:text-PrimaryColor-0' />
                    <span className='relative z-10 before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[1px] before:bg-PrimaryColor-0 before:transition-all before:duration-500 group-hover:before:w-full'>
                      Privacy
                    </span>
                  </button>
                </Link>
              </li>
              <li>
                <Link
                  to={'/'}
                  className='inline-block'
                >
                  <button className='flex items-center gap-2 font-AlbertSans font-medium text-white transition-all duration-500 hover:text-PrimaryColor-0 hover:gap-1 mb-[14px] group'>
                    <IoStar className='text-xs text-TextColor-0 relative -top-[1px] transition-all duration-500 group-hover:text-PrimaryColor-0' />
                    <span className='relative z-10 before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[1px] before:bg-PrimaryColor-0 before:transition-all before:duration-500 group-hover:before:w-full'>
                      Appointment
                    </span>
                  </button>
                </Link>
              </li>
              <li>
                <Link
                  to={'/'}
                  className='inline-block'
                >
                  <button className='flex items-center gap-2 font-AlbertSans font-medium text-white transition-all duration-500 hover:text-PrimaryColor-0 hover:gap-1 mb-[14px] group'>
                    <IoStar className='text-xs text-TextColor-0 relative -top-[1px] transition-all duration-500 group-hover:text-PrimaryColor-0' />
                    <span className='relative z-10 before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[1px] before:bg-PrimaryColor-0 before:transition-all before:duration-500 group-hover:before:w-full'>
                      Partners
                    </span>
                  </button>
                </Link>
              </li>
              <li>
                <Link
                  to={'/'}
                  className='inline-block'
                >
                  <button className='flex items-center gap-2 font-AlbertSans font-medium text-white transition-all duration-500 hover:text-PrimaryColor-0 hover:gap-1 mb-[14px] group'>
                    <IoStar className='text-xs text-TextColor-0 relative -top-[1px] transition-all duration-500 group-hover:text-PrimaryColor-0' />
                    <span className='relative z-10 before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[1px] before:bg-PrimaryColor-0 before:transition-all before:duration-500 group-hover:before:w-full'>
                      F.A.Q
                    </span>
                  </button>
                </Link>
              </li>
            </ul>
          </div>
          <div className='col-span-12 md:col-span-6 lg:col-span-3'>
            <h4 className='font-AlbertSans text-2xl text-white font-semibold mb-[42px]'>
              Opening Hours
            </h4>
            <p className='font-DMSans text-white flex justify-between pb-4 border-b-2 border-BorderColor2-0'>
              <span>Monday to Friday</span>
              <span>09:00 - 16:00</span>
            </p>
            <p className='font-DMSans text-white flex justify-between pb-6 pt-3'>
              <span>Satarday & Sunday</span>
              <span>Closed</span>
            </p>
            <form
              action='#'
              method='post'
              className='relative'
            >
              <label
                htmlFor='email'
                className='relative'
              >
                <input
                  type='email'
                  name='email'
                  id='email'
                  placeholder='Enter Your E-Mail*'
                  required
                  className='w-full h-[54px] outline-none text-lg font-DMSans border-b-2 border-BorderColor2-0 bg-transparent py-3 text-white placeholder:text-TextColor-0 mb-4'
                />
              </label>
              <div className='absolute top-3 right-0'>
                <button
                  type='submit'
                  className='text-white'
                >
                  <MdOutlineArrowOutward size={'28'} />
                </button>
              </div>
              <label
                htmlFor='checkbox'
                className='font-DMSans text-TextColor-0 inline-block gap-2 cursor-pointer'
              >
                <input
                  type='checkbox'
                  id='checkbox'
                  name='checkbox'
                  className='mr-2'
                />
                Agree Terms & Conditions
              </label>
            </form>
          </div>
        </div>
        <div className='flex flex-col md:flex-row gap-y-7 md: md:col-span-6 justify-between md:items-center py-7 mt-28 border-t border-BorderColor2-0'>
          <div>
            <ul className='flex gap-4 sm:gap-8'>
              <li>
                <button className='transition-all duration text-white hover:text-PrimaryColor-0'>
                  <FaFacebookF size={'20'} />
                </button>
              </li>
              <li>
                <button className='transition-all duration text-white hover:text-PrimaryColor-0'>
                  <FaLinkedinIn size={'20'} />
                </button>
              </li>
              <li>
                <button className='transition-all duration text-white hover:text-PrimaryColor-0'>
                  <FaInstagram size={'20'} />
                </button>
              </li>
              <li>
                <button className='transition-all duration text-white hover:text-PrimaryColor-0'>
                  <FaPinterestP size={'20'} />
                </button>
              </li>
            </ul>
          </div>
          <div>
            <p className='font-DMSans flex items-center text-TextColor-0'>
              This is a sample website - Mediic © 2024 - All Rights Reserved
            </p>
          </div>
        </div>
      </div>
      <div className='absolute bottom-0 -right-2 -z-10 hidden 2xl:block'>
        <img
          src={footerShape2}
          draggable='false'
        />
      </div>
    </footer>
  );
};

export default Footer;
