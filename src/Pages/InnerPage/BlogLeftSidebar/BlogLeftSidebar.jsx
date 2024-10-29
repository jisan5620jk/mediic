import { Link } from 'react-router-dom';
import BreadCrumb from '../../../Shared/BreadCrumb/BreadCrumb';
import {
  FaArrowRight,
  FaArrowRightLong,
  FaCircle,
  FaRegFolderOpen,
} from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import blogThumb from '/images/blog.jpg';
import blogThumb2 from '/images/blog2.jpg';
import blogThumb3 from '/images/blog3.jpg';
import blogThumb4 from '/images/blog4.jpg';
import blogThumb5 from '/images/blog5.jpg';
import blogThumb6 from '/images/blog6.jpg';
import callIcon from '/images/call3..png';
import itemthumb from '/images/blog4.jpg';
import itemthumb2 from '/images/blog5.jpg';
import itemthumb3 from '/images/blog6.jpg';
import { IoSearch } from 'react-icons/io5';
import Subscribe from '../../../Component1/Subscribe/Subscribe';
import { GoArrowRight } from 'react-icons/go';
import BlogSidebarCard from './BlogSidebarCard';

const BlogSidebarData = [
  {
    id: 1,
    blogThumb: blogThumb,
    blogPostByIcon: <FaCircle />,
    blogDateIcon: <FaCircle />,
    blogDate: 'April 04, 2024',
    blogPostBy: 'Admin',
    blogUrl: '/blog_details',
    blogTitle: 'Top 10 Popular Equipments for Medical Industre',
    blogGridContent: 'Read More',
    blogGridIcon: <GoArrowRight />,
  },
  {
    id: 2,
    blogThumb: blogThumb2,
    blogPostByIcon: <FaCircle />,
    blogDateIcon: <FaCircle />,
    blogDate: 'April 14, 2024',
    blogPostBy: 'Admin',
    blogUrl: '/blog_details',
    blogTitle: 'How to maintain Patient for Better Surgery',
    blogGridContent: 'Read More',
    blogGridIcon: <GoArrowRight />,
  },
  {
    id: 3,
    blogThumb: blogThumb3,
    blogDate: 'April 24, 2024',
    blogPostByIcon: <FaCircle />,
    blogDateIcon: <FaCircle />,
    blogPostBy: 'Admin',
    blogUrl: '/blog_details',
    blogTitle: 'Most Popular Advises for Kids Happy & Smile Life',
    blogGridContent: 'Read More',
    blogGridIcon: <GoArrowRight />,
  },
  {
    id: 4,
    blogThumb: blogThumb4,
    blogDate: 'June 08, 2024',
    blogPostByIcon: <FaCircle />,
    blogDateIcon: <FaCircle />,
    blogPostBy: 'Admin',
    blogUrl: '/blog_details',
    blogTitle: 'How to maintain Patient for Better Surgery',
    blogGridContent: 'Read More',
    blogGridIcon: <GoArrowRight />,
  },
  {
    id: 5,
    blogThumb: blogThumb5,
    blogDate: 'June 19, 2024',
    blogPostByIcon: <FaCircle />,
    blogDateIcon: <FaCircle />,
    blogPostBy: 'Admin',
    blogUrl: '/blog_details',
    blogTitle: 'How to maintain Patient for Better Surgery',
    blogGridContent: 'Read More',
    blogGridIcon: <GoArrowRight />,
  },
  {
    id: 6,
    blogThumb: blogThumb6,
    blogDate: 'June 28, 2024',
    blogPostByIcon: <FaCircle />,
    blogDateIcon: <FaCircle />,
    blogPostBy: 'Admin',
    blogUrl: '/blog_details',
    blogTitle: 'How to maintain Patient for Better Surgery',
    blogGridContent: 'Read More',
    blogGridIcon: <GoArrowRight />,
  },
];

