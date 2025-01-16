import { useState } from 'react';
import cartImg from '@/assets/images/cart.svg';
import s from './Cart.module.scss';

function Cart() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className={s.wrap}>
        <button className={s.cart}>
          <img src={cartImg} alt='cart' />
        </button>
        <span className={s.count}>{count}</span>
        <div className={s.popup}>
          <div className={s.inner}>
            <p className={s.title}>My cart</p>
            {count === 0 && <p>No products in the cart.</p>}
            {count > 0 && <p>Products....</p>}
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
