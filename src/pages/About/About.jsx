import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import Container from '@/components/Container/Container';
import SceneAbout from '../../components/SceneAbout/SceneAbout';

function About() {
  return (
    <>
      <Header />
      <Container>
        <div>Про компанію</div>
      </Container>
      <SceneAbout />
      <Footer />
    </>
  );
}

export default About;
