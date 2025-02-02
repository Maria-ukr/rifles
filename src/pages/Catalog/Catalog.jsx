import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Header from '@/layout/Header/Header';
import Footer from '@/layout/Footer/Footer';
import Container from '@/ui/Container/Container';
import { CONSTANTS } from '@/constants.js';
import ButtonArrow from '@/ui/ButtonArrow/ButtonArrow';
import s from './Catalog.module.scss';
import { addToCart } from '../../store/slices/cartSlice';

function Catalog() {
  const { STATIC_FOLDER } = CONSTANTS;
  const dispatch = useDispatch()
  const { products, error } = useSelector((state) => state.productsList);
  return (
    <>
      <Header />
      <Container className={s.container}>
        <h2 className={s.title}>Shop</h2>
        <ul className={s.wrap}>
          {error && <p>{error}</p>}
          {products &&
            products.map((elem) => (
              <li key={elem.id} className={s.item}>
                <Link to={`${elem.id}`} className={s.link}>
                  <div className={s.image}>
                    <img
                      src={`${STATIC_FOLDER}images/products/${elem.id}.png`}
                      alt={elem.name}
                    />
                  </div>

                  <div className={s.content}>
                    <p className={s.name}>{elem.name}</p>
                    <p className={s.price}>{elem.price} грн</p>
                  </div>
                </Link>
                <ButtonArrow
                  content='До кошика'
                  classNames={s['add-to-cart']}
                  onClick={() => dispatch(addToCart(elem))}
                />
              </li>
            ))}
        </ul>
      </Container>

      <Footer />
    </>
  );
}

export default Catalog;
