import HeaderButtonSet from "../HeaderButtonSet/HeaderButtonSet";
import SearchBox from "../SearchBox/SearchBox ";
import css from "./Header.module.css";

const Header = ({ addNewNote, deleteNote, enableEdit, disabled }) => {
  return (
    <header className={css.header}>
      <HeaderButtonSet
        addNewNote={addNewNote}
        deleteNote={deleteNote}
        enableEdit={enableEdit}
        disabled={disabled}
      />
      <SearchBox />
    </header>
  );
};

export default Header;
