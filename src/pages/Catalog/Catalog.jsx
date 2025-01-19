import { Link, useLoaderData } from 'react-router-dom';
import Header from '@/layout/Header/Header';
import Footer from '@/layout/Footer/Footer';
import Container from '@/ui/Container/Container';
import { CONSTANTS } from '@/CONSTANTS.js';
import ButtonArrow from '@/ui/ButtonArrow/ButtonArrow';
import s from './Catalog.module.scss';

function Catalog() {
  const { STATIC_FOLDER } = CONSTANTS;
  const products = useLoaderData();

  return (
    <>
      <Header />
      <Container className={s.container}>
        <h2 className={s.title}>Shop</h2>
        <ul className={s.wrap}>
          {products.products.map((elem) => (
            <li key={elem.id} className={s.item}>
              <Link to={`/${elem.id}`} className={s.link}>
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
                linkTo='/cart'
                classNames={s['add-to-cart']}
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
