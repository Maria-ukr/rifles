import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Container from '@/ui/Container/Container';
import { CONSTANTS } from '@/constants.js';
import Item from './Item.jsx';
import SecondStep from './SecondStep.jsx';
import ThirdStep from './ThirdStep.jsx';
import s from './Orders.module.scss';
import iconsReturning from '@/assets/images/icons-returning.svg';
import iconsFreeDeliver from '@/assets/images/icons-free-deliver.svg';
import iconSafety from '@/assets/images/icon-safety.svg';
import emptyCart from '@/assets/images/empty-cart.svg';
import InputControl from '../InputControl/InputControl.jsx';
import { removeProduct } from '../../store/slices/cartSlice.js';

function Orders() {
  const { STATIC_FOLDER } = CONSTANTS;
  const { cart, totalPrice } = useSelector((state) => state.cartList);
  const [step, setStep] = useState(1);
  const dispatch = useDispatch();

  const nextStep = () => {
    setStep((step) => step + 1);
  };

  return (
    <Container className={s.container}>
      <div className={s.wrapper}>
        <div className={s.left}>
          {cart.length === 0 && (
            <div className={s['empty-cart']}>
              <img src={emptyCart} alt='emptyCart' />
              <p>Ваш кошик порожній.</p>
            </div>
          )}
          {step === 1 && (
            <div className={s.first}>
              {cart.length > 0 && cart.map((i) => <Item key={i.id} item={i} />)}
              <Link to='/catalog' className={s['to-catalog']}>
                <span>&#8592;</span>Повернутись в магазин
              </Link>
            </div>
          )}
          {step === 2 && <SecondStep nextStep={nextStep} />}
          {step === 3 && <ThirdStep />}
        </div>
        <div className={s.right}>
          <h3>Замовлення</h3>
          <div className={s['checkout-sidebar']}>
            {step > 1 &&
              cart.map((item) => (
                <div key={item.id} className={s['product-card']}>
                  <div className={s.cover}>
                    <img
                      src={`${STATIC_FOLDER}images/products/${item.id}.png`}
                      alt={item.name}
                    />
                  </div>
                  <Link to={`/catalog/${item.id}`} className={s.details}>
                    <p className={s.title}>{item.name}</p>
                    {item.manufacturer && (
                      <p className={s.manufacturer}>{item.manufacturer}</p>
                    )}
                  </Link>
                  <div className={s.actions}>
                    <InputControl item={item} />
                    <button
                      className={s.remove}
                      onClick={() => dispatch(removeProduct(item.id))}
                    >
                      ×
                    </button>
                  </div>
                </div>
              ))}
            <div className={s['checkout-totals']}>
              <div>
                <p>Сума ({cart.length} позиції)</p>
                <p>{totalPrice || '0'} грн</p>
              </div>
              <div>
                <p>Знижка</p>
                <p>0 грн</p>
              </div>
            </div>
            <div className={s.total}>
              <p>Загальна сума</p>
              <p>{totalPrice || '0'} грн</p>
            </div>
          </div>
          {step === 1 && (
            <button className={s.btn} onClick={() => setStep(2)}>
              Далі
            </button>
          )}
          <p className={s.note}>
            <span>Замітка:</span> Натискаючи «ОПЛАТИТИ», ви погоджуєтеся з
            нашими Умовами обслуговування, Політикою повернення коштів та
            Політикою конфіденційності.
          </p>
          <div className={s.conditions}>
            <div className={s.row}>
              <img src={iconsReturning} alt='icons-returning' />
              <p>ВИ МОЖЕТЕ ПОВЕРНУТИ ЗАМОВЛЕННЯ ПРОТЯГОМ 14 ДНІВ</p>
            </div>
            <div className={s.row}>
              <img src={iconsFreeDeliver} alt='icons-free-deliver' />
              <p>БЕЗКОШТОВНА ДОСТАВКА ДЛЯ ЗАМОВЛЕНЬ НА СУМУ ВІД 2000 ГРН</p>
            </div>
            <div className={s.row}>
              <img src={iconSafety} alt='icon-safety' />
              <p>БЕЗПЕЧНА ОПЛАТА</p>
            </div>
          </div>
        </div>
      </div>
      <div className={s.bottom}>
        <p>БЕЗКОШТОВНА ДОСТАВКА ДЛЯ ЗАМОВЛЕНЬ НА СУМУ ВІД 2000 ГРН</p>
      </div>
    </Container>
  );
}

export default Orders;
