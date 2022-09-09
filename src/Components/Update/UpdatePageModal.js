import Modal from "../UI/Modal/Modal";
import classes from "./UpdatePageModal.module.css";
import { ImCross } from "react-icons/im"


const UpdatePageModal = (props) => {
  return (
    <Modal onClick={props.onClick}>
        <p className={classes.p}> Updated successfully </p>
        <ImCross className={classes.icon}  onClick={props.onClick}/>
    </Modal>
  );
};
export default UpdatePageModal;