import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import cartImg from '@/assets/images/cart.svg';
import s from './Cart.module.scss';

function Cart() {
  const cart = useSelector((state) => state.cartList.cart);
  return (
    <>
      <Link to='/checkout' className={s.wrap}>
        <div className={s.cart}>
          <img src={cartImg} alt='cart' />
        </div>
        {cart.length > 0 && <span className={s.count}>{cart.length}</span>}
      </Link>
    </>
  );
}

export default Cart;
