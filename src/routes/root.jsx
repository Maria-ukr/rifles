import { createBrowserRouter } from 'react-router-dom';
import {
  Home,
  NotFoundPage,
  Catalog,
  Faq,
  About,
  Location,
  Product,
} from '@/pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/catalog',
    element: <Catalog />,
  },
  {
    path: 'catalog/:productId',
    element: <Product />,
  },
  {
    path: '/faq',
    element: <Faq />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/location',
    element: <Location />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);

export default router;
