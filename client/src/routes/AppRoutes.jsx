import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";

import Tasks from "../pages/Tasks";



const AppRoutes = () => {
  return (
 <div className="navRoutes">
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/addTasks" element={<Tasks />} />
    </Routes>
 </div>
  );
};

export default AppRoutes;
