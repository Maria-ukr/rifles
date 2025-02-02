import cx from 'classnames';
import s from './ButtonArrow.module.scss';
import rightArrow from '@/assets/images/rightArrow.svg';

function ButtonArrow({ content, classNames, ...rest }) {
  return (
    <button className={cx(s.btn, classNames)} {...rest}>
      <span>{content}</span>
      <img className={s.icon} src={rightArrow} />
    </button>
  );
}

export default ButtonArrow;
