import { Link, useParams } from "react-router-dom";
import style from "../styles/taskCard.module.css";
import styles from "../styles/form.module.css";
import { IoIosArrowBack, IoMdDoneAll } from "react-icons/io";
import pandaWelcome from "../assets/images/panda/panda-welcome.gif";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useContext } from "react";
import TasksContext from "../context/TasksContext";

function ViewTask() {
  const { tasks } = useContext(TasksContext);
  const { index } = useParams();

  const task = tasks && tasks[Number(index)];

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
          <h5>{task.title}</h5>
          <div className={`${style.paragraph} overflow-hidden `}>
            {task.description}
          </div>
          <div className="my-1">
            <div>
              Priority:{" "}
              <span className={style[task.priority]}>
                {task.priority.charAt(0).toUpperCase() +
                  task.priority.slice(1).toLowerCase()}
              </span>
            </div>
            <div>
              Status: <span className={style.completed}>Unset</span>
            </div>
            <div>
              Date:{" "}
              <span className={style.date}>
                {new Date(task.date).toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: true,
                })}
              </span>
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
