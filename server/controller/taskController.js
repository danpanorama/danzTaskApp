const Task = require('../models/TaskSchema');

// שליפת כל המשימות
const getTasks = async (req, res) => {
  try {
    console.log('here')
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

const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;

    const deleted = await Task.findByIdAndDelete(id);
    if (!deleted) {
      return res.status(404).json({
        error: {
          header: "לא נמצא",
          message: "המשימה לא קיימת או כבר נמחקה"
        }
      });
    }

    res.json({ message: "המשימה נמחקה בהצלחה", id });
  } catch (err) {
    res.status(500).json({
      error: {
        header: "שגיאת שרת",
        message: err.message || "אירעה שגיאה בעת מחיקת המשימה."
      }
    });
  }
};

module.exports = {
  getTasks,
  createTask,
  deleteTask,
};
