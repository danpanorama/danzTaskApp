const express = require('express');
const router = express.Router();
const { getTasks, createTask } = require('../controller/taskController');
const validateTask = require('../middleware/validateTask');

// שליפת כל המשימות
router.get('/', getTasks);

// יצירת משימה
router.post('/',validateTask, createTask);

module.exports = router;
