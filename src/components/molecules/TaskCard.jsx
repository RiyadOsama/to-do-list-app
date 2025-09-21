import { FaEdit, FaRegEye } from "react-icons/fa";
import styles from "../../styles/taskCard.module.css";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { IoMdDoneAll } from "react-icons/io";

function TaskCard() {
  return (
    <div className={styles.taskCard}>
      <div className="row h-100">
        <div className="col-12 col-md-8">
          <h5>Eat Healthy Food</h5>
          <div className={`${styles.paragraph} overflow-hidden `}>
            Healthy Food is a type of food that provides nutrients to keep your
            body healthy, energized, and functioning properly.
          </div>
          <div className="my-1">
            <div>
              Priority: <span className={styles.priorityExtreme}>Extreme</span>
            </div>
            <div>
              Status: <span className={styles.statusCompleted}>Completed</span>
            </div>
            <div>
              Date: <span className={styles.date}>14-11-2025</span>
            </div>
          </div>
        </div>
        <div
          className={
            "col-12 col-md-4 d-flex flex-column align-items-start align-items-md-end m-auto"
          }
        >
          <Link className={styles.icon}>
            <FaRegEye size={25} />
            <span>View</span>
          </Link>
          <Link className={styles.icon}>
            <FaEdit size={25} />
            <span>Edit</span>
          </Link>
          <Link className={styles.icon}>
            <MdDelete size={25} />
            <span>Delete</span>
          </Link>
          <Link className={styles.icon}>
            <IoMdDoneAll size={25} />
            <span>Completed</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TaskCard;
