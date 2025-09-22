import { BrowserRouter, Route, Routes } from "react-router-dom";
import SharedLayout from "./SharedLayout";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Register from "../pages/Register";
import VitalTasks from "../pages/VitalTasks";
import MyTasks from "../pages/MyTasks";
import AccountInformation from "../pages/AccountInformation";
import ChangePassword from "../pages/ChangePassword";
import AddTask from "../pages/AddTask";
import NotFound from "../pages/NotFound";
import ViewTask from "../pages/ViewTask";

function MainLayout() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="/vitalTasks" element={<VitalTasks />} />
          <Route path="/tasks" element={<MyTasks />} />
          <Route path="/addTask" element={<AddTask />} />
          <Route path="/viewTask/:index" element={<ViewTask />} />
          <Route path="/account" element={<AccountInformation />} />
          <Route path="/password" element={<ChangePassword />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default MainLayout;
