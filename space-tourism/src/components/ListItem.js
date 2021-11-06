const ListItem = ({ title, onToggle }) => {
  return (
    <li>
      <p style={{ cursor: "pointer" }} className="nav__link" onClick={onToggle}>
        {title}
      </p>
    </li>
  );
};

export default ListItem;
