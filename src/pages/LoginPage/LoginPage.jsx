import LoginForm from "../../components/LoginForm/LoginForm";
import css from "./LoginPage.module.css";
import DocumentTitle from '../../components/DocumentTitle';

export default function LoginPage() {
  return (
    <div>
      <DocumentTitle>Login</DocumentTitle>
      <p className={css.text}>Please, log in</p>
      <LoginForm />
    </div>
  );
}
