import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://danztaskapp.onrender.com", // בסיס לכל הקריאות ל-API
  timeout: 5000, // זמן מקסימום לבקשה ב-מילישניות
  headers: {
    "Content-Type": "application/json",
    // אם יש צורך ב-authorization, תוסיף כאן, למשל:
    // Authorization: `Bearer ${token}`,
  },
});

export default axiosInstance;
