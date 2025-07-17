import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";

import Tasks from "../pages/Tasks";
import MyTasks from "../pages/MyTasks";



const AppRoutes = () => {
  return (
 <div className="navRoutes">
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/addTasks" element={<Tasks />} />
            <Route path="/myTasks" element={<MyTasks />} />

    </Routes>
 </div>
  );
};

export default AppRoutes;
