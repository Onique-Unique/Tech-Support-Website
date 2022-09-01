var dom = document.implementation.createDocument('http://www.w3.org/1999/xhtml', 'html', null);
var body = dom.createElement("body");
dom.firstChild.appendChild(body);

setTimeout(function() {    
    // document.body.classList.add("content-hub");
    document.head.innerHTML = `<title>Niche Website Demo</title>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preload" as="style" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg=="
        crossorigin="anonymous" referrerpolicy="no-referrer" 
        onload="this.onload=null;this.rel='stylesheet'"/>
    
    <!-- - google font link -->
    <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap" onload="this.onload=null;this.rel='stylesheet'">
    <!-- - custom css link -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Onique-Unique/Niche-Site-Video-Lounge/lounge-style/style@2.1.min.css">`
},0);

setTimeout(function() {  
    // If page has wpadminbar ID then hide page information
    if(document.getElementById("wpadminbar") != null){
        document.getElementById("wpadminbar").style.display = "none";
        document.querySelector(".menupop").style.display = "none";
    }

    // Get hostname to save to Home Button in Sidebar
    let hostname = window.location.hostname;
    let hostprotocol = window.location.protocol + "//";
    // Create Elements ************************ -------------------------------------
    let bodyMainTag = document.createElement("main");
    bodyMainTag.style.display = "none";
    let mainTagDiv = document.createElement("div"); 
    let mainTagOverlay = document.createElement("div");
    let ezoicDiv = document.createElement("div");

    // Nav + Search Bar
    let contentHubNavFixed = document.createElement("div");
    let nav = document.createElement("nav");
    let navShareButton = document.createElement("button");
    let dataSearchBar = document.createElement("div");
    let dataSearchBarInnerForm = document.createElement("form"); 
    let menuIcon = document.createElement("div");
    let currentDate = document.createElement("time");

    // Loader Animation
    let loaderAnimationContainer = document.createElement("div");

    // Sidebar
    let sidebarDiv = document.createElement("div");
    let sidebarInnerCategories = document.createElement("div");
    let sidebarInnerTop = document.createElement("div");
    let sidebarInnerTopHeading = document.createElement("h2");
    let sidebarInnerTopButton = document.createElement("button");
    let sidebarInnerList = document.createElement("ul");
    let sidebarinnerLower = document.createElement("div");

    // DATA API VIDEO INSERTION DIV
    let dataVideoDiv = document.createElement("div");

    // Script Tags
    let googleApiScript = document.createElement("script");
    let videoPlayerScript = document.createElement("script");
    let commentBoxSRCScript = document.createElement("script");
    let commentBoxProjectIDScript = document.createElement("script");


    // Add Attributes - top down approach ********************************* -------------------------
    mainTagDiv.classList.add("landing-page-visible");
    mainTagOverlay.classList.add("overlay");
    mainTagOverlay.setAttribute("data-overlay", "");

    // ezoic ad spot check and functions to complete if found null
    if(document.getElementById("ad-ID") == null){
        ezoicDiv.id = "ad-ID";
        ezoicDiv.innerText = "Removed";
        document.body.appendChild(ezoicDiv);
    };

    // Nav + Search Bar
    contentHubNavFixed.classList.add("content-hub-nav-fixed");
    nav.classList.add("content-hub-navbar");
    navShareButton.id = "button";
    navShareButton.type = "button";
    navShareButton.title = "share";
    navShareButton.innerHTML = `<i class="fa-solid fa-paper-plane"></i>`;
    dataSearchBar.classList.add("data-search-bar");
    dataSearchBarInnerForm.id = "form-yt--search";
    dataSearchBarInnerForm.innerHTML = `<i class="fas fa-search" id="search-icon"></i>
    <input class="search-input" id="gamelounge-search" name="search_query" type="search" maxlength="128" placeholder="Search content...">
    <p hidden="true"><input type="number" id="maxresult-input" placeholder="Max Results" min="1" max="50" value="50" required></p>
    <p hidden="true">
        <select id="order-input" required>
            <option value="">--SELECT ORDER--</option>
            <option value="date">Date</option>
            <option value="rating">Rating</option>
            <option value="relevance" selected>Relevance</option>
            <option value="title">Title</option>
            <option value="viewCount">View Count</option>
        </select>
    </p>
    <input style="display: none;" id="submit-icon" type="submit">`;
    menuIcon.classList.add("menu-icon");
    menuIcon.setAttribute("data-mobile-menu-open-btn", "");
    menuIcon.innerHTML = `<i class="fa-solid fa-house" id="menu-bars" title="Menu"></i>`;
    currentDate.id = "location-currentDate";

    // Loader Animation
    loaderAnimationContainer.classList.add("loader-container");
    loaderAnimationContainer.innerHTML = `<div class="loader">
    <div class="circle"></div>
    <div class="circle"></div>
    </div>`;

    // Sidebar
    sidebarDiv.className = "sidebar  has-scrollbar hide";
    sidebarDiv.setAttribute("data-mobile-menu", "");
    sidebarInnerCategories.classList.add("sidebar-category");
    sidebarInnerTop.classList.add("sidebar-top");
    sidebarInnerTopHeading.classList.add("sidebar-title");
    sidebarInnerTopHeading.innerHTML = `<span>Niche Website</span>`;
    sidebarInnerTopButton.classList.add("sidebar-close-btn");
    sidebarInnerTopButton.setAttribute("data-mobile-menu-close-btn", "");
    sidebarInnerTopButton.innerHTML = `<i class="fa-solid fa-rectangle-xmark"></i>`;
    sidebarInnerList.classList.add("sidebar-menu-category-list");
    sidebarInnerList.innerHTML = `<li class="sidebar-menu-category"><!-- category lists will go here --></li>`;
    sidebarinnerLower.classList.add("product-showcase");
    sidebarinnerLower.innerHTML = `<div class="showcase-wrapper">
    <div class="showcase-container">
        <div class="showcase">
            <div class="showcase-content">
                <a href="${hostprotocol + hostname}/">
                    <h3 class="showcase-title">Home</h3>
                </a>
            </div>
        </div>
    </div>
    <div class="showcase-other"><!-- Icons will go here --></div>
    </div>`;

    // DATA API VIDEO INSERTION DIV
    dataVideoDiv.id = "DATA-Video";
    dataVideoDiv.innerHTML = ` <!-- Video Watch Screen with Live Chat -->
    <div class="video-lounge-container hide" id="video-lounge"></div>

    <!-- Search Results Container Display -->
    <div class="search-results">
        <div id="videoListContainer"></div>
    </div>`;

    // Script Tags
    googleApiScript.src = "https://apis.google.com/js/api.js";
    videoPlayerScript.src = "https://cdn.jsdelivr.net/gh/Onique-Unique/Niche-Site-Video-Lounge/video-lounge/video-player.min.js";
    commentBoxSRCScript.src = "https://unpkg.com/commentbox.io/dist/commentBox.min.js";
    commentBoxProjectIDScript.src = "https://cdn.jsdelivr.net/gh/Onique-Unique/Niche-Site-Video-Lounge/comment-box/fetch.min.js";

    // Append Elements ************************************ --------------------------------
    document.body.prepend(bodyMainTag);
    bodyMainTag.appendChild(mainTagDiv); 
    mainTagDiv.appendChild(mainTagOverlay); 
    mainTagDiv.appendChild(ezoicDiv); 

    mainTagDiv.appendChild(contentHubNavFixed);

    // Nav + Search Bar
    contentHubNavFixed.appendChild(nav);
    nav.prepend(navShareButton);
    nav.appendChild(dataSearchBar);
    dataSearchBar.appendChild(dataSearchBarInnerForm);
    nav.appendChild(menuIcon);
    contentHubNavFixed.appendChild(currentDate);

    // Loader Animation
    mainTagDiv.appendChild(loaderAnimationContainer);

    // Sidebar
    mainTagDiv.appendChild(sidebarDiv);
    sidebarDiv.appendChild(sidebarInnerCategories);
    sidebarInnerCategories.prepend(sidebarInnerTop);
    sidebarInnerTop.prepend(sidebarInnerTopHeading);
    sidebarInnerTop.appendChild(sidebarInnerTopButton);
    sidebarInnerCategories.appendChild(sidebarInnerList);
    sidebarDiv.appendChild(sidebarinnerLower);
    sidebarDiv.classList.remove("hide");
    


    // DATA API VIDEO INSERTION DIV
    document.body.appendChild(dataVideoDiv);

    // Script Tags
    document.body.appendChild(googleApiScript);
    document.body.appendChild(videoPlayerScript);
    document.body.appendChild(commentBoxSRCScript);
    document.body.appendChild(commentBoxProjectIDScript);
}, 50)

