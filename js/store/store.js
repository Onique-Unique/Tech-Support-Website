'use strict';

// notification toast variables
const notificationToast = document.querySelector('[data-toast]');
const toastCloseBtn = document.querySelector('[data-toast-close]');

// notification toast eventListener
toastCloseBtn.addEventListener('click', function () {
  notificationToast.classList.add('closed');
});


// mobile menu variables
const mobileMenuOpenBtn = document.querySelectorAll('[data-mobile-menu-open-btn]');
const mobileMenu = document.querySelectorAll('[data-mobile-menu]');
const mobileMenuCloseBtn = document.querySelectorAll('[data-mobile-menu-close-btn]');
const overlay = document.querySelector('[data-overlay]');
const mobileClose1 = document.getElementById("mobile-close-1");
const mobileClose2 = document.getElementById("mobile-close-2");
const mobileClose3 = document.getElementById("mobile-close-3");
const mobileClose4 = document.getElementById("mobile-close-4");
const mobileClose5 = document.getElementById("mobile-close-5");

for (let i = 0; i < mobileMenuOpenBtn.length; i++) {

  // mobile menu function
  const mobileMenuCloseFunc = function () {
    mobileMenu[i].classList.remove('active');
    overlay.classList.remove('active');
  }

  mobileMenuOpenBtn[i].addEventListener('click', function () {
    mobileMenu[i].classList.add('active');
    overlay.classList.add('active');
  });

  mobileMenuCloseBtn[i].addEventListener('click', mobileMenuCloseFunc);
  overlay.addEventListener('click', mobileMenuCloseFunc);

  mobileClose1.addEventListener('click', mobileMenuCloseFunc);
  mobileClose2.addEventListener('click', mobileMenuCloseFunc);
  mobileClose3.addEventListener('click', mobileMenuCloseFunc);
  mobileClose4.addEventListener('click', mobileMenuCloseFunc);
  mobileClose5.addEventListener('click', mobileMenuCloseFunc);

}


// accordion variables
const accordionBtn = document.querySelectorAll('[data-accordion-btn]');
const accordion = document.querySelectorAll('[data-accordion]');

for (let i = 0; i < accordionBtn.length; i++) {

  accordionBtn[i].addEventListener('click', function () {

    const clickedBtn = this.nextElementSibling.classList.contains('active');

    for (let i = 0; i < accordion.length; i++) {

      if (clickedBtn) break;

      if (accordion[i].classList.contains('active')) {

        accordion[i].classList.remove('active');
        accordionBtn[i].classList.remove('active');
      }
    }
    this.nextElementSibling.classList.toggle('active');
    this.classList.toggle('active');
  });
}

// Cookie Settings
document.cookie = "AC-C=ac-c;expires=Fri, 31 Dec 9999 23:59:59 GMT;path=/;SameSite=None;Secure";

// Contact Send to avoid spam and hide email from email crawlers
const contactSend = document.getElementById("contact-submit");
const action = "https://formsubmit.co/oniquecampbell@yahoo.com";

contactSend.addEventListener("click", () => {
    document.getElementById("gamelounge-contact").action = action;
});

// 
const searchContainer = document.querySelector(".search-results");
const storeBodyContainer = document.querySelector(".landing-page-visible");
const videoLoungeContainer = document.querySelector(".video-lounge-container");
const videoLoungeExit = document.querySelector(".video-lounge-exit");
const videoLoungeExit2 = document.querySelector(".video-lounge-exit-2");
const searchResultsExit = document.querySelector(".search-results-exit");

// Review videos
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

var newVideoIdArray;
var newThumbnailIdArray;
var currentThumbnail;
var videoId;
var videoTitle;
var allVideoIdArray;
var allThumbnailIdArray;


// SEARCH SCRIPT UTILIZING YOUTUBE SEARCH API
const ytKey = "AIzaSyBtC_bpI8ogcjncnrXJlMfCGzdn2nP6CKU"
gapi.load("client", loadClient);
  
function loadClient() {
    gapi.client.setApiKey(ytKey);
    return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
        .then(function() { console.log("GAPI client loaded for API"); },
                function(err) { console.error("Error loading GAPI client for API", err); });
};

const ytForm = document.getElementById("form-yt--search"); 
const keywordInput = document.getElementById("gamelounge-search");
const maxresultInput = document.getElementById('maxresult-input');
const orderInput = document.getElementById('order-input');
const videoList = document.getElementById('videoListContainer');

// Expected Thumbnail to be available after a search is made - MAX 50 is populated - Used for thumbnail unique identifier
const thumbnailList = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50];

var pageToken = '';

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
        storeBodyContainer.classList.add("hide");
        searchContainer.classList.remove("hide");
        window.scroll({top: 0, behavior: "smooth"});
        // modalContainer.classList.add("policy-appear");
        execute();
});
  
function paginate(e, obj) {
    e.preventDefault();
    pageToken = obj.getAttribute('data-id');
    execute();
    window.scroll({top: 0, behavior: "smooth"}); // scroll back to top where container is
}
  
// Make sure the client is loaded before calling this method.
function execute() {
    const searchString = keywordInput.value + " Review";
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

// Contact Email & Privacy Policy
const landingPageVisible = document.querySelector('.landing-page-visible');
const contactClick = document.getElementById('footer-contact');
const advertiseClick = document.getElementById('footer-advertise');
const privacyClick = document.getElementById('footer-privacy');
const contactForm = document.querySelector('.gamelounge-contact-container');
const contactFormExit = document.querySelector('.form-exit');
const disclaimerForm = document.querySelector('.fair-use-disclaimer--container');
const disclaimerExit = document.querySelector('.disclaimer-exit');

advertiseClick.addEventListener("click", () => {
    landingPageVisible.classList.add("hide");
    contactForm.classList.toggle("hide");
});

privacyClick.addEventListener("click", () => {
    landingPageVisible.classList.add("hide");
    disclaimerForm.classList.toggle("hide");
});

contactClick.addEventListener("click", () => {
    landingPageVisible.classList.add("hide");
    contactForm.classList.toggle("hide");
});

contactFormExit.addEventListener("click", () => {
    landingPageVisible.classList.remove("hide");
    contactForm.classList.toggle("hide");
});

disclaimerExit.addEventListener("click", () => {
    landingPageVisible.classList.remove("hide");
    disclaimerForm.classList.toggle("hide");
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
    storeBodyContainer.classList.remove("hide");
});

// Discord Live Chat added
window.addEventListener("load", () => {
    // Discord Chat Insert Top ------------------------------
    const bodyInsert = document.querySelector(".store-body-page");   

    var discordScriptTag = document.createElement('script');
    discordScriptTag.src = "https://cdn.jsdelivr.net/npm/@widgetbot/html-embed";
    discordScriptTag.async = true;
    // End ------------------------------------------------
    var discordScriptTagMain = document.createElement('script');
    discordScriptTagMain.id = "discordBotInsert";
    discordScriptTagMain.src = "https://cdn.jsdelivr.net/npm/@widgetbot/crate@3";
    discordScriptTagMain.async = true;
    discordScriptTagMain.innerHTML = `
        const crate = new Crate({
            server: '791303979597299782',
            channel: '946896595172089887'
            })      
            crate.notify('Ask me anything..')
        `;
    bodyInsert.appendChild(discordScriptTag);
    bodyInsert.appendChild(discordScriptTagMain);
});