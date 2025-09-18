import styles from "../../styles/authentication.module.css";
import register from "../../assets/images/authentication/register/register.svg";
import register1 from "../../assets/images/authentication/register/register1.svg";
import register2 from "../../assets/images/authentication/register/register2.svg";
import register3 from "../../assets/images/authentication/register/register3.svg";
import register4 from "../../assets/images/authentication/register/register4.svg";
import register5 from "../../assets/images/authentication/register/register5.svg";
import register6 from "../../assets/images/authentication/register/register6.svg";

function Register() {
  return (
    <div className={styles.body}>
      <div className={styles.content}>
        <div className="row mx-1">
          <div className={`col-6 ${styles.hide}`}>
            <div className={styles.sideImage}>
              <img src={register} alt="register" />
            </div>
          </div>
          <div className={`col-6 ${styles.show}`}>
            <h1>Sign Up</h1>
            <form>
              <div className={styles.formInput}>
                <img src={register1} alt="firstName" />
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  placeholder="Enter First Name"
                />
              </div>
              <div className={styles.formInput}>
                <img src={register2} alt="lastName" />
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  placeholder="Enter Last Name"
                />
              </div>
              <div className={styles.formInput}>
                <img src={register3} alt="userName" />
                <input
                  type="text"
                  name="userName"
                  id="userName"
                  placeholder="Enter User Name"
                />
              </div>
              <div className={styles.formInput}>
                <img src={register4} alt="email" />
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter Email"
                />
              </div>
              <div className={styles.formInput}>
                <img src={register5} alt="password" />
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter Password"
                />
              </div>
              <div className={styles.formInput}>
                <img src={register6} alt="password" />
                <input
                  type="password"
                  name="passwordConfirm"
                  id="passwordConfirm"
                  placeholder="Confirm Password"
                />
              </div>
              <div className={styles.formCheck}>
                <input type="checkbox" name="agree" id="agree" />
                <label htmlFor="agree">I agree to all terms</label>
              </div>
              <button className={styles.formButton}>Register</button>
              <p>
                Already have an account?{" "}
                <a rel="stylesheet" href="#">
                  Sign In
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
