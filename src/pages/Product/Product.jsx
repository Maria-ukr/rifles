import { useLoaderData, useParams } from 'react-router-dom';
import Header from '@/layout/Header/Header';
import Footer from '@/layout/Footer/Footer';
import ProductPreview from '@/components/productPreview/ProductPreview';

function Product() {
  const { productId } = useParams();
  const { products } = useLoaderData();
  console.log('products', products)
  const product = products.filter((elem) => elem.id === productId);
  console.log('product', product)
  return (
    <>
      <Header />
      <h1>Product: {productId}</h1>
      <ProductPreview item={product[0]} />
      <Footer />
    </>
  );
}

export default Product;
