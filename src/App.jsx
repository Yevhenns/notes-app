import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Workspace from "./components/Workspace/Workspace";
import css from "./App.module.css";
import { useDispatch } from "react-redux";
import { addNewItem, deleteItem, getNotesAll } from "./redux/notesSlice";
import { nanoid } from "nanoid";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const App = () => {
  const [currentNote, setCurrentNote] = useState({});
  const [editMode, setEditMode] = useState(false);
  const [disaled, setDisabled] = useState(false);

  const notesAll = useSelector(getNotesAll);

  const dispatch = useDispatch();

  useEffect(() => {
    if (notesAll.length === 0) {
      setDisabled(true);
    }
    if (notesAll.length > 0) {
      setDisabled(false);
    }
  }, [notesAll.length]);

  const addNewNote = () => {
    const newItem = {
      id: nanoid(),
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
  };

  const enableEdit = () => {
    if (Object.keys(currentNote).length > 0) {
      setEditMode(true);
    }
  };

  return (
    <div className={css.wrapper}>
      <Header
        addNewNote={addNewNote}
        deleteNote={deleteNote}
        enableEdit={enableEdit}
        disaled={disaled}
      />
      <div className={css.mainContainer}>
        <Sidebar notesAll={notesAll} showNote={showNote} />
        <Workspace currentNote={currentNote} editMode={editMode} />
      </div>
    </div>
  );
};

export default App;
