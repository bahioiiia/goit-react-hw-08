import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectNameFilter } from "../../redux/filters/selectors";
import { changeFilter } from "../../redux/filters/slice";

export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  function handleChange(evt) {
    dispatch(changeFilter(evt.target.value));
  }

  return (
    <div className={css.search}>
      <label htmlFor="name">Find contacts by name</label>
      <input value={filter} onChange={handleChange} type="text" id="name" />
    </div>
  );
}
