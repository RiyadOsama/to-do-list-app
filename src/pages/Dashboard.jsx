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
  const { tasks, setTasks, searchQuery } = useContext(TasksContext);

  const handleStatus = (taskId, newStatus) => {
    setTasks((prevTasks) =>
      prevTasks.map((t) => (t.id === taskId ? { ...t, status: newStatus } : t))
    );
  };

  const handleDelete = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const total = filteredTasks.length || 1;
  const counts = {
    "Not Started": filteredTasks.filter((t) => t.status === "Not Started").length,
    "In Progress": filteredTasks.filter((t) => t.status === "In Progress").length,
    Completed: filteredTasks.filter((t) => t.status === "Completed").length,
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
              {filteredTasks &&
                [...filteredTasks]
                  .filter((task) => task.status !== "Completed")
                  .sort((a, b) => new Date(b.date) - new Date(a.date))
                  .map((task) => {
                    return (
                      <TaskCard
                        key={task.id}
                        id={task.id}
                        task={task}
                        handleStatus={handleStatus}
                        handleDelete={handleDelete}
                      />
                    );
                  })}
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
                value={Math.round((counts["Not Started"] / total) * 100)}
                label="Not Started"
              />
              <TaskStatusCard
                color="var(--secondColor)"
                value={Math.round((counts["In Progress"] / total) * 100)}
                label="In Progress"
              />
              <TaskStatusCard
                color="var(--thirdColor)"
                value={Math.round((counts["Completed"] / total) * 100)}
                label="Completed"
              />
            </div>
          </div>
          <br />
          <div className={styles.child}>
            <div className={styles.cardTitle}>
              <BiTask size={30} />
              <span>Completed Tasks</span>
            </div>
            <div style={{ overflow: "auto", height: "292px" }}>
              {filteredTasks &&
                [...filteredTasks]
                  .filter((task) => task.status === "Completed")
                  .sort((a, b) => new Date(b.date) - new Date(a.date))
                  .map((task) => {
                    return (
                      <TaskCard
                        key={task.id}
                        id={task.id}
                        task={task}
                        handleStatus={handleStatus}
                        handleDelete={handleDelete}
                      />
                    );
                  })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;