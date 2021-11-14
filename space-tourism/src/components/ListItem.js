const ListItem = ({ title, onToggle }) => {
  return (
    <li>
      <p style={{ cursor: "pointer" }} className="nav__item" onClick={onToggle}>
        {title}
      </p>
    </li>
  );
};

export default ListItem;
