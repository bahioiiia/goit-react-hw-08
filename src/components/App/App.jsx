import css from "./App.module.css";
import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContact } from "../../redux/contactsOps";
import { selectIsLoading, selectError } from "../../redux/contactsSlice";
import Loader from "../Loader/Loader";

export default function App() {
//
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContact());
  }, [dispatch]);
//

  return (
    <section className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      {isLoading && !error && <Loader />}
      <SearchBox />
      <ContactList />
    </section>
  );
}
