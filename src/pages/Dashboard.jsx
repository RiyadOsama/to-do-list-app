import styles from "../styles/dashboard.module.css";
import { GiHand, GiProgression } from "react-icons/gi";
import { BiTask } from "react-icons/bi";
import { LuClipboardList } from "react-icons/lu";
import { MdAdd } from "react-icons/md";
import { Link } from "react-router-dom";
import TaskCard from "../components/molecules/TaskCard";
import TaskStatusCard from "../components/molecules/TaskStatusCard";
import { useContext } from "react";
import TasksContext from "../context/TasksContext";

function Dashboard() {
  const { tasks, setTasks } = useContext(TasksContext);

  const handleStatus = (taskIndex, newStatus) => {
    setTasks((prevTasks) =>
      prevTasks.map((t, i) =>
        i === taskIndex ? { ...t, status: newStatus } : t
      )
    );
  };

  return (
    <div className="m-5 mb-2 w-100">
      <h1>
        Welcome back, Riyad <GiHand color="var(--primaryColor)" />
      </h1>
      <br />
      <div className={`${styles.parent} row overflow-auto`}>
        <div className="col-12 col-xl-6">
          <div className={styles.child}>
            <div className="d-flex justify-content-between align-items-center">
              <div className={styles.cardTitle}>
                <LuClipboardList size={30} />
                <span>To-Do</span>
              </div>
              <div>
                <Link to="/addTask" className={styles.addTask}>
                  <MdAdd size={20} />
                  <span>Add Task</span>
                </Link>
              </div>
            </div>
            <div style={{ overflow: "auto", height: "550px" }}>
              {tasks &&
                [...tasks]
                  .filter((task) => task.status !== "Completed")
                  .sort((a, b) => new Date(b.date) - new Date(a.date))
                  .map((task, index) => (
                    <TaskCard
                      key={index}
                      task={task}
                      index={index}
                      handleStatus={handleStatus}
                    />
                  ))}
            </div>
          </div>
        </div>
        <div className="col-12 col-xl-6">
          <div className={styles.child}>
            <div className={`${styles.cardTitle}`}>
              <GiProgression size={30} />
              <span>Task Status</span>
            </div>
            <div className="d-flex justify-content-evenly">
              <TaskStatusCard
                color="var(--firstColor)"
                value={25}
                label="Not Started"
              />
              <TaskStatusCard
                color="var(--secondColor)"
                value={50}
                label="In Progress"
              />
              <TaskStatusCard
                color="var(--thirdColor)"
                value={75}
                label="Completed"
              />
            </div>
          </div>
          <br />
          <div className={styles.child}>
            <div className={styles.cardTitle}>
              <BiTask size={30} />
              <span>Completet Tasks</span>
            </div>
            <div style={{ overflow: "auto", height: "292px" }}>
              {tasks &&
                [...tasks]
                  .filter((task) => task.status === "Completed")
                  .sort((a, b) => new Date(b.date) - new Date(a.date))
                  .map((task, index) => (
                    <TaskCard
                      key={index}
                      task={task}
                      index={index}
                      handleStatus={handleStatus}
                    />
                  ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
