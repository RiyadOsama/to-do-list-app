import styles from "../../styles/sidebar.module.css";
import avatar from "../../assets/images/sidebar/avatar.png";
import { MdDashboard, MdLogout } from "react-icons/md";
import { LuListTodo } from "react-icons/lu";
import { AiFillAlert } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Link className={`${styles.profile} nav-link`}>
        <div>
          <img src={avatar} alt="avatar" />
        </div>
        <span>Riyad Osama</span>
      </Link>
      <div className={styles.pages}>
        <Link className={`${styles.icon} nav-link`}>
          <MdDashboard size={30} />
          <span>Dashboard</span>
        </Link>
        <Link className={`${styles.icon} nav-link`}>
          <AiFillAlert size={30} />
          <span>Vital Tasks</span>
        </Link>
        <Link className={`${styles.icon} nav-link`}>
          <LuListTodo size={30} />
          <span>My Tasks</span>
        </Link>
        <Link className={`${styles.icon} nav-link`}>
          <CgProfile size={30} />
          <span>My Profile</span>
        </Link>
      </div>
      <div className={styles.logout}>
        <Link className={`${styles.icon} nav-link`}>
          <MdLogout size={30} />
          <span>Logout</span>
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
