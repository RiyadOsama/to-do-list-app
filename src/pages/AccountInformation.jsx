import { Link } from "react-router-dom";
import styles from "../styles/form.module.css";
import { IoIosArrowBack } from "react-icons/io";
import pandaPathway from "../assets/images/panda/panda-pathway.gif";

function AccountInformation() {
  return (
    <div className="m-5 mb-2">
      <div className={styles.header}>
        <h4>Account Information</h4>
        <Link to="/" className={styles.goBack}>
          <IoIosArrowBack size={20} />
          <span>Go Back</span>
        </Link>
      </div>
      <br /> <br />
      <div className={styles.parent}>
        <form className="w-100">
          <h5>First Name</h5>
          <div className={styles.formInput}>
            <input type="text" name="fName" id="fName" />
          </div>
          <h5>Last Name</h5>
          <div className={styles.formInput}>
            <input type="text" name="lName" id="lName" />
          </div>
          <h5>User Name</h5>
          <div className={styles.formInput}>
            <input type="text" name="uName" id="uName" />
          </div>
          <h5>Email Address</h5>
          <div className={styles.formInput}>
            <input type="email" name="email" id="email" />
          </div>
          <h5>Position</h5>
          <div className={styles.formInput}>
            <input type="text" name="position" id="position" />
          </div>
          <Link to="/account">
            <button className={styles.formButton}>Update Info</button>
          </Link>
          <Link to="/password" className="ms-3">
            <button className={styles.formButton}>Change Password</button>
          </Link>
        </form>
        <div className={styles.image}>
          <img src={pandaPathway} alt="pandaHi" />
        </div>
      </div>
    </div>
  );
}

export default AccountInformation;
