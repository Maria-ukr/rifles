import { useSelector } from 'react-redux';
import cartImg from '@/assets/images/cart.svg';
import s from './Cart.module.scss';

function Cart() {
  const cart = useSelector((state) => state.cartList.cart);
  return (
    <>
      <div className={s.wrap}>
        <button className={s.cart}>
          <img src={cartImg} alt='cart' />
        </button>
        <span className={s.count}>{cart ? cart.length : '0'}</span>
        <div className={s.popup}>
          <div className={s.inner}>
            <p className={s.title}>My cart</p>
            {cart.length === 0 && <p>No products in the cart.</p>}
            {cart.length > 0 && <p>Products....</p>}
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
