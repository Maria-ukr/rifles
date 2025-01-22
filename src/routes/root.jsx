import { createBrowserRouter } from 'react-router-dom';
import {
  Home,
  NotFoundPage,
  Catalog,
  Faq,
  About,
  Location,
  Product,
  Checkout
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
    path: 'catalog/:subcategory',
    element: <Catalog />,
  },
  {
    path: 'catalog/:subcategory/:productId',
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
    path: '/service-center',
    element: <Location />,
  },
  {
    path: '/checkout',
    element: <Checkout />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);

export default router;
