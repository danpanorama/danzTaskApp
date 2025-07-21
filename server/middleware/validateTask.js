const { validateText, validateNumber, validateEnum } = require('../util/validator');

module.exports = function validateTask(req, res, next) {
  const { title, personName, amount, status } = req.body;

  const errors = [
    validateText(title, 'title'),
    validateText(personName, 'personName'),
    validateNumber(amount, 'amount', false),
    validateEnum(status, 'status', ['בוצע', 'כמעט בוצע', 'לא בוצע'])
  ].filter(Boolean); // רק שגיאות

  if (errors.length > 0) {
    return res.status(400).json({ error: errors[0] }); // מחזיר את השגיאה הראשונה
  }

  next();
};
