// Menu Button Controls
const menuBtn = document.getElementById("menu-bars");
const leftSidebar = document.querySelector(".game-sidebar");
const contentBody = document.querySelector(".section-body-container");

// Temp Container
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
const videoViewMoreIcon = document.querySelector(".view-more-vid--icon");
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
const playlistArrayId = ["-9gEgshJUuY", "ok_-2KkKQF4", "3sp0wd8j8CQ", "aL14iT2ix0w", "7tNtU5XFwrU", "8NzYo0jmYek", "mZHTwjLznVg", "-6v0vFVp52w", "FQRtxvUc8W4", "3bp1kIUlYEM", "wKwR2CRbVVo", "6Irus3d5f0E", "7NOSDKb0HlU", "tCs48OFv7xA", "GDQnA1LVCWA", "rXsZk4Mz_Ac"];
const playlistRefresh = document.querySelector(".playlist-random");

playlistRefresh.addEventListener("click", () => {  
        var id = playlistArrayId[Math.floor(Math.random()*playlistArrayId.length)];
        document.getElementById("playlist-embed").innerHTML = `<iframe id="embed-music" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" src="https://www.youtube.com/embed/${id}" frameborder="0" modestbranding="1"></iframe>`
});

var videoListings = ["r9BFJCNk774", "5THFjkoOQJ8", "pFJyKUCKzko", "6xbc7WxUryM", "EhZDu7pd8kI", "yIH9XX6TjrM", "2y9KT-SxUUk", "Msrjv7S9TU0", "Ya5Z1ocmbec", "5oiqPSGt0ec", "vcYjDOt5JyY", "L9wEy0ox5_U", "KtT57G8kT20", "FbWqTKEb1Ss", "d2z9lDnsAYY", "0oM5j6EXVgw", "W3wnDWN_Qt0", "fCBzFk4Zvjk", "2iLAGer1J9Q", "xe8-DGB5oyA", "LhhLaIEDXyE", "pSeAhN7I79M", "omX-22EY2DA", "QXnUYl6RmH0", "H0uXZgkX5lI", "NZaZlaMlRAM", "d-T3hfx8pTw", "eSAyUxuxRdU", "ESrclrXg1Bo", "XMFYn1-hVPc", "GX-2wHewXVU", "nQaIsuaVmM0", "dMp236-YFvI", "1RzUQ_aSOTQ", "fv902eXOiq8", "39rsVnx_WN0", "78iMxGxKFFk", "lWihgrstcyo", "uIXlZUZx0P8", "qsrU1Dq8Q_c", "IYOOL9d8Zz0", "74vL2lziMx0",]

// Video Lounge Shuffle Random | Prev - Next
const videoListArrayId = videoListings;
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

// Gamelounge Button Functions
menuBtn.addEventListener("click", () => {
    leftSidebar.classList.toggle("game-sidebar-minimize");
    contentBody.classList.toggle("section-body-container-maximize");
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

videoViewMoreIcon.addEventListener("click", () => {
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