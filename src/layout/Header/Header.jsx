import { Link } from 'react-router-dom';
import s from './Header.module.scss';

function Header() {
  return (
    <nav>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/catalog'>Catalog</Link>
        </li>
        <li>
          <Link to='/catalog/55'>product 55</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/faq'>FAQ</Link>
        </li>
        <li>
          <Link to='/location'>Location</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
