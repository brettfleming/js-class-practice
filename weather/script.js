let today = moment();
$("#today").text(today.format("dddd MMMM Do"));
$("#day1Date").text(today.format("dddd MMMM Do"));
$("#day2Date").text(today.add(1, "days").format("dddd MMMM Do"));
$("#day3Date").text(today.add(2, "days").format("dddd MMMM Do"));
$("#day4Date").text(today.add(3, "days").format("dddd MMMM Do"));
$("#day5Date").text(today.add(4, "days").format("dddd MMMM Do"));

let searchBtn = document.getElementById('searchBtn');
let searchedCity = document.getElementById('searchedCity');
let cityName = document.getElementById("city");
let todaysTemp = document.getElementById('temperature');
let todaysWindSpeed = document.getElementById('wind-speed');
let todayshumidity = document.getElementById('humidity');
let pastCities = document.getElementById('pastCities');

let day1Wind = document.getElementById('day1W');
let day2Wind = document.getElementById('day2W');
let day3Wind = document.getElementById('day3W');
let day4Wind = document.getElementById('day4W');
let day5Wind = document.getElementById('day5W');

let day1Temp = document.getElementById('day1T');
let day2Temp = document.getElementById('day2T');
let day3Temp = document.getElementById('day3T');
let day4Temp = document.getElementById('day4T');
let day5Temp = document.getElementById('day5T');