// Get Current Date JS Logic
const date = new Date(Date.now());
currentDate = date.toLocaleString("en-US", {month: "short", day: "numeric", year: "numeric"}); // remove unnecessary information from date and specify only what is needed

document.getElementById("currentDate-gamelounge-home").innerHTML = currentDate;

document.cookie = "AC-C=ac-c;expires=Fri, 31 Dec 9999 23:59:59 GMT;path=/;SameSite=None;Secure"