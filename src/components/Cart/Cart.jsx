import { useSelector } from 'react-redux';
import cartImg from '@/assets/images/cart.svg';
import s from './Cart.module.scss';
import { Link } from 'react-router-dom';

function Cart() {
  const cart = useSelector((state) => state.cartList.cart);
  return (
    <>
      <Link to='/checkout' className={s.wrap}>
        <div className={s.cart}>
          <img src={cartImg} alt='cart' />
        </div>
        <span className={s.count}>{cart ? cart.length : '0'}</span>
      </Link>
    </>
  );
}

export default Cart;
