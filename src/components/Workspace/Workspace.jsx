import { useState } from "react";
import css from "./Workspace.module.css";

const Workspace = ({ currentNote, editMode, editNote }) => {
  const { text, date, id } = currentNote;
  const [currentText, setCurrentText] = useState({text});

  const a = e => {
    setCurrentText(e.target.value); 
  }
  editNote(currentText, id)
  
  return (
    <div className={css.wrapper}>
      <p>{date}</p>
      {editMode === false ? (
        <p>{text}</p>
      ) : (
        <textarea className={css.textarea} defaultValue={text} onChange={a}></textarea>
      )}
    </div>
  );
};

export default Workspace;
