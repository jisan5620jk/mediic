import { Outlet } from 'react-router-dom';
import Navbar3 from '../Shared/Navbar/Navbar3';
import Footer3 from '../Shared/Footer/Footer3';
import Cursor from '../Shared/Cursor/Cursor';
import HelmetChanger from '../Shared/Helmet/Helmet';
import BackToTop from '../Shared/BackToTop/BackToTop';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';

const Main3 = () => {
 useEffect(() => {
   AOS.init();
   AOS.refresh();
 }, []);  

  const lenis = new Lenis();

  lenis.on('scroll', ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);

  return (
    <>
      <HelmetChanger title={'Home Three'} />
      <Navbar3 />
      <Cursor />
      <BackToTop />
      <div>
        <Outlet />
      </div>
      <Footer3 />
    </>
  );
};
export default Main3;
