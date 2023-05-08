import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Workspace from "./components/Workspace/Workspace";
import css from "./App.module.css";
import { useDispatch } from "react-redux";
import { addNewItem, deleteItem, editText, getNotesAll } from "./redux/notesSlice";
import { nanoid } from "nanoid";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const App = () => {
  const [currentNote, setCurrentNote] = useState({});
  const [editMode, setEditMode] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const notesAll = useSelector(getNotesAll);

  const dispatch = useDispatch();

  const currentNoteLength = Object.keys(currentNote).length;

  useEffect(() => {
    if (notesAll.length === 0 || currentNoteLength === 0) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [notesAll.length, currentNoteLength]);

  const addNewNote = () => {
    let date = new Date().toISOString().slice(0, 19);
    const newItem = {
      id: nanoid(),
      date: date,
      text: "as",
    };
    dispatch(addNewItem(newItem));
  };

  const showNote = (id) => {
    const currentEl = notesAll.find((element) => element.id === id);
    setCurrentNote(currentEl);
    setEditMode(false);
  };

  const deleteNote = () => {
    dispatch(deleteItem(currentNote.id));
    setCurrentNote({});
  };

  const enableEdit = () => {
    if (currentNoteLength > 0) {
      setEditMode(true);
    }
  };

  const editNote = (text, id) => {
    dispatch(editText({text, id}))
  }

  return (
    <div className={css.wrapper}>
      <Header
        addNewNote={addNewNote}
        deleteNote={deleteNote}
        enableEdit={enableEdit}
        disabled={disabled}
      />
      <div className={css.mainContainer}>
        <Sidebar notesAll={notesAll} showNote={showNote} />
        <Workspace currentNote={currentNote} editMode={editMode} editNote={editNote}/>
      </div>
    </div>
  );
};

export default App;
