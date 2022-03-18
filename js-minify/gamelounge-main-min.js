const menuBtn=document.getElementById("menu-bars"),leftSidebar=document.querySelector(".game-sidebar"),contentBody=document.querySelector(".section-body-container"),tempContainer=document.getElementById("temp-container"),tempExit=document.querySelector(".temp-exit"),moreLive=document.getElementById("more-live"),gameloungeBodyContainer=document.querySelector(".game-lounge-body-container"),playlistContainer=document.getElementById("playlist-container"),formContainer=document.querySelector(".gamelounge-contact-container"),disclaimerContainer=document.querySelector(".fair-use-disclaimer--container"),downloadContainer=document.querySelector(".gamelounge-download-container"),searchContainer=document.querySelector(".search-results"),leaderboardContainer=document.getElementById("leaderboard"),leaderboardClick=document.querySelector(".apex-leaderboards"),publisherContainer=document.querySelector(".publishments-container"),videoLoungeContainer=document.querySelector(".video-lounge-container"),playlistIcon=document.getElementById("up-icon"),playlistExit=document.querySelector(".playlist-exit"),emailIcon=document.getElementById("email-icon"),emailExit=document.querySelector(".form-exit"),settingsIcon=document.getElementById("settings-icon"),settingsIconAlt=document.getElementById("settings-icon-min"),disclaimerExit=document.querySelector(".disclaimer-exit"),leaderboardIcon=document.getElementById("community-icon"),leaderboardExit=document.querySelector(".leaderboard-exit"),downloadIcon=document.querySelector(".download-right-arrow"),downloadIconSecondary=document.querySelector(".download-right-arrow-secondary"),downloadExit=document.getElementById("download-back"),publisherIcon=document.getElementById("publisher-icon"),publishExit=document.querySelector(".publishment-exit"),videoLoungeIcon=document.getElementById("video-icon"),videoViewMoreIcon=document.querySelector(".view-more-vid--icon"),videoLoungeExit=document.querySelector(".video-lounge-exit"),videoLoungeExit2=document.querySelector(".video-lounge-exit-2"),searchResultsExit=document.querySelector(".search-results-exit"),infoPolicy=document.querySelector(".info-icon"),policyOpen=document.getElementById("policy-icon"),cookieModal=document.querySelector(".consent-modal"),cancelCookieBtn=document.querySelector(".consent-btn.cancel"),acceptCookieBtn=document.querySelector(".consent-btn.accept");cancelCookieBtn.addEventListener("click",function(){cookieModal.classList.remove("active")}),acceptCookieBtn.addEventListener("click",function(){cookieModal.classList.remove("active"),localStorage.setItem("cookieAccepted","yes")}),setTimeout(function(){"yes"!=localStorage.getItem("cookieAccepted")&&cookieModal.classList.add("active")},2e3),document.cookie="AC-C=ac-c;expires=Fri, 31 Dec 9999 23:59:59 GMT;path=/;SameSite=None;Secure";const date=new Date(Date.now());currentDate=date.toLocaleString("en-US",{month:"short",day:"numeric",year:"numeric"});const dot="&bull; ",dateMain=["currentDate-gamelounge-1","currentDate-gamelounge-2","currentDate-gamelounge-3","currentDate-gamelounge-4"];for(i=0;i<dateMain.length;i++)i<1?document.getElementById(dateMain[i]).innerHTML="This Week "+currentDate:1===i&&(document.getElementById(dateMain[i]).innerHTML="Today "+currentDate);const playlistArrayId=["-9gEgshJUuY","ok_-2KkKQF4","3sp0wd8j8CQ","aL14iT2ix0w","7tNtU5XFwrU","8NzYo0jmYek","mZHTwjLznVg","-6v0vFVp52w","FQRtxvUc8W4","3bp1kIUlYEM","wKwR2CRbVVo","6Irus3d5f0E","7NOSDKb0HlU","tCs48OFv7xA","GDQnA1LVCWA","rXsZk4Mz_Ac"],playlistRefresh=document.querySelector(".playlist-random");playlistRefresh.addEventListener("click",()=>{var e=playlistArrayId[Math.floor(Math.random()*playlistArrayId.length)];document.getElementById("playlist-embed").innerHTML=`<iframe id="embed-music" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" src="https://www.youtube.com/embed/${e}" frameborder="0" modestbranding="1"></iframe>`});var videoListings=["Pvqm6_mplRs","XRtv30j0pp8","LcsOSIXc9cg","x9RjkZuLmBw","MKif6px7hb4","mNLCRZsopqg","KXRosceNwfc","4sV94dhP518","Ya5Z1ocmbec","g9aOqJ_Mujw","INTyMiA8zkc","7_VjSAkFNKA","YZ_HT9dRpoQ","Lw9UUsZwrmc","ZMuVHf3Xugo","pFJyKUCKzko","sv0g5vPO-N8","JCNLzcVrS_c","fCBzFk4Zvjk","SlUcf-0n2Pc","xlmuq0RcsKc","2jEMI9U53Qs","Rtxf-kVYF8M","5THFjkoOQJ8","11RZI7Tf2uI","KtT57G8kT20","v8ZDDbHppMQ","yIH9XX6TjrM","DSqp7wEbbeY","GLojO9k5YqE","qamxgh4vMuQ","qsrU1Dq8Q_c","jykI2bqKr0U","QUhFZF6h_PA","5mxeVyhlkL4","vcYjDOt5JyY","LhhLaIEDXyE","z9YfQW5OJUU","d2z9lDnsAYY","wqMaedijeh4"],featuredListings=[];const videoListArrayId=videoListings,videoListShuffle=document.querySelector(".video-shuffle"),videoListPrev=document.querySelector(".video-prev"),videoListNext=document.querySelector(".video-next");videoListShuffle.addEventListener("click",()=>{var e=videoListArrayId[Math.floor(Math.random()*playlistArrayId.length)];document.getElementById("video-embed").innerHTML=`<iframe id="embed-video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" src="https://www.youtube.com/embed/${e}" frameborder="0"></iframe>`});var i=0;videoListPrev.addEventListener("click",()=>{i<=0&&(i=videoListArrayId.length);var e=videoListArrayId[--i];document.getElementById("video-embed").innerHTML=`<iframe id="embed-video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" src="https://www.youtube.com/embed/${e}" frameborder="0"></iframe>`}),videoListNext.addEventListener("click",()=>{i>=videoListArrayId.length-1&&(i=-1);var e=videoListArrayId[++i];document.getElementById("video-embed").innerHTML=`<iframe id="embed-video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" src="https://www.youtube.com/embed/${e}" frameborder="0"></iframe>`}),watchFeaturedList=["watch-1","watch-2","watch-3","watch-4"],watchFeaturedId=["Pvqm6_mplRs","IJzp51g-uxM","LcsOSIXc9cg","YQyb-FMD9yI"];for(let e=0;e<watchFeaturedList.length&&e<watchFeaturedId.length;e++)document.getElementById(watchFeaturedList[e]).addEventListener("click",()=>{console.log(watchFeaturedList[e]);var t=watchFeaturedId[e];gameloungeBodyContainer.classList.toggle("hide"),videoLoungeContainer.classList.toggle("hide"),document.getElementById("video-embed").innerHTML=`<iframe id="embed-video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" src="https://www.youtube.com/embed/${t}" frameborder="0"></iframe>`});const ytKey="AIzaSyBtC_bpI8ogcjncnrXJlMfCGzdn2nP6CKU";function loadClient(){return gapi.client.setApiKey(ytKey),gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest").then(function(){console.log("GAPI client loaded for API")},function(e){console.error("Error loading GAPI client for API",e)})}gapi.load("client",loadClient);const ytForm=document.getElementById("form-yt--search"),keywordInput=document.getElementById("gamelounge-search"),maxresultInput=document.getElementById("maxresult-input"),orderInput=document.getElementById("order-input"),videoList=document.getElementById("videoListContainer"),newH2=document.getElementById("main-h2"),tipsH2=document.getElementById("tips-h2"),gameplayH2=document.getElementById("gameplay-h2"),funnyH2=document.getElementById("funny-h2"),thumbnailList=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50];var pageToken="";newH2.addEventListener("click",()=>{keywordInput.value="News",document.getElementById("submit-icon").click(),keywordInput.value=""}),tipsH2.addEventListener("click",()=>{keywordInput.value="tips and tricks",document.getElementById("submit-icon").click(),keywordInput.value=""}),gameplayH2.addEventListener("click",()=>{keywordInput.value="gameplay",document.getElementById("submit-icon").click(),keywordInput.value=""}),funnyH2.addEventListener("click",()=>{keywordInput.value="funny",document.getElementById("submit-icon").click(),keywordInput.value=""});var searchInput=document.querySelector(".search-input");function paginate(e,t){e.preventDefault(),pageToken=t.getAttribute("data-id"),execute(),window.scroll({top:0,behavior:"smooth"})}function execute(){const e=keywordInput.value+" Apex Legends Mobile",t=maxresultInput.value;var o={part:"snippet",type:"video",order:orderInput.value,maxResults:t,q:e};return""!=pageToken&&(o.pageToken=pageToken),gapi.client.youtube.search.list(o).then(function(e){let t=e.result.items;if(t){let e='<h4 id= "search-h4">Search Results</h4><ul>';newVideoIdArray=[],newThumbnailIdArray=[],t.forEach(t=>{i++,currentThumbnail=thumbnailList[i],console.log(currentThumbnail),videoId=t.id.videoId,console.log(videoId),videoTitle=t.snippet.title,newVideoIdArray.push(videoId),allVideoIdArray=newVideoIdArray,newThumbnailIdArray.push(`thumbnail-${currentThumbnail}`),allThumbnailIdArray=newThumbnailIdArray,e+=`\n                        <div class="data-num"><li><a><img class="search-thumbnail" id="thumbnail-${currentThumbnail}" src="https://i3.ytimg.com/vi/${videoId}/hqdefault.jpg" /></a><p id="para-search-return">${videoTitle}</p></li></div>\n                    `}),e+="</ul>",videoList.innerHTML=e,console.log(allVideoIdArray),console.log(allThumbnailIdArray),t.forEach(()=>{i--,currentThumbnail=thumbnailList[i],console.log(currentThumbnail)})}},function(e){console.error("Execute error",e)})}searchInput.addEventListener("keyup",function(e){13===e.keyCode&&(e.preventDefault(),document.getElementById("submit-icon").click())}),ytForm.addEventListener("submit",e=>{e.preventDefault(),gameloungeBodyContainer.classList.add("hide"),searchContainer.classList.remove("hide"),window.scroll({top:0,behavior:"smooth"}),execute()}),menuBtn.addEventListener("click",()=>{leftSidebar.classList.toggle("game-sidebar-maximize"),contentBody.classList.toggle("section-body-container-minimize")}),moreLive.addEventListener("click",()=>{gameloungeBodyContainer.classList.toggle("filter-overlay"),tempContainer.classList.toggle("hide"),window.scroll({top:0,behavior:"smooth"})}),tempExit.addEventListener("click",()=>{gameloungeBodyContainer.classList.toggle("filter-overlay"),tempContainer.classList.toggle("hide")}),playlistIcon.addEventListener("click",()=>{gameloungeBodyContainer.classList.toggle("filter-overlay"),playlistContainer.classList.toggle("hide"),window.scroll({top:0,behavior:"smooth"})}),playlistExit.addEventListener("click",()=>{gameloungeBodyContainer.classList.toggle("filter-overlay"),playlistContainer.classList.toggle("hide")}),publisherIcon.addEventListener("click",()=>{gameloungeBodyContainer.classList.toggle("hide"),publisherContainer.classList.toggle("hide")}),publishExit.addEventListener("click",()=>{gameloungeBodyContainer.classList.toggle("hide"),publisherContainer.classList.toggle("hide")}),emailIcon.addEventListener("click",()=>{gameloungeBodyContainer.classList.toggle("hide"),formContainer.classList.toggle("hide")}),emailExit.addEventListener("click",()=>{gameloungeBodyContainer.classList.toggle("hide"),formContainer.classList.toggle("hide")}),settingsIcon.addEventListener("click",()=>{gameloungeBodyContainer.classList.toggle("hide"),disclaimerContainer.classList.toggle("hide")}),settingsIconAlt.addEventListener("click",()=>{gameloungeBodyContainer.classList.toggle("hide"),disclaimerContainer.classList.toggle("hide")}),disclaimerExit.addEventListener("click",()=>{gameloungeBodyContainer.classList.toggle("hide"),disclaimerContainer.classList.toggle("hide")}),leaderboardIcon.addEventListener("click",()=>{gameloungeBodyContainer.classList.toggle("hide"),leaderboardContainer.classList.toggle("hide")}),leaderboardExit.addEventListener("click",()=>{gameloungeBodyContainer.classList.toggle("hide"),leaderboardContainer.classList.toggle("hide")}),videoLoungeIcon.addEventListener("click",()=>{gameloungeBodyContainer.classList.toggle("hide"),videoLoungeContainer.classList.toggle("hide")}),videoViewMoreIcon.addEventListener("click",()=>{gameloungeBodyContainer.classList.toggle("hide"),videoLoungeContainer.classList.toggle("hide")}),videoLoungeExit.addEventListener("click",()=>{gameloungeBodyContainer.classList.toggle("hide"),videoLoungeContainer.classList.toggle("hide")}),videoLoungeExit2.addEventListener("click",()=>{searchContainer.classList.toggle("hide"),videoLoungeContainer.classList.toggle("hide")}),searchResultsExit.addEventListener("click",()=>{searchContainer.classList.add("hide"),gameloungeBodyContainer.classList.remove("hide")}),downloadIcon.addEventListener("click",()=>{gameloungeBodyContainer.classList.toggle("hide"),downloadContainer.classList.toggle("hide")}),downloadIconSecondary.addEventListener("click",()=>{gameloungeBodyContainer.classList.toggle("hide"),downloadContainer.classList.toggle("hide")}),downloadExit.addEventListener("click",()=>{gameloungeBodyContainer.classList.toggle("hide"),downloadContainer.classList.toggle("hide")}),infoPolicy.addEventListener("click",()=>{searchContainer.classList.toggle("hide"),disclaimerContainer.classList.toggle("hide")}),policyOpen.addEventListener("click",()=>{gameloungeBodyContainer.classList.toggle("hide"),disclaimerContainer.classList.toggle("hide")});