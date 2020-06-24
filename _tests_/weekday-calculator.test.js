import { validateInput } from '../src/weekday-calculator.js';

describe ('validateInput', () => {
  let reusableInputDate;
  // beforeEach(() => {
  //   reusableInputDate = new validateInput(2, 3, 1993)    // Date(day, month, year)
  // });

  test('should identify whether the day input is valid', () =>  {
    expect(validateInput(13, 3, 1993)).toEqual("Invalid");
    console.log(validateInput);
  });
  test('should test that the year is outside of the specified floor and ceiling range', () => {
    expect(validateInput(12, 3, 10001)).toEqual("Invalid");
    console.log(validateInput);
  });
});