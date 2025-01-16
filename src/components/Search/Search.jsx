import { useEffect, useRef, useState } from 'react';
import { Field, Form, Formik } from 'formik';
import searchImg from '@/assets/images/search.svg';
import s from './Search.module.scss';

function Search() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const modalEl = useRef(null);
  const icon = (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='25'
      height='25'
      viewBox='0 0 16 16'
      fill='#131414'
    >
      <path d='M7.33331 13.8333C3.74665 13.8333 0.833313 10.9199 0.833313 7.33325C0.833313 3.74659 3.74665 0.833252 7.33331 0.833252C10.92 0.833252 13.8333 3.74659 13.8333 7.33325C13.8333 10.9199 10.92 13.8333 7.33331 13.8333ZM7.33331 1.83325C4.29998 1.83325 1.83331 4.29992 1.83331 7.33325C1.83331 10.3666 4.29998 12.8333 7.33331 12.8333C10.3666 12.8333 12.8333 10.3666 12.8333 7.33325C12.8333 4.29992 10.3666 1.83325 7.33331 1.83325Z'></path>
      <path d='M13.44 15.1933C13.3867 15.1933 13.3333 15.1867 13.2867 15.18C12.9733 15.14 12.4067 14.9267 12.0867 13.9733C11.92 13.4733 11.98 12.9733 12.2533 12.5933C12.5267 12.2133 12.9867 12 13.5133 12C14.1933 12 14.7267 12.26 14.9667 12.72C15.2067 13.18 15.14 13.7667 14.76 14.3333C14.2867 15.0467 13.7733 15.1933 13.44 15.1933ZM13.04 13.66C13.1533 14.0067 13.3133 14.18 13.42 14.1933C13.5267 14.2067 13.7267 14.08 13.9333 13.78C14.1267 13.4933 14.14 13.2867 14.0933 13.1933C14.0467 13.1 13.86 13 13.5133 13C13.3067 13 13.1533 13.0667 13.0667 13.18C12.9867 13.2933 12.9733 13.4667 13.04 13.66Z'></path>
    </svg>
  );

  function openModal() {
    setIsOpen(true);
  }
  const handleSubmit = (values) => {
    console.log('v', values);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClose = (e) => {
      if (!modalEl) {
        return;
      }
      if (!modalEl?.current?.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('click', handleClose, true);
    return () => {
      document.removeEventListener('click', handleClose);
    };
  }, [modalIsOpen]);

  return (
    <>
      <button className={s.search} onClick={openModal}>
        <img src={searchImg} alt='search input' />
      </button>
      {modalIsOpen && (
        <div className={s.modal}>
          <Formik initialValues={{ search: '' }} onSubmit={handleSubmit}>
            <Form ref={modalEl}>
              <Field type='text' name='search' placeholder='search ...' />
              <button type='submit'>{icon}</button>
            </Form>
          </Formik>
        </div>
      )}
    </>
  );
}

export default Search;
