import StyledButton from "../atoms/Button.style";
import styles from "../../styles/navbar.module.css";
import { FaSearch } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { Link } from "react-router-dom";
import CurrentDate from "../atoms/CurrentDate";
import { useContext } from "react";
import TasksContext from "../../context/TasksContext";

function Navbar() {
  const { searchQuery, setSearchQuery } = useContext(TasksContext);

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.topbar}>
      <div className="row mx-0">
        <div className="col-2">
          <Link to="/" className={styles.left}>
            <h2>
              <span className={styles.span}>To</span>-Do
            </h2>
          </Link>
        </div>
        <div className="col-6">
          <form className={styles.center} onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="Search your task here..."
              name="searchTask"
              value={searchQuery}
              onChange={handleChange}
            />
            <StyledButton $variant="secondary">
              <FaSearch size={20} color="white" />
            </StyledButton>
          </form>
        </div>
        <div className="col-4">
          <div className={styles.right}>
            <StyledButton $variant="secondary">
              <IoMdNotifications size={20} color="white" />
            </StyledButton>
            <CurrentDate />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;