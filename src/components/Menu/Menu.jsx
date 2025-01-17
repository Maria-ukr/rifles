import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import s from './Menu.module.scss';
import bannerImg from '@/assets/images/banner.jpg';
import ButtonArrow from '@/ui/ButtonArrow/ButtonArrow';

function Menu({ categories }) {
  const [show, setShow] = useState(false);
  const refMenu = useRef(null);
  const refBlock = useRef(null);

  useEffect(() => {
    const handleMouse = (e) => {
      if (
        refMenu?.current?.contains(e.target) ||
        refBlock?.current?.contains(e.target)
      ) {
        return setShow(true);
      }
      return setShow(false);
    };
    document.addEventListener('mouseover', handleMouse, true);
    return () => document, removeEventListener('mouseover', handleMouse, true);
  }, [show]);
  return (
    <nav className={s.nav}>
      <ul className={s['menu-list']}>
        <li ref={refMenu} className={s['item-menu']}>
          <Link to='/catalog' className={s.catalog}>
            Catalog
          </Link>
          {show && (
            <div className={s.container}>
              <div className={s.grid} ref={refBlock}>
                {categories.slice(0, 4).map((item) => (
                  <div key={item.id}>
                    <p className={s.title}>{item.category}</p>
                    <SubMenu submenu={item.subcategories} />
                  </div>
                ))}
                <div
                  style={{ backgroundImage: `url(${bannerImg})` }}
                  className={s.banner}
                >
                  <p className={s.slogan}>Feel the Power of Melee Might</p>
                  <ButtonArrow
                    content='Go to collection'
                    linkTo='/catalog/knifes'
                    classNames={s.bannerLink}
                  />
                </div>
              </div>
            </div>
          )}
        </li>
        <li className={s['item-menu']}>
          <Link to='/about'>About</Link>
        </li>
        <li className={s['item-menu']}>
          <Link to='/faq'>FAQ</Link>
        </li>
        <li className={s['item-menu']}>
          <Link to='/location'>Location</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;

const SubMenu = ({ submenu }) => {
  return (
    <ul>
      {submenu.map(item => (
        <li key={item}>
          <Link to={`${item}`}>{item}</Link>
        </li>
      ))}
    </ul>
  )
};
