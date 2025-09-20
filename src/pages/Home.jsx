import Navbar from "../components/organisms/Navbar";
import Sidebar from "../components/organisms/Sidebar";
import Dashboard from "./dashboard/Dashboard";

function Home() {
  return (
    <div>
      <Navbar />
      <div className="d-flex">
        <Sidebar />
        <Dashboard />
      </div>
    </div>
  );
}

export default Home;