const BlogLeftSidebar = () => {
  return (
    <>
      <BreadCrumb
        breadCrumbTitle={'Blog Left Sidebar'}
        breadCrumbIcon={<FaArrowRightLong />}
        breadCrumbLink={'Blog Left Sidebar'}
      />
      <section className='py-[120px] bg-BodyBg-0'>
        <div className='Container'>
          <div className='grid grid-cols-3 gap-[50px]'>
            <div className='col-span-3 lg:col-span-1'>
              <div
                className='rounded-2xl px-4 sm:px-7 lg:px-4 xl:px-7 pt-7 pb-9 overflow-hidden bg-white bg-opacity-20 border-2 border-white border-opacity-80 mb-7'
                data-aos='fade-up'
                data-aos-duration='1000'
              >
                <h4 className='font-AlbertSans font-semibold text-2xl text-HeadingColor-0 pb-2 mb-8 relative before:absolute before:bottom-0 before:left-0 before:w-7 before:h-[2px] before:bg-PrimaryColor-0'>
                  Search
                </h4>
                <div className='relative inline-block w-full'>
                  <input
                    type='text'
                    name='search'
                    id='search'
                    placeholder='Search here...'
                    required
                    className='w-full h-[60px] p-6 bg-white bg-opacity-30 border-2 border-white border-opacity-80 rounded-full font-AlbertSans'
                  />
                  <button
                    type='submit'
                    className='text-xl text-white rounded-full size-11 bg-PrimaryColor-0 transition-all duration-500 flex items-center justify-center hover:hue-rotate-[360deg] absolute right-2 top-1/2 -translate-y-1/2'
                  >
                    <IoSearch />
                  </button>
                </div>
              </div>
              <div
                className='rounded-2xl px-4 sm:px-7 lg:px-4 xl:px-7 pt-7 pb-6 overflow-hidden bg-white bg-opacity-30 border-2 border-white border-opacity-80 mb-7'
                data-aos='fade-up'
                data-aos-duration='1000'
              >
                <h4 className='font-AlbertSans font-semibold text-2xl text-HeadingColor-0 pb-2 mb-8 relative before:absolute before:bottom-0 before:left-0 before:w-7 before:h-[2px] before:bg-PrimaryColor-0'>
                  Categories
                </h4>
                <ul className='mt-8'>
                  <li>
                    <Link to={'/service_details'}>
                      <button className='w-full font-AlbertSans text-left text-HeadingColor-0 transition-all duration-500 group px-7 py-4 flex items-center justify-between rounded-md bg-white bg-opacity-30 border-2 border-white border-opacity-80 mb-3 overflow-hidden z-[1] relative before:absolute before:top-0 before:right-0 before:w-0 before:-z-[1] before:h-full before:bg-PrimaryColor-0 before:rounded before:transition-all before:duration-500 hover:before:w-full hover:before:left-0 hover:border-PrimaryColor-0 hover:text-white'>
                        <span className='flex items-center gap-3 lg:gap-1 xl:gap-3'>
                          <FaRegFolderOpen className='text-PrimaryColor-0 transition-all duration-500 group-hover:text-white' />
                          Dental Care
                        </span>
                        <FaArrowRightLong className='text-PrimaryColor-0 transition-all duration-500 group-hover:text-white' />
                      </button>
                    </Link>
                  </li>
                  <li>
                    <Link to={'/service_details2'}>
                      <button className='w-full font-AlbertSans text-left text-HeadingColor-0 transition-all duration-500 group px-7 py-4 flex items-center justify-between rounded-md bg-white bg-opacity-30 border-2 border-white border-opacity-80 mb-3 overflow-hidden z-[1] relative before:absolute before:top-0 before:right-0 before:w-0 before:-z-[1] before:h-full before:bg-PrimaryColor-0 before:rounded before:transition-all before:duration-500 hover:before:w-full hover:before:left-0 hover:border-PrimaryColor-0 hover:text-white'>
                        <span className='flex items-center gap-3 lg:gap-1 xl:gap-3'>
                          <FaRegFolderOpen className='text-PrimaryColor-0 transition-all duration-500 group-hover:text-white' />
                          Pharmachology
                        </span>
                        <FaArrowRightLong className='text-PrimaryColor-0 transition-all duration-500 group-hover:text-white' />
                      </button>
                    </Link>
                  </li>
                  <li>
                    <Link to={'/service_details3'}>
                      <button className='w-full font-AlbertSans text-left text-HeadingColor-0 transition-all duration-500 group px-7 py-4 flex items-center justify-between rounded-md bg-white bg-opacity-30 border-2 border-white border-opacity-80 mb-3 overflow-hidden z-[1] relative before:absolute before:top-0 before:right-0 before:w-0 before:-z-[1] before:h-full before:bg-PrimaryColor-0 before:rounded before:transition-all before:duration-500 hover:before:w-full hover:before:left-0 hover:border-PrimaryColor-0 hover:text-white'>
                        <span className='flex items-center gap-3 lg:gap-1 xl:gap-3'>
                          <FaRegFolderOpen className='text-PrimaryColor-0 transition-all duration-500 group-hover:text-white' />
                          Plastic Surgery
                        </span>
                        <FaArrowRightLong className='text-PrimaryColor-0 transition-all duration-500 group-hover:text-white' />
                      </button>
                    </Link>
                  </li>
                  <li>
                    <Link to={'/service_details4'}>
                      <button className='w-full font-AlbertSans text-left text-HeadingColor-0 transition-all duration-500 group px-7 py-4 flex items-center justify-between rounded-md bg-white bg-opacity-30 border-2 border-white border-opacity-80 mb-3 overflow-hidden z-[1] relative before:absolute before:top-0 before:right-0 before:w-0 before:-z-[1] before:h-full before:bg-PrimaryColor-0 before:rounded before:transition-all before:duration-500 hover:before:w-full hover:before:left-0 hover:border-PrimaryColor-0 hover:text-white'>
                        <span className='flex items-center gap-3 lg:gap-1 xl:gap-3'>
                          <FaRegFolderOpen className='text-PrimaryColor-0 transition-all duration-500 group-hover:text-white' />
                          Mental Care
                        </span>
                        <FaArrowRightLong className='text-PrimaryColor-0 transition-all duration-500 group-hover:text-white' />
                      </button>
                    </Link>
                  </li>
                  <li>
                    <Link to={'/service_details5'}>
                      <button className='w-full font-AlbertSans text-left text-HeadingColor-0 transition-all duration-500 group px-7 py-4 flex items-center justify-between rounded-md bg-white bg-opacity-30 border-2 border-white border-opacity-80 mb-3 overflow-hidden z-[1] relative before:absolute before:top-0 before:right-0 before:w-0 before:-z-[1] before:h-full before:bg-PrimaryColor-0 before:rounded before:transition-all before:duration-500 hover:before:w-full hover:before:left-0 hover:border-PrimaryColor-0 hover:text-white'>
                        <span className='flex items-center gap-3 lg:gap-1 xl:gap-3'>
                          <FaRegFolderOpen className='text-PrimaryColor-0 transition-all duration-500 group-hover:text-white' />
                          Hematology
                        </span>
                        <FaArrowRightLong className='text-PrimaryColor-0 transition-all duration-500 group-hover:text-white' />
                      </button>
                    </Link>
                  </li>
                </ul>
              </div>
              <div
                className='rounded-2xl px-4 sm:px-7 lg:px-4 xl:px-7 pt-7 pb-6 overflow-hidden bg-white bg-opacity-20 border-2 border-white border-opacity-80 mb-7'
                data-aos='fade-up'
                data-aos-duration='1000'
              >
                <h4 className='font-AlbertSans font-semibold text-2xl text-HeadingColor-0 pb-2 mb-8 relative before:absolute before:bottom-0 before:left-0 before:w-7 before:h-[2px] before:bg-PrimaryColor-0'>
                  Popular Post
                </h4>
                <Link to={'/blog-details'}>
                  <button className='group flex gap-4 mb-6'>
                    <div className='size-[82px] rounded-xl overflow-hidden'>
                      <img
                        draggable='false'
                        src={itemthumb}
                        className='size-full'
                      />
                    </div>
                    <div className='flex-1 text-left'>
                      <h6 className='font-AlbertSans font-semibold md:text-lg lg:text-sm xl:text-lg leading-6 text-HeadingColor-0 transition-all duration-500 group-hover:text-PrimaryColor-0'>
                        How Virtual Healthcare is Transforming Pati...
                      </h6>
                      <p className='font-AlbertSans text-TextColor2-0 text-sm mt-1'>
                        AUGUST 01, 2024
                      </p>
                    </div>
                  </button>
                </Link>
                <Link to={'/blog_details'}>
                  <button className='group flex gap-4 my-6'>
                    <div className='size-[82px] rounded-xl overflow-hidden'>
                      <img
                        draggable='false'
                        src={itemthumb2}
                        className='size-full'
                      />
                    </div>
                    <div className='flex-1 text-left'>
                      <h6 className='font-AlbertSans font-semibold md:text-lg lg:text-sm xl:text-lg leading-6 text-HeadingColor-0 transition-all duration-500 group-hover:text-PrimaryColor-0'>
                        How Your Digestive Health Impacts Mental...
                      </h6>
                      <p className='font-AlbertSans text-TextColor2-0 text-sm mt-1'>
                        AUGUST 16, 2024
                      </p>
                    </div>
                  </button>
                </Link>
                <Link to={'/blog_details'}>
                  <button className='group flex gap-4 my-6'>
                    <div className='size-[82px] rounded-xl overflow-hidden'>
                      <img
                        draggable='false'
                        src={itemthumb3}
                        className='size-full'
                      />
                    </div>
                    <div className='flex-1 text-left'>
                      <h6 className='font-AlbertSans font-semibold md:text-lg lg:text-sm xl:text-lg leading-6 text-HeadingColor-0 transition-all duration-500 group-hover:text-PrimaryColor-0'>
                        Expert Advice for a Better Quality of Life...
                      </h6>
                      <p className='font-AlbertSans text-TextColor2-0 text-sm mt-1'>
                        AUGUST 27, 2024
                      </p>
                    </div>
                  </button>
                </Link>
              </div>
              <div
                className='rounded-2xl px-4 sm:px-7 lg:px-4 xl:px-7 pt-7 pb-6 overflow-hidden bg-white bg-opacity-20 border-2 border-white border-opacity-80 mb-7'
                data-aos='fade-up'
                data-aos-duration='1000'
              >
                <h4 className='font-AlbertSans font-semibold text-2xl text-HeadingColor-0 pb-2 mb-8 relative before:absolute before:bottom-0 before:left-0 before:w-7 before:h-[2px] before:bg-PrimaryColor-0'>
                  Tags
                </h4>
                <ul className='inline-block'>
                  <li className='inline-block mr-[10px] mb-[10px]'>
                    <Link to={'/'}>
                      <button className='bg-white bg-opacity-20 border-2 border-white border-opacity-80 rounded flex items-center justify-center text-HeadingColor-0 transition-all duration-500 font-medium px-5 py-2 font-AlbertSans text-sm relative z-[1] before:absolute before:top-0 before:left-0 before:rounded before:w-full before:h-full before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:scale-0 before:-z-[1] hover:before:scale-100 hover:text-white'>
                        Medical Care
                      </button>
                    </Link>
                  </li>
                  <li className='inline-block mr-[10px] mb-[10px]'>
                    <Link to={'/'}>
                      <button className='bg-white bg-opacity-20 border-2 border-white border-opacity-80 rounded flex items-center justify-center text-HeadingColor-0 transition-all duration-500 font-medium px-5 py-2 font-AlbertSans text-sm relative z-[1] before:absolute before:top-0 before:left-0 before:rounded before:w-full before:h-full before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:scale-0 before:-z-[1] hover:before:scale-100 hover:text-white'>
                        Dentist
                      </button>
                    </Link>
                  </li>
                  <li className='inline-block mr-[10px] mb-[10px]'>
                    <Link to={'/'}>
                      <button className='bg-white bg-opacity-20 border-2 border-white border-opacity-80 rounded flex items-center justify-center text-HeadingColor-0 transition-all duration-500 font-medium px-5 py-2 font-AlbertSans text-sm relative z-[1] before:absolute before:top-0 before:left-0 before:rounded before:w-full before:h-full before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:scale-0 before:-z-[1] hover:before:scale-100 hover:text-white'>
                        Psychologist
                      </button>
                    </Link>
                  </li>
                  <li className='inline-block mr-[10px] mb-[10px]'>
                    <Link to={'/'}>
                      <button className='bg-white bg-opacity-20 border-2 border-white border-opacity-80 rounded flex items-center justify-center text-HeadingColor-0 transition-all duration-500 font-medium px-5 py-2 font-AlbertSans text-sm relative z-[1] before:absolute before:top-0 before:left-0 before:rounded before:w-full before:h-full before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:scale-0 before:-z-[1] hover:before:scale-100 hover:text-white'>
                        Health Care
                      </button>
                    </Link>
                  </li>
                  <li className='inline-block mr-[10px] mb-[10px]'>
                    <Link to={'/'}>
                      <button className='bg-white bg-opacity-20 border-2 border-white border-opacity-80 rounded flex items-center justify-center text-HeadingColor-0 transition-all duration-500 font-medium px-5 py-2 font-AlbertSans text-sm relative z-[1] before:absolute before:top-0 before:left-0 before:rounded before:w-full before:h-full before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:scale-0 before:-z-[1] hover:before:scale-100 hover:text-white'>
                        Medicine
                      </button>
                    </Link>
                  </li>
                  <li className='inline-block mr-[10px] mb-[10px]'>
                    <Link to={'/'}>
                      <button className='bg-white bg-opacity-20 border-2 border-white border-opacity-80 rounded flex items-center justify-center text-HeadingColor-0 transition-all duration-500 font-medium px-5 py-2 font-AlbertSans text-sm relative z-[1] before:absolute before:top-0 before:left-0 before:rounded before:w-full before:h-full before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:scale-0 before:-z-[1] hover:before:scale-100 hover:text-white'>
                        Therapist
                      </button>
                    </Link>
                  </li>
                </ul>
              </div>
              <div
                className="rounded-2xl px-4 sm:px-9 lg:px-4 xl:px-9 overflow-hidden bg-[url('/images/company-bg.png')] bg-cover bg-no-repeat bg-center py-[50px]"
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
            <div className='col-span-3 lg:col-span-2'>
              <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-7'>
                {BlogSidebarData.map(
                  ({
                    id,
                    blogThumb,
                    blogDateIcon,
                    blogDate,
                    blogPostBy,
                    blogUrl,
                    blogTitle,
                    blogPostByIcon,
                    blogGridContent,
                    blogGridIcon,
                  }) => {
                    return (
                      <div
                        key={id}
                        data-aos='fade-up'
                        data-aos-duration='1000'
                      >
                        <BlogSidebarCard
                          blogThumb={blogThumb}
                          blogDateIcon={blogDateIcon}
                          blogDate={blogDate}
                          blogPostBy={blogPostBy}
                          blogPostByIcon={blogPostByIcon}
                          blogUrl={blogUrl}
                          blogTitle={blogTitle}
                          blogGridContent={blogGridContent}
                          blogGridIcon={blogGridIcon}
                        />
                      </div>
                    );
                  }
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Subscribe />
    </>
  );
};

export default BlogLeftSidebar;
