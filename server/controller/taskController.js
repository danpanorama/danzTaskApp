const Task = require('../models/TaskSchema');

// שליפת כל המשימות
const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({
      error: {
        header: "שגיאת שרת",
        message: err.message || "אירעה שגיאה בעת שליפת המשימות."
      }
    });
  }
};

// יצירת משימה חדשה
const createTask = async (req, res) => {
  try {
    const newTask = new Task(req.body);
    const savedTask = await newTask.save();

    // תאריך בפורמט קריא
    const formattedTask = {
      ...savedTask._doc,
      createdAt: new Date(savedTask.createdAt).toLocaleString('he-IL', {
        timeZone: 'Asia/Jerusalem',
        hour12: false,
      })
    };

    res.status(201).json(formattedTask);
  } catch (err) {
    res.status(500).json({
      error: {
        header: "שגיאת שרת",
        message: err.message || "משהו השתבש, נסה שוב מאוחר יותר."
      }
    });
  }
};

module.exports = {
  getTasks,
  createTask
};
