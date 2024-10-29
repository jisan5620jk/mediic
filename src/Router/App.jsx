import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Main from '../Main/Main';
import Home1 from '../Pages/Home1/Home1';
import ErrorPage from '../Shared/ErrorPage/ErrorPage';
import Main2 from '../Main/Main2';
import Main3 from '../Main/Main3';
import AboutInner from '../Pages/InnerPage/AboutInner/AboutInner';
import ProjectDetails from '../Pages/InnerPage/ProjectDetails/ProjectDetails';
import ServiceInner from '../Pages/InnerPage/ServiceInner/ServiceInner';
import BlogDetails from '../Pages/InnerPage/BlogDetails/BlogDetails';
import ServiceDetails from '../Pages/InnerPage/ServiceDetails/ServiceDetails';
import ServiceDetails2 from '../Pages/InnerPage/ServiceDetails/ServiceDetails2';
import ServiceDetails3 from '../Pages/InnerPage/ServiceDetails/ServiceDetails3';
import ServiceDetails4 from '../Pages/InnerPage/ServiceDetails/ServiceDetails4';
import ServiceDetails5 from '../Pages/InnerPage/ServiceDetails/ServiceDetails5';
import BlogGrid from '../Pages/InnerPage/BlogGrid/BlogGrid';
import ContactInner from '../Pages/InnerPage/ContactInner/ContactInner';
import TeamInner from '../Pages/InnerPage/TeamInner/TeamInner';
import AppointmentInner from '../Pages/InnerPage/Appointment/AppointmentInner';
import ProjectInner from '../Pages/InnerPage/ProjectInner/ProjectInner';
import TestimonialInner from '../Pages/InnerPage/TestimonialInner/TestimonialInner';
import FaqInner from '../Pages/InnerPage/Faq/FaqInner';
import TeamDetails from '../Pages/InnerPage/TeamDetails/TeamDetails';
import BlogLeftSidebar from '../Pages/InnerPage/BlogLeftSidebar/BlogLeftSidebar';
import BlogRightSidebar from '../Pages/InnerPage/BlogRightSidebar/BlogRightSidebar';
import Home3 from '../Pages/Home3/Home3';
import Home2 from '../Pages/Home2/Home2';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element={<Main />}
        >
          <Route
            index
            element={<Home1 />}
          />
          <Route
            path='about'
            element={<AboutInner />}
          />
          <Route
            path='project_details'
            element={<ProjectDetails />}
          />
          <Route
            path='service'
            element={<ServiceInner />}
          />
          <Route
            path='service_details'
            element={<ServiceDetails />}
          />
          <Route
            path='service_details2'
            element={<ServiceDetails2 />}
          />
          <Route
            path='service_details3'
            element={<ServiceDetails3 />}
          />
          <Route
            path='service_details4'
            element={<ServiceDetails4 />}
          />
          <Route
            path='service_details5'
            element={<ServiceDetails5 />}
          />
          <Route
            path='project'
            element={<ProjectInner />}
          />
          <Route
            path='testimonial'
            element={<TestimonialInner />}
          />
          <Route
            path='team'
            element={<TeamInner />}
          />
          <Route
            path='team_details'
            element={<TeamDetails />}
          />
          <Route
            path='blog_grid'
            element={<BlogGrid />}
          />
          <Route
            path='blog_left_sidebar'
            element={<BlogLeftSidebar />}
          />
          <Route
            path='blog_right_sidebar'
            element={<BlogRightSidebar />}
          />
          <Route
            path='blog_details'
            element={<BlogDetails />}
          />
          <Route
            path='appointment'
            element={<AppointmentInner />}
          />
          <Route
            path='faqs'
            element={<FaqInner />}
          />
          <Route
            path='contact'
            element={<ContactInner />}
          />
        </Route>
        <Route
          path='/home2'
          element={<Main2 />}
        >
          <Route
            index
            element={<Home2 />}
          />
        </Route>
        <Route
          path='/home3'
          element={<Main3 />}
        >
          <Route
            index
            element={<Home3 />}
          />
        </Route>
        <Route
          path='*'
          element={<ErrorPage />}
        />
      </Routes>
    </Router>
  );
}

export default App;
