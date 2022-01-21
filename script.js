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

}

userIcon.onclick = function() {
    hidden.classList.toggle("hidden");
}


// Tech lounge Article Logic 

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
}

// logic of form submission
const formMessageBtn = document.querySelector("#form-btn");
const formMessageContainer = document.querySelector(".tech-form__message");
const formSubmitContainer = document.querySelector(".tech-form-top");
const messageBox = document.querySelector("textarea");

formMessageBtn.addEventListener("click", () => {
    if (messageBox.value === "") {
        alert("Please Enter Valid Text");
    }else if (messageBox.value.length <= 9) {
        alert("Character minimum is 10");
    }else {
        formMessageContainer.classList.add("article-hidden");
        formSubmitContainer.classList.remove("article-hidden");
    }
});

// outer focus logic grabbing nav and sidebar
const techNav = document.querySelector(".tech-nav");
const techSidebar = document.querySelector(".tech-sidebar");
const techLoungeMain = document.querySelector(".tech-lounge__container");

// // Crypto/ Finance Article - not ready--------------- uncomment when ready
// const article1 = document.querySelector("#finance");
// const articleBtn1 = document.querySelector(".article-1");

// articleBtn1.addEventListener("click", () => {
//     techLoungeMain.classList.toggle("article-hidden");
//     article1.classList.toggle("article-hidden");
//     techNav.classList.toggle("article-outer-blur");
//     techSidebar.classList.toggle("article-outer-blur");
// });

// Home/ Lifestyle Article
const article2 = document.querySelector("#lifestyle");
const articleBtn2 = document.querySelector(".article-2");

articleBtn2.addEventListener("click", () => {
    techLoungeMain.classList.toggle("article-hidden");
    article2.classList.toggle("article-hidden");
    techNav.classList.toggle("article-outer-blur");
    techSidebar.classList.toggle("article-outer-blur");
});