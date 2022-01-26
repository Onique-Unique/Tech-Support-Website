// Index Banner Date Logic 

// Get Current Date JS Logic
const date = new Date(Date.now());
currentDate = date.toLocaleString("en-US", {month: "short", day: "numeric", year: "numeric"}); // remove unnecessary information from date and specify only what is needed

document.getElementById("currentDate-index").innerHTML = currentDate;

