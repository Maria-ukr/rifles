import cx from 'classnames';
import { Link } from 'react-router-dom';
import s from './LinkArrow.module.scss';
import rightArrow from '@/assets/images/rightArrow.svg';

function LinkArrow({ content, linkTo, classNames, ...rest }) {
  return (
    <Link to={linkTo} className={cx(s.btn, classNames)} {...rest}>
      <span>{content}</span>
      <img className={s.icon} src={rightArrow} />
    </Link>
  );
}

export default LinkArrow;
