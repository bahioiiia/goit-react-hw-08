import { IoPerson, IoCallSharp } from "react-icons/io5";
import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
//import { deleteContact } from "../../redux/contactsSlice";

import { deleteContact } from "../../redux/contactsOps";

export default function Contact({ contact }) {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(contact.id));

  return (
    <div className={css.contactContainer}>
      <ul>
        <li className={css.contactWraper}>
          <IoPerson />
          {contact.name}
        </li>
        <li className={css.contactWraper}>
          <IoCallSharp />
          {contact.number}
        </li>
      </ul>
      <button className={css.contactBtn} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}
