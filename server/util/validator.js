function validateText(value, fieldName, required = true) {
  if (required && (!value || typeof value !== 'string' || !value.trim())) {
    return {
      header: `שדה ${fieldName} נדרש`,
      message: `שדה '${fieldName}' חייב להיות טקסט תקין.`
    };
  }

  return null;
}

function validateNumber(value, fieldName, required = false) {
  if (required && (value === undefined || typeof value !== 'number')) {
    return {
      header: `שדה ${fieldName} נדרש`,
      message: `שדה '${fieldName}' חייב להיות מספר.`
    };
  }

  if (value !== undefined && typeof value !== 'number') {
    return {
      header: `סוג שגוי`,
      message: `השדה '${fieldName}' חייב להיות מספר.`
    };
  }

  return null;
}

function validateEnum(value, fieldName, options, required = false) {
  if (required && !value) {
    return {
      header: `שדה ${fieldName} נדרש`,
      message: `שדה '${fieldName}' חייב להכיל ערך.`
    };
  }

  if (value && !options.includes(value)) {
    return {
      header: `ערך לא חוקי`,
      message: `השדה '${fieldName}' חייב להיות אחד מ: ${options.join(', ')}.`
    };
  }

  return null;
}

module.exports = {
  validateText,
  validateNumber,
  validateEnum
};
