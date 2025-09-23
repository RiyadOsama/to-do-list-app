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
  const { tasks, setTasks } = useContext(TasksContext);
  const { index } = useParams();

  const taskIndex = parseInt(index, 10);
  const task = tasks && tasks[taskIndex];

  // Guard: handle missing/invalid task
  if (!task) {
    return (
      <div className="m-5">
        <h4>Task not found</h4>
        <Link to="/" className={styles.goBack}>
          <IoIosArrowBack size={20} />
          <span>Go Back</span>
        </Link>
      </div>
    );
  }

  const statusClass =
    {
      "Not Started": style.notStarted,
      "In Progress": style.inProgress,
      Completed: style.completed,
    }[task.status] || style.notStarted;

  const handleStatus = (taskIndex, newStatus) => {
    setTasks((prevTasks) =>
      prevTasks.map((t, i) =>
        i === taskIndex ? { ...t, status: newStatus } : t
      )
    );
  };

  const formattedPriority = task.priority
    ? task.priority.charAt(0).toUpperCase() +
      task.priority.slice(1).toLowerCase()
    : "N/A";

  const formattedDate = task.date
    ? new Date(task.date).toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      })
    : "N/A";

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
          <h5>{task.title || "Untitled Task"}</h5>
          <div className={`${style.paragraph} overflow-hidden`}>
            {task.description || "No description provided"}
          </div>
          <div className="my-1">
            <div>
              Priority:{" "}
              <span className={style[task.priority]}>{formattedPriority}</span>
            </div>
            <div>
              Status: <span className={statusClass}>{task.status}</span>
            </div>
            <div>
              Date: <span className={style.date}>{formattedDate}</span>
            </div>
          </div>
          <div className="d-flex flex-column align-items-start align-items-md-start m-auto mt-5 gap-2">
            <Link to={`/editTask/${index}`} className={style.icon}>
              <FaEdit size={25} />
              <span>Edit</span>
            </Link>
            <Link className={style.icon}>
              <MdDelete size={25} />
              <span>Delete</span>
            </Link>
            <Link
              className={style.icon}
              onClick={() =>
                handleStatus(
                  taskIndex,
                  task.status === "Not Started"
                    ? "In Progress"
                    : task.status === "In Progress"
                    ? "Completed"
                    : "Not Started"
                )
              }
            >
              <IoMdDoneAll size={25} />
              <span>
                {task.status === "Not Started"
                  ? "In_Progress"
                  : task.status === "In Progress"
                  ? "Completed"
                  : "Not_Started"}
              </span>
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
