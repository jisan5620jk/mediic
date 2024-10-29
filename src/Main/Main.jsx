import { Outlet } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';
import ScrollToTop from '../Shared/ScrollToTop/ScrollToTop';
import Footer from '../Shared/Footer/Footer';
import Cursor from '../Shared/Cursor/Cursor';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Main = () => {
  window.onload = function () {
    AOS.init({
      // Global settings:
      disable: false, // Accepts boolean, string or function. 'mobile' disables animations on mobile devices.
      startEvent: 'DOMContentLoaded', // Name of the event dispatched on the document, that AOS should initialize on.
      initClassName: 'aos-init', // Class applied after initialization.
      animatedClassName: 'aos-animate', // Class applied on animation.
      useClassNames: false, // If true, will add content of `data-aos` as classes on scroll.
      disableMutationObserver: false, // Disables automatic mutations' detections (advanced).
      debounceDelay: 50, // The delay on debounce used while resizing window (advanced).
      throttleDelay: 99, // The delay on throttle used while scrolling the page (advanced).

      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 120, // Offset (in px) from the original trigger point.
      delay: 0, // Values from 0 to 3000, with step 50ms.
      duration: 400, // Values from 0 to 3000, with step 50ms.
      easing: 'ease', // Default easing for AOS animations.
      once: false, // Whether animation should happen only once - while scrolling down.
      mirror: false, // Whether elements should animate out while scrolling past them.
      anchorPlacement: 'top-bottom', // Defines which position of the element regarding to window should trigger the animation.
    });

    AOS.refresh(); // Refresh AOS to detect new elements and apply animations.
  };
  return (
    <>
      <Navbar />
      <Cursor />
      <ScrollToTop />
      <div>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};
export default Main;
