export function validateInput(month, day, year)  {
  let highestDay = 0;
  switch (month)  {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      highestDay = 31;
      break;
    case 2:
      highestDay = 29;
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      highestDay = 30;
      break;
    default:
      return "Invalid";
  }
  if ((day < 1) || (day > highestDay))  {
    return "Invalid";
  }
  if ((year < -10000) || (year > 10000))  {
    return "Invalid";
  }
  return "Valid";
}

export function getDayOfTheWeek (month, day, year){
const anchorDate = new Date ("01/01/1970") // Thursday
  let userDate = new Date(`${month}/${day}/${year}`);
  let difDays = (userDate.getTime() - anchorDate.getTime()) / (1000 * 3600 * 24); 
  let dayOfWeek = ""
    if  (difDays % 7 === 0) {
    dayOfWeek = "Thursday";
  } else if (difDays % 7 === 1) {
    dayOfWeek = "Friday";
  } else if (difDays % 7 === 2) {
    dayOfWeek = "Saturday";
  } else if (difDays % 7 === 3) {
    dayOfWeek = "Sunday";
  } else if (difDays % 7 === 4) {
    dayOfWeek = "Monday";
  } else if (difDays % 7 === 5) {
    dayOfWeek = "Tuesday";
  } else if (difDays % 7 === 6) {
    dayOfWeek = "Wednesday";
  }
  return dayOfWeek;
}
