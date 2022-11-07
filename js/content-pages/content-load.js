function resolveFirst() {
    return new Promise(() => {
        setTimeout(() => {
            // Get hostname to save to Home Button in Sidebar
            let hostname = window.location.hostname;
            let hostprotocol = window.location.protocol + "//";
            // Create Elements ************************ -------------------------------------
            let bodyMainTag = document.getElementById("content-insert");
            bodyMainTag.style.display = "none";
            let mainTagDiv = document.createElement("div");
            let mainTagOverlay = document.createElement("div");

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
            // Loader Animation
            loaderAnimationContainer.classList.add("loader-container");
            loaderAnimationContainer.innerHTML = `<div class="loader">
    <div class="circle"></div>
    <div class="circle"></div>
    </div>`;

            mainTagDiv.classList.add("landing-page-visible");
            mainTagOverlay.classList.add("overlay");
            mainTagOverlay.setAttribute("data-overlay", "");

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
    <p hidden="true"><input type="number" id="maxresult-input" placeholder="Max Results" min="1" max="50" value="6" required></p>
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
        <a href="#posts"><button id="open-blog-btn">Open Blog <i class="fa-regular fa-circle-down"></i></button></a></div>`;

            // Script Tags
            googleApiScript.src = "https://apis.google.com/js/api.js";
            videoPlayerScript.src = "https://cdn.jsdelivr.net/gh/Onique-Unique/Niche-Site-Video-Lounge/video-lounge/video-player.min.js";
            commentBoxSRCScript.src = "https://unpkg.com/commentbox.io/dist/commentBox.min.js";
            commentBoxProjectIDScript.src = "https://cdn.jsdelivr.net/gh/Onique-Unique/Niche-Site-Video-Lounge/comment-box/fetch.min.js";

            // Append Elements ************************************ --------------------------------
            // Loader Animation
            document.body.prepend(loaderAnimationContainer);

            document.body.appendChild(bodyMainTag);
            bodyMainTag.appendChild(mainTagDiv);
            mainTagDiv.appendChild(mainTagOverlay);

            mainTagDiv.appendChild(contentHubNavFixed);

            // Nav + Search Bar
            contentHubNavFixed.appendChild(nav);
            nav.prepend(navShareButton);
            nav.appendChild(dataSearchBar);
            dataSearchBar.appendChild(dataSearchBarInnerForm);
            nav.appendChild(menuIcon);
            contentHubNavFixed.appendChild(currentDate);

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
            mainTagDiv.appendChild(dataVideoDiv);

            // Script Tags
            document.body.appendChild(googleApiScript);
            document.body.appendChild(videoPlayerScript);
            document.body.appendChild(commentBoxSRCScript);
            document.body.appendChild(commentBoxProjectIDScript);
        }, 0);
    });
}

async function asyncFirstCall() {
    console.log('building page resources...');
    await resolveFirst();
    // expected output: "resolved"
}

//   Build the page resources
asyncFirstCall();

// Initiate Search Script Functions
function resolveNext() {
    return new Promise(() => {
        setTimeout(() => {
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
            function resolveAfter2Seconds() {
                return new Promise(() => {
                    setTimeout(() => {
                        gapi.load("client", loadClient);

                        function loadClient() {
                            gapi.client.setApiKey(ytKey);
                            let bodyMainTag = document.querySelector("main");
                            return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
                                .then((function () {
                                        dataContent();
                                        bodyMainTag.style.display = "flex";
                                        bodyMainTag.style.flexDirection = "column-reverse";
                                        console.log("GAPI client loaded for API");
                                    }),
                                    (function (err) {
                                        window.location.reload();
                                        console.error("Error loading GAPI client for API", err);
                                    }));
                        };
                    }, 2000);
                });
            }

            async function asyncCall() {
                console.log('calling api');
                await resolveAfter2Seconds();
                // expected output: "resolved"
            }

            asyncCall();

            // Index Banner Date Logic 
            // Get Current Date JS Logic
            const date = new Date(Date.now());
            currentDate = date.toLocaleString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric"
            }); // remove unnecessary information from date and specify only what is needed

            const dot = "&bull; ";

            const dateMain = ["location-currentDate"];
            for (i = 0; i < dateMain.length; i++) {
                if (i <= 1) {
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

                mobileMenuOpenBtn[i].addEventListener('click', (function () {
                    mobileMenu[i].classList.add('active');
                    overlay.classList.add('active');
                }));

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
            const aTag = ["https://www." + vi + ah + ah + gf + tp + ht + le + sw + xz + xz + ix + ".com/"];

            for (let i = 0; i < aTag.length; i++) {
                if (sourcePage === aTag[i]) {
                    console.log("page has Source Link " + sourcePage);
                } else if (sourcePage != aTag[i]) {
                    alert("page is missing Source Link " + aTag);
                    window.location.reload();
                }
            };

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
            const thumbnailList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50];

            var pageToken = '';

            var searchInput = document.querySelector(".search-input");

            // Applies on page load
            function dataContent() {
                document.getElementById("form-yt--search").click();
            }

            document.getElementById("form-yt--search").addEventListener("click", () => {
                execute();
                window.scroll({
                    top: 0,
                    behavior: "smooth"
                });
            });

            // Applies on search click
            searchInput.addEventListener("keyup", (function (event) {
                if (event.keyCode === 13) {
                    event.preventDefault();
                    document.getElementById("submit-icon").click();
                }
            }));

            ytForm.addEventListener('submit', e => {
                e.preventDefault();
                // if (!modalContainer.classList.contains("policy-appear")) {
                window.scroll({
                    top: 0,
                    behavior: "smooth"
                });
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
                    .then((function (response) {
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
                                for (let i = 0; i < allThumbnailIdArray.length && i < allVideoIdArray.length; i++) {
                                    document.getElementById(allThumbnailIdArray[i]).addEventListener("click", () => {
                                        // remove blog post on video click then continue rest of video selection functions
                                        document.querySelector(".lower-meta-content").style.display = "none";
                                        document.getElementById("open-blog-btn").style.display ="none";
                                        var id = allVideoIdArray[i];
                                        window.scroll({
                                            top: 0,
                                            behavior: "smooth"
                                        });
                                        searchContainer.classList.toggle("hide");
                                        videoLoungeContainer.classList.toggle("hide");
                                        navSearchBar.classList.add("hide");
                                        document.getElementById("video-embed").innerHTML = `<iframe id="embed-video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" src="https://yewtu.be/embed/${id}?t=5" frameborder="0"></iframe>`
                                        // document.getElementById("video-embed").innerHTML = `<iframe id="embed-video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" src="https://www.youtube.com/embed/${id}" frameborder="0"></iframe>` [This doesn't allow restricted videos, Using alternative above the regular Youtube embed method to bypass restricted videos]
                                    });
                                };

                                // Reduce The Array Back to 0 to allow unique thumbnail id count to restart when user exit search results
                                listItems.forEach(() => {
                                    let newthumbnailList = thumbnailList;
                                    i--;
                                    currentThumbnail = newthumbnailList[i];
                                });
                            }
                        }),
                        (function (err) {
                            console.error("Execute error", err);
                        }));
            };

            // Button function to open blog page on page load
            document.getElementById("open-blog-btn").addEventListener("click", () => {
                document.querySelector(".lower-meta-content").classList.toggle("hide");
                document.getElementById("open-blog-btn").style.display ="none";
            });

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
        }, 10);
    });
}

async function asyncNextCall() {
    console.log('calling main page functions...');
    await resolveNext();
    // expected output: "resolved"
}

// Setting up and building main page functions
asyncNextCall();

// Related Links
const relatedContainer = document.getElementById("related-link-list");
const relatedLinks = document.getElementById("related-links");
const relatedLinksAlt = document.getElementById("related-links-alt");
const relatedContainerAlt = document.getElementById("top-picks-list");
if(relatedLinks){
  relatedLinks.addEventListener("click", () => {
    relatedContainer.classList.toggle("hide");
  });
};

if(relatedLinksAlt){
  relatedLinksAlt.addEventListener("click", () => {
    relatedContainerAlt.classList.toggle("hide");
  });
};

function videoPlayerExit() {
    const searchContainer = document.querySelector(".search-results");
    const videoLoungeContainer = document.querySelector(".video-lounge-container");
    const navSearchBar = document.querySelector(".content-hub-nav-fixed");

    searchContainer.classList.toggle("hide");
    videoLoungeContainer.classList.toggle("hide");
    navSearchBar.classList.remove("hide");

    document.querySelector(".lower-meta-content").style.display = "block";
}