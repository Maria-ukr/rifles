import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import Container from '@/components/Container/Container';
import boxImg1 from '@/assets/images/banner.jpg';
import boxImg2 from '@/assets/images/people2.jpg';
import boxImg3 from '@/assets/images/banner2.jpg';
import s from './Services.module.scss';

function Services() {
  const [tab, setTab] = useState('1');
  const tab1 = useRef(null);
  const tab2 = useRef(null);
  const tab3 = useRef(null);

  useEffect(() => {
    gsap.set([tab1.current, tab2.current, tab3.current], { opacity: 0 });
    if (tab === '1') {
      gsap.to(tab1.current, {
        opacity: 1,
        duration: 0.5,
        ease: 'power4.inOut',
      });
    }
    if (tab === '2') {
      gsap.to(tab2.current, {
        opacity: 1,
        duration: 0.5,
        ease: 'power4.inOut',
      });
    }
    if (tab === '3') {
      gsap.to(tab3.current, {
        opacity: 1,
        duration: 0.5,
        ease: 'power4.inOut',
      });
    }
  }, [tab]);
  return (
    <>
      <Container>
        <h2 className={s.title}>Гарантія сервіс</h2>
      </Container>
      <div className={s.wrap}>
        <Container className={s.inner}>
          <div
            onClick={() => setTab('1')}
            style={{ backgroundImage: `url(${boxImg1})` }}
            className={s['box-1']}
          >
            <h6>Повернення та обмін</h6>
          </div>
          <div
            onClick={() => setTab('2')}
            style={{ backgroundImage: `url(${boxImg2})` }}
            className={s['box-2']}
          >
            <h6>Гарантійний ремонт</h6>
          </div>
          <div
            onClick={() => setTab('3')}
            style={{ backgroundImage: `url(${boxImg3})` }}
            className={s['box-3']}
          >
            <h6>Гарантія на гвинтівки</h6>
          </div>
        </Container>
      </div>
      <Container className={s.box}>
        <div className={s.content} ref={tab1}>
          <p>
            Повернення або обмін товару належної якості можна виконати протягом
            14 днів з моменту отримання замовлення, не рахуючи дня покупки, у
            разі, якщо товар не підійшов Вам за формою, габаритами, фасоном,
            забарвленням, розміром або комплектацією.
          </p>
          <p>
            Увага! Повернення або обмін товару можливе у разі, якщо воно не
            використовувалося і збережено його товарний вигляд, споживчі
            властивості, пломби, ярлики, а також розрахунковий документ, що
            підтверджує факт та умови купівлі зазначеного товару.
          </p>
          <p>
            Повернення вартості товару належної якості здійснюється не пізніше
            ніж через 7 днів з моменту отримання товару.
          </p>
        </div>
        <div className={s.content} ref={tab2}>
          <p>Загальна інформація.</p>
          <p>
            Товарем неналежної якості є товар, який несправний і не може
            забезпечувати виконання своїх функцій, а також не відповідає вимогам
            встановлених для цієї категорії продукції.
          </p>
          <p>
            Протягом гарантійного терміну покупець має право пред'явити вимоги,
            передбачені законом “Про захист прав споживача” до магазину щодо
            товарів неналежної якості. Гарантійний термін товару обчислюється
            від дати його продажу, а у разі його пересилання поштою з дня
            доставки його покупцю.
          </p>
        </div>
        <div className={s.content} ref={tab3}>
          <p>
            Гарантія поширюється на всі вузли та механізми гвинтівок, але не
            поширюється на витратні матеріали, до яких належить: пружина,
            манжета, ущільнювач стовбура (у разі якщо причиною втрати потужності
            стало природне зношування під час експлуатації гвинтівки, або не
            дотримання умов зазначених у гарантійному талоні).
          </p>
        </div>
      </Container>
    </>
  );
}

export default Services;
