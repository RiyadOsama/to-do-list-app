import StyledButton from "../atoms/Button.style";
import styles from "../../styles/navbar.module.css";
import { FaSearch } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { FaCalendarAlt } from "react-icons/fa";

function Navbar() {
  return (
    <div className={styles.topbar}>
      <div className="row mx-0">
        <div className="col-3">
          <div className={styles.left}>
            <h2>
              <span className={styles.span}>To</span>-Do
            </h2>
          </div>
        </div>
        <div className="col-6">
          <div className={styles.center}>
            <input
              type="search"
              name="searchTask"
              id="searchTask"
              placeholder="Search your task here..."
            />
            <StyledButton $variant="secondary">
              <FaSearch size={20} color="white" />
            </StyledButton>
          </div>
        </div>
        <div className="col-3">
          <div className={styles.right}>
            <StyledButton $variant="secondary">
              <IoMdNotifications size={20} color="white" />
            </StyledButton>
            <StyledButton $variant="secondary">
              <FaCalendarAlt size={20} color="white" />
            </StyledButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
