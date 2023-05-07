import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Workspace from "./components/Workspace/Workspace";
import css from "./App.module.css";
import { useDispatch } from "react-redux";
import { addNewItem, getNotesAll } from "./redux/notesSlice";
import { nanoid } from "nanoid";
import { useSelector } from "react-redux";
import { useState } from "react";

const App = () => {
  const [currentNote, setCurrentNote] = useState(null);
  console.log(currentNote);
  const notesAll = useSelector(getNotesAll);
  const dispatch = useDispatch();

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
  };

  return (
    <div className={css.wrapper}>
      <Header addNewNote={addNewNote} />
      <div className={css.mainContainer}>
        <Sidebar notesAll={notesAll} showNote={showNote} />
        <Workspace />
      </div>
    </div>
  );
};

export default App;
