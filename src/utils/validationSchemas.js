import * as yup from 'yup';

export const schemaСheckoutCard = yup.object({
  firstName: yup.string().min(1).required('Обовʼязкове для заповнення'),
  lastName: yup.string().min(1).required('Обовʼязкове для заповнення'),
  tel: yup
    .string()
    .matches(/^380\d{9}$/, 'Введіть номер у форматі 380')
    .required('Обовʼязкове для заповнення'),
  delivery_new_post: yup
    .string()
    .required()
    .oneOf(
      ['Самовивіз', 'Доставка Новою Поштою', "Кур'єрська доставка"],
      'Оберіть метод доставки'
    ),
  payment: yup
    .string()
    .required()
    .oneOf(['Онлайн оплата', 'Післяплата'], 'Оберіть метод оплати'),
  city: yup.string().required('Виберіть із списку'),
  shipping_address: yup
    .string()
    .required('Оберіть метод доставки'),
});
