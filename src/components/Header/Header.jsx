import { useMediaQuery } from "react-responsive";
import HeaderButtonSet from "../HeaderButtonSet/HeaderButtonSet";
import SearchBox from "../SearchBox/SearchBox ";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import css from "./Header.module.scss";

const Header = ({ toggleMenu, closeMenu, menu }) => {
  const beforeTablet = useMediaQuery({ query: "(max-width: 479px)" });
  const tablet = useMediaQuery({ query: "(min-width: 480px)" });

  return (
    <header className={css.header}>
      <HeaderButtonSet />
      {beforeTablet && (
        <IconButton color="inherit" onClick={toggleMenu}>
          {!menu ? (
            <MenuIcon sx={{ fontSize: "40px" }} />
          ) : (
            <CloseIcon sx={{ fontSize: "40px" }} />
          )}
        </IconButton>
      )}      
      {tablet && <SearchBox />}
    </header>
  );
};

export default Header;
