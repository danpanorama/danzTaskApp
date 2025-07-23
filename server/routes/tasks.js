const express = require('express');
const router = express.Router();
const { getTasks, createTask, deleteTask } = require('../controller/taskController');
const validateTask = require('../middleware/validateTask');

// שליפת כל המשימות
router.get('/', getTasks);

// יצירת משימה
router.post('/addTask',validateTask, createTask);
router.delete('/:id', deleteTask);
module.exports = router;
