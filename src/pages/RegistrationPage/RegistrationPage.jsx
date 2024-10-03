import DocumentTitle from '../../components/DocumentTitle';
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import css from "./RegistrationPage.module.css";

export default function RegisterPage() {
  return (
    <div>
      <DocumentTitle>Registration</DocumentTitle>
      <p className={css.text}>Register your account</p>
      <RegistrationForm />
    </div>
  );
}
