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
  const { id } = useParams();

  const task = tasks && tasks.find((t) => t.id === id);

  if (!task) {
    return (
      <div className="m-5 mb-2">
        <div className={styles.header}>
          <h4>Task not found</h4>
          <Link to="/" className={styles.goBack}>
            <IoIosArrowBack size={20} />
            <span>Go Back</span>
          </Link>
        </div>
      </div>
    );
  }

  const statusClass =
    {
      "Not Started": style.notStarted,
      "In Progress": style.inProgress,
      Completed: style.completed,
    }[task.status] || style.notStarted;

  const nextStatus =
    task.status === "Not Started"
      ? "In Progress"
      : task.status === "In Progress"
      ? "Completed"
      : "Not Started";

  const handleStatus = (taskId, newStatus) => {
    setTasks((prevTasks) =>
      prevTasks.map((t) => (t.id === taskId ? { ...t, status: newStatus } : t))
    );
  };

  const handleDelete = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((t) => t.id !== taskId));
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
            <Link to={`/editTask/${task.id}`} className={style.icon}>
              <FaEdit size={25} />
              <span>Edit</span>
            </Link>
            <Link
              className={style.icon}
              onClick={() => handleDelete(task.id)}
              to="/"
            >
              <MdDelete size={25} />
              <span>Delete</span>
            </Link>
            <Link
              className={style.icon}
              onClick={() => handleStatus(task.id, nextStatus)}
            >
              <IoMdDoneAll size={25} />
              <span>{nextStatus.replace(" ", "_")}</span>
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
