import HeaderButtonSet from "../HeaderButtonSet/HeaderButtonSet";
import SearchBox from "../SearchBox/SearchBox ";
import css from "./Header.module.css";

const Header = ({ addNewNote, deleteNote, enableEdit, disaled }) => {
  return (
    <header className={css.header}>
      <HeaderButtonSet
        addNewNote={addNewNote}
        deleteNote={deleteNote}
        enableEdit={enableEdit}
        disaled={disaled}
      />
      <SearchBox />
    </header>
  );
};

export default Header;
