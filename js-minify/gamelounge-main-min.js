const gameloungeBodyContainer=document.querySelector(".game-lounge-body-container"),formContainer=document.querySelector(".gamelounge-contact-container"),disclaimerContainer=document.querySelector(".fair-use-disclaimer--container"),downloadContainer=document.querySelector(".gamelounge-download-container"),searchField=document.getElementById("gamelounge-search"),leaderboardContainer=document.getElementById("leaderboard"),leaderboardClick=document.querySelector(".apex-leaderboards"),emailIcon=document.getElementById("email-icon"),emailExit=document.querySelector(".form-exit"),settingsIcon=document.getElementById("settings-icon"),settingsIconAlt=document.getElementById("settings-icon-min"),disclaimerExit=document.querySelector(".disclaimer-exit"),leaderboardIcon=document.getElementById("community-icon"),leaderboardExit=document.querySelector(".leaderboard-exit"),downloadIcon=document.querySelector(".download-right-arrow"),downloadIconSecondary=document.querySelector(".download-right-arrow-secondary"),downloadExit=document.getElementById("download-back");document.cookie="AC-C=ac-c;expires=Fri, 31 Dec 9999 23:59:59 GMT;path=/;SameSite=None;Secure";const date=new Date(Date.now());currentDate=date.toLocaleString("en-US",{month:"short",day:"numeric",year:"numeric"});const dot="&bull; ",dateMain=["currentDate-gamelounge-1","currentDate-gamelounge-2","currentDate-gamelounge-3","currentDate-gamelounge-4"];for(i=0;i<dateMain.length;i++)i<1?document.getElementById(dateMain[i]).innerHTML="This Week "+currentDate:1===i&&(document.getElementById(dateMain[i]).innerHTML="Today "+currentDate);function openfile(){String.prototype.includesOneof=function(e){if(!Array.isArray(e))throw new Error("includesOneOf only accepts an array");return e.some(e=>this.includes(e))};var e=document.getElementById("gamelounge-search").value;e.toLowerCase().includesOneof(["apex","legends","alm"])?document.getElementById("form-yt--search").action="https://www.youtube.com/results":(document.getElementById("gamelounge-search").value=e+" apex legends mobile",document.getElementById("form-yt--search").action="https://www.youtube.com/results")}emailIcon.addEventListener("click",()=>{gameloungeBodyContainer.classList.toggle("hide"),formContainer.classList.toggle("hide")}),emailExit.addEventListener("click",()=>{gameloungeBodyContainer.classList.toggle("hide"),formContainer.classList.toggle("hide")}),settingsIcon.addEventListener("click",()=>{gameloungeBodyContainer.classList.toggle("hide"),disclaimerContainer.classList.toggle("hide")}),settingsIconAlt.addEventListener("click",()=>{gameloungeBodyContainer.classList.toggle("hide"),disclaimerContainer.classList.toggle("hide")}),disclaimerExit.addEventListener("click",()=>{gameloungeBodyContainer.classList.toggle("hide"),disclaimerContainer.classList.toggle("hide")}),leaderboardIcon.addEventListener("click",()=>{gameloungeBodyContainer.classList.toggle("hide"),leaderboardContainer.classList.toggle("hide")}),leaderboardExit.addEventListener("click",()=>{gameloungeBodyContainer.classList.toggle("hide"),leaderboardContainer.classList.toggle("hide")}),downloadIcon.addEventListener("click",()=>{gameloungeBodyContainer.classList.toggle("hide"),downloadContainer.classList.toggle("hide")}),downloadIconSecondary.addEventListener("click",()=>{gameloungeBodyContainer.classList.toggle("hide"),downloadContainer.classList.toggle("hide")}),downloadExit.addEventListener("click",()=>{gameloungeBodyContainer.classList.toggle("hide"),downloadContainer.classList.toggle("hide")});