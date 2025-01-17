import { Link, useLoaderData } from 'react-router-dom';
import Header from '@/layout/Header/Header';
import Footer from '@/layout/Footer/Footer';

function Catalog() {
  const products = useLoaderData();

  return (
    <>
      <Header />
      <div>Catalog</div>
      {products.products.map(elem => (
        <Link key={elem.id} to={`/${elem.name}`}>
          <p>{elem.name}</p>
        </Link>
      ))}
      <Footer />
    </>
  );
}

export default Catalog;

