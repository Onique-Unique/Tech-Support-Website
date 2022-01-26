// Side Bar and Menu Icon Script
// Component of all pages except landing pages

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
