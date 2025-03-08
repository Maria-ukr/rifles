import gsap from 'gsap';
import { useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import s from './Instructors.module.scss';
import Container from '@/components/Container/Container';
import people1 from '@/assets/images/people1.jpg';
import people2 from '@/assets/images/people2.jpg';
import people3 from '@/assets/images/people3.jpg';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

function Instructors() {
  const main = useRef();
  useGSAP(
    () => {
      const sections = gsap.utils.toArray(`.${s.box}`);
      gsap.from(sections, {
        opacity: 0,
        duration: 0.5,
        stagger: 0.3,
        ease: 'power3.out',
        backgroundColor: '#222',
        scrollTrigger: {
          trigger: main.current,
          start: 'top 90%',
          end: 'bottom 80%',
          scrub: true,
        },
      });
    },
    { scope: main }
  );
  return (
    <>
      <Container>
        <h2 className='title'>Інструктори з полігону</h2>
      </Container>
      <div className={s.container} ref={main}>
        <div className={s.box}>
          <img src={people1} alt='REAL DIRTY HARRY' />
        </div>
        <div className={s.box}>
          <div className={s.content}>
            <p>REAL DIRTY HARRY</p>
            <p>
              Професіонал із непохитною репутацією. Його поради допомагають
              стрільцям досягати ідеальної точності. Довіряють найкращі –
              довіряй і ти!
            </p>
          </div>
        </div>
        <div className={s.box}>
          <div className={s.content}>
            <p>DUCK</p>
            <p>
              Легенда у світі стрільби! Майстер своєї справи, який поєднує
              професіоналізм, досвід і справжню пристрасть до зброї. Його
              навички та знання високо цінуються як серед новачків, так і серед
              досвідчених стрільців.
            </p>
          </div>
        </div>
        <div className={s.box}>
          <img src={people2} alt='1776 DUCK' />
        </div>
        <div className={s.box}>
          <img src={people3} alt='KENY JONS' />
        </div>
        <div className={s.box}>
          <div className={s.content}>
            <p>KENY JONS</p>
            <p>
              Жива легенда стрілецького світу! KENY JONS HARRY знає про зброю
              все й готова поділитися своїм досвідом. ЇЇ техніка, знання та
              пристрасть роблять її однією із найкращих інструкторів.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Instructors;
