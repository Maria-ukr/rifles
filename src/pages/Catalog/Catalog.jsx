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
import {
  getProductsByCategory,
  getProductsBySearch,
} from '../../store/slices/productsSlice';
import CategoriesList from 'root/data.json';

function Catalog() {
  const { categories } = CategoriesList;
  const { STATIC_FOLDER } = CONSTANTS;
  const dispatch = useDispatch();
  const { products, filtered, error } = useSelector((state) => state.productsList);

  const [allProducts, setAllProducts] = useState([]);
  const [selected, setSelected] = useState(null);

  const [searchParam, setSearchParam] = useSearchParams();

  const category = searchParam.get('category');
  const searchText = searchParam.get('search');

  const options = [
    { value: 'price', label: 'Сортувати за ціною: від нижчої до вищої' },
    { value: 'price-desc', label: 'Сортувати за ціною: від вищої до нижчої' },
    { value: 'popularity', label: 'Сортувати за популярністю' },
  ];
  const sortedProducts = (type, products) => {
    if (!products || products.length === 0) return [];
    let sorted = [...products];
    switch (type) {
      case 'price':
        return sorted.sort((a, b) => a.price - b.price);
      case 'price-desc':
        return sorted.sort((a, b) => b.price - a.price);
      case 'popularity':
        return sorted.sort((a, b) => a.rating - b.rating);
      default:
        return sorted;
    }
  };

  useEffect(() => {
    if (category) {
      dispatch(getProductsByCategory(category));
    }
  }, [dispatch, category]);

  useEffect(() => {
    if (searchText) {
      dispatch(getProductsBySearch(searchText));
    }
  }, [dispatch, searchText]);

  useEffect(() => {
    if (allProducts.length > 0 && selected) {
      setAllProducts(sortedProducts(selected, allProducts));
    }
  }, [selected]);

  useEffect(() => {
    if (filtered) setAllProducts(filtered);
  }, [filtered]);

  useEffect(() => {
    setAllProducts([...products]);
  }, []);

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
      padding: '15px',
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

  const handleCategory = (e) => {
    const categoryValue = e.currentTarget.value;
    setSearchParam((prevParams) => ({
      ...prevParams,
      category: categoryValue,
    }));
  };

  return (
    <>
      <Header />
      <Container>
        <div className={s['select-wrap']}>
          <p>Сорування</p>
          <Select
            options={options}
            defaultValue={options[1]}
            onChange={(selected) => setSelected(selected.value)}
            className={s.select}
            styles={customStyles}
          />
        </div>
        <div className={s.container}>
          <div className={s.filters}>
            <p className={s.title}>Фільтри</p>
            <form>
              {categories.map((el) => (
                <label key={el.id} className={s['wrap-input']}>
                  <span>{el.category}</span>
                  <input
                    name='category'
                    type='radio'
                    value={el.link}
                    onChange={handleCategory}
                  />
                </label>
              ))}
            </form>
          </div>
          <div className={s.content}>
            {allProducts.length === 0 && <p>Товарів не знайдено</p>}
            <ul className={s.wrap}>
              {error && <p>{error}</p>}
              {allProducts.length > 0 &&
                allProducts.map((elem) => (
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
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
}

export default Catalog;
