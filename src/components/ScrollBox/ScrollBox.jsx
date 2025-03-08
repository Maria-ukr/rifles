import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Container from '@/components/Container/Container';
import s from './ScrollBox.module.scss';

gsap.registerPlugin(ScrollTrigger);

function ScrollBox() {
  const refBox = useRef();
  const refLeft = useRef();
  const refRight = useRef();

  useGSAP(
    () => {
      if (refRight.current) {
        const paragraphs = refRight.current.querySelectorAll(
          'p[data-content-text]'
        );
        const y = gsap.timeline({
          scrollTrigger: {
            trigger: refBox.current,
            start: 'top top',
            end: () => refRight.current.offsetHeight - 35 + 'px' ,
            pin: refLeft.current,
          },
        });
        y.to(refLeft.current, {
          scrollTrigger: {
            trigger: refRight.current,
            start: 'top top',
          },
        })
        const texts = gsap.utils.toArray(paragraphs);
        texts[0].style.color = 'white';
        texts.forEach((line) => {
        y.to(line, {
          color: 'white',
          scrollTrigger: {
            trigger: line,
            start: 'top 70px',
            end: '+=1rem',
            scrub: true,
            toggleActions: 'play reverse play reverse',
          },
        });
      });
      }
      
    },
    { scope: refBox }
  );

  return (
    <div className={s.container} ref={refBox}>
      <Container className={s.grid}>
        <h3 ref={refLeft} className='w-min text-nowrap h-min shrink top-0 z-50'>
          Ефективність є:
        </h3>
        <div className={s.content} ref={refRight}>
          <p data-content-text>успіх.</p>
          <p data-content-text>ціль.</p>
          <p data-content-text>цілеспрямованою силою.</p>
          <p data-content-text>влучністю.</p>
          <p data-content-text>інноваційністю.</p>
          <p data-content-text>вплив.</p>
          <p data-content-text>стабільністю.</p>
          <p data-content-text>безпекою.</p>
          <p data-content-text>рух.</p>
          <p data-content-text>загартованою майстерністю.</p>
          <p data-content-text>точністю.</p>
          <p data-content-text>безмежною впевненістю.</p>
          <p data-content-text>непохитною рішучістю.</p>
          <p data-content-text>відточеною вправністю.</p>
          <p data-content-text>влучністю.</p>
          <p data-content-text>стратегічною мудрістю.</p>
          <p data-content-text>майстерністю.</p>
          <p data-content-text>балансом контролю.</p>
          <p data-content-text>професійністю.</p>
          <p data-content-text>спокійною впевненістю.</p>
          <p data-content-text>досконалістю.</p>
          <p data-content-text>беззаперечною дисципліною.</p>
          <p data-content-text>є мистецтвом.</p>
          <p data-content-text>Athena.</p>
        </div>
      </Container>
    </div>
  );
}

export default ScrollBox;
