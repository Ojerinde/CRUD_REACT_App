import Modal from "../UI/Modal/Modal";
import classes from "./CreatePageModal.module.css";
import { ImCross } from "react-icons/im"


const CreatePageModal = (props) => {
  return (
    <Modal>
        <p className={classes.p}> Created successfully </p>
        <ImCross className={classes.icon}  onClick={props.onClick}/>
    </Modal>
  );
};
export default CreatePageModal;
