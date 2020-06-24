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
      highestDay = 28;
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




// let userDate = new Date(userInputtedDate)
// console.log(userDate);
// userDate = "02/03/1993"


// const anchorDate = new Date ("01/01/1970")
// let userDate = new Date("02/03/1993");
// let userDate = new Date();
// let difDays = (userDate.getTime() - anchorDate.getTime()) / (1000 * 3600 * 24); 

// if 

// Validation of input date:
// var yearReg = '(201[4-9]|202[0-9])';            ///< Allows a number between 2014 and 2029
// var monthReg = '(0[1-9]|1[0-2])';               ///< Allows a number between 00 and 12
// var dayReg = '(0[1-9]|1[0-9]|2[0-9]|3[0-1])';

// let standard = new Date();
// let noelsBirthday = new Date("02/03/1993");

// let taylorBirthday = new Date(1986, 12, 13);  = January 13th 1987 (month 11 is December)
