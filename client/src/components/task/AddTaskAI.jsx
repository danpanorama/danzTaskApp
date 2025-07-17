import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewTask } from "../../redux/actions/taskActions";
import "../../css/tasks.css";
async function fetchTaskFromAI(freeText) {
  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ******`, // החלף למפתח שלך
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            'אתה עוזר חכם שמקבל טקסט חופשי בעברית עם תיאור עבודה ומחזיר אובייקט JSON עם שדות: title, notes, price, date. התאריך בפורמט ISO. אם יש שעות עבודה, תחשב זמן ותוסיף ל-date. דוגמה לתשובה: {"title": "עבודה עם פרנס", "notes": "עבדתי אצל פרנס היום", "price": "600", "date": "2025-07-17T09:00:00Z"}',
        },
        {
          role: "user",
          content: freeText,
        },
      ],
      temperature: 0.7,
      max_tokens: 200,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to fetch AI task");
  }

  const data = await response.json();
  return JSON.parse(data.choices[0].message.content);
}

const AddTaskAI = () => {
  const dispatch = useDispatch();
  const [freeText, setFreeText] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!freeText.trim()) {
      alert("אנא כתוב תיאור למשימה");
      return;
    }

    setLoading(true);

    try {
      const taskFromAI = await fetchTaskFromAI(freeText);

      const fullTask = {
        ...taskFromAI,
        id: crypto.randomUUID(),
        createdAt: new Date().toISOString(),
      };

      dispatch(addNewTask(fullTask));

      const existing = JSON.parse(localStorage.getItem("tasks")) || [];
      localStorage.setItem("tasks", JSON.stringify([...existing, fullTask]));

      setFreeText("");
    } catch (error) {
      alert("שגיאה ביצירת המשימה מהטקסט: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="home-container">
      <h2>רשום תיאור משימה חופשי וה-AI יבנה לך אותה</h2>
      <form className="task-form" onSubmit={handleSubmit}>
        <textarea
          placeholder="תאר את המשימה כאן..."
          value={freeText}
          onChange={(e) => setFreeText(e.target.value)}
          rows={5}
        ></textarea>
        <button type="submit" disabled={loading}>
          {loading ? "טוען..." : "צור משימה"}
        </button>
      </form>
    </div>
  );
};

export default AddTaskAI;
