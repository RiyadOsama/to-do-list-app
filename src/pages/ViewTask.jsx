import { Link } from "react-router-dom";
import style from "../styles/taskCard.module.css";
import styles from "../styles/form.module.css";
import { IoIosArrowBack, IoMdDoneAll } from "react-icons/io";
import pandaWelcome from "../assets/images/panda/panda-welcome.gif";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

function ViewTask() {
  return (
    <div className="m-5 mb-2">
      <div className={styles.header}>
        <h4>View Task</h4>
        <Link to="/" className={styles.goBack}>
          <IoIosArrowBack size={20} />
          <span>Go Back</span>
        </Link>
      </div>
      <br /> <br />
      <div className={styles.parent}>
        <div>
          <h5>Eat Healthy Food</h5>
          <div className={`${style.paragraph} overflow-hidden `}>
            Healthy Food is a type of food that provides nutrients to keep your
            body healthy, energized, and functioning properly.
          </div>
          <div className="my-1">
            <div>
              Priority: <span className={style.priorityExtreme}>Extreme</span>
            </div>
            <div>
              Status: <span className={style.statusCompleted}>Completed</span>
            </div>
            <div>
              Date: <span className={style.date}>14-11-2025</span>
            </div>
          </div>
          <div
            className={
              "d-flex flex-column align-items-start align-items-md-start m-auto mt-5 gap-2"
            }
          >
            <Link to="/addTask" className={style.icon}>
              <FaEdit size={25} />
              <span>Edit</span>
            </Link>
            <Link className={style.icon}>
              <MdDelete size={25} />
              <span>Delete</span>
            </Link>
            <Link className={style.icon}>
              <IoMdDoneAll size={25} />
              <span>Completed</span>
            </Link>
          </div>
        </div>
        <div className={styles.image}>
          <img src={pandaWelcome} alt="pandaHi" />
        </div>
      </div>
    </div>
  );
}

export default ViewTask;
