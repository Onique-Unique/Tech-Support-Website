const homeBtn = document.querySelector(".enter-lounge");

// Get Current Date JS Logic
const date = new Date(Date.now());
currentDate = date.toLocaleString("en-US", {month: "short", day: "numeric", year: "numeric"}); // remove unnecessary information from date and specify only what is needed

document.getElementById("currentDate-gamelounge-home").innerHTML = currentDate;

document.cookie = "AC-C=ac-c;expires=Fri, 31 Dec 9999 23:59:59 GMT;path=/;SameSite=None;Secure";

homeBtn.addEventListener("click", () => {
    alert("You Have Been Invited To Participate In A Server Stress Test - Follow Details Mentioned In Discord And Report Feedback To The Community Developer. Click Ok To Proceed...");
});