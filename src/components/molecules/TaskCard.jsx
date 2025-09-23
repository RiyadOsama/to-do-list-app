import { FaEdit, FaRegEye } from "react-icons/fa";
import styles from "../../styles/taskCard.module.css";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { IoMdDoneAll } from "react-icons/io";

function TaskCard({ task, index, handleStatus }) {
  const statusClass =
    {
      "Not Started": styles.notStarted,
      "In Progress": styles.inProgress,
      Completed: styles.completed,
    }[task.status] || styles.notStarted;

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
    <div className={styles.taskCard}>
      <div className="row h-100">
        <div className="col-12 col-md-8">
          <h5>{task.title || "Untitled Task"}</h5>
          <div className={`${styles.paragraph} overflow-hidden `}>
            {task.description || "No description provided"}
          </div>
          <div className="my-1">
            <div>
              Priority:{" "}
              <span className={styles[task.priority]}>{formattedPriority}</span>
            </div>
            <div>
              Status: <span className={statusClass}>{task.status}</span>
            </div>
            <div>
              Date: <span className={styles.date}>{formattedDate}</span>
            </div>
          </div>
        </div>
        <div
          className={
            "col-12 col-md-4 d-flex flex-column align-items-start align-items-md-end m-auto"
          }
        >
          <Link to={`/viewTask/${index}`} className={styles.icon}>
            <FaRegEye size={25} />
            <span>View</span>
          </Link>
          <Link to={`/editTask/${index}`} className={styles.icon}>
            <FaEdit size={25} />
            <span>Edit</span>
          </Link>
          <Link className={styles.icon}>
            <MdDelete size={25} />
            <span>Delete</span>
          </Link>
          <Link
            className={styles.icon}
            onClick={() =>
              handleStatus(
                index,
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
    </div>
  );
}

export default TaskCard;
