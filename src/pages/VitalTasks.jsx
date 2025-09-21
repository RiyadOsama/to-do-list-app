import { Link } from "react-router-dom";
import styles from "../styles/form.module.css";
import { IoIosArrowBack } from "react-icons/io";
import TaskCard from "../components/molecules/TaskCard";
import { useContext } from "react";
import TasksContext from "../context/TasksContext";

function VitalTasks() {
  const { tasks } = useContext(TasksContext);

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
          tasks.map((task, index) => <TaskCard key={index} task={task} />)}{" "}
      </div>
    </div>
  );
}

export default VitalTasks;
