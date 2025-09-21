import { Link } from "react-router-dom";
import styles from "../styles/form.module.css";
import { IoIosArrowBack } from "react-icons/io";
import TaskCard from "../components/molecules/TaskCard";

function MyTasks() {
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
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
      </div>
    </div>
  );
}

export default MyTasks;
