import css from "./ContactsPage.module.css";
import ContactForm from "../../components/ContactList/ContactForm/ContactForm";
import SearchBox from "../../components/ContactList/SearchBox/SearchBox";
import ContactList from "../../components/ContactList/ContactList/ContactList";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContact } from "../../redux/contacts/operations";
import { selectIsLoading } from "../../redux/contacts/selectors";
import { selectError } from "../../redux/contacts/selectors";
import Loader from "../../components/Loader/Loader";

export default function ContactsPage() {
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
