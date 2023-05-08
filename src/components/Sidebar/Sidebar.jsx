import ListItem from "../ListItem/ListItem";
import css from "./Sidebar.module.css";

const Sidebar = ({ notesAll, showNote }) => {  
  return (
    <div className={css.sidebar}>
      <ul className={css.sidebarList}>
        {notesAll.map(({ id, text, date }) => {
          return <ListItem key={id} id={id} text={text} showNote={showNote} date={date}/>;
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
