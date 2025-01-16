import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import s from './Menu.module.scss';
import bannerImg from '@/assets/images/banner.jpg';
import ButtonArrow from '../../ui/ButtonArrow/ButtonArrow';

function Menu() {
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
                <div>
                  <p className={s.title}>Handguns</p>
                  <ul>
                    <li>
                      <Link>Ammunition</Link>
                    </li>
                    <li>
                      <Link>Assault rifles</Link>
                    </li>
                    <li>
                      <Link>Explosives</Link>
                    </li>
                    <li>
                      <Link>Handguns</Link>
                    </li>
                    <li>
                      <Link>Knives</Link>
                    </li>
                    <li>
                      <Link>Miscellaneous</Link>
                    </li>
                    <li>
                      <Link>Non-lethal Weapons</Link>
                    </li>
                    <li>
                      <Link>Rifles</Link>
                    </li>
                    <li>
                      <Link>Shotguns</Link>
                    </li>
                    <li>
                      <Link>Submachine guns</Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <p className={s.title}>Rifles</p>
                  <ul>
                    <li>
                      <Link>Ammunition</Link>
                    </li>
                    <li>
                      <Link>Assault rifles</Link>
                    </li>
                    <li>
                      <Link>Explosives</Link>
                    </li>
                    <li>
                      <Link>Handguns</Link>
                    </li>
                    <li>
                      <Link>Knives</Link>
                    </li>
                    <li>
                      <Link>Miscellaneous</Link>
                    </li>
                    <li>
                      <Link>Non-lethal Weapons</Link>
                    </li>
                    <li>
                      <Link>Rifles</Link>
                    </li>
                    <li>
                      <Link>Shotguns</Link>
                    </li>
                    <li>
                      <Link>Submachine guns</Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <p className={s.title}>Shotguns</p>
                  <ul>
                    <li>
                      <Link>Ammunition</Link>
                    </li>
                    <li>
                      <Link>Assault rifles</Link>
                    </li>
                    <li>
                      <Link>Explosives</Link>
                    </li>
                    <li>
                      <Link>Handguns</Link>
                    </li>
                    <li>
                      <Link>Knives</Link>
                    </li>
                    <li>
                      <Link>Miscellaneous</Link>
                    </li>
                    <li>
                      <Link>Non-lethal Weapons</Link>
                    </li>
                    <li>
                      <Link>Rifles</Link>
                    </li>
                    <li>
                      <Link>Shotguns</Link>
                    </li>
                    <li>
                      <Link>Submachine guns</Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <p className={s.title}>Ammunition</p>
                  <ul>
                    <li>
                      <Link>Ammunition</Link>
                    </li>
                    <li>
                      <Link>Assault rifles</Link>
                    </li>
                    <li>
                      <Link>Explosives</Link>
                    </li>
                    <li>
                      <Link>Handguns</Link>
                    </li>
                    <li>
                      <Link>Knives</Link>
                    </li>
                    <li>
                      <Link>Miscellaneous</Link>
                    </li>
                    <li>
                      <Link>Non-lethal Weapons</Link>
                    </li>
                    <li>
                      <Link>Rifles</Link>
                    </li>
                    <li>
                      <Link>Shotguns</Link>
                    </li>
                    <li>
                      <Link>Submachine guns</Link>
                    </li>
                  </ul>
                </div>
                <div
                  style={{ backgroundImage: `url(${bannerImg})` }}
                  className={s.banner}
                >
                  <p className={s.slogan}>Feel the Power of Melee Might</p>
                  <ButtonArrow
                    content='Go to collection'
                    linkTo='/catalog'
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
