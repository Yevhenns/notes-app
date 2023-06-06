import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  addNewItem,
  deleteItem,
  editText,
  getNotesAll,
} from "./redux/notesSlice";
import { useSelector } from "react-redux";
import Context from "./Context";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import css from "./App.module.scss";

type TypeNote = { id: string; text: string; date: string };

const App = () => {
  const [currentNote, setCurrentNote] = useState({} as TypeNote);
  const [editMode, setEditMode] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [currentText, setCurrentText] = useState(null);
  const [filterValue, setFilterValue] = useState("");
  const [menu, setMenu] = useState(false);

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
    if (currentText !== null) {
      const id = currentNoteId;
      const text = currentText;
      dispatch(editText({ text, id }));
    }
  }, [currentNoteId, currentText, dispatch]);

  const burgerMenu = (isMenuOpen) => {
    setMenu(isMenuOpen);
  };

  const addNewNote = (newItem: TypeNote) => {
    dispatch(addNewItem(newItem));
    setCurrentText(null);
  };

  const showNote = (id: string) => {
    const currentEl = notesAll.find((element) => element.id === id);
    setCurrentNote(currentEl);
    setEditMode(false);
    setCurrentText(null);
  };

  const deleteNote = () => {
    dispatch(deleteItem(currentNoteId));
    setCurrentNote({});
  };

  const enableEdit = () => {
    if (currentNoteLength > 0) {
      setEditMode(true);
      setCurrentText(currentNote.text);
    }
  };

  const getText = (text: string) => {
    setCurrentText(text);
  };

  const searchByName = (searchText) => {
    setFilterValue(searchText.toLowerCase());
  };

  const value = {
    currentNote,
    editMode,
    disabled,
    currentText,
    filterValue,
    menu,
    notesAll,
    currentNoteLength,
    burgerMenu,
    addNewNote,
    showNote,
    deleteNote,
    enableEdit,
    getText,
    searchByName,
  };

  return (
    <Context.Provider value={value}>
      <div className={css.wrapper}>
        <Header />
        <Main />
      </div>
    </Context.Provider>
  );
};

export default App;
