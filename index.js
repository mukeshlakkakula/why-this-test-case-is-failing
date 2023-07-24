const addDate = require("date-fns/addDays");
let result = (days) => {
  const newDate = addDate(new Date(2020, 7, 22), days);
  return `${newDate.getDay()}-${
    newDate.getMonth() + 1
  }-${newDate.getFullYear()}`;
};

module.exports = result;
