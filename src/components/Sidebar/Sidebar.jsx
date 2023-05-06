import ListItem from "../ListItem/ListItem";
import css from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={css.sidebar}>
      <ul>
        <ListItem />
      </ul>
    </div>
  );
};

export default Sidebar;
