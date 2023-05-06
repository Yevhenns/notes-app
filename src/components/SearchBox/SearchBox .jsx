import css from "./SearchBox.module.css";

const SearchBox = () => {
  return (
    <>      
      <input
        className={css.input}
        placeholder="Search"
      ></input>
    </>
  );
};

export default SearchBox;
