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
const searchContainer = document.querySelector(".search-results");
const contentModalContainer = document.getElementById("content-modal");
const publisherContainer = document.querySelector(".publishments-container");
const videoLoungeContainer = document.querySelector(".video-lounge-container");
const newsFeaturedListings = document.getElementById("featured-news-listing");
const newsOtherListings = document.querySelector(".other-news-listings");

// Icon Enter and Exit
const playlistIcon = document.getElementById("yt-music-icon");
const playlistExit = document.querySelector(".playlist-exit");
const emailIcon = document.getElementById("email-icon");
const emailExit = document.querySelector(".form-exit");
const settingsIcon = document.getElementById("settings-gear");
const settingsIconAlt = document.getElementById("settings-gear-min");
const disclaimerExit = document.querySelector(".disclaimer-exit");
const articleNewsIcon = document.getElementById("latest-news-icon");
const articleNewsIconExit = document.querySelector(".content-modal-exit");
const downloadIcon = document.querySelector(".download-right-arrow");
const downloadIconSecondary = document.querySelector(".download-right-arrow-secondary");
const downloadExit = document.getElementById("download-back");
const publisherIcon = document.getElementById("publisher-icon");
const publishExit = document.querySelector(".publishment-exit");
const videoLoungeIcon = document.getElementById("video-icon");
const videoViewMoreIcon = document.querySelector(".view-more-vid--icon");
const videoLoungeExit = document.querySelector(".video-lounge-exit");
const videoLoungeExit2 = document.querySelector(".video-lounge-exit-2");
const searchResultsExit = document.querySelector(".search-results-exit");

//Youtube Search Results & Popup Modal
const infoPolicy = document.querySelector(".info-icon");
// const modalContainer = document.querySelector(".important-terms-container");
// const modalExit = document.querySelector(".important-terms-exit");
const policyOpen = document.getElementById("policy-icon");

// Consent Privacy policy PopUp
const noticeModal = document.querySelector(".consent-modal");
const cancelNoticeBtn = document.querySelector(".consent-btn.cancel");
const acceptNoticeBtn = document.querySelector(".consent-btn.accept");

cancelNoticeBtn.addEventListener("click", function (){
    noticeModal.classList.remove("active");
})
acceptNoticeBtn.addEventListener("click", function (){
    noticeModal.classList.remove("active");
    localStorage.setItem("noticeAccepted", "yes");
})

setTimeout(function (){
    let noticeAccepted = localStorage.getItem("noticeAccepted")
    if (noticeAccepted != "yes"){
        noticeModal.classList.add("active")
    }
}, 1000)


// Cookie Settings
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

// Contact Send to avoid spam and hide email from email crawlers
const contactSend = document.getElementById("contact-submit");
const action = "https://formsubmit.co/oniquecampbell@yahoo.com";

contactSend.addEventListener("click", () => {
    document.getElementById("gamelounge-contact").action = action;
});

// Playlist Switch Random
const playlistArrayId = ["-9gEgshJUuY", "ok_-2KkKQF4", "3sp0wd8j8CQ", "aL14iT2ix0w", "7tNtU5XFwrU", "8NzYo0jmYek", "mZHTwjLznVg", "-6v0vFVp52w", "FQRtxvUc8W4", "3bp1kIUlYEM", "wKwR2CRbVVo", "6Irus3d5f0E", "7NOSDKb0HlU", "tCs48OFv7xA", "GDQnA1LVCWA", "rXsZk4Mz_Ac"];
const playlistRefresh = document.querySelector(".playlist-random");

playlistRefresh.addEventListener("click", () => {  
        var id = playlistArrayId[Math.floor(Math.random()*playlistArrayId.length)];
        document.getElementById("playlist-embed").innerHTML = `<iframe id="embed-music" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" src="https://www.youtube.com/embed/${id}" frameborder="0" modestbranding="1"></iframe>`
});

