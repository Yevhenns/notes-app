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
import { useMediaQuery } from "react-responsive";
import { Box } from "@mui/material";
import SearchBox from "./components/SearchBox/SearchBox ";

const App = () => {
  const [currentNote, setCurrentNote] = useState({});
  const [editMode, setEditMode] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [currentText, setCurrentText] = useState("");
  const [filterValue, setFilterValue] = useState("");
  const [menu, setMenu] = useState(false);

  const notesAll = useSelector(getNotesAll);

  const dispatch = useDispatch();

  const currentNoteLength = Object.keys(currentNote).length;
  const currentNoteId = currentNote.id;

  const beforeTablet = useMediaQuery({ query: "(max-width: 479px)" });
  const tablet = useMediaQuery({ query: "(min-width: 480px)" });

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
    setMenu(false);
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
    setFilterValue(searchText.toLowerCase());
  };

  const toggleMenu = () => setMenu((value) => !value);
  const closeMenu = () => setMenu(false);

  const value = {
    addNewNote,
    deleteNote,
    enableEdit,
    disabled,
    searchByName,
  };

  return (
    <Context.Provider value={value}>
      <div className={css.wrapper}>
        <Header toggleMenu={toggleMenu} closeMenu={closeMenu} menu={menu} />
        <div className={css.mainContainer}>
          {menu && beforeTablet && (
            <Box
              sx={{
                height: "100vh",
                padding: "20px",
                textAlign: "center",
              }}
            >
              <SearchBox />
              <Sidebar
                notesAll={notesAll}
                showNote={showNote}
                filterValue={filterValue}
              />
            </Box>
          )}
          {tablet && (
            <Sidebar
              notesAll={notesAll}
              showNote={showNote}
              filterValue={filterValue}
            />
          )}
          {tablet && (
            <Workspace
              currentNote={currentNote}
              editMode={editMode}
              getText={getText}
              currentNoteLength={currentNoteLength}
            />
          )}
        </div>
      </div>
    </Context.Provider>
  );
};

export default App;
