import { useEffect } from 'react';
import { Form, Formik } from 'formik';
import { schemaСheckoutCard } from '@/utils/validationSchemas.js';
import s from './Orders.module.scss';
import Input from '../Input/Input';

const initialValues = {
  firstName: '',
  lastName: '',
  tel: '',
  delivery_new_post: 'Самовивіз',
  payment: 'Післяплата',
  city: 'Kremenchyk',
  shipping_address: '1',
  comment: '',
};

const SecondStep = () => {
  // const { nextStep } = props;
  const handleSubmit = (values, formikBag) => {
    console.log('handleSubmit >>>> ', values);
    formikBag.resetForm();
  };
  const classes = {
    label: s.label,
    input: s.input,
    error: s.error,
    valid: s.valid,
    inValid: s.inValid,
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schemaСheckoutCard}
    >
      {(formikProps) => (
        <Form className={s.form}>
          <div className={s.customer}>
            <h5>Введіть Ваші персональні дані</h5>
            <div className={s.wrap}>
              <Input
                type='text'
                placeholder='Ім’я'
                name='firstName'
                label='Введіть ім’я *'
                classes={classes}
              />
              <Input
                type='text'
                placeholder='Прізвище'
                name='lastName'
                label='Введіть прізвище *'
                classes={classes}
              />
              <Input
                type='tel'
                placeholder='380'
                name='tel'
                label='Введіть номер телефону *'
                classes={classes}
              />
              <label>
                <span>Місто*</span>
                <select defaultValue='Kremenchyk' name='city'>
                  <option value='Kyiv'>Київ</option>
                  <option value='Lviv'>Львів</option>
                  <option value='Kremenchyk'>Кременчук</option>
                </select>
              </label>
            </div>
          </div>
          <div className={s.shipping}>
            <h5>Оберіть метод доставки</h5>
            <div className={s.radio}>
              <label>
                <input
                  name='delivery_new_post'
                  value='Самовивіз'
                  type='radio'
                />
                <span>Самовивіз</span>
              </label>
              <label>
                <input
                  name='delivery_new_post'
                  value='Доставка Новою Поштою'
                  type='radio'
                />
                <span>Доставка Новою Поштою</span>
              </label>
              <label className={s['shipping_address']}>
                <span>Оберіть відділення*</span>
                <select name='shipping_address'>
                  <option value='1'>Відділення 1</option>
                  <option value='2'>Відділення 2</option>
                  <option value='3'>Відділення 3</option>
                </select>
              </label>
              <label>
                <input
                  name='shipping_address'
                  value="Кур'єрська доставка"
                  type='radio'
                />
                <span>Кур&apos;єрська доставка</span>
              </label>
            </div>
          </div>
          <div className={s.payment}>
            <h5>Оберіть метод оплати</h5>
            <div className={s.radio}>
              <label>
                <input value='Онлайн оплата' type='radio' name='payment' />
                <span>Онлайн оплата</span>
              </label>
              <label>
                <input value='Післяплата' type='radio' name='payment' />
                <span>Післяплата</span>
              </label>
            </div>
          </div>
          <div className={s.textarea}>
            <h5>Залиште коментар (за потреби)</h5>
            <p>Додайте побажання або уточнення до вашого замовлення</p>
            <textarea rows={3} name='comment'></textarea>
          </div>
          <button
            type='submit'
            className={s.submit}
            disabled={
              !formikProps.isValid ||
              !formikProps.dirty ||
              formikProps.isSubmitting
            }
          >
            Підтвердити
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default SecondStep;
