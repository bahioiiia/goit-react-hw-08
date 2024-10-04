import { Formik, Form, Field } from "formik";
import css from "./LoginForm.module.css";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";

export default function LoginForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(logIn(values));
    actions.resetForm();
  };
  return (
    <Formik initialValues={{ email: "", password: "" }} onSubmit={handleSubmit}>
      <Form className={css.formContainer}>
        <div className={css.formWrap}>
          <label className={css.label}>Email</label>
          <Field name="email" type="email" className={css.input} />
        </div>    
        <div className={css.formWrap}>
          <label className={css.label}>Password</label>
          <Field name="password" type="password" className={css.input} />
        </div>

        <button className={css.btn} type="submit">
          Log In
        </button>
      </Form>
    </Formik>
  );
}
