import ListItem from "../ListItem/ListItem";
import css from "./Sidebar.module.css";

const Sidebar = ({ notesAll, showNote }) => {
  return (
    <div className={css.sidebar}>
      <ul>
        {notesAll.map(({ id, text }) => {
          return <ListItem key={id} id={id} text={text} showNote={showNote} />;
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
