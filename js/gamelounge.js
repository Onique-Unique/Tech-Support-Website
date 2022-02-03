const gameloungeBodyContainer = document.querySelector(".game-lounge-body-container");
const formContainer = document.querySelector(".gamelounge-contact-container");
const disclaimerContainer = document.querySelector(".fair-use-disclaimer--container");
const downloadContainer = document.querySelector(".gamelounge-download-container");

const emailIcon = document.getElementById("email-icon");
const emailExit = document.querySelector(".form-exit");
const settingsIcon = document.getElementById("settings-icon");
const settingsIconAlt = document.getElementById("settings-icon-min");
const disclaimerExit = document.querySelector(".disclaimer-exit");
const downloadIcon = document.querySelector(".download-right-arrow");
const downloadIconSecondary = document.querySelector(".download-right-arrow-secondary");
const downloadExit = document.getElementById("download-back");

document.cookie = "AC-C=ac-c;expires=Fri, 31 Dec 9999 23:59:59 GMT;path=/;SameSite=None;Secure"

// Index Banner Date Logic 
// Get Current Date JS Logic
const date = new Date(Date.now());
currentDate = date.toLocaleString("en-US", {month: "short", day: "numeric", year: "numeric"}); // remove unnecessary information from date and specify only what is needed

const dot = "&bull; ";

const dateMain = ["currentDate-gamelounge-1", "currentDate-gamelounge-2", "currentDate-gamelounge-3", "currentDate-gamelounge-4",];
for(i = 0; i < dateMain.length; i++){
    if(i  < 1){
        document.getElementById(dateMain[i]).innerHTML = "This Week " + currentDate;
    }else if (i === 1){
        document.getElementById(dateMain[i]).innerHTML = "Today " + currentDate;
    // }else if(i === 2){
    //     document.getElementById(dateMain[i]).innerHTML = currentDate + " " + dot + " Popular"; - Top Videos Section
    } else if (i > 2){
        document.getElementById(dateMain[i]).innerHTML = currentDate + " " + dot + " News";
    }
    
};

emailIcon.addEventListener("click", () => {
    gameloungeBodyContainer.classList.toggle("hide");
    formContainer.classList.toggle("hide");
});

emailExit.addEventListener("click", () => {
    gameloungeBodyContainer.classList.toggle("hide");
    formContainer.classList.toggle("hide");
});

//
settingsIcon.addEventListener("click", () => {
    gameloungeBodyContainer.classList.toggle("hide");
    disclaimerContainer.classList.toggle("hide");
});

settingsIconAlt.addEventListener("click", () => {
    gameloungeBodyContainer.classList.toggle("hide");
    disclaimerContainer.classList.toggle("hide");
});

disclaimerExit.addEventListener("click", () => {
    gameloungeBodyContainer.classList.toggle("hide");
    disclaimerContainer.classList.toggle("hide");
});

downloadIcon.addEventListener("click", () => {
    gameloungeBodyContainer.classList.toggle("hide");
    downloadContainer.classList.toggle("hide");
});

downloadIconSecondary.addEventListener("click", () => {
    gameloungeBodyContainer.classList.toggle("hide");
    downloadContainer.classList.toggle("hide");
});

downloadExit.addEventListener("click", () => {
    gameloungeBodyContainer.classList.toggle("hide");
    downloadContainer.classList.toggle("hide");
})