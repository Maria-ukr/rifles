import cx from 'classnames';
import s from './Container.module.scss';

function Container({ children, className }) {
  return <div className={cx(s.container, className)}>{children}</div>;
}

export default Container;
