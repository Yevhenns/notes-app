import { useContext } from "react";
import Context from "../../Context";
import ListItem from "../ListItem/ListItem";
import css from "./Sidebar.module.scss";

const Sidebar = () => {
  const value = useContext(Context);
  const { notesAll, showNote, filterValue } = value;

  const filteredArray = notesAll.filter((item) =>
    item.text.toLowerCase().includes(filterValue)
  );

  return (
    <div className={css.sidebar}>
      <ul className={css.sidebarList}>
        {filteredArray.map(({ id, text, date }) => {
          return (
            <ListItem
              key={id}
              id={id}
              text={text}
              showNote={showNote}
              date={date}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
