import { Outlet } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';
import Footer from '../Shared/Footer/Footer';
import Cursor from '../Shared/Cursor/Cursor';
import AOS from 'aos';
import 'aos/dist/aos.css';
import HelmetChanger from '../Shared/Helmet/Helmet';
import { useEffect } from 'react';
import BackToTop from '../Shared/BackToTop/BackToTop';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Main = () => {
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
      <HelmetChanger title={'Main Page'} />
      <Navbar />
      <Cursor />
      <BackToTop />
      <div>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};
export default Main;