// Initiate Search Script Functions
setTimeout(function() { 
    // Take blockquote content and create new one to be dynamically created and inserted into html
    let getBlockqoute = document.getElementById("DATA-Object").innerHTML;
    let newBlockquote = document.createElement("blockquote");
    newBlockquote.id = "new-DATA-Object";
    newBlockquote.innerHTML = getBlockqoute;
    document.getElementById("DATA-Object").remove();
    document.body.prepend(newBlockquote);

    // SEARCH SCRIPT UTILIZING YOUTUBE SEARCH API ***IMPORTANT****
    const ytKey = "AIzaSyBtC_bpI8ogcjncnrXJlMfCGzdn2nP6CKU"

    // ENSURING THAT GAPI FETCHES REQUEST AND RETURNS EARLY WITH LITTLE TO NO DELAY FOR THE REST OF PAGE CONTENTS
    // Delayed using setTimeout for Core Web Vitals Pass
    setTimeout(function(){
        gapi.load("client", loadClient);
        
        function loadClient() {
            gapi.client.setApiKey(ytKey);
            let bodyMainTag = document.querySelector("main");
            return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
                .then(function() {dataContent(); bodyMainTag.style.display = "block"; console.log("GAPI client loaded for API"); },
                        function(err) { window.location.reload(); console.error("Error loading GAPI client for API", err); });
        };
    },3000);

    // Index Banner Date Logic 
    // Get Current Date JS Logic
    const date = new Date(Date.now());
    currentDate = date.toLocaleString("en-US", {month: "short", day: "numeric", year: "numeric"}); // remove unnecessary information from date and specify only what is needed

    const dot = "&bull; ";

    const dateMain = ["location-currentDate"];
    for(i = 0; i < dateMain.length; i++){
        if(i  <= 1){
            document.getElementById(dateMain[i]).innerHTML = "Today " + currentDate;
        }
        // else if (i === 1){
        //     document.getElementById(dateMain[i]).innerHTML = "Today " + currentDate;
        // }
    };

    // mobile menu variables
    const mobileMenuOpenBtn = document.querySelectorAll('[data-mobile-menu-open-btn]');
    const mobileMenu = document.querySelectorAll('[data-mobile-menu]');
    const mobileMenuCloseBtn = document.querySelectorAll('[data-mobile-menu-close-btn]');
    const overlay = document.querySelector('[data-overlay]');

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
    }

    // Cookie Settings
    document.cookie = "AC-C=ac-c;expires=Fri, 31 Dec 9999 23:59:59 GMT;path=/;SameSite=None;Secure";

    // 
    const searchContainer = document.querySelector(".search-results");
    const contentHub = document.querySelector(".landing-page-visible");
    const videoLoungeContainer = document.querySelector(".video-lounge-container");
    const navSearchBar = document.querySelector(".content-hub-nav-fixed");

    // Masking Domain Name
    const vi = "f";
    const ah = "e";
    const gf = "n";
    const tp = "i";
    const ht = "x";
    const le = "b";
    const sw = "l";
    const xz = "o";
    const ix = "m";

    // Find page Niche Keyword/ Topic stored inner value to a variable and pageSource link
    const sourcePage = document.getElementById("SOURCE-Page").href;
    const dataTopic = document.getElementById("new-DATA-Object");
    dataTopic.style.display = "none";
    const dataKeyword = dataTopic.innerText || dataTopic.textContent;
    const aTag = ["https://www." +vi+ah+ah+gf+tp+ht+le+sw+xz+xz+ix+ ".com/"];

    for(let i = 0; i < aTag.length; i++){
        if(sourcePage === aTag[i]) {
        console.log("page has Source Link " + sourcePage);
        }

        else if(sourcePage != aTag[i]){
            alert("page is missing Source Link " + aTag);
            window.location.reload();
        }
    };

    // Get Title Name of Page and Change innerText to given Keyword in blockquote
    let titleContent = document.querySelector("title");
    titleContent.innerText = dataKeyword;

    var newVideoIdArray;
    var newThumbnailIdArray;
    var currentThumbnail;
    var videoId;
    var videoTitle;
    var allVideoIdArray;
    var allThumbnailIdArray;

    // SEARCH SCRIPT UTILIZING YOUTUBE SEARCH API CONTINUATION ***IMPORTANT****
    const ytForm = document.getElementById("form-yt--search"); 
    const keywordInput = document.getElementById("gamelounge-search");
    const maxresultInput = document.getElementById('maxresult-input');
    const orderInput = document.getElementById('order-input');
    const videoList = document.getElementById('videoListContainer');

    // Expected Thumbnail to be available after a search is made - MAX 50 is populated - Used for thumbnail unique identifier
    const thumbnailList = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50];

    var pageToken = '';

    var searchInput = document.querySelector(".search-input");

    // Applies on page load
    function dataContent() {
        document.getElementById("form-yt--search").click();
    }

    document.getElementById("form-yt--search").addEventListener("click", () => {
        execute();
        window.scroll({top: 0, behavior: "smooth"});
    });

    // Applies on search click
    searchInput.addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            document.getElementById("submit-icon").click();
        }
    });

    ytForm.addEventListener('submit', e => {
        e.preventDefault();
        // if (!modalContainer.classList.contains("policy-appear")) {
            window.scroll({top: 0, behavior: "smooth"});
            // modalContainer.classList.add("policy-appear");
            execute();
    });
    
    // Make sure the client is loaded before calling this method.
    function execute() {
        const searchString = keywordInput.value + dataKeyword;
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

                        i = 0;

                        listItems.forEach(item => {
                            // Applying unique thumbnail ID for each returned thumbnail up to 50 and pulling video ID and Title
                            let newthumbnailList = thumbnailList;
                            i++;
                            currentThumbnail = newthumbnailList[i];
                            videoId = item.id.videoId;
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
                output += '</ul>';
                
    
                // Output list populated
                videoList.innerHTML = output;

                // ---------------LOGICAL SCRIPT FOR RETURNED SEARCH QUERY/ RESULTS VIDEOS------------------------------- 
                for(let i = 0; i < allThumbnailIdArray.length && i < allVideoIdArray.length; i++) {
                    document.getElementById(allThumbnailIdArray[i]).addEventListener("click", () => {
                        
                        var id = allVideoIdArray[i];
                        window.scroll({top: 0, behavior: "smooth"});
                        searchContainer.classList.toggle("hide");
                        videoLoungeContainer.classList.toggle("hide");
                        navSearchBar.classList.add("hide");
                        document.getElementById("video-embed").innerHTML = `<iframe id="embed-video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" src="https://www.youtube.com/embed/${id}" frameborder="0"></iframe>`
                    });
                };

                // Reduce The Array Back to 0 to allow unique thumbnail id count to restart when user exit search results
                listItems.forEach(() => {
                    let newthumbnailList = thumbnailList;
                    i--;
                    currentThumbnail = newthumbnailList[i];
                });
            }
        },
        function(err) { console.error("Execute error", err); });
    };

    const shareBtn = document.getElementById("button");
    function shareList() {
        if (navigator.canShare) {
            navigator.share({
                title: dataKeyword,
                text: "Find & Share Real Investment Opportunities",
                url: window.location.href,
            });
        } else {
            // Desktop Functionality
        }
    };

    shareBtn.addEventListener("click", () => {
        shareList();
    });
},100);

function videoPlayerExit(){
    const searchContainer = document.querySelector(".search-results");
    const videoLoungeContainer = document.querySelector(".video-lounge-container");
    const navSearchBar = document.querySelector(".content-hub-nav-fixed");

    searchContainer.classList.toggle("hide");
    videoLoungeContainer.classList.toggle("hide");
    navSearchBar.classList.remove("hide");
}
