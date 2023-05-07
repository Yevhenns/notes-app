import HeaderButtonSet from "../HeaderButtonSet/HeaderButtonSet";
import SearchBox from "../SearchBox/SearchBox ";
import css from "./Header.module.css";

const Header = ({ addNewNote }) => {
  return (
    <header className={css.header}>
      <HeaderButtonSet addNewNote={addNewNote} />
      <SearchBox />
    </header>
  );
};

export default Header;
