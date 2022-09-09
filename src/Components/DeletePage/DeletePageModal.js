import Modal from "../UI/Modal/Modal";
import classes from "./DeletePageModal.module.css";
import { ImCross } from "react-icons/im"


const DeletePageModal = (props) => {
  return (
    <Modal onClick={props.onClick}>
        <p className={classes.p}> Deleted successfully </p>
        <ImCross className={classes.icon}  onClick={props.onClick}/>
    </Modal>
  );
};
export default DeletePageModal;