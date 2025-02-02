import { Link } from 'react-router-dom';
import s from './Header.module.scss';
import Logo from '@/components/Logo/Logo';
import Menu from '@/components/Menu/Menu';
import Cart from '@/components/Cart/Cart';
import Search from '@/components/Search/Search';
import Container from '@/components/Container/Container';
import MobileMenu from '@/components/MobileMenu/MobileMenu';
import Navigation from 'root/data.json';

function Header() {
  const {categories} = Navigation;
  return (
    <Container>
      <header className={s.header}>
        <Link to='/' className={s.logo}>
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
