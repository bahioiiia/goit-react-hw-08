import { Formik, Form, Field } from "formik";
import css from "./RegistrationForm.module.css";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";

export default function RegistrationForm() {
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    dispatch(register(values));
  };
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
    >
      <Form className={css.formContainer}>
        <div className={css.formWrap}>
          <label className={css.label}>Password</label>
          <Field name="name" type="name" className={css.input} />
        </div>
        <div className={css.formWrap}>
          <label className={css.label}>Email</label>
          <Field name="email" type="email" className={css.input} />
        </div>    
        <div className={css.formWrap}>
          <label className={css.label}>Password</label>
          <Field name="password" type="password" className={css.input} />
        </div>

        <button className={css.btn} type="submit">
          Register
        </button>
      </Form>
    </Formik>
  );
}
