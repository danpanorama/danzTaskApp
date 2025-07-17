import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewTask } from "../../redux/actions/taskActions";

const AddTaskManual = () => {
  const dispatch = useDispatch();
  const [taskData, setTaskData] = useState({
    title: "",
    notes: "",
    price: "",
    // אין שדה date כאן
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!taskData.title.trim()) {
      alert("חובה למלא שם משימה");
      return;
    }

    const fullTask = {
      ...taskData,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
      date: new Date().toISOString(), // מוסיף כאן תאריך אוטומטי
    };

    dispatch(addNewTask(fullTask));

    const existing = JSON.parse(localStorage.getItem("tasks")) || [];
    localStorage.setItem("tasks", JSON.stringify([...existing, fullTask]));

    setTaskData({ title: "", notes: "", price: "" });
  };

  return (
    <div className="home-container">
      <h2>מילוי משימה ידני</h2>
      <form className="task-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="שם משימה"
          value={taskData.title}
          onChange={handleChange}
        />
        <textarea
          name="notes"
          placeholder="הערות"
          value={taskData.notes}
          onChange={handleChange}
        ></textarea>
        <input
          type="number"
          name="price"
          placeholder="כמה כסף"
          value={taskData.price}
          onChange={handleChange}
        />
        {/* אין שדה תאריך פה */}
        <button type="submit">שמור משימה</button>
      </form>
    </div>
  );
};

export default AddTaskManual;
