import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ERROR, CLEAR_ERROR } from "../../redux/constants/errorLoaderConstants"; // תוודא שהנתיב נכון
import { addNewTask } from "../../redux/actions/taskActions";
import axiosInstance from "../../../config/axiosInstance";


const AddTaskManual = () => {
  const [taskData, setTaskData] = useState({
    title: "",
    description: "",
    amount: "",
    personName: "",
    status: "לא בוצע"
  });
  const dispatch = useDispatch();
const errorState = useSelector((state) => state.error);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskData((prev) => ({ ...prev, [name]: value }));
  };
const handleSubmit = async (e) => {
  e.preventDefault();

  // קודם מנקים שגיאה קיימת
  dispatch({ type: CLEAR_ERROR });

  try {
    const response = await axiosInstance.post("/tasks", {
      ...taskData,
      amount: taskData.amount ? Number(taskData.amount) : undefined,
    });

    dispatch(addNewTask(response.data));
    setTaskData({
      title: "",
      description: "",
      amount: "",
      personName: "",
      status: "לא בוצע"
    });
  } catch (err) {
    // שולחים שגיאה ל־Redux
    dispatch({
      type: ERROR,
      data: {
        title: "שגיאה בשמירת המשימה",
        message: err.response?.data?.error || "אירעה שגיאה לא ידועה",
      },
    });
  }
};

  return (
  
  <div className="home-container">
    <h2>הוספת משימה חדשה</h2>
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="שם משימה"
        value={taskData.title}
        onChange={handleChange}
      />
      <textarea
        name="description"
        placeholder="תיאור"
        value={taskData.description}
        onChange={handleChange}
      />
      <input
        type="number"
        name="amount"
        placeholder="סכום (₪)"
        value={taskData.amount}
        onChange={handleChange}
      />
      <input
        type="text"
        name="personName"
        placeholder="מי "
        value={taskData.personName}
        onChange={handleChange}
      />
    

      <button type="submit">שמור משימה</button>
    </form>

  
  </div>


  );
};

export default AddTaskManual;
