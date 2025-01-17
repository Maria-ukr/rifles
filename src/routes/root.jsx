import { createBrowserRouter } from 'react-router-dom';
import { Home, NotFoundPage, Catalog, Faq, About, Location, Product } from '@/pages';

const fetchProducts = async() => {
  const response = await fetch('./../../data.json')
  const data = await response.json();
  return data
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'catalog',
    element: <Catalog />,
    loader: fetchProducts,
  },
  {
    path: ':productId',
    element: <Product />,
    loader: fetchProducts,
  },
  {
    path: 'faq',
    element: <Faq />,
  },
  {
    path: 'about',
    element: <About />,
  },
  {
    path: 'location',
    element: <Location />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);

export default router;
