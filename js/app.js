var m_names = new Array("Jan", "Feb", "Mar",
"Apr", "May", "Jun", "Jul", "Aug", "Sep",
"Oct", "Nov", "Dec");

var d_names = new Array("Sun", "Mon", "Tues",
"Wed", "Thurs", "Fri", "Sat");

function leftPad(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function convertTo12(i) {
  if (i > 12) {
    i = i-12;
  }
  if (i == 0) {
    i = 12;
  }
  return i;
}

function getAmPm(i) {
  if (i > 11) {
    return "PM";
  } else {
    return "AM";
  }
}

var bg_num = Math.floor(Math.random() * 40) + 1;
var bg_string = "url(images/bgs/bg" + bg_num + ".jpg)";
document.documentElement.style.backgroundImage = bg_string;

var d = new Date();

var curr_hour = d.getHours();
var curr_minute = d.getMinutes();
var time_string = convertTo12(curr_hour) + ":" + leftPad(curr_minute) + " " + getAmPm(curr_hour);

document.getElementById("current-time").innerHTML = time_string;

var curr_day = d.getDay();
var curr_date = d.getDate();
var curr_month = d.getMonth();
var curr_year = d.getFullYear();
var date_string = d_names[curr_day] + " " + curr_date + " " + m_names[curr_month] + ", " + curr_year;

document.getElementById("current-date").innerHTML = date_string;
