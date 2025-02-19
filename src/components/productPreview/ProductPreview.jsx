import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import clsx from 'classnames';
import Container from '@/components/Container/Container';
import ButtonArrow from '@/components/ButtonArrow/ButtonArrow';
import { addToCart } from '../../store/slices/cartSlice';
import { setRating } from '../../store/slices/productsSlice';
import { CONSTANTS } from '@/constants.js';
import s from './ProductPreview.module.scss';
import Tick from './Tick';
import Star from './Star';

const ProductPreview = ({ item }) => {
  const dispatch = useDispatch();
  const { STATIC_FOLDER } = CONSTANTS;
  const {
    id,
    name,
    price,
    description,
    country_of_manufacture,
    image,
    rating,
    stock_status,
    ...rest
  } = item;

  const [rate, setRate] = useState(rating);
  const [hover, setHover] = useState(null);
  const [tab, setTab] = useState('desc');

  useEffect(() => {
    dispatch(setRating({ id, rate }));
  }, [rate]);

  return (
    <Container className={s.container}>
      <div className={s.wrap}>
        <div className={s.image}>
          <img src={`${STATIC_FOLDER}images/products/${id}.png`} alt={name} />
        </div>
        <div className={s.content}>
          <p className={s.title}>{name || null}</p>
          <p className={s.manufacture}>{country_of_manufacture || null}</p>
          <div className={s.rating}>
            <p className={s.rate}>
              <Star color='#1A1D23' /> {`${rating}` || null}
            </p>
            <div className={s.estimate}>
              <span>Оцінити</span>
              <div>
                {[...Array(5)].map((star, index) => {
                  const currentRating = index + 1;
                  return (
                    <label key={index}>
                      <input
                        key={star}
                        type='radio'
                        name='rating'
                        value={rate}
                        onChange={() => {
                          setRate(Number(currentRating));
                        }}
                      />
                      <Star
                        className={s.star}
                        style={{
                          fill:
                            currentRating <= (hover || rate)
                              ? '#ffc107'
                              : '#e4e5e9',
                        }}
                        onMouseEnter={() => setHover(currentRating)}
                        onMouseLeave={() => setHover(null)}
                      />
                    </label>
                  );
                })}
              </div>
            </div>
          </div>
          <p className={s.available}>
            {stock_status ? (
              <>
                У наявності <Tick />
              </>
            ) : (
              'Розпродано'
            )}
          </p>
          <p className={s.price}>{`${price || null} грн`}</p>
          <ButtonArrow
            content='До кошика'
            classNames={s['add-to-cart']}
            onClick={() => dispatch(addToCart(item))}
          />
        </div>
      </div>
      <div className={s.bottom}>
        <div className={s.tabs}>
          <div
            className={clsx(tab === 'desc' && s.active, s.tab)}
            onClick={() => setTab('desc')}
          >
            Опис
          </div>
          <div
            className={clsx(tab === 'char' && s.active, s.tab)}
            onClick={() => setTab('char')}
          >
            Характеристики
          </div>
          <div
            className={clsx(tab === 'comment' && s.active, s.tab)}
            onClick={() => setTab('comment')}
          >
            Відгуки
          </div>
        </div>
        <div className={s.text}>
          {tab === 'desc' && (
            <p className={s.description}>{description || null}</p>
          )}
          {tab === 'char' && (
            <div className={s.chars}>
              <p className={s.title}>Характеристики</p>
              <table>
                <tbody className={s.list}>
                  {Object.keys(rest).map((key, index) => {
                    return (
                      <tr key={index}>
                        <td>{key}</td>
                        <td>{rest[key] || null}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
          {tab === 'comment' && <p className={s.comments}>Відгуки</p>}
        </div>
      </div>
    </Container>
  );
};

export default ProductPreview;
