import { BrowserRouter, Route, Routes } from "react-router-dom";
import SharedLayout from "./SharedLayout";
import Dashboard from "../pages/dashboard/Dashboard";
import Login from "../pages/authentication/Login";
import Register from "../pages/authentication/Register";
import VitalTasks from "../pages/to-do/VitalTasks";
import MyTasks from "../pages/to-do/MyTasks";
import AccountInformation from "../pages/account/AccountInformation";
import ChangePassword from "../pages/account/ChangePassword";

function MainLayout() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="/vitalTasks" element={<VitalTasks />} />
          <Route path="/tasks" element={<MyTasks />} />
          <Route path="/account" element={<AccountInformation />} />
          <Route path="/password" element={<ChangePassword />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default MainLayout;
