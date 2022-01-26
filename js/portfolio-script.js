const technicalSelect = document.querySelector(".technical-background");
const programmingSelect = document.querySelector(".programming-background");
const customerSelect = document.querySelector(".customer-background");
const resumeSelect = document.querySelector(".resume-background");

// Different Carousels
const technicalCarousel = document.querySelector(".hidden1")
const programmingCarousel = document.querySelector(".hidden2")
const customerCarousel = document.querySelector(".hidden3")
const resumeCarousel = document.querySelector(".hidden4")


technicalSelect.addEventListener("click", openCarousel1);
programmingSelect.addEventListener("click", openCarousel2);
customerSelect.addEventListener("click", openCarousel3);
resumeSelect.addEventListener("click", openCarousel4);

// Different Close btn
const closeBtn1 = document.querySelector("#close1");
const closeBtn2 = document.querySelector("#close2");
const closeBtn3 = document.querySelector("#close3");
const closeBtn4 = document.querySelector("#close4");

closeBtn1.addEventListener("click", closeCarousel1);
closeBtn2.addEventListener("click", closeCarousel2);
closeBtn3.addEventListener("click", closeCarousel3);
closeBtn4.addEventListener("click", closeCarousel4);

// Open Carousels
function openCarousel1() {
    technicalCarousel.classList.remove("hidden1");

    programmingCarousel.classList.add("hidden2");
    customerCarousel.classList.add("hidden3");
    resumeCarousel.classList.add("hidden4");
}

function openCarousel2() {
    programmingCarousel.classList.remove("hidden2");

    technicalCarousel.classList.add("hidden1");
    customerCarousel.classList.add("hidden3");
    resumeCarousel.classList.add("hidden4");
}

function openCarousel3() {
    customerCarousel.classList.remove("hidden3");

    technicalCarousel.classList.add("hidden1");
    programmingCarousel.classList.add("hidden2");
    resumeCarousel.classList.add("hidden4");
}

function openCarousel4() {
    resumeCarousel.classList.remove("hidden4");
    
    technicalCarousel.classList.add("hidden1");
    programmingCarousel.classList.add("hidden2");
    customerCarousel.classList.add("hidden3");
}

// Closing Carousels

function closeCarousel1 () {
    technicalCarousel.classList.add("hidden1");
}

function closeCarousel2 () {
    programmingCarousel.classList.add("hidden2");
}

function closeCarousel3 () {
    customerCarousel.classList.add("hidden3");
}

function closeCarousel4 () {
    resumeCarousel.classList.add("hidden4");
}