import { Link } from "react-router-dom";
import styles from "../styles/form.module.css";
import { IoIosArrowBack } from "react-icons/io";
import TaskCard from "../components/molecules/TaskCard";
import { useContext } from "react";
import TasksContext from "../context/TasksContext";

function VitalTasks() {
  const { tasks, setTasks } = useContext(TasksContext);

  const handleStatus = (taskId, newStatus) => {
    setTasks((prevTasks) =>
      prevTasks.map((t) => (t.id === taskId ? { ...t, status: newStatus } : t))
    );
  };

  const handleDelete = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="m-5 mb-2">
      <div className={styles.header}>
        <h4>Vital Tasks</h4>
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
            .filter((task) => task.priority == "extreme")
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .map((task) => {
              return (
                <TaskCard
                  key={task.id}
                  task={task}
                  id={task.id}
                  handleStatus={handleStatus}
                  handleDelete={handleDelete}
                />
              );
            })}
      </div>
    </div>
  );
}

export default VitalTasks;
