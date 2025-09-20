import { Outlet } from "react-router-dom";
import Navbar from "../components/organisms/Navbar";
import Sidebar from "../components/organisms/Sidebar";

function SharedLayout() {
  return (
    <>
      <Navbar />
      <div className="d-flex">
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
}

export default SharedLayout;
