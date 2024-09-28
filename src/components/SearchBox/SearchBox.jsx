import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectNameFilter } from "../../redux/filtersSlice";
import { changeFilter } from "../../redux/filtersSlice";

export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  function handleChange(evt) {
    dispatch(changeFilter(evt.target.value));
  }

  return (
    <div className={css.container}>
      <label htmlFor="name">Find contacts by name</label>
      <input
        className={css.searchInput}
        value={filter}
        onChange={handleChange}
        type="text"
        id="name"
      />
    </div>
  );
}