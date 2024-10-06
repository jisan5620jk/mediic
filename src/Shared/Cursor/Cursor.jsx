import { useEffect } from 'react';
import './cursor.css';

const Cursor = () => {
  useEffect(() => {
    const innerCursor = document.querySelector('.cursor-inner');
    const outerCursor = document.querySelector('.cursor-outer');

    const mouseMoveHandler = (event) => {
      const { clientX, clientY } = event;
      outerCursor.style.transform = `translate(${clientX}px, ${clientY}px)`;
      innerCursor.style.transform = `translate(${clientX}px, ${clientY}px)`;
    };

    const mouseEnterHandler = (event) => {
      if (event.target.matches('a, button, .cursor-pointer')) {
        innerCursor.classList.add('cursor-hover');
        outerCursor.classList.add('cursor-hover');
      }
    };

    const mouseLeaveHandler = (event) => {
      if (event.target.matches('a, button, .cursor-pointer')) {
        innerCursor.classList.remove('cursor-hover');
        outerCursor.classList.remove('cursor-hover');
      }
    };

    // Add event listeners
    window.addEventListener('mousemove', mouseMoveHandler);
    document.body.addEventListener('mouseenter', mouseEnterHandler, true);
    document.body.addEventListener('mouseleave', mouseLeaveHandler, true);

    // Show the cursor elements
    innerCursor.style.visibility = 'visible';
    outerCursor.style.visibility = 'visible';

    // Cleanup function
    return () => {
      window.removeEventListener('mousemove', mouseMoveHandler);
      document.body.removeEventListener('mouseenter', mouseEnterHandler);
      document.body.removeEventListener('mouseleave', mouseLeaveHandler);
    };
  }, []);

  return (
    <div>
      <div className='mouse-cursor cursor-inner'></div>
      <div className='mouse-cursor cursor-outer'></div>
    </div>
  );
};

export default Cursor;
