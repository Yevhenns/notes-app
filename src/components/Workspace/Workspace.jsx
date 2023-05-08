import css from "./Workspace.module.css";

const Workspace = ({ currentNote, editMode, getText, currentNoteLength }) => {
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
            <p>{text}</p>
          ) : (
            <textarea
              className={css.textarea}
              onChange={textValue}
              defaultValue={"dsa"}
            ></textarea>
          )}
        </>
      )}
    </div>
  );
};

export default Workspace;
