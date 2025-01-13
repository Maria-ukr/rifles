import { Link, Outlet, useLoaderData } from 'react-router-dom';
import Header from '../../layout/Header/Header';
import Footer from '../../layout/Footer/Footer';

function Catalog() {
  const products = useLoaderData();
  const titles = Object.keys(products.categories);
  return (
    <>
      <Header />
      <div>Catalog</div>
      {titles.map((elem) => (
        <Link key={elem} to={`/products/${elem.toLowerCase()}`}>
          {elem + ' '} 
        </Link>
      ))}
      <Outlet />
      <Footer />
    </>
  );
}

export default Catalog;
