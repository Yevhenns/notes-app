import { useContext } from "react";
import Context from "../../Context";
import { AiOutlinePlus } from "react-icons/ai";
import { RiDeleteBin4Line } from "react-icons/ri";
import { BiEdit } from "react-icons/bi";
import css from "./HeaderButtonSet.module.css";

const HeaderButtonSet = () => {
  const value = useContext(Context);
  const { addNewNote, deleteNote, enableEdit, disabled } = value;

  return (
    <div className={css.buttonSet}>
      <button type="button" className={css.button} onClick={addNewNote}>
        <AiOutlinePlus />
      </button>
      <button
        type="button"
        className={css.button}
        onClick={deleteNote}
        disabled={disabled}
      >
        <RiDeleteBin4Line />
      </button>
      <button
        type="button"
        className={css.button}
        onClick={enableEdit}
        disabled={disabled}
      >
        <BiEdit />
      </button>
    </div>
  );
};

export default HeaderButtonSet;
