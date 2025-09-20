import styles from "../../styles/dashboard.module.css";
import { GiHand, GiProgression } from "react-icons/gi";
import { BiTask } from "react-icons/bi";
import { LuClipboardList } from "react-icons/lu";
import { MdAdd } from "react-icons/md";
import { Link } from "react-router-dom";
import UncompletedTaskCard from "../../components/molecules/UncompletedTaskCard";
import CompletedTaskCard from "../../components/molecules/CompletedTaskCard";

function Dashboard() {
  return (
    <div className="m-5 mb-2 w-100">
      <h1>
        Welcome back, Riyad <GiHand color={`var(--primaryColor)`} />
      </h1>
      <div className={`${styles.parent} row overflow-auto`}>
        <div className="col-12 col-xl-6">
          <div className={styles.child}>
            <div className="d-flex justify-content-between align-items-center">
              <div className={styles.cardTitle}>
                <LuClipboardList size={30} />
                <span>To-Do</span>
              </div>
              <div>
                <Link className={`${styles.addTask} nav-link`}>
                  <MdAdd size={24} />
                  <span>Add Task</span>
                </Link>
              </div>
            </div>
            <div style={{ overflow: "auto", height: "550px" }}>
              <UncompletedTaskCard />
            </div>
          </div>
        </div>
        <div className="col-12 col-xl-6">
          <div className={styles.child}>
            <div className={`${styles.cardTitle}`}>
              <GiProgression size={30} />
              <span>Task Status</span>
            </div>
          </div>
          <br />
          <div className={styles.child}>
            <div className={styles.cardTitle}>
              <BiTask size={30} />
              <span>Completet Tasks</span>
            </div>
            <div style={{ overflow: "auto", height: "445px" }}>
              <CompletedTaskCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
