import { Link } from 'react-router-dom';
import Logo from '@/components/Logo/Logo';
import Container from '@/ui/Container/Container';
import s from './Footer.module.scss';
import freeDeliverImg from '@/assets/images/free-deliver.svg';
import securePaymentImg from '@/assets/images/secure-payment.svg';
import refundedImg from '@/assets/images/refunded.svg';
import phoneImg from '@/assets/images/phone.svg';
import pinImg from '@/assets/images/pin.svg';
import emailImg from '@/assets/images/email.svg';
import facebookImg from '@/assets/images/facebook.svg';
import instagramImg from '@/assets/images/instagram.svg';
import telegramImg from '@/assets/images/telegram.svg';

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={s.footer}>
      <Container className={s.advantage}>
        <div className={s.box}>
          <img src={freeDeliverImg} alt='Безкоштовна доставка від 5000 грн.' />
          <div>
            <p className={s.title}>Безкоштовна доставка</p>
            <p>Замовлень від 5000 грн</p>
          </div>
        </div>
        <div className={s.box}>
          <img src={refundedImg} alt='Обмін або повернення' />
          <div>
            <p className={s.title}>Обмін або повернення</p>
            <p>Якщо з товаром щось не так - безкоштовне повернення</p>
          </div>
        </div>
        <div className={s.box}>
          <img src={securePaymentImg} alt='100% безпечні платежі' />
          <div>
            <p className={s.title}>Безпечна оплата</p>
            <p>100% безпечні платежі + Ми повертаємо кешбек</p>
          </div>
        </div>
      </Container>
      <div className={s.wrap}>
        <Container className={s.middle}>
          <div className={s.logo}>
            <Logo />
          </div>
          <div className={s.column}>
            <p className={s.title}>МЕНЮ</p>
            <ul className={s['menu-list']}>
              <li className={s['item-menu']}>
                <Link to='/'>Головна</Link>
              </li>
              <li className={s['item-menu']}>
                <Link to='/catalog'>Каталог</Link>
              </li>
              <li className={s['item-menu']}>
                <Link to='/about'>Про компанію</Link>
              </li>
              <li className={s['item-menu']}>
                <Link to='/location'>Контакти</Link>
              </li>
            </ul>
          </div>
          <div className={s.column}>
            <p className={s.title}>ІНФОРМАЦІЯ</p>
            <ul className={s['menu-list']}>
              <li className={s['item-menu']}>
                <Link to='/'>Оплата і доставка</Link>
              </li>
              <li className={s['item-menu']}>
                <Link to='/about'>Про компанію</Link>
              </li>
              <li className={s['item-menu']}>
                <Link to='/about'>Питання та відповіді</Link>
              </li>
              <li className={s['item-menu']}>
                <Link to='/location'>Контакти</Link>
              </li>
            </ul>
          </div>
        </Container>
      </div>
      <div className={s.info}>
        <Container className={s.inner}>
          <div className={s.box}>
            <span className={s.wrapimg}>
              <img src={phoneImg} alt='телефон +380900000000' />
            </span>
            <a href='tel:+380900000000' className={s.title}>
              +38 090 000 00 00
            </a>
          </div>
          <div className={s.box}>
            <span className={s.wrapimg}>
              <img
                src={pinImg}
                alt='м. Кременчук, вулиця Захисників України, 13'
              />
            </span>
            <p className={s.title}>
              м. Кременчук, вулиця Захисників України, 13
            </p>
          </div>
          <div className={s.box}>
            <span className={s.wrapimg}>
              <img src={emailImg} alt='info@athena.com' />
            </span>
            <a href='mailto:info@athena.com' className={s.title}>
              info@athena.com
            </a>
          </div>
        </Container>
      </div>
      <div className={s.bottom}>
        <Container className={s.inner}>
          <p>
            &copy; {year} <a href='https://github.com/Maria-ukr' className={s.repo}>Maria-ukr</a>
          </p>
          <div className={s.socials}>
            <Link to='#'>
              <img src={facebookImg} alt='facebook' />
            </Link>
            <Link to='#'>
              <img src={instagramImg} alt='instagram' />
            </Link>
            <Link to='#'>
              <img src={telegramImg} alt='telegramImg' />
            </Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}

export default Footer;
