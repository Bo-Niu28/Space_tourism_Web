const ListItem = ({ title }) => {
  return (
    <li>
      <p style={{ cursor: "pointer" }} className="nav__text nav__item">
        {title}
      </p>
    </li>
  );
};

export default ListItem;
