// MENU BUTTON ALERT / Temp
const menuBtn = document.getElementById("menu-bars");
const tempContainer = document.getElementById("temp-container");
const tempExit = document.querySelector(".temp-exit");
const moreLive = document.getElementById("more-live");

// Section Containers
const gameloungeBodyContainer = document.querySelector(".game-lounge-body-container");
const playlistContainer = document.getElementById("playlist-container");
const formContainer = document.querySelector(".gamelounge-contact-container");
const disclaimerContainer = document.querySelector(".fair-use-disclaimer--container");
const downloadContainer = document.querySelector(".gamelounge-download-container");
const searchField = document.getElementById("gamelounge-search");
const leaderboardContainer = document.getElementById("leaderboard");
const leaderboardClick = document.querySelector(".apex-leaderboards");
const publisherContainer = document.querySelector(".publishments-container");
const videoLoungeContainer = document.querySelector(".video-lounge-container");

// Icon Enter and Exit
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
const publisherIcon = document.getElementById("publisher-icon");
const publishExit = document.querySelector(".publishment-exit");
const videoLoungeIcon = document.getElementById("video-icon");
const videoLoungeExit = document.querySelector(".video-lounge-exit");

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

// Playlist Switch Random
const playlistArrayId = ["-9gEgshJUuY", "ok_-2KkKQF4", "3sp0wd8j8CQ", "aL14iT2ix0w", "7tNtU5XFwrU", "8NzYo0jmYek", "mZHTwjLznVg", "-6v0vFVp52w", "3bp1kIUlYEM", "wKwR2CRbVVo"];
const playlistRefresh = document.querySelector(".playlist-random");

playlistRefresh.addEventListener("click", () => {  
        var id = playlistArrayId[Math.floor(Math.random()*playlistArrayId.length)];
        document.getElementById("playlist-embed").innerHTML = `<iframe id="embed-music" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" src="https://www.youtube.com/embed/${id}" frameborder="0" modestbranding="1"></iframe>`
});

// Video Lounge Shuffle Random | Prev - Next
const videoListArrayId = ["5oiqPSGt0ec", "J-eiLtQpf2E", "eSAyUxuxRdU", "uIXlZUZx0P8"];
const videoListShuffle = document.querySelector(".video-shuffle");
const videoListPrev = document.querySelector(".video-prev");
const videoListNext = document.querySelector(".video-next");

videoListShuffle.addEventListener("click", () => {
    var id = videoListArrayId[Math.floor(Math.random()*playlistArrayId.length)];
    document.getElementById("video-embed").innerHTML = `<iframe id="embed-video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" src="https://www.youtube.com/embed/${id}" frameborder="0"></iframe>`
});

var i = 0;
videoListPrev.addEventListener("click", () => {
    if(i <= 0) i = videoListArrayId.length; {   
        i--;
        var id = videoListArrayId[i];
        document.getElementById("video-embed").innerHTML = `<iframe id="embed-video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" src="https://www.youtube.com/embed/${id}" frameborder="0"></iframe>`
    };
});

videoListNext.addEventListener("click", () => {
    if(i >= videoListArrayId.length-1) i = -1; {
        i++;
        var id = videoListArrayId[i];
        document.getElementById("video-embed").innerHTML = `<iframe id="embed-video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" src="https://www.youtube.com/embed/${id}" frameborder="0"></iframe>`
    };
});

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

moreLive.addEventListener("click", () => {
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

publisherIcon.addEventListener("click", () => {
    gameloungeBodyContainer.classList.toggle("hide");
    publisherContainer.classList.toggle("hide");
});

publishExit.addEventListener("click", () => {
    gameloungeBodyContainer.classList.toggle("hide");
    publisherContainer.classList.toggle("hide");
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

videoLoungeIcon.addEventListener("click", () => {
    gameloungeBodyContainer.classList.toggle("hide");
    videoLoungeContainer.classList.toggle("hide");
});

videoLoungeExit.addEventListener("click", () => {
    gameloungeBodyContainer.classList.toggle("hide");
    videoLoungeContainer.classList.toggle("hide");
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