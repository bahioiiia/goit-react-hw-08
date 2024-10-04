import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";

export default function AuthNav() {
  return (
    <div>
      <NavLink className={css.nav} to="/register">
        Register
      </NavLink>
      <NavLink className={css.nav} to="/login">
        Log In
      </NavLink>
    </div>
  );
}
