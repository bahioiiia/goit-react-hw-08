import css from "./ContactForm.module.css";
import * as Yup from "yup";
import { Field, Form, Formik, ErrorMessage } from "formik";
//import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";
//import { addContact } from "../../redux/contactsSlice";
import { addContact } from "../../redux/contactsOps";
import { IoPersonAdd } from "react-icons/io5"

export default function ContactForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));
    actions.resetForm();
  };

  const UserSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .matches(
      /^\d{3}-\d{3}-\d{4}$/,
      "Please enter phone number as ***-***-****"
    )
    .min(12, "Too Short!")
    .max(12, "Too Long!")
    .required("Required"),
  });
  
  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
        id: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={UserSchema}
    >
      <Form className={css.formContainer}>
        <div className={css.formWrap}>
          <label htmlFor="name">Name</label>
          <Field
            className={css.formInput}
            id="name"
            type="text"
            name="name"
          ></Field>
          <ErrorMessage
            className={css.formError}
            name="name"
            component="span"
          />
        </div>
        <div className={css.formWrap}>
          <label htmlFor="number">Number</label>
          <Field
            className={css.formInput}
            id="number"
            type="text"
            name="number"
          ></Field>
          <ErrorMessage
            className={css.formError}
            name="number"
            component="span"
          />
        </div>
        <div className={css.btnWrap}>
          <button className={css.formBtn} type="submit">
            <IoPersonAdd /> Add contact
          </button>
        </div>
      </Form>
    </Formik>
  );
}