// Videos This Week
var videoListings = ["KvXqMuXzL0o", "q6xEOfxUxJo", "3lJ73Wll53w", "-OabsRkRluM", "rpfC5hHnPNA", "9axWqg9nf2c", "4OfXxXSvlgM", "jNWqOldhrxM", "mIMxxJAOLto", "YsE3pYsjGoA", "Q17I71UazXo", "GaJL2j_XNRQ", "Rtxf-kVYF8M", "twz76Mfl59E", "sSEvggjYRn4", "hhfuVenwi7s", "cDTufyQ8_W0", "xxnL259A83M", "xgqHq4v1KJ8", "VqkSFDLfnuI", "zGTfcF5GHWI", "inCU4wVvKlM", "Mt5IrQVN0Gk", "IxH0OGgRs14", "aNJEGMjkmB4", "R6eEnH8Z8yU", "V3Lhy_hVRYc", "y2oWaeVVQuo", "vLcG9WYCGOg", "frPP4N5AkPY", "aZgCa5IQ28U", "1zngyWudp70", "Pvqm6_mplRs", "N4rBo2vDw6A", "fCBzFk4Zvjk", "blyhIr6Mfh0", "KZY9o4MQakU", "WUMtFWa-sXI", "LulobCmKS-c", "fLVvK46MLRM", "eknzBb2gRlw", ]
var featuredListings = [];

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


// OLD SEARCH SCRIPT
// writing a script for the search bar function logic
// for the explore page will identify different sections searched using location.href = "#idName"
// function openfile() {
//     // Game Lounge Search Bar Script
//     // a script allowing search user to find an option between multiple strings/ words that may lead to the same content
//     String.prototype.includesOneof = function(arrayOfStrings) {

//         if (!Array.isArray(arrayOfStrings)) {
//             throw new Error("includesOneOf only accepts an array");
//         }
//         return arrayOfStrings.some(str => this.includes(str));
//     };

//     var info = document.getElementById("gamelounge-search").value;
//     var action1 = "https://www.youtube.com/results";
//     var action2 = "https://www.youtube.com/results";

//     if (!info.toLowerCase().includesOneof(["apex", "legends", "alm"])) {
//         document.getElementById("gamelounge-search").value = info + " apex legends mobile";
//         document.getElementById("form-yt--search").action = action1; 
//     }else {
//         document.getElementById("form-yt--search").action = action2;
//     };
// };

// NEW SEARCH SCRIPT UTILIZING YOUTUBE SEARCH API
const ytKey = "AIzaSyBtC_bpI8ogcjncnrXJlMfCGzdn2nP6CKU"
gapi.load("client", loadClient);
  
function loadClient() {
    gapi.client.setApiKey(ytKey);
    return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
        .then(function() { console.log("GAPI client loaded for API"); },
                function(err) { console.error("Error loading GAPI client for API", err); });
};

// const gameloungeBodyContainer = document.querySelector(".game-lounge-body-container");
// const searchContainer = document.querySelector(".search-results");
const ytForm = document.getElementById("form-yt--search");
const keywordInput = document.getElementById("gamelounge-search");
const maxresultInput = document.getElementById('maxresult-input');
const orderInput = document.getElementById('order-input');
const videoList = document.getElementById('videoListContainer');
const newH2 = document.getElementById("main-h2");
const tipsH2 = document.getElementById("tips-h2");
const gameplayH2 = document.getElementById("gameplay-h2");
const funnyH2 = document.getElementById("funny-h2");

// Expected Thumbnail to be available after a search is made - MAX 50 is populated - Used for thumbnail unique identifier
const thumbnailList = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50];

var pageToken = '';

// -------------SUB MENU SEARCH SELECTIONS-------------------
newH2.addEventListener("click", () => {
    keywordInput.value = "News";
    document.getElementById("submit-icon").click();
    keywordInput.value = "";
});

tipsH2.addEventListener("click", () => {
    keywordInput.value = "tips and tricks";
    document.getElementById("submit-icon").click();
    keywordInput.value = "";
});

