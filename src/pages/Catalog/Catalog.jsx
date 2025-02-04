import { Link, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import Container from '@/components/Container/Container';
import { CONSTANTS } from '@/constants.js';
import ButtonArrow from '@/components/ButtonArrow/ButtonArrow';
import s from './Catalog.module.scss';
import { addToCart } from '../../store/slices/cartSlice';
import { getProducts } from '../../store/slices/productsSlice';

function Catalog() {
  const { STATIC_FOLDER } = CONSTANTS;
  const dispatch = useDispatch();
  const { products, error } = useSelector((state) => state.productsList);
  const options = [
    { value: 'price', label: 'Сортувати за ціною: від нижчої до вищої' },
    { value: 'price-desc', label: 'Сортувати за ціною: від вищої до нижчої' },
    { value: 'popularity', label: 'Сортувати за популярністю' },
  ];
  const [productsSort, setProductsList] = useState(products);
  console.log('products', productsSort);
  const [selected, setSelected] = useState(null);
  // const [searchParams] = useSearchParams();
  // console.log('query', searchParams);
  useEffect(() => {
    dispatch(getProducts(selected));
  }, [selected]);
  useEffect(() => {
    setProductsList(products);
  }, [products]);
  const customStyles = {
    menu: (provided, state) => ({
      ...provided,
      color: '#777777',
    }),
    control: (provided, state) => ({
      ...provided,
      backgroundColor: '#ffffff',
      color: '#777777',
      padding: '7px 4px',
      borderRadius: '8px',
      borderColor: state.isFocused ? 'grey' : '#222222',
      '&:hover': {
        borderColor: '#222222',
      },
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: '#ffffff',
      color: '#777777',
      padding: '15px 0',
      '&:hover': {
        backgroundColor: '#777',
        color: '#f0f0f0',
      },
    }),
    singleValue: (provided, state) => ({
      ...provided,
      backgroundColor: 'transparent',
      color: '#222222',
      fontSize: '1rem',
    }),
    dropdownIndicator: (provided, state) => ({
      ...provided,
      color: '#222222',
      '&:hover': {
        color: '#777777',
      },
    }),
    indicatorSeparator: (provided, state) => ({
      ...provided,
      backgroundColor: 'white',
      '&:hover': {
        backgroundColor: 'red',
        color: '#222222',
      },
    }),
  };
  return (
    <>
      <Header />
      <Container className={s.container}>
        <h2 className={s.title}>Shop</h2>
        <Select
          options={options}
          defaultValue={options[1]}
          onChange={(selected) => setSelected(selected.value)}
          className={s.select}
          styles={customStyles}
        />
        <ul className={s.wrap}>
          {error && <p>{error}</p>}
          {productsSort &&
            productsSort.map((elem) => (
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