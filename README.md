# _PROJECT NAME_

Weekday Calculator

#### _DESCRIPTION_

This application will tell you what day of the week it was based off of an inputted date!

#### By _**Noel Kirkland and Taylor Phillips**_

## Description

_This application will take a date from the user and return what day of the week that day saw or will be.  It will also let the user know if they have entered an invalid date_

### Specs

* Collect data format mm/dd/yyyy
* Return day of the week

| Spec | Input | Output |
| :------------- |:------------- | :------------- |
|Collect date| 06/24/2020|Wednesday|


### Technical Specs

* Collect valid date from user. Format is mm/dd/yyyy

| Input | Output |
| :------------- |:------------- | 
| June/24/2020 | _Please use date format mm/dd/yyyy_ |
| 6/24/2020 | _Please use date format mm/dd/yyyy_ |

* Create an "anchor date" object of 01/01/2001 (Monday)
* Collect valid date entry and construct an object
* Calculate how man days difference the user's date is from our anchor date

| Input | Output |
| :------------- |:------------- | 
| 06/25/2020 | 7,114 days |
| 06/25/2001 | 175 days |

* Calculate _days difference_ by modulo 7

| Input | Output |
| :------------- |:------------- | 
| 175 days % 7  | 0 |

If _days difference_%7 == 0 then the day of the week of the user's inputted date is equal to the same day of the week as our anchor day

| Input | Output |
| :------------- |:------------- | 
| _days difference_ % 7 == 0  | Monday |
| _days difference_ % 7 == 1  | Tuesday |
| _days difference_ % 7 == 2  | Wednesday |
| _days difference_ % 7 == 3  | Thursday |

* Return the corresponding day of week from our calculation
* Return string of _day of the week_

| Input | Output |
| :------------- |:------------- | 
| 06/24/2020 | "On 06/24/2020 the day of the week was Wednesday" |

## Known Bugs
_The further the inputted date is from 01/01/1970 the less accurate the getDayOfTheWeek() function gets. I think this is because of how the JS method getTime() works. Would need to update application with either Moment.js or Day.js._

## Support and contact details

_For support or questions please contact me at noel.kirkland@gmail.com_

## Technologies Used

_HTML, CSS, JavaScript, Jquery, Jest, Webpack_

### License

*This project uses the following license: [MIT](https://opensource.org/licenses/MIT)

Intellectual property of Noel Kirkland & Taylor Phillips - 2020
