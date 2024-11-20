import { useEffect, useState, useRef } from 'react';
import './back-to-top.css'; // Ensure to import the styles
import { BsArrowUp } from 'react-icons/bs';
import { useLocation } from 'react-router-dom';

const BackToTop = () => {
  const [isActive, setIsActive] = useState(false);
  const progressRef = useRef(null);
  const { pathname } = useLocation();

  useEffect(() => {
    const progressPath = progressRef.current;
    if (progressPath) {
      const totalLength = progressPath.getTotalLength();
      progressPath.style.transition = 'none';
      progressPath.style.strokeDasharray = `${totalLength} ${totalLength}`;
      progressPath.style.strokeDashoffset = totalLength;

      const handleScroll = () => {
        const scrollTop = window.scrollY;
        const documentHeight = document.documentElement.scrollHeight;
        const windowHeight = window.innerHeight;
        const maxScroll = documentHeight - windowHeight;

        const dashOffset = totalLength - (scrollTop * totalLength) / maxScroll;
        progressPath.style.strokeDashoffset = dashOffset;

        setIsActive(scrollTop > 50);
      };

      handleScroll(); // Initial call to set the progress
      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const handleClick = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      className={`progress-wrap cursor-pointer ${
        isActive ? 'active-progress' : ''
      }`}
      id='scrollUp'
      onClick={handleClick}
    >
      <span>
        <BsArrowUp className='!fill-PrimaryColor-0' />
      </span>
      <svg
        className='progress-circle svg-content'
        width='100%'
        height='100%'
        viewBox='-1 -1 102 102'
      >
        <path
          ref={progressRef}
          d='M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98'
        />
      </svg>
    </div>
  );
};

export default BackToTop;
