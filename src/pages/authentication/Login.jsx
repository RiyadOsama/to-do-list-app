import styles from "../../styles/authentication.module.css";
import login from "../../assets/images/authentication/login/login.svg";
import login1 from "../../assets/images/authentication/login/login1.svg";
import login2 from "../../assets/images/authentication/login/login2.svg";
import google from "../../assets/images/authentication/login/google.svg";
import facebook from "../../assets/images/authentication/login/facebook.svg";
import x from "../../assets/images/authentication/login/x.svg";

function Login() {
  return (
    <div className={styles.body}>
      <div className={styles.content}>
        <div className="row ">
          <div className={`col-6 ${styles.show}`}>
            <h1>Sign In</h1>
            <form>
              <div className={styles.formInput}>
                <img src={login1} alt="userName" />
                <input
                  type="text"
                  name="userName"
                  id="userNameLogin"
                  placeholder="Enter User Name"
                />
              </div>
              <div className={styles.formInput}>
                <img src={login2} alt="password" />
                <input
                  type="password"
                  name="password"
                  id="passwordLogin"
                  placeholder="Enter Password"
                />
              </div>
              <div className={styles.formCheck}>
                <input type="checkbox" name="agree" id="agreeLogin" />
                <label htmlFor="agreeLogin">Remember me</label>
              </div>
              <button className={styles.formButton}>Login</button>
              <p>
                Or, Login with{" "}
                <a rel="stylesheet" href="#">
                  <img src={google} alt="" />
                </a>
                <a rel="stylesheet" href="#">
                  <img src={facebook} alt="" />
                </a>
                <a rel="stylesheet" href="#">
                  <img src={x} alt="" />
                </a>
              </p>
              <p>
                Don't have an account?{" "}
                <a rel="stylesheet" href="#">
                  Create One
                </a>
              </p>
            </form>
          </div>
          <div className={`col-6 ${styles.hide}`}>
            <div className={`${styles.sideImage} ${styles.sideImageRight}`}>
              <img src={login} alt="register" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
