const ListItem = ({ id, text, showNote }) => {
  return (
    <li onClick={() => showNote(id)}>
      <p>{text}</p>
    </li>
  );
};

export default ListItem;
