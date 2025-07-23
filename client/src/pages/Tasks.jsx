import { useEffect } from "react";
import AddTask from "../components/task/AddTask";
import TaskList from "../components/task/TaskList";
import axiosInstance from "../config/AxiosConfig";
import { useDispatch } from "react-redux";
import { SET_TASKS } from "../redux/constants/taskConstant";
import axios from "axios";

const Tasks = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await axiosInstance.get("/tasks");
        console.log(res)
        dispatch({ type: SET_TASKS, data: res.data });
      } catch (err) {
        console.error("שגיאה בטעינת משימות", err);
      }
    };

    fetchTasks();
  }, [dispatch]);

  return (
    <div className="homeScreen">
      <AddTask />
      <TaskList />
    </div>
  );
};

export default Tasks;
