import { createBrowserRouter } from 'react-router-dom';
import Main from '../Main/Main';
import Home1 from '../Pages/Home1/Home1';
import ErrorPage from '../Shared/ErrorPage/ErrorPage';
import Home2 from '../Pages/Home2/Home2';
import Main2 from '../Main/Main2';
import Main3 from '../Main/Main3';
import Home3 from '../Pages/Home3/Home3';
import AboutInner from '../Pages/InnerPage/AboutInner/AboutInner';
import ProjectDetails from '../Pages/InnerPage/ProjectDetails/ProjectDetails';
import ServiceInner from '../Pages/InnerPage/ServiceInner/ServiceInner';
import BlogDetails from '../Pages/InnerPage/BlogDetails/BlogDetails';
import ServiceDetails from '../Pages/InnerPage/ServiceDetails/ServiceDetails';
import ServiceDetails2 from '../Pages/InnerPage/ServiceDetails/ServiceDetails2';
import ServiceDetails3 from '../Pages/InnerPage/ServiceDetails/ServiceDetails3';
import ServiceDetails4 from '../Pages/InnerPage/ServiceDetails/ServiceDetails4';
import ServiceDetails5 from '../Pages/InnerPage/ServiceDetails/ServiceDetails5';

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorPage />,
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home1 />,
      },
      {
        path: '/about',
        element: <AboutInner />,
      },
      {
        path: '/project_details',
        element: <ProjectDetails />,
      },
      {
        path: '/service',
        element: <ServiceInner />,
      },
      {
        path: '/service_details',
        element: <ServiceDetails />,
      },
      {
        path: '/service_details2',
        element: <ServiceDetails2 />,
      },
      {
        path: '/service_details3',
        element: <ServiceDetails3 />,
      },
      {
        path: '/service_details4',
        element: <ServiceDetails4 />,
      },
      {
        path: '/service_details5',
        element: <ServiceDetails5 />,
      },
      {
        path: '/blog_details',
        element: <BlogDetails />,
      },
    ],
  },
  {
    path: '/',
    errorElement: <ErrorPage />,
    element: <Main2 />,
    children: [
      {
        path: '/home2',
        element: <Home2 />,
      },
    ],
  },
  {
    path: '/',
    errorElement: <ErrorPage />,
    element: <Main3 />,
    children: [
      {
        path: '/home3',
        element: <Home3 />,
      },
    ],
  },
]);

export default router;
