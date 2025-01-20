import { useLoaderData, useParams } from 'react-router-dom';
import Header from '@/layout/Header/Header';
import Footer from '@/layout/Footer/Footer';
import ProductPreview from '@/components/ProductPreview/ProductPreview';

function Product() {
  const { productId } = useParams();
  const { products } = useLoaderData();
  console.log('products', products);
  const product = products.filter((elem) => elem.id === productId);
  console.log('product', product);
  return (
    <>
      <Header />
      <ProductPreview item={product[0]} />
      <Footer />
    </>
  );
}

export default Product;
