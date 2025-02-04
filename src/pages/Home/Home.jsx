import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import Container from '@/components/Container/Container';
import LinkArrow from '@/components/LinkArrow/LinkArrow';
import s from './Home.module.scss';
import mainImg from '@/assets/images/main.jpg';
import SliderProducts from '../../components/SliderProducts/SliderProducts';

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
            <h1 id='hero' className='hero'>Arm Yourself with Quality Firearms and Accessories</h1>
            <LinkArrow content='Discover collection' linkTo='/catalog' />
          </div>
        </Container>
      </section>
      <SliderProducts />
      <Footer />
    </>
  );
}

export default Home;
