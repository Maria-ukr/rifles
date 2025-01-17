import { useLoaderData, useParams } from 'react-router-dom';
import Header from '@/layout/Header/Header';
import Footer from '@/layout/Footer/Footer';

function Product() {
  const { productId } = useParams();
  const { products } = useLoaderData();
  const getKnives = products.filter((elem) => elem.category === 4);
  return (
    <>
      <Header />
      <h1>Product: {productId}</h1>
      {getKnives.map((elem) => (
        <p key={elem.id}>{elem.name}</p>
      ))}
      <Footer />
    </>
  );
}

export default Product;
