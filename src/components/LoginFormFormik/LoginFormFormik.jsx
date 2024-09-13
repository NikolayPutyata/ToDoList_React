import { Formik, Form, Field } from 'formik';

const INITIAL_DATA = {
  username: '',
  email: '',
  city: '',
};

const LoginFormFormik = () => {
  const handlerSubmit = (values, options) => {
    options.resetForm();
    console.log(options);
    console.log(values);
  };

  return (
    <Formik initialValues={INITIAL_DATA} onSubmit={handlerSubmit}>
      <Form>
        <label>
          <Field name="username" placeholder="username.." />
        </label>

        <label>
          <Field name="email" placeholder="email.." />
        </label>

        <label>
          <Field name="city" placeholder="city.." />
        </label>
        <button type="submit">Send</button>
      </Form>
    </Formik>
  );
};

export default LoginFormFormik;
