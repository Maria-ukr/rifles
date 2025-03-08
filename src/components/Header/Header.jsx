import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import s from './Header.module.scss';
import Logo from '@/components/Logo/Logo';
import Menu from '@/components/Menu/Menu';
import Cart from '@/components/Cart/Cart';
import Search from '@/components/Search/Search';
import Container from '@/components/Container/Container';
import MobileMenu from '@/components/MobileMenu/MobileMenu';
import Navigation from 'root/data.json';

function Header() {
  const { categories } = Navigation;
  const refNav = useRef();
  useEffect(() => {
    gsap.set(refNav.current, { y: '-147px', opacity: 0 });

    gsap.to(refNav.current, {
      duration: 2,
      y: '0%',
      opacity: 1,
      ease: 'power3.out',
    });
  }, []);

  return (
    <Container className={s.container}>
      <header className={s.header} ref={refNav}>
        <Link to='/rifles' className={s.logo}>
          <Logo />
        </Link>
        <Menu categories={categories} />
        <MobileMenu categories={categories} />
        <div className={s.right}>
          <Cart />
          <Search />
        </div>
      </header>
    </Container>
  );
}

export default Header;
