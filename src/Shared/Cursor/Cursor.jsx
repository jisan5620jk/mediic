import { useEffect } from 'react';

const Cursor = () => {
  useEffect(() => {
    const cursor = document.querySelector('.cursor');
    const cursor2 = document.querySelector('.cursor2');

    const handleMouseMove = (e) => {
      cursor.style.transform = `translate(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%))`;
      cursor2.style.transform = `translate(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%))`;
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div>
      <div className='cursor fixed top-0 left-0 size-10 rounded-full bg-white mix-blend-difference pointer-events-none z-50 transition-transform duration-200 ease-in-out'></div>
      <div className='cursor2 fixed top-0 left-0 size-2 rounded-full bg-white mix-blend-difference pointer-events-none z-50 transition-transform duration-100 ease-in-out'></div>
    </div>
  );
};

export default Cursor;
