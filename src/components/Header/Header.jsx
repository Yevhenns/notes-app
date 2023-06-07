import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useContext } from "react";
import Context from "../../Context";
import HeaderButtonSet from "../HeaderButtonSet/HeaderButtonSet";
import SearchBox from "../SearchBox/SearchBox ";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import css from "./Header.module.scss";

const Header = () => {
  const value = useContext(Context);
  const { burgerMenu, editMode, currentText, currentNoteLength } = value;

  const [menu, setMenu] = useState(false);

  const beforeTablet = useMediaQuery({ query: "(max-width: 479px)" });
  const tablet = useMediaQuery({ query: "(min-width: 480px)" });

  useEffect(() => {
    if (tablet) setMenu(false);
  }, [tablet]);

  useEffect(() => {
    burgerMenu(menu);
  }, [burgerMenu, menu]);

  useEffect(() => {
    if (editMode) {
      setMenu(true);
    }
  }, [editMode]);

  useEffect(() => {
    if (currentText === null || currentNoteLength === 0) {
      setMenu(false);
    }
  }, [currentNoteLength, currentText]);

  const toggleMenu = () => setMenu((value) => !value);

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
