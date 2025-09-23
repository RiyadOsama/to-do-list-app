import { Link } from "react-router-dom";
import styles from "../styles/form.module.css";
import { IoIosArrowBack } from "react-icons/io";
import TaskCard from "../components/molecules/TaskCard";
import { useContext } from "react";
import TasksContext from "../context/TasksContext";

function MyTasks() {
  const { tasks, setTasks } = useContext(TasksContext);

  const handleStatus = (taskIndex, newStatus) => {
    setTasks((prevTasks) =>
      prevTasks.map((t, i) =>
        i === taskIndex ? { ...t, status: newStatus } : t
      )
    );
  };

  return (
    <div className="m-5 mb-2">
      <div className={styles.header}>
        <h4>My Tasks</h4>
        <Link to="/" className={styles.goBack}>
          <IoIosArrowBack size={20} />
          <span>Go Back</span>
        </Link>
      </div>
      <br /> <br />
      <div
        className={styles.parent}
        style={{ display: "block", overflow: "auto", height: "65.8vh" }}
      >
        {tasks &&
          [...tasks]
            .filter((task) => task.status !== "Completed")
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .map((task) => {
              const originalIndex = tasks.indexOf(task);
              return (
                <TaskCard
                  key={originalIndex}
                  task={task}
                  index={originalIndex}
                  handleStatus={handleStatus}
                />
              );
            })}
      </div>
    </div>
  );
}

export default MyTasks;
