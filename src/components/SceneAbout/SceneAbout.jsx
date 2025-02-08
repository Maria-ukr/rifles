import { Link } from 'react-router-dom';
import { useRef } from 'react';
import Container from '@/components/Container/Container';
import leftImg from '@/assets/images/banner2.jpg';
import rightImg from '@/assets/images/main.jpg';
import s from './SceneAbout.module.scss';
import gsap from 'gsap';

function SceneAbout() {
  const refLeftImg = useRef();
  const refRightImg = useRef();
  const refLeft = useRef();
  const refRight = useRef();

  const handleMouseEnter = (side) => {
    if (side === 'left') {
      gsap.to([refRight.current, refRightImg.current], {
        opacity: 0,
        duration: 0.5,
        ease: 'power4.inOut',
      });
    } else if (side === 'right') {
      gsap.to([refLeft.current, refLeftImg.current], {
        opacity: 0,
        duration: 0.5,
        ease: 'power4.inOut',
      });
    }
  };

  const handleMouseLeave = () => {
    gsap.to(
      [
        refLeft.current,
        refRight.current,
        refLeftImg.current,
        refRightImg.current,
      ],
      {
        opacity: 1,
        ease: 'power4.inOut',
      }
    );
  };

  return (
    <>
      <Container>
        <h3 className={s.title}>Про нас</h3>
      </Container>
      <div className={s.container}>
        <img
          className={s['img-left']}
          src={leftImg}
          alt='leftImg'
          ref={refLeftImg}
        />
        <img
          className={s['img-right']}
          src={rightImg}
          alt='rightImg'
          ref={refRightImg}
        />
        <Link
          className={s['link-left']}
          to='/catalog'
          onMouseEnter={() => handleMouseEnter('left')}
          onMouseLeave={handleMouseLeave}
        >
          <p>Каталог зброї</p>
          <img src={leftImg} alt='leftImg' ref={refLeft} />
        </Link>
        <Link
          className={s['link-right']}
          to='/about'
          onMouseEnter={() => handleMouseEnter('right')}
          onMouseLeave={handleMouseLeave}
        >
          <p>Робота інструкторів</p>
          <img src={rightImg} alt='rightImg' ref={refRight} />
        </Link>
      </div>
    </>
  );
}

export default SceneAbout;
