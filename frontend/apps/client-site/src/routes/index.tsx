
import NotFound from '../pages/not-found';
import { Navigate, useRoutes } from 'react-router-dom';
import Home from '../pages/Home';
import Generators from '../pages/Generators';
import ContactUs from '../pages/ContactUs';
import FAQ from '../pages/FAQ';



// ----------------------------------------------------------------------

export default function AppRouter() {
  const publicRoutes = [
    {
      path: '/',
      element:<Home/>,
      index: true,
     
    },
    {
      path: '/generator',
      element:<Generators/>,
    },
    {
      path: '/contactus',
      element:<ContactUs/>,
    },
    {
      path: '/faq',
      element:<FAQ/>,
    },
    {
      path: '/404',
      element: <NotFound />
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />
    }
  ];

  

  const routes = useRoutes([...publicRoutes]);

  return routes;
}