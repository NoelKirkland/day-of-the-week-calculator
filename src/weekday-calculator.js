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




// let userDate = new Date(userInputtedMonth, userInputtedDay, userInputtedYear)
// console.log(userDate);
// userDate = 2, 3, 1993;
class Date {
  constructor(month, day, year) {
    this.month = month;
    this.day = day;
    this.year = year;
  }

//     getDayOfTheWeek() {
//     const anchorDate = new Date ("01/01/1970") // Thursday
//     let userDate = new Date(month, day, year);
//     let difDays = (userDate.getTime() - anchorDate.getTime()) / (1000 * 3600 * 24); 
//     let dayOfWeek = ""
//       if  (difDays % 7 === 0) {
//       dayOfWeek = "Thursday"
//     } else if (difDays % 7 === 1) {
//       dayOfWeek = "Friday"
//     } else if (difDays % 7 === 2) {
//       dayOfWeek = "Saturday"
//     } else if (difDays % 7 === 3) {
//       dayOfWeek = "Sunday"
//     } else if (difDays % 7 === 4) {
//       dayOfWeek = "Monday"
//     } else if (difDays % 7 === 5) {
//       dayOfWeek = "Tuesday"
//     } else if (difDays % 7 === 6) {
//       dayOfWeek = "Wednesday"
//     }
//     return dayOfWeek;
//   }

// }
let inputtedDate = `The day was a ${dayofWeek}`

DayOfTheWeek(inputtedDate);

let num1 = 2;
let num2 = 3;
let result = `${num1} multiplied by ${num2} is ${num1 * num2}.`;
console.log(result)

let month = 2
let day = 3
let year = 1993

function getDayOfTheWeek (month, day, year){
const anchorDate = new Date ("01/01/1970") // Thursday
  let userDate = new Date(`${month}/${day}/${year}`);
  let difDays = (userDate.getTime() - anchorDate.getTime()) / (1000 * 3600 * 24); 
  let dayOfWeek = ""
    if  (difDays % 7 === 0) {
    dayOfWeek = "Thursday"
  } else if (difDays % 7 === 1) {
    dayOfWeek = "Friday"
  } else if (difDays % 7 === 2) {
    dayOfWeek = "Saturday"
  } else if (difDays % 7 === 3) {
    dayOfWeek = "Sunday"
  } else if (difDays % 7 === 4) {
    dayOfWeek = "Monday"
  } else if (difDays % 7 === 5) {
    dayOfWeek = "Tuesday"
  } else if (difDays % 7 === 6) {
    dayOfWeek = "Wednesday"
  }
  return dayOfWeek
}

// Validation of input date:
// var yearReg = '(201[4-9]|202[0-9])';            ///< Allows a number between 2014 and 2029
// var monthReg = '(0[1-9]|1[0-2])';               ///< Allows a number between 00 and 12
// var dayReg = '(0[1-9]|1[0-9]|2[0-9]|3[0-1])';

// let standard = new Date();
// let noelsBirthday = new Date("02/03/1993");

// let taylorBirthday = new Date(1986, 12, 13);  = January 13th 1987 (month 11 is December)
