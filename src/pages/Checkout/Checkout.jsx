import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import Container from '@/components/Container/Container';
import Orders from '@/components/Orders/Orders';
import s from './Checkout.module.scss';

function Checkout() {
  return (
    <>
      <Header />
      <Container className={s.container}>
        <Orders />
      </Container>
      <Footer />
    </>
  );
}

export default Checkout;
