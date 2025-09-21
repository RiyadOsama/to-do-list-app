import { Link } from "react-router-dom";
import styles from "../../styles/addTask.module.css";
import { IoIosArrowBack } from "react-icons/io";
import learn from "../../assets/images/addTask/never-stop-learning.gif";
import Datepicker from "../../components/atoms/Datepicker";

function AddTask() {
  return (
    <div className="m-5 mb-2">
      <div className={styles.header}>
        <h4>Add New Task</h4>
        <Link to="/" className={styles.goBack}>
          <IoIosArrowBack size={20} />
          <span>Go Back</span>
        </Link>
      </div>
      <br /> <br />
      <div className={styles.parent}>
        <form className="w-100">
          <h5>Title</h5>
          <div className={styles.formInput}>
            <input type="text" name="title" id="title" />
          </div>
          <h5>Date</h5>
          <div className={styles.formInput}>
            {/* <input type="date" name="date" id="date" /> */}
            <Datepicker />
          </div>
          <h5>Periority</h5>
          <div className={styles.formCheck}>
            <label htmlFor="low" style={{ color: "var(--thirdColor)" }}>
              Low
            </label>
            <input type="radio" name="periority" id="low" />
            <label htmlFor="moderate" style={{ color: "var(--secondColor)" }}>
              Moderate
            </label>
            <input type="radio" name="periority" id="moderate" />
            <label htmlFor="extreme" style={{ color: "var(--firstColor)" }}>
              Extreme
            </label>
            <input type="radio" name="periority" id="extreme" />
          </div>
          <h5>Description</h5>
          <div className={styles.formInput}>
            <textarea name="description" id="description" />
          </div>
          <Link to="/">
            <button className={styles.formButton}>Done</button>
          </Link>
        </form>
        <div className={styles.image}>
          <img src={learn} alt="Learning" />
        </div>
      </div>
    </div>
  );
}

export default AddTask;
