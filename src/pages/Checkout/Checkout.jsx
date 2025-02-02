import Header from '@/layout/Header/Header';
import Footer from '@/layout/Footer/Footer';
import Container from '@/ui/Container/Container';
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
