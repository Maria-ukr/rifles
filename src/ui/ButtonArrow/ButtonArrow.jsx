import cx from 'classnames';
import { Link } from 'react-router-dom';
import s from './ButtonArrow.module.scss';
import rightArrow from '@/assets/images/rightArrow.svg';

function ButtonArrow({ content, linkTo, classNames, ...rest }) {
  return (
    <Link to={linkTo} className={cx(s.btn, classNames)} {...rest}>
      <span>{content}</span>
      <img className={s.icon} src={rightArrow} />
    </Link>
  );
}

export default ButtonArrow;
