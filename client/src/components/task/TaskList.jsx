import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import "../../css/taskList.css";
import { REMOVE_TASK } from "../../redux/constants/taskConstant";
import axiosInstance from "../../config/AxiosConfig";

const TaskList = () => {
  const tasks = useSelector((state) => state.task.tasks);
  const dispatch = useDispatch();
  const [openTaskId, setOpenTaskId] = useState(null);

  const toggleNotes = (id) => {
    setOpenTaskId((prev) => (prev === id ? null : id));
  };

  const handleDelete = async (id) => {
    try {
          await axiosInstance.delete(`/tasks/${id}`);
      dispatch({ type: REMOVE_TASK, data: id });
    } catch (err) {
      console.error("שגיאה במחיקה", err);
    }
  };

  return (
    <div className="taskList">
      {tasks.length === 0 ? (
        <p>אין משימות עדיין.</p>
      ) : (
        tasks?.map((task) => (
          <div
            key={task._id}
            className={`taskItem ${openTaskId === task._id ? "open" : ""}`}
            onClick={() => toggleNotes(task._id)}
          >
            <div className="taskHeader">
              <span className="taskTitle">{task.title}</span>
              <span className="taskAmount">{task.amount ? `${task.amount} ₪` : "—"}</span>
            </div>

            <div className="taskSubHeader">
              <span>למי: {task.personName}</span>
           
            </div>

            {openTaskId === task._id && (
              <div className="taskNotes">
                <strong>הערות:</strong> {task.description || "אין הערות"}
                <br />
                   <span>
                נוצר בתאריך:{" "}
                {new Date(task.createdAt).toLocaleString("he-IL", {
                  timeZone: "Asia/Jerusalem",
                  hour12: false,
                })}
              </span>
                <button onClick={() => handleDelete(task._id)}>🗑️ מחק</button>
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default TaskList;
