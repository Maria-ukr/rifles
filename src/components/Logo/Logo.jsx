import logoImg from '@/assets/images/logo.png';
import s from './Logo.module.scss';

function Logo() {
  return (
    <div className={s.wrap}>
      <img src={logoImg} alt='logo' />
    </div>
  );
}

export default Logo;
