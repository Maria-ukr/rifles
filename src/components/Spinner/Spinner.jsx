import Container from '@/ui/Container/Container';
import s from './Spinner.module.scss';

function Spinner() {
  return (
    <Container className={s.container}>
      <div className={s.loader}></div>
    </Container>
  );
}

export default Spinner;
