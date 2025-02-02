import { Field } from 'formik';
import cx from 'classnames';

function Input(props) {
  const { name, label, classes, ...restProps } = props;
  return (
    <Field name={name}>
      {({ field, form: { touched, errors }, meta }) => {
        const classInput = cx(classes.input, {
          [classes.valid]: !meta.error && meta.touched,
          [classes.inValid]: meta.error && meta.touched,
        });
        return (
          <label className={classes.label}>
            <span>{label}</span>
            <input className={classInput} {...restProps} {...field} />
            {meta.error && meta.touched && (
              <span className={classes.error}>{meta.error}</span>
            )}
          </label>
        );
      }}
    </Field>
  );
}

export default Input;
