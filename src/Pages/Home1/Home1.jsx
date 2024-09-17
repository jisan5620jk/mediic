import About from '../../Component1/About/About';
import Appoinment from '../../Component1/Appoinment/Appionment';
import Banner from '../../Component1/Banner/Banner';
import Blog from '../../Component1/Blog/Blog';
import Brand from '../../Component1/Brand/Brand';
import ContentSlider from '../../Component1/ContentSlider/ContentSlider';
import Counter from '../../Component1/Counter/Counter';
import Feature from '../../Component1/Feature/Feature';
import Service from '../../Component1/Service/Service';
import Subscribe from '../../Component1/Subscribe/Subscribe';
import TeamMember from '../../Component1/TeamMember/TeamMember';
import Testimonial from '../../Component1/Testimonial/Testimonial';

const Home1 = () => {
  return (
    <>
      <Banner />
      <Counter />
      <Feature />
      <About />
      <ContentSlider />
      <Service />
      <Appoinment />
      <TeamMember />
      <Testimonial />
      <Brand />
      <Blog />
      <Subscribe />
    </>
  );
};

export default Home1;
