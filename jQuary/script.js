let today = moment();
$("#currentDay").text(today.format("dddd MMMM Do YYYY"))

const day = [ 
    {hour: "9Am", hourNumber: 9}, {hour: "10Am", hourNumber: 10}, {hour: "11Am", hourNumber: 11}, {hour: "12Am", hourNumber: 12}, {hour: "1pm", hourNumber: 13},
     {hour: "2pm", hourNumber: 14},  {hour: "3pm", hourNumber: 15}, {hour: "4pm", hourNumber: 16}, {hour: "5pm", hourNumber: 17}
]
const timeOfDay = [
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17"
]

day.forEach(function(today) {
    let row = $("<div>").addClass("row");
    let hourClass = getHourClass(today.hourNumber)
    let timeblock = $("<div>").text(`${today.hour}`).addClass("hour")
    let reminder = $("<div>").addClass(" col-md-8 description").addClass(hourClass);
    let data = $("<textarea>").addClass("col-md-12").attr("id", today.hourNumber);
    
     
});