gameplayH2.addEventListener("click", () => {
    keywordInput.value = "gameplay";
    document.getElementById("submit-icon").click();
    keywordInput.value = "";
});

funnyH2.addEventListener("click", () => {
    keywordInput.value = "funny";
    document.getElementById("submit-icon").click();
    keywordInput.value = "";
});

var searchInput = document.querySelector(".search-input");
searchInput.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("submit-icon").click();
    }
});

ytForm.addEventListener('submit', e => {
    e.preventDefault();
    // if (!modalContainer.classList.contains("policy-appear")) {
        gameloungeBodyContainer.classList.add("hide");
        searchContainer.classList.remove("hide");
        window.scroll({top: 0, behavior: "smooth"});
        // modalContainer.classList.add("policy-appear");
        execute();
    // // } else if (modalContainer.classList.contains("policy-appear")) {
    //     gameloungeBodyContainer.classList.add("hide");
    //     searchContainer.classList.remove("hide");
    //     window.scroll({top: 0, behavior: "smooth"});
    //     modalContainer.classList.remove("policy-appear");
    //     execute();
    // // }
});
  
function paginate(e, obj) {
    e.preventDefault();
    pageToken = obj.getAttribute('data-id');
    execute();
    window.scroll({top: 0, behavior: "smooth"}); // scroll back to top where container is
}
  
// Make sure the client is loaded before calling this method.
function execute() {
    const searchString = keywordInput.value + " Apex Legends Mobile";
    const maxresult = maxresultInput.value;
    const orderby = orderInput.value;
  
    var arr_search = {
        "part": 'snippet',
        "type": 'video',
        "order": orderby,
        "maxResults": maxresult,
        "q": searchString
    };
  
    if (pageToken != '') {
        arr_search.pageToken = pageToken;
    }
  
    return gapi.client.youtube.search.list(arr_search)
    .then(function(response) {
        // Handle the results here (response.result has the parsed body).
        let listItems = response.result.items;
        if (listItems) {
            let output = '<h4 id= "search-h4">Search Results</h4><ul>';

                        newVideoIdArray = [];

                        newThumbnailIdArray = [];

                    listItems.forEach(item => {
                        // Applying unique thumbnail ID for each returned thumbnail up to 50 and pulling video ID and Title
                        let newthumbnailList = thumbnailList;
                        i++;
                        currentThumbnail = newthumbnailList[i];
                        console.log(currentThumbnail);
                        videoId = item.id.videoId;
                        console.log(videoId);
                        videoTitle = item.snippet.title;

                        // Populating / pushing videoID results to newVideoArray list
                        newVideoIdArray.push(videoId);                    
                        allVideoIdArray = newVideoIdArray;

                         // Populating / pushing thumbnail-# results to newThumbnailIdArray list
                        newThumbnailIdArray.push(`thumbnail-${currentThumbnail}`);                    
                        allThumbnailIdArray = newThumbnailIdArray;

                        // Collecting each output to be sent and populate innerHTML
                        output += `
                        <div class="data-num"><li><a><img class="search-thumbnail" id="thumbnail-${currentThumbnail}" src="https://i3.ytimg.com/vi/${videoId}/hqdefault.jpg" /></a><p id="para-search-return">${videoTitle}</p></li></div>
                    `;
                    });
                // output += ` // Original output 1 insert-------------------------------
                //     <div class="data-num"><li><a data-fancybox href="https://www.youtube.com/watch?v=${videoId}" target="_blank"><img class="search-thumbnail" id="thumbnail-${currentThumbnail}" src="https://i3.ytimg.com/vi/${videoId}/hqdefault.jpg" /></a><p id="para-search-return">${videoTitle}</p></li></div>
                // `;
            output += '</ul>';
            
            // original output 2 insert-----------------------------------
            // <div class="data-num"><li><a data-fancybox href="https://www.youtube.com/watch?v=${videoId}" target="_blank"><img id="search-thumbnail" src="http://i3.ytimg.com/vi/${videoId}/hqdefault.jpg" /></a><p id="para-search-return">${videoTitle}</p></li></div>
            // -------------------------------------------------------

            // Alternative Prev | Next Option---------------------------
            // if (response.result.prevPageToken) {
            //     output += `<br><a class="paginate" href="#" data-id="${response.result.prevPageToken}" onclick="paginate(event, this)">Prev</a>`;
            // }
  
            // if (response.result.nextPageToken) {
            //     output += `<a href="#" class="paginate" data-id="${response.result.nextPageToken}" onclick="paginate(event, this)">Next</a>`;
            // }
  
            // Output list populated
            videoList.innerHTML = output;

            // Console logging completed Arrays returned
            console.log(allVideoIdArray);
            console.log(allThumbnailIdArray);

            // ---------------LOGICAL SCRIPT FOR RETURNED SEARCH QUERY/ RESULTS VIDEOS------------------------------- 
            for(let i = 0; i < allThumbnailIdArray.length && i < allVideoIdArray.length; i++) {
                document.getElementById(allThumbnailIdArray[i]).addEventListener("click", () => {
                    console.log(allThumbnailIdArray[i]);
                    var id = allVideoIdArray[i];
                    searchContainer.classList.toggle("hide");
                    videoLoungeContainer.classList.toggle("hide");
                    videoLoungeExit.classList.add("hide");
                    videoLoungeExit2.classList.remove("hide");
                    document.getElementById("video-embed").innerHTML = `<iframe id="embed-video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" src="https://www.youtube.com/embed/${id}" frameborder="0"></iframe>`
                });
            };

            // Reduce The Array Back to 0 to allow unique thumbnail id count to restart when user exit search results
            listItems.forEach(() => {
                let newthumbnailList = thumbnailList;
                i--;
                currentThumbnail = newthumbnailList[i];
                console.log(currentThumbnail);
            });
        }
    },
    function(err) { console.error("Execute error", err); });
};

