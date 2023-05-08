import css from "./ListItem.module.css";

const ListItem = ({ id, text, date, showNote }) => {
  return (
    <li className={css.listItem} onClick={() => showNote(id)}>
      <p>{date}</p>
      <p>{text}</p>
    </li>
  );
};

export default ListItem;
