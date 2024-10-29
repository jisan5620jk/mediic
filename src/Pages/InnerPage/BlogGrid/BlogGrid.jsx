import { FaArrowRightLong, FaCircle } from 'react-icons/fa6';
import blogThumb from '/images/blog.jpg';
import blogThumb2 from '/images/blog2.jpg';
import blogThumb3 from '/images/blog3.jpg';
import blogThumb4 from '/images/blog4.jpg';
import blogThumb5 from '/images/blog5.jpg';
import blogThumb6 from '/images/blog6.jpg';
import BlogGridCard from './BlogGridCard';
import BreadCrumb from '../../../Shared/BreadCrumb/BreadCrumb';
import { GoArrowRight } from 'react-icons/go';
import Subscribe from '../../../Component1/Subscribe/Subscribe';

const BlogGridData = [
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

const BlogGrid = () => {
  return (
    <>
      <BreadCrumb
        breadCrumbTitle={'Blog Grid'}
        breadCrumbIcon={<FaArrowRightLong />}
        breadCrumbLink={'Blog Grid'}
      />
      <section className='py-28 bg-BodyBg-0'>
        <div className='Container'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-7'>
            {BlogGridData.map(
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
                    <BlogGridCard
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
      </section>
      <Subscribe />
    </>
  );
};

export default BlogGrid;
