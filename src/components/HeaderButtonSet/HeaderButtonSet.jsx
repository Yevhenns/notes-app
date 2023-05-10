import { useContext } from "react";
import Context from "../../Context";
import { AiOutlinePlus } from "react-icons/ai";
import { RiDeleteBin4Line } from "react-icons/ri";
import { BiEdit } from "react-icons/bi";
import { nanoid } from "nanoid";
import css from "./HeaderButtonSet.module.scss";

const HeaderButtonSet = () => {
  const value = useContext(Context);
  const { addNewNote, deleteNote, enableEdit, disabled } = value;

  const date = new Date().toISOString().slice(0, 19);
  const newItem = {
    id: nanoid(),
    date: date,
    text: "",
  };

  return (
    <div className={css.buttonSet}>
      <button
        type="button"
        className={css.button}
        onClick={() => addNewNote(newItem)}
      >
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
