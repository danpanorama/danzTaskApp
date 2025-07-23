// src/axiosConfig.js
import axios from 'axios';

// יצירת מופע של Axios עם הגדרות ברירת מחדל
const axiosInstance = axios.create({
  baseURL: 'https://danztaskapp.onrender.com', // כתובת הבסיס של השרת
  headers: {
    'Content-Type': 'application/json',
    // אם צריך להוסיף headers נוספים
    // 'Authorization': 'Bearer yourToken',
  },
  timeout: 5000, // זמן קצוב לבקשה (10 שניות בדוגמה הזו)
});

export default axiosInstance;
