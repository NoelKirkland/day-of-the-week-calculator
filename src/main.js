import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { validateInput, getDayOfTheWeek } from '../src/weekday-calculator.js';


$(document).ready(function () {
  $('#submit-button').submit(function (event) {
      event.preventDefault();
      let userInputtedMonth = parseInt($("input#month").val());
      let userInputtedDay = parseInt($("input#day").val());
      let userInputtedYear = parseInt($("input#year").val());
    if (validateInput(userInputtedMonth, userInputtedDay, userInputtedYear) === "Valid"){
      let dayOfWeek = getDayOfTheWeek(userInputtedMonth, userInputtedDay, userInputtedYear);
      $("#outputDay").show();
      $("#weekdayShow").text(dayOfWeek);
    }
  });
});

