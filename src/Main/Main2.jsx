import { Outlet } from 'react-router-dom';
import Navbar2 from '../Shared/Navbar/Navbar2';
import Footer from '../Shared/Footer/Footer';
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

const Main2 = () => {
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
      <HelmetChanger title={'Home Two'} />
      <Navbar2 />
      <Cursor />
      <BackToTop />
      <div>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};
export default Main2;
