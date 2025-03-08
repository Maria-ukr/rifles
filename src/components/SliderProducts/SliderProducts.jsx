import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Mousewheel } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import Container from '@/components/Container/Container';
import { CONSTANTS } from '@/constants.js';
import CategoriesList from 'root/data.json';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/mousewheel';

import s from './SliderProducts.module.scss';

const SliderItem = ({ category }) => {
  const { STATIC_FOLDER } = CONSTANTS;
  return (
    <Link to={`/catalog?category=${category.link}`} className={s.item}>
      <div className={s.icon}>
        <span
          style={{
            backgroundImage: `url(${STATIC_FOLDER}images/categories/${category.link}.svg`,
          }}
        ></span>
      </div>
      <div className={s.name}>
        <p>{category.category}</p>
      </div>
    </Link>
  );
};

function SliderProducts() {
  const { categories } = CategoriesList;
  const navigationNextRef = useRef(null);
  const navigationPrevRef = useRef(null);
  return (
    <>
      <Container className={s.container}>
        <h2 className='title'>Каталог товарів</h2>
        <button ref={navigationPrevRef} className={s.prev}></button>
        <button ref={navigationNextRef} className={s.next}></button>
        <Swiper
          className={s.slider}
          modules={[Navigation, Mousewheel]}
          loop={true}
          navigation={true}
          speed={400}
          mousewheel={true}
          breakpoints={{
            320: {
              slidesPerView: 2,
              // spaceBetween: 10,
            },
            640: {
              slidesPerView: 2,
              // spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              // spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 0,
            },
          }}
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.params.navigation.nextEl = navigationNextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
        >
          {categories.map((el) => (
            <SwiperSlide key={el.id}>
              <SliderItem category={el} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </>
  );
}

export default SliderProducts;
