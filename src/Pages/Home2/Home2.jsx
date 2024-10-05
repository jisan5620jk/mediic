import About from '../../Component2/About/About';
import Banner from '../../Component2/Banner/Banner';
import Blog from '../../Component2/Blog/Blog';
import Brand from '../../Component2/Brand/Brand';
import ContentSlider from '../../Component2/ContentSlider/ContentSlider';
import Service from '../../Component2/Service/Service';
import Skill from '../../Component2/Skill/Skill';
import Subscribe from '../../Component2/Subscribe/Subscribe';
import TeamMember from '../../Component2/TeamMember/TeamMember';
import Testimonial from '../../Component2/Testimonial/Testimonial';
import WhyChoose from '../../Component2/WhyChoose/WhyChoose';

const Home2 = () => {
  return (
    <>
      <Banner />
      <Skill />
      <About />
      <Service />
      <WhyChoose />
      <ContentSlider />
      <TeamMember />
      <Testimonial />
      <Brand />
      <Blog />
      <Subscribe />
    </>
  );
};

export default Home2;