// Gamelounge Button/ Click Functions
menuBtn.addEventListener("click", () => {
    leftSidebar.classList.toggle("game-sidebar-maximize");
    contentBody.classList.toggle("section-body-container-minimize");
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

articleNewsIcon.addEventListener("click", () => {
    contentModalContainer.classList.toggle("hide");
    leftSidebar.classList.toggle("game-sidebar-maximize");
    contentBody.classList.toggle("section-body-container-minimize");
});

articleNewsIconExit.addEventListener("click", () => {
    contentModalContainer.classList.toggle("hide");
    leftSidebar.classList.toggle("game-sidebar-maximize");
    contentBody.classList.toggle("section-body-container-minimize");
});

newsFeaturedListings.addEventListener("click", () => {
    contentModalContainer.classList.toggle("hide");
});

newsOtherListings.addEventListener("click", () => {
    contentModalContainer.classList.toggle("hide");
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

videoLoungeExit2.addEventListener("click", () => {
    searchContainer.classList.toggle("hide");
    videoLoungeContainer.classList.toggle("hide");
});

searchResultsExit.addEventListener("click", () => {
    searchContainer.classList.add("hide");
    gameloungeBodyContainer.classList.remove("hide");
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

infoPolicy.addEventListener("click", () => {
    // searchContainer.classList.toggle("filter-overlay");
    // modalContainer.classList.toggle("hide");
    searchContainer.classList.toggle("hide");
    disclaimerContainer.classList.toggle("hide");
    // modalContainer.classList.remove("policy-appear");
});

// modalExit.addEventListener("click", () => {
//     // searchContainer.classList.toggle("filter-overlay");
//     modalContainer.classList.toggle("hide");
//     searchContainer.classList.remove("policy-shadow");
// });

policyOpen.addEventListener("click", () => {
    gameloungeBodyContainer.classList.toggle("hide");
    disclaimerContainer.classList.toggle("hide");
});