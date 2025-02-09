import Container from '@/components/Container/Container';
import boxImg from '@/assets/images/people2.jpg';
import s from './SubscribeForm.module.scss';

const SubscribeForm = () => {
  return (
    <div className={s.container} style={{ backgroundImage: `url(${boxImg})` }}>
      <Container className={s.wrap}>
        <p className={s.text}>
          Зареєструйтеся зараз, щоб отримувати сповіщення про спеціальні
          пропозиції!
        </p>
        <form className={s.inner}>
          <input type='email' required />
          <button className={s['btn-subscribe']}>Підписатись</button>
        </form>
      </Container>
    </div>
  );
};

export default SubscribeForm;
