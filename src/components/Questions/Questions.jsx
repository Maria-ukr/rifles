import { useState } from 'react';
import cx from 'classnames';
import Container from '@/components/Container/Container';
import rightArrow from '@/assets/images/rightArrow.svg';
import s from './Questions.module.scss';
import { CONSTANTS } from '@/constants.js';

function Questions() {
  const { QUESTIONS } = CONSTANTS;
  return (
    <>
      <Container>
        <h2 className={s.title}>FAQ</h2>
        <div className={s.wrap}>
          {QUESTIONS.map((q) => (
            <Item key={q.question} que={q.question} ans={q.answer} />
          ))}
        </div>
      </Container>
    </>
  );
}

export default Questions;

const Item = ({ que, ans }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={s.box} onClick={() => setOpen(!open)}>
      <p className={s.question}>
        {que}
        <img
          src={rightArrow}
          alt='rightArrow'
          className={cx({ [s.show]: open })}
        />
      </p>
      <p className={cx(s.answer, { [s.open]: open })}>{ans}</p>
    </div>
  );
};
