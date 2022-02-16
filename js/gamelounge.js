// MENU BUTTON ALERT
const menuBtn = document.getElementById("menu-bars");
const tempContainer = document.getElementById("temp-container");
const tempExit = document.querySelector(".temp-exit");

const gameloungeBodyContainer = document.querySelector(".game-lounge-body-container");
const playlistContainer = document.getElementById("playlist-container");
const formContainer = document.querySelector(".gamelounge-contact-container");
const disclaimerContainer = document.querySelector(".fair-use-disclaimer--container");
const downloadContainer = document.querySelector(".gamelounge-download-container");
const searchField = document.getElementById("gamelounge-search");
const leaderboardContainer = document.getElementById("leaderboard");
const leaderboardClick = document.querySelector(".apex-leaderboards");

const playlistIcon = document.getElementById("up-icon");
const playlistExit = document.querySelector(".playlist-exit");
const emailIcon = document.getElementById("email-icon");
const emailExit = document.querySelector(".form-exit");
const settingsIcon = document.getElementById("settings-icon");
const settingsIconAlt = document.getElementById("settings-icon-min");
const disclaimerExit = document.querySelector(".disclaimer-exit");
const leaderboardIcon = document.getElementById("community-icon");
const leaderboardExit = document.querySelector(".leaderboard-exit");
const downloadIcon = document.querySelector(".download-right-arrow");
const downloadIconSecondary = document.querySelector(".download-right-arrow-secondary");
const downloadExit = document.getElementById("download-back");

document.cookie = "AC-C=ac-c;expires=Fri, 31 Dec 9999 23:59:59 GMT;path=/;SameSite=None;Secure";

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
    }// else if(i === 2){
    //     document.getElementById(dateMain[i]).innerHTML = currentDate + " " + dot + " Popular"; - Top Videos Section
    // } else if (i > 2){
    //     document.getElementById(dateMain[i]).innerHTML = currentDate + " " + dot + " News";
    // }
};


// writing a script for the search bar function logic
// for the explore page will identify different sections searched using location.href = "#idName"
function openfile() {
    // Game Lounge Search Bar Script
    // a script allowing search user to find an option between multiple strings/ words that may lead to the same content
    String.prototype.includesOneof = function(arrayOfStrings) {

        if (!Array.isArray(arrayOfStrings)) {
            throw new Error("includesOneOf only accepts an array");
        }
        return arrayOfStrings.some(str => this.includes(str));
    };

    var info = document.getElementById("gamelounge-search").value;
    var action1 = "https://www.youtube.com/results";
    var action2 = "https://www.youtube.com/results";

    if (!info.toLowerCase().includesOneof(["apex", "legends", "alm"])) {
        document.getElementById("gamelounge-search").value = info + " apex legends mobile";
        document.getElementById("form-yt--search").action = action1; 
    }else {
        document.getElementById("form-yt--search").action = action2;
    };
};

menuBtn.addEventListener("click", () => {
    gameloungeBodyContainer.classList.toggle("filter-overlay");
    tempContainer.classList.toggle("hide");
    window.scroll({top: 0, behavior: "smooth"}); // scroll back to top where container is
});

tempExit.addEventListener("click", () => {
    gameloungeBodyContainer.classList.toggle("filter-overlay");
    tempContainer.classList.toggle("hide");
});

playlistIcon.addEventListener("click", () => {
    gameloungeBodyContainer.classList.toggle("filter-overlay");
    playlistContainer.classList.toggle("hide");
    window.scroll({top: 0, behavior: "smooth"});
});

playlistExit.addEventListener("click", () => {
    gameloungeBodyContainer.classList.toggle("filter-overlay");
    playlistContainer.classList.toggle("hide");
});

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

leaderboardIcon.addEventListener("click", () => {
    gameloungeBodyContainer.classList.toggle("hide");
    leaderboardContainer.classList.toggle("hide");
});

leaderboardExit.addEventListener("click", () => {
    gameloungeBodyContainer.classList.toggle("hide");
    leaderboardContainer.classList.toggle("hide");
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
});