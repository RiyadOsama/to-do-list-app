import { Link, useNavigate, useParams } from "react-router-dom";
import styles from "../styles/form.module.css";
import { IoIosArrowBack } from "react-icons/io";
import pandaHi from "../assets/images/panda/panda-hi.gif";
import Datepicker from "../components/atoms/Datepicker";
import { useContext, useEffect, useState } from "react";
import TasksContext from "../context/TasksContext";

function AddTask() {
  // Get and Set Tasks of Context Api
  const { tasks, setTasks } = useContext(TasksContext);

  // Get id From The Url
  const { id } = useParams();

  const navigate = useNavigate();

  // Rendering The Editing Task into The Form
  useEffect(() => {
    if (id) {
      const taskToEdit = tasks.find((t) => t.id === id);
      if (taskToEdit) {
        setTask(taskToEdit);
      }
    }
  }, [tasks, id]);

  // Get and Set Task of Local State
  const [task, setTask] = useState({
    id: String(Date.now()),
    title: "",
    date: null,
    priority: "",
    description: "",
    status: "Not Started",
  });

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  // On Submit Set The Tasks into The Contaxt Api and Local Storage
  const handleSubmit = (e) => {
    e.preventDefault();

    if (id) {
      // Updating existing task
      setTasks((prevTasks) => {
        const updatedTasks = prevTasks.map((t) => (t.id === id ? task : t));
        localStorage.setItem("tasks", JSON.stringify(updatedTasks));
        return updatedTasks;
      });
    } else {
      // Adding new task
      setTasks((prevTasks) => {
        const updatedTasks = [...prevTasks, task];
        localStorage.setItem("tasks", JSON.stringify(updatedTasks));
        return updatedTasks;
      });
    }

    // Reset form
    setTask({
      id: String(Date.now()),
      title: "",
      date: null,
      priority: "",
      description: "",
      status: "Not Started",
    });

    navigate("/");
  };

  return (
    <div className="m-5 mb-2">
      <div className={styles.header}>
        <h4>{id ? "Update Task" : "Add New Task"}</h4>
        <Link to="/" className={styles.goBack}>
          <IoIosArrowBack size={20} />
          <span>Go Back</span>
        </Link>
      </div>
      <br /> <br />
      <div className={styles.parent}>
        <form className="w-100" onSubmit={handleSubmit}>
          <h5>Title</h5>
          <div className={styles.formInput}>
            <input
              type="text"
              name="title"
              value={task.title}
              onChange={handleChange}
            />
          </div>
          <h5>Date</h5>
          <div className={styles.formInput}>
            <Datepicker
              value={task.date}
              onChange={(date) => setTask({ ...task, date })}
            />
          </div>
          <h5>priority</h5>
          <div className={styles.formCheck}>
            <label htmlFor="low" style={{ color: "var(--thirdColor)" }}>
              Low
            </label>
            <input
              type="radio"
              name="priority"
              id="low"
              value="low"
              checked={task.priority === "low"}
              onChange={handleChange}
            />
            <label htmlFor="moderate" style={{ color: "var(--secondColor)" }}>
              Moderate
            </label>
            <input
              type="radio"
              name="priority"
              id="moderate"
              value="moderate"
              checked={task.priority === "moderate"}
              onChange={handleChange}
            />
            <label htmlFor="extreme" style={{ color: "var(--firstColor)" }}>
              Extreme
            </label>
            <input
              type="radio"
              name="priority"
              id="extreme"
              value="extreme"
              checked={task.priority === "extreme"}
              onChange={handleChange}
            />
          </div>
          <h5>Description</h5>
          <div className={styles.formInput}>
            <textarea
              name="description"
              value={task.description}
              onChange={handleChange}
            />
          </div>
          <button className={styles.formButton}>Done</button>
        </form>
        <div className={styles.image}>
          <img src={pandaHi} alt="pandaHi" />
        </div>
      </div>
    </div>
  );
}

export default AddTask;
