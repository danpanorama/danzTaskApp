// import { useState, useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { addNewTask } from "../../redux/actions/taskActions";
// import "../../css/tasks.css";

// const AddTask = () => {
//   const dispatch = useDispatch();
//   const [taskData, setTaskData] = useState({
//     title: "",
//     notes: "",
//     price: "",
//     date:''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setTaskData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!taskData.title.trim()) {
//       alert("חובה למלא שם משימה");
//       return;
//     }

//     const fullTask = {
//       ...taskData,
//       id: crypto.randomUUID(), // מזהה ייחודי
//       createdAt: new Date().toISOString(), // תאריך יצירה
//     };

//     // שמירה ב־Redux
//     dispatch(addNewTask(fullTask));

//     // שמירה ב־Local Storage
//     const existing = JSON.parse(localStorage.getItem("tasks")) || [];
//     localStorage.setItem("tasks", JSON.stringify([...existing, fullTask]));

//     setTaskData({ title: "", notes: "", price: "" });
//   };

//   return (
//     <div className="home-container">
//       <h2>  מי זיין אותך הפעם דניאל </h2>
//       <form className="task-form" onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="title"
//           placeholder="שם משימה"
//           value={taskData.title}
//           onChange={handleChange}
//         />
//         <textarea
//           name="notes"
//           placeholder="הערות"
//           value={taskData.notes}
//           onChange={handleChange}
//         ></textarea>
//         <input
//           type="number"
//           name="price"
//           placeholder="כמה כסף"
//           value={taskData.price}
//           onChange={handleChange}
//         />
//         <button type="submit">שמור משימה</button>
//       </form>
//     </div>
//   );
// };

// export default AddTask;


// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { addNewTask } from "../../redux/actions/taskActions";
// import "../../css/tasks.css";

// // פונקציה שמבצעת קריאה ל-OpenAI API (תצטרך להוסיף את מפתח ה-API שלך)
// async function fetchTaskFromAI(freeText) {
//   const response = await fetch("https://api.openai.com/v1/chat/completions", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`, // <-- תחליף כאן למפתח שלך
//     },
//     body: JSON.stringify({
//       model: "gpt-3.5-turbo",
//       messages: [
//         {
//           role: "system",
//           content:
//             "אתה עוזר חכם שמקבל טקסט חופשי בעברית עם תיאור עבודה ומחזיר אובייקט JSON עם שדות: title, notes, price, date. התאריך בפורמט ISO. אם יש שעות עבודה, תחשב זמן ותוסיף ל-date. דוגמה לתשובה: {\"title\": \"עבודה עם פרנס\", \"notes\": \"עבדתי אצל פרנס היום\", \"price\": \"600\", \"date\": \"2025-07-17T09:00:00Z\"}",
//         },
//         {
//           role: "user",
//           content: freeText,
//         },
//       ],
//       temperature: 0.7,
//       max_tokens: 200,
//     }),
//   });
// console.log(response)
//   if (!response.ok) {
     
//     throw new Error("Failed to fetch AI task");
//   }

//   const data = await response.json();
//   console.log(data)
//   // נניח שהתוצאה היא ב data.choices[0].message.content
//   return JSON.parse(data.choices[0].message.content);
// }

// const AddTask = () => {
//   const dispatch = useDispatch();
//   const [freeText, setFreeText] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!freeText.trim()) {
//       alert("אנא כתוב תיאור למשימה");
//       return;
//     }

//     setLoading(true);

//     try {
//       const taskFromAI = await fetchTaskFromAI(freeText);

//       const fullTask = {
//         ...taskFromAI,
//         id: crypto.randomUUID(),
//         createdAt: new Date().toISOString(),
//       };

//       dispatch(addNewTask(fullTask));

//       const existing = JSON.parse(localStorage.getItem("tasks")) || [];
//       localStorage.setItem("tasks", JSON.stringify([...existing, fullTask]));

//       setFreeText("");
//     } catch (error) {
//       alert("שגיאה ביצירת המשימה מהטקסט: " + error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="home-container">
//       <h2>רשום תיאור משימה חופשי וה-AI יבנה לך אותה</h2>
//       <form className="task-form" onSubmit={handleSubmit}>
//         <textarea
//           placeholder=""
//           value={freeText}
//           onChange={(e) => setFreeText(e.target.value)}
//           rows={5}
//         ></textarea>
//         <button type="submit" disabled={loading}>
//           {loading ? "טוען..." : "צור משימה"}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AddTask;
import React, { useState } from "react";
import AddTaskManual from "./AddTaskManual";
import AddTaskAI from "./AddTaskAI";

const AddTask = () => {
  const [useAI, setUseAI] = useState(false);

  return (
    <div>
      <button
        onClick={() => setUseAI((prev) => !prev)}
        style={{
          marginBottom: 20,
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        {useAI ? "רישום ידני" : "רישום באמצעות AI"}
      </button>

      {useAI ? <AddTaskAI /> : <AddTaskManual />}
    </div>
  );
};

export default AddTask;
