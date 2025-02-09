import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  removeProduct,
  countTotalPrice,
  setQuantity,
} from '@/store/slices/cartSlice';
import s from './InputControl.module.scss';

const InputControl = ({ item }) => {

  const dispatch = useDispatch();
  const [count, setCount] = useState(item.quantity);

  const plus = () => {
    const newCount = count + 1;
    setCount(newCount);
    dispatch(setQuantity({ quantity: newCount, id: item.id }));
    dispatch(countTotalPrice());
  };

  const minus = () => {
    if (count <= 1) {
      return dispatch(removeProduct(item.id));
    }
    const newCount = count - 1;
    setCount(newCount);
    dispatch(setQuantity({ quantity: newCount, id: item.id }));
    dispatch(countTotalPrice());
  };

  return (
    <div className={s['product-quantity']}>
      <p className={s.minus} onClick={minus}>
        -
      </p>
      <p>{count}</p>
      <p className={s.plus} onClick={plus}>
        +
      </p>
    </div>
  );
};

export default InputControl;
