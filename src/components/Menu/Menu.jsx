import { useEffect, useRef, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import clsx from 'classnames';
import s from './Menu.module.scss';
import bannerImg from '@/assets/images/banner.jpg';
import LinkArrow from '@/ui/LinkArrow/LinkArrow';

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
          <NavLink to='/catalog' className={({isActive}) => (clsx(isActive ? 'active' : '', s.catalog))}>
            Catalog
          </NavLink>
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
                  <LinkArrow
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
          <NavLink to='/about' className={({isActive}) => isActive ? 'active' : ''}>About</NavLink>
        </li>
        <li className={s['item-menu']}>
          <NavLink to='/faq' className={({isActive}) => isActive ? 'active' : ''}>FAQ</NavLink>
        </li>
        <li className={s['item-menu']}>
          <NavLink to='/location' className={({isActive}) => isActive ? 'active' : ''}>Location</NavLink>
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
          <Link to={`/${item}`}>{item}</Link>
        </li>
      ))}
    </ul>
  )
};
