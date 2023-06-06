import { useContext } from "react";
import Context from "../../Context";
import css from "./Workspace.module.scss";

const Workspace = () => {
  const value = useContext(Context);
  const { currentNote, editMode, getText, currentNoteLength } = value;
  const { text, date } = currentNote;

  const textValue = (e) => {
    getText(e.target.value);
  };

  return (
    <div className={css.wrapper}>
      {currentNoteLength > 0 && (
        <>
          <p>{date}</p>
          {editMode === false && currentNoteLength > 0 ? (
            <p className={css.noteText}>{text}</p>
          ) : (
            <textarea
              className={css.textarea}
              onChange={textValue}
              defaultValue={text}
              placeholder="Your text..."
            />
          )}
        </>
      )}
    </div>
  );
};

export default Workspace;
