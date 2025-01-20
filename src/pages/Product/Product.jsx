import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Header from '@/layout/Header/Header';
import Footer from '@/layout/Footer/Footer';
import ProductPreview from '@/components/ProductPreview/ProductPreview';
import { getProductById } from '@/store/slices/productsSlice.js';

function Product() {
  const { productId } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductById(productId));
  }, []);
  const product = useSelector((state) => state.productsList.product);

  return (
    <>
      <Header />
      <ProductPreview item={product} />
      <Footer />
    </>
  );
}

export default Product;
