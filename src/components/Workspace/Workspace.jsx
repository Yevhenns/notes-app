import css from "./Workspace.module.css";

const Workspace = ({ currentNote, editMode }) => {
  const { id, text } = currentNote;

  return (
    <div className={css.wrapper}>
      <p>{id}</p>
      {editMode === false ? (
        <p>{text}</p>
      ) : (
        <textarea className={css.textarea} defaultValue={text}></textarea>
      )}
    </div>
  );
};

export default Workspace;
