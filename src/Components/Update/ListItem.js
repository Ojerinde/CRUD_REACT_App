import classes from "./ListItem.module.css";
const ListItem = (props) => {
  return (
    <li className={`${props.className} || ${classes.li}`}>
      {props.children}
    </li>
  );
};
export default ListItem