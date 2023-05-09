import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Workspace from "./components/Workspace/Workspace";
import css from "./App.module.scss";
import { useDispatch } from "react-redux";
import {
  addNewItem,
  deleteItem,
  editText,
  getNotesAll,
} from "./redux/notesSlice";
import { nanoid } from "nanoid";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Context from "./Context";

const App = () => {
  const [currentNote, setCurrentNote] = useState({});
  const [editMode, setEditMode] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [currentText, setCurrentText] = useState("");
  const [filterValue, setFilterValue] = useState("");

  const notesAll = useSelector(getNotesAll);

  const dispatch = useDispatch();

  const currentNoteLength = Object.keys(currentNote).length;
  const currentNoteId = currentNote.id;

  useEffect(() => {
    if (notesAll.length === 0 || currentNoteLength === 0) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [notesAll.length, currentNoteLength]);

  useEffect(() => {
    if (currentNoteId && currentText) {
      const id = currentNoteId;
      const text = currentText;
      dispatch(editText({ text, id }));
    }
  }, [currentNoteId, currentText, dispatch]);

  const addNewNote = () => {
    let date = new Date().toISOString().slice(0, 19);
    const newItem = {
      id: nanoid(),
      date: date,
      text: "",
    };
    dispatch(addNewItem(newItem));
    setCurrentText("");
  };

  const showNote = (id) => {
    const currentEl = notesAll.find((element) => element.id === id);
    setCurrentNote(currentEl);
    setEditMode(false);
    setCurrentText("");
  };

  const deleteNote = () => {
    dispatch(deleteItem(currentNoteId));
    setCurrentNote({});
  };

  const enableEdit = () => {
    if (currentNoteLength > 0) {
      setEditMode(true);
    }
  };

  const getText = (text) => {
    setCurrentText(text);
  };

  const searchByName = (searchText) => {
    setFilterValue(searchText.toLowerCase())
  }

  const value = {
    addNewNote,
    deleteNote,
    enableEdit,
    disabled,
    searchByName
  };

  return (
    <Context.Provider value={value}>
      <div className={css.wrapper}>
        <Header />
        <div className={css.mainContainer}>
          <Sidebar notesAll={notesAll} showNote={showNote} filterValue={filterValue}/>
          <Workspace
            currentNote={currentNote}
            editMode={editMode}
            getText={getText}
            currentNoteLength={currentNoteLength}          
          />
        </div>
      </div>
    </Context.Provider>
  );
};

export default App;
