import { useEffect } from 'react';
import gsap from 'gsap';
import { useRef } from 'react';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import Container from '@/components/Container/Container';
import LinkArrow from '@/components/LinkArrow/LinkArrow';
import SliderProducts from '@/components/SliderProducts/SliderProducts';
import SubscribeForm from '@/components/SubscribeForm/SubscribeForm';
import Instructors from '@/components/Instructors/Instructors';
import s from './Home.module.scss';
import mainImg from '@/assets/images/main.jpg';
import ScrollBox from '../../components/ScrollBox/ScrollBox';

function Home() {
  const title1 = 'Arm Yourself with Quality';
  const title2 = 'Firearms and Accessories';
  const title1Ref = useRef([]);
  const title2Ref = useRef([]);
  const btnRef = useRef();
  useEffect(() => {
    let textAnimation = gsap.timeline();
    textAnimation.to(
      title1Ref.current,
      {
        x: -100,
        opacity: 1,
        stagger: {
          each: 0.05,
        },
      },
      0
    );
    textAnimation.to(
      title2Ref.current,
      {
        x: -100,
        opacity: 1,
        stagger: {
          each: 0.05,
        },
      },
      0.3
    );
    textAnimation.to(btnRef.current, {
      scale: 1.1,
      repeat: 2,
      duration: 1,
      yoyo: true,
      ease: 'power1.inOut',
    });
  }, []);
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
            <h1 id='hero' className='hero'>
              <div>
                {title1.split('').map((w, i) =>
                  w === ' ' ? (
                    <span key={i} className={s.word}>
                      &nbsp;
                    </span>
                  ) : (
                    <span
                      key={i}
                      className={s.word}
                      ref={(el) => (title1Ref.current[i] = el)}
                    >
                      {w}
                    </span>
                  )
                )}
              </div>
              <div>
                {title2.split('').map((w, i) =>
                  w === ' ' ? (
                    <span key={i} className={s.word}>
                      &nbsp;
                    </span>
                  ) : (
                    <span
                      ref={(el) => (title2Ref.current[i] = el)}
                      key={i}
                      className={s.word}
                    >
                      {w}
                    </span>
                  )
                )}
              </div>
            </h1>
            <div ref={btnRef}>
              <LinkArrow content='Discover collection' linkTo='/catalog' />
            </div>
          </div>
        </Container>
      </section>
      <SliderProducts />
      <Instructors />
      <ScrollBox />
      <Container className={s.aside}>
        <h3 className={s.title}>Ударні рушниці</h3>
        <p>
          Ласкаво просимо до <span>Athena</span>, найкращого в країні дилера
          зброї онлайн. Завдяки нашим неперевершеним цінам і відданості
          доброзичливому обслуговуванню клієнтів ми ставимо своєю місією
          забезпечити відповідальних власників зброї високоякісною вогнепальною
          зброєю та аксесуарами. У нас є все: від першої мисливської рушниці
          вашої дитини до рідкісних і важкодоступних обмежених серій.
        </p>
        <p>
          Окрім великого вибору вогнепальної зброї, ми пропонуємо боєприпаси,
          аксесуари, запчастини та спорядження. Як провідний національний і один
          із перших дилерів зброї онлайн, ми завжди зберігаємо популярні моделі
          в наявності та задовольняємо всіх ентузіастів вогнепальної зброї.
        </p>
        <p>
          <span>Athena</span> з гордістю підтримує та вірить у відповідальне
          володіння зброєю.
        </p>
      </Container>
      <SubscribeForm />
      <Footer />
    </>
  );
}

export default Home;
