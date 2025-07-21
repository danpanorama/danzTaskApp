// import { useSelector } from "react-redux";
// import { useState } from "react";
// import "../../css/taskList.css"; // ניצור גם CSS בסיסי

// const TaskList = () => {
//   const tasks = useSelector((state) => state.task.tasks);
//   const [openTaskId, setOpenTaskId] = useState(null);

//   const toggleNotes = (id) => {
//     setOpenTaskId((prev) => (prev === id ? null : id));
//   };

//   return (
//     <div className="taskList">
//       {tasks.length === 0 ? (
//         <p>אין משימות עדיין.</p>
//       ) : (
//         tasks.map((task) => (
//           <div key={task.id} className="taskItem" onClick={() => toggleNotes(task.id)}>
//             <div className="taskHeader">
//               <span className="taskTitle">{task.title}</span>
//               <span className="taskPrice">{task.price} ₪</span>
//             </div>

//             {openTaskId === task.id && (
//               <div className="taskNotes">
//                 <strong>הערה:</strong> {task.notes || "אין הערות"}
//               </div>
//             )}
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default TaskList;


import { useEffect, useState } from "react";
import axios from "axios";
import "../../css/taskList.css"; // ודא שקובץ CSS מתאים
import axiosInstance from "../../../config/axiosInstance";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [openTaskId, setOpenTaskId] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await axiosInstance.get("/tasks");
        console.log(res)
        setTasks(res.data||[]);
      } catch (err) {
           console.log(err)
        setError("אירעה שגיאה בטעינת המשימות");
      }
    };

    fetchTasks();
  }, []);

  const toggleNotes = (id) => {
    setOpenTaskId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="taskList">
      {error && <p className="error">{error}</p>}

      {tasks.length === 0 ? (
        <p>אין משימות עדיין.</p>
      ) : (
        tasks.map((task) => (
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
              <span>סטטוס: {task.status}</span>
              <span>
                נוצר בתאריך:{" "}
                {new Date(task.createdAt).toLocaleString("he-IL", {
                  timeZone: "Asia/Jerusalem",
                  hour12: false,
                })}
              </span>
            </div>

            {openTaskId === task._id && (
              <div className="taskNotes">
                <strong>הערות:</strong> {task.description || "אין הערות"}
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default TaskList;
