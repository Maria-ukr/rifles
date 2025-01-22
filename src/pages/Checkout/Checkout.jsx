import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Header from '@/layout/Header/Header';
import Footer from '@/layout/Footer/Footer';
import Container from '@/ui/Container/Container';
import { CONSTANTS } from '@/constants.js';
import ButtonArrow from '@/ui/ButtonArrow/ButtonArrow';
import s from './Checkout.module.scss';
import { addToCart } from '../../store/slices/cartSlice';

function Checkout() {
  return (
    <>
      <Header />
      <Container className={s.container}>
        <h2 className={s.title}>Checkout</h2>
      </Container>
      <Footer />
    </>
  );
}

export default Checkout;
