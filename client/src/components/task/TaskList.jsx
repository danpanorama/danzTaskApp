import { useSelector } from "react-redux";
import { useState } from "react";
import "../../css/taskList.css"; // ניצור גם CSS בסיסי

const TaskList = () => {
  const tasks = useSelector((state) => state.task.tasks);
  const [openTaskId, setOpenTaskId] = useState(null);

  const toggleNotes = (id) => {
    setOpenTaskId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="taskList">
      {tasks.length === 0 ? (
        <p>אין משימות עדיין.</p>
      ) : (
        tasks.map((task) => (
          <div key={task.id} className="taskItem" onClick={() => toggleNotes(task.id)}>
            <div className="taskHeader">
              <span className="taskTitle">{task.title}</span>
              <span className="taskPrice">{task.price} ₪</span>
            </div>

            {openTaskId === task.id && (
              <div className="taskNotes">
                <strong>הערה:</strong> {task.notes || "אין הערות"}
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default TaskList;
