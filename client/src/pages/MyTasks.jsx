// MyTasks.jsx
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import TaskList from "../components/task/TaskList";
import { loadAllTasks } from "../redux/actions/taskActions";

const MyTasks = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // טוען את כל המשימות פעם אחת כאשר הדף נטען
    dispatch(loadAllTasks());
  }, [dispatch]);

  return (
    <div className="homeScreen">
      <TaskList />
      <br /><br /><br /><br /><br /><br /><br /><br />
    </div>
  );
};

export default MyTasks;
