import { useContext } from "react";
import Context from "../../Context";
import css from "./SearchBox.module.scss";

const SearchBox = () => {
  const value = useContext(Context);
  const { searchByName } = value;

  const textValue = (e) => {
    searchByName(e.target.value);
  };

  return (
    <input className={css.input} placeholder="Search" onChange={textValue} />
  );
};

export default SearchBox;
