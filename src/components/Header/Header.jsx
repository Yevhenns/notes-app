import HeaderButtonSet from "../HeaderButtonSet/HeaderButtonSet";
import SearchBox from "../SearchBox/SearchBox ";
import css from "./Header.module.scss";

const Header = () => {
  return (
    <header className={css.header}>
      <HeaderButtonSet />
      <SearchBox />
    </header>
  );
};

export default Header;
