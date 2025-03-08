import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { CONSTANTS } from '@/constants.js';
import InputControl from '@/components/InputControl/InputControl.jsx';
import { removeProduct } from '@/store/slices/cartSlice';
import s from './Orders.module.scss';

const Item = (props) => {
  const { item } = props;
  const { STATIC_FOLDER } = CONSTANTS;
  const dispatch = useDispatch();
  const [price, setPrice] = useState(item.price);

  useEffect(() => {
    setPrice(Number(item.price) * Number(item.quantity));
  }, [item.quantity]);

  return (
    <>
      <div className={s['product-card']}>
        <div className={s.cover}>
          <img
            src={`${STATIC_FOLDER}images/products/${item.id}.png`}
            alt={item.name}
          />
        </div>
        <div className={s.details}>
          <p className={s.title}>{item.name}</p>
          {item.price && <p className={s.price}>{item.price} грн.</p>}
        </div>
        <div className={s.actions}>
          <InputControl item={item} />
          <p className={s.price}>{price} грн</p>
          <button
            className={s.remove}
            onClick={() => dispatch(removeProduct(item.id))}
          >
            ×
          </button>
        </div>
      </div>
    </>
  );
};

export default Item;
