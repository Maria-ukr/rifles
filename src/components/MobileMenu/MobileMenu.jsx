import { useState } from 'react';
import { Link } from 'react-router-dom';
import s from './MobileMenu.module.scss';
import gamburgerImg from '@/assets/images/gamburger.svg';
import closeImg from '@/assets/images/close-btn.svg';
import leftArrowImg from '@/assets/images/left-arrow.svg';
import bannerImg from '@/assets/images/banner.jpg';
import ButtonArrow from '../../ui/ButtonArrow/ButtonArrow';

function MobileMenu() {
  const [show, setShow] = useState(false);
  const handleMenu = () => {
    setShow(!show);
  };
  const [showSubmenu, setShowSubmenu] = useState(false);
  const handleSubmenu = () => {
    setShowSubmenu(!showSubmenu);
  };

  return (
    <>
      <button onClick={handleMenu} className={s.gamburger}>
        <img src={gamburgerImg} alt='mobile menu' />
      </button>
      {show && (
        <nav className={s.nav}>
          <button className={s.close} onClick={handleMenu}>
            <img src={closeImg} alt='close menu' />
          </button>
          <ul className={s['menu-list']}>
            <li className={s['item-menu']} onClick={handleSubmenu}>
              <p className={s.catalog}>Catalog</p>
              {showSubmenu && (
                <div className={s.container}>
                  <div className={s.top}>
                    <p>Catalog</p>
                    <button className={s['left-btn']} onClick={handleSubmenu}>
                      <img src={leftArrowImg} alt='back to main menu' />
                    </button>
                  </div>

                  <div className={s.grid}>
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
      )}
    </>
  );
}

export default MobileMenu;
