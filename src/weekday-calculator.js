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
  let difDays = Math.floor((userDate.getTime() - anchorDate.getTime()) / (1000 * 3600 * 24));
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




// Dad's birthday
// let month = 9
// let day = 24
// let year = 1956

// Noel's birthday
// let month = 2
// let day = 3
// let year = 1993



// To account for dates prior to our anchorDate
// export function getDayOfTheWeek (month, day, year){
//   var moment = require('moment');
//   var a = moment('1/1/1800', 'MM/DD/YYYY');// Saturday
//   var b = moment('2/3/1993', 'MM/DD/YYYY');
//   var difDays = b.diff(a, 'days');
//   let dayOfWeek = "test"
//   if  (difDays % 7 === 0) {
//     dayOfWeek = "Thursday";
//   } else if (difDays % 7 === 1) {
//     dayOfWeek = "Friday";
//   } else if (difDays % 7 === 2) {
//     dayOfWeek = "Saturday";
//   } else if (difDays % 7 === 3) {
//     dayOfWeek = "Sunday";
//   } else if (difDays % 7 === 4) {
//     dayOfWeek = "Monday";
//   } else if (difDays % 7 === 5) {
//     dayOfWeek = "Tuesday";
//   } else if (difDays % 7 === 6) {
//     dayOfWeek = "Wednesday";
//   }
// }


// let month = 12
// let day = 26
// let year = 1969
  // let anchorDate = new Date ("01/01/1970") // Thursday
  // let userDate = new Date(`${month}/${day}/${year}`);
  // let difDays = ((userDate.getTime() - anchorDate.getTime()) / (1000 * 3600 * 24)).toFixed(); 
  // let dayOfWeek = ""
  //   if  ((difDays % 7 === 0 && userDate.year >= "1970") || (difDays % 7 === -6)) {
  //   dayOfWeek = "Thursday"
  // } else if ((difDays % 7 === 1) || (difDays % 7 === 0)) {
  //   dayOfWeek = "Friday"
  // } else if ((difDays % 7 === 2) || (difDays % 7 === -1)) {
  //   dayOfWeek = "Saturday"
  // } else if ((difDays % 7 === 3) || (difDays % 7 === -2)) {
  //   dayOfWeek = "Sunday"
  // } else if ((difDays % 7 === 4) || (difDays % 7 === -3)) {
  //   dayOfWeek = "Monday"
  // } else if ((difDays % 7 === 5) || (difDays % 7 === -4)) {
  //   dayOfWeek = "Tuesday"
  // } else if ((difDays % 7 === 6) || (difDays % 7 === -5)) {
  //   dayOfWeek = "Wednesday"
  // }
// console.log(difDays)
// console.log(dayOfWeek)
