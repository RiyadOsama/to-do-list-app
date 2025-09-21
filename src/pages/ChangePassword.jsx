import { Link } from "react-router-dom";
import styles from "../styles/form.module.css";
import { IoIosArrowBack } from "react-icons/io";
import pandaHappy from "../assets/images/panda/panda-happy.gif";

function ChangePassword() {
  return (
    <div className="m-5 mb-2">
      <div className={styles.header}>
        <h4>Change Password</h4>
        <Link to="/account" className={styles.goBack}>
          <IoIosArrowBack size={20} />
          <span>Go Back</span>
        </Link>
      </div>
      <br /> <br />
      <div className={styles.parent}>
        <form className="w-100">
          <h5>Old Password</h5>
          <div className={styles.formInput}>
            <input type="password" name="oldPassword" id="oldPassword" />
          </div>
          <h5>New Password</h5>
          <div className={styles.formInput}>
            <input type="password" name="newPassword" id="newPassword" />
          </div>
          <h5>Confirm Password</h5>
          <div className={styles.formInput}>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
            />
          </div>
          <Link to="/password">
            <button className={styles.formButton}>Save</button>
          </Link>
          <Link to="/password" className="ms-3">
            <button className={styles.formButton}>Cancel</button>
          </Link>
        </form>
        <div className={styles.image}>
          <img src={pandaHappy} alt="pandaHi" />
        </div>
      </div>
    </div>
  );
}

export default ChangePassword;
