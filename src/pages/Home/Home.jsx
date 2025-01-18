import Header from '@/layout/Header/Header';
import Footer from '@/layout/Footer/Footer';
import Container from '@/ui/Container/Container';
import ButtonArrow from '@/ui/ButtonArrow/ButtonArrow';
import s from './Home.module.scss';
import mainImg from '@/assets/images/main.jpg';

function Home() {
  return (
    <>
      <Header />
      <section
        className={s['main-banner']}
        style={{
          backgroundImage: `url(${mainImg})`,
        }}
      >
        <Container className={s.container}>
          <div className={s.wrap}>
            <h1>Arm Yourself with Quality Firearms and Accessories</h1>
            <ButtonArrow content='Discover collection' linkTo='/catalog' />
          </div>
        </Container>
      </section>
      <Footer />
    </>
  );
}

export default Home;
