// Side Bar and Menu Icon Script

// writing a script for sidebar menu
// queryselector for the classes which should be affected

var menuIcon = document.querySelector(".flex-div__nav-left--menu-icon");
var sidebar = document.querySelector(".sidebar");
var container = document.querySelector(".container");
var listContainer = document.querySelector(".list-container");
var userIcon = document.querySelector(".flex-div__nav-right--user-icon");
var hidden = document.querySelector(".hidden");


// when menu icon is clicked it will toggle the width
// from sidebar class & small-sidebar class in the _nav.scss

// when menu icon is clicked it will toggle the padding-left
// from container class in the _content-section.scss
menuIcon.onclick = function(){
    sidebar.classList.toggle("small-sidebar");
    container.classList.toggle("large__container");
    listContainer.classList.toggle("large__list-container");

};

userIcon.onclick = function() {
    hidden.classList.toggle("hidden");
};


// Tech lounge Article Logic 

// Get Current Date JS Logic
const date = new Date(Date.now());
currentDate = date.toLocaleString("en-US", {month: "short", day: "numeric", year: "numeric"}); // remove unnecessary information from date and specify only what is needed

const dot = "&bull; "; // dot separator between clicks and date - &bull; used to add a dot/ fullstop
// dot = dot.replace(/^"|"$/g, ''); - testing with innerText 

// Desktop View Date Main Article Array
const dateMain = ["currentDate-1", "currentDate-2", "currentDate-3", "currentDate-4", "currentDate-5",
                "currentDate-6", "currentDate-7", "currentDate-8", "currentDate-9",];
for(i = 0; i < dateMain.length; i++){
    document.getElementById(dateMain[i]).innerHTML = "15k clicks " + dot + currentDate;
};

// Mobile View Date Alt Article Array
const dateAlt = ["currentDateAlt-1", "currentDateAlt-2", "currentDateAlt-3", "currentDateAlt-4", "currentDateAlt-5",
                "currentDateAlt-6", "currentDateAlt-7", "currentDateAlt-8", "currentDateAlt-9",];
for(i = 0; i < dateAlt.length; i++){
    document.getElementById(dateAlt[i]).innerHTML = "15k clicks " + dot + currentDate;
};


// form submit scroll trigger
window.onscroll = function() {articleForm()};

function articleForm() {
    if(document.body.scrollTop > 1800 || document.documentElement.scrollTop > 1800) { // number - measured in pixels away from top of page
        const formSubmit =  gsap.timeline({defaults: {duration: 1.5, ease: "power2.out"}});
        formSubmit.to(".tech-lounge-form", {opacity: 1});
    }else {
        const formSubmit =  gsap.timeline({defaults: {duration: 2, ease: "power2.out"}});
        formSubmit.to(".tech-lounge-form", {opacity: 0});
    }
};

// logic of add to topic - form submission
// update Arrays where needed
const formMessageBtn = ["form-btn-1", "form-btn-2", "form-btn-3"];
const formMessageContainer = ["message-1", "message-2", "message-3"];
const formSubmitContainer = ["top-1", "top-2", "top-3"];
const messageBox = ["form-textarea-1", "form-textarea-2", "form-textarea-3"];
for(i = 0; i < formMessageBtn.length, i < formMessageContainer.length, i < formSubmitContainer.length, i < messageBox.length; i++){
   const messageFormBtn = document.getElementById(formMessageBtn[i]);
   const messageFormContainer = document.getElementById(formMessageContainer[i]);
   const messageSubmitContainer = document.getElementById(formSubmitContainer[i]);
   const messageTextArea = document.getElementById(messageBox[i]);
   
   messageFormBtn.addEventListener("click", () => {
    if (messageTextArea.value === "") {
            alert("Please Enter Valid Text");
        }else if (messageTextArea.value.length <= 9) {
            alert("Character minimum is 10");
        }else if ( 
            messageSubmitContainer.classList.contains("article-hidden")
        ) {
            messageFormContainer.classList.add("article-hidden");
            messageSubmitContainer.classList.remove("article-hidden");
        }    
   })
};

// Articles logic
// update Arrays where needed
const articleBtns = ["article-1", "article-2", "article-3"];
const articles = ["finance", "lifestyle", "gadgets", "apps", "tech", "health", "business", "luxury", "wfh"];


for(i = 0; i < articles.length, i < articleBtns.length; i++) {
    // outer focus logic grabbing nav and sidebar
    const techNav = document.querySelector(".tech-nav");
    const techSidebar = document.querySelector(".tech-sidebar");
    const techLoungeMain = document.querySelector(".tech-lounge__container");
    // article selection
    const openArticle = document.getElementById(articleBtns[i]);
    const readArticle = document.getElementById(articles[i]);

    openArticle.addEventListener("click", () => {
        techLoungeMain.classList.toggle("article-hidden");
        readArticle.classList.toggle("article-hidden");
        techNav.classList.toggle("article-outer-blur");
        techSidebar.classList.toggle("article-outer-blur");
    })
}