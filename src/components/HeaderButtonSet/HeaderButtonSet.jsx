import { AiOutlinePlus } from "react-icons/ai";
import { RiDeleteBin4Line } from "react-icons/ri";
import { BiEdit } from "react-icons/bi";
import css from "./HeaderButtonSet.module.css";

const HeaderButtonSet = ({ addNewNote }) => {
  return (
    <div className={css.buttonSet}>
      <button type="button" className={css.button} onClick={addNewNote}>
        <AiOutlinePlus />
      </button>
      <button type="button" className={css.button}>
        <RiDeleteBin4Line />
      </button>
      <button type="button" className={css.button}>
        <BiEdit />
      </button>
    </div>
  );
};

export default HeaderButtonSet;
