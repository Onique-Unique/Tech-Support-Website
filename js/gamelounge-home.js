const homeBtn = document.querySelector(".enter-lounge");
const infoBtn = document.querySelector(".info-icon");
const infoExitBtn = document.querySelector(".info-exit");
const gameloungeBodyContainer = document.querySelector(".game-lounge-landing--main");
const infoContainer = document.querySelector(".info-container");
const scrollLeft = document.querySelector(".left-icon");
const scrollRight = document.querySelector(".right-icon");

// Get Current Date JS Logic
// const date = new Date(Date.now());
// currentDate = date.toLocaleString("en-US", {month: "short", day: "numeric", year: "numeric"}); // remove unnecessary information from date and specify only what is needed

// document.getElementById("currentDate-gamelounge-home").innerHTML = currentDate;

document.cookie = "AC-C=ac-c;expires=Fri, 31 Dec 9999 23:59:59 GMT;path=/;SameSite=None;Secure";

// homeBtn.addEventListener("click", () => {
//     alert("Welcome To The Soft Launch For The Exclusive Apex Legends Mobile Game Lounge, Explore New Features/ Additions Inside The Game Lounge - Follow Details Mentioned In Discord And Report Feedback To The Community Developer. Click Ok/Close To Proceed...");
// });

infoBtn.addEventListener("click", () => {
    gameloungeBodyContainer.classList.toggle("filter-overlay");
    infoContainer.classList.toggle("hide");
});

infoExitBtn.addEventListener("click", () => {
    gameloungeBodyContainer.classList.toggle("filter-overlay");
    infoContainer.classList.toggle("hide");
});

var infoImages = ["user-guide-1.jpeg", "user-guide-2.jpeg", "user-guide-3.jpeg", "user-guide-4.jpeg" ];
var i = 0;

scrollLeft.addEventListener("click", () => {
    if(i <= 0) i = infoImages.length; {   
        i--;
        var id = infoImages[i];
        document.getElementById("info-carousel").innerHTML = `<img src="/images/game-lounge-img/user-guide/${id}" alt="Apex-Legends-Mobile User Guide">`
    };
});

scrollRight.addEventListener("click", () => {
    if(i >= infoImages.length-1) i = -1; {
        i++;
        var id = infoImages[i];
        document.getElementById("info-carousel").innerHTML = `<img src="/images/game-lounge-img/user-guide/${id}" alt="Apex-Legends-Mobile User Guide">`
    };
});