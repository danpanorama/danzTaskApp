import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Tasks from "../pages/Tasks";
import MyTasks from "../pages/MyTasks";
import ProtectedRoute from "../privateRoutes/PrivateRouter";
import Register from "../pages/Register";
import Login from "../pages/Login";


const AppRoutes = () => {
  return (
    <div className="navRoutes">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
<Route path="/register" element={<Register />} />

      <Route path="/addTasks" element={<Tasks />} />
<Route path="/myTasks" element={<MyTasks />} />
        {/* <Route
          path="/addTasks"
          element={
            <ProtectedRoute>
              <Tasks />
            </ProtectedRoute>
          }
        />
        <Route
          path="/myTasks"
          element={
            <ProtectedRoute>
              <MyTasks />
            </ProtectedRoute>
          }
        /> */}
      </Routes>
    </div>
  );
};

export default AppRoutes;
