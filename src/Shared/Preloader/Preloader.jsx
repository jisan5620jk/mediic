import { useEffect } from 'react';
import './preloader.css';

const Preloader = () => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      document.querySelector('#loading-screen').style.opacity = 0;
      setTimeout(() => {
        document.querySelector('#loading-screen').remove();
      }, 300);
    }, 1000); // Adjust the duration as needed

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className='loading-screen'
      id='loading-screen'
    >
      <span className='bar top-bar'></span>
      <span className='bar down-bar'></span>
      <div className='animation-preloader'>
        <div className='spinner'></div>
        <div className='loader'></div>
        <div className='txt-loading'>
          <span
            data-text-preloader='M'
            className='letters-loading'
          >
            M
          </span>
          <span
            data-text-preloader='E'
            className='letters-loading'
          >
            E
          </span>
          <span
            data-text-preloader='D'
            className='letters-loading'
          >
            D
          </span>
          <span
            data-text-preloader='I'
            className='letters-loading'
          >
            I
          </span>
          <span
            data-text-preloader='I'
            className='letters-loading'
          >
            I
          </span>
          <span
            data-text-preloader='C'
            className='letters-loading'
          >
            C
          </span>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
