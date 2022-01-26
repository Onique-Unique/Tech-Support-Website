// // Scroll trigger
// // Pin/ fixed Home page
// const tlHomepage = gsap.timeline({
//     scrollTrigger: {
//         trigger: ".home-section-1",
//         start: "-19.2%",
//         end: "0%",
//         scrub: true,
//         pin: true, // keep page in place, can be used to animate the page content before scroll exit to next page
//     },
// });

const tl =  gsap.timeline({defaults: {duration: .75, ease: "power2.out"}});
tl.fromTo(".bi-circle", {opacity: 0, y: -500}, {opacity: .3, y: 0, duration: 2, ease: "elastic.out(1, 0.3)"},"<");
tl.fromTo(".content-arrow", {opacity: 0, x: 50}, {opacity: .8, x: 0, duration: 4, ease: "elastic.out(1, 0.5)"},"<");
tl.fromTo(".highlight-2", {opacity: 0}, {opacity: 1, stagger: .15, delay: .25}, "<");
tl.fromTo(".highlight-3", {opacity: 0}, {opacity: 1, stagger: .15, delay: .25}, "<");
tl.fromTo(".highlight-4", {opacity: 0}, {opacity: 1, stagger: .15, delay: .25}, "<");

// Pin/ fixed Home page
const tlHomepagePin1 = gsap.timeline({
    scrollTrigger: {
        trigger: ".home-section-1", 
        start: "0%",
        end: "100%",
        // markers: {startColor: "red", endColor: "blue"},
        scrub: true,
        pin: true, // keep page in place, can be used to animate the page content before scroll exit to next page
        pinSpacing: false,
    },
});

tlHomepagePin1.fromTo(".section-2-circle", {height: 0, scale: 1}, {height: "100%", scale: 1.35});


// Scroll trigger
// Pin/ fixed Home page
const tlpage1 = gsap.timeline({
    scrollTrigger: {
        trigger: ".alt-1",
        start: "0%",
        end: "100%",
        // markers: {startColor: "yellow", endColor: "orange"},
        scrub: true,
        pin: true, // keep page in place, can be used to animate the page content before scroll exit to next page
    },
});

// Pin/ fixed Home page
const tlHomepagePin2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".home-section-alt", 
        start: "0%",
        end: "100%",
        // markers: {startColor: "red", endColor: "blue"},
        scrub: true,
        pin: true, // keep page in place, can be used to animate the page content before scroll exit to next page
        pinSpacing: false,
    },
});

tlHomepagePin2.fromTo(".section-alt-circle", {height: 0, scale: 1}, {height: "100%", scale: 1.35}, "<");


// Scroll trigger
// Pin/ fixed Home page
const tlpage2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".alt-2",
        start: "0%",
        end: "100%",
        // markers: {startColor: "yellow", endColor: "orange"},
        scrub: true,
        pin: true, // keep page in place, can be used to animate the page content before scroll exit to next page
    },
});

// Pin/ fixed Home page
const tlHomepagePin3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".home-section-3", 
        start: "0%",
        end: "100%",
        // markers: {startColor: "red", endColor: "blue"},
        scrub: true,
        pin: true, // keep page in place, can be used to animate the page content before scroll exit to next page
        pinSpacing: false,
    },
});

tlHomepagePin3.fromTo(".section-3-circle", {height: 0, scale: 1}, {height: "100%", scale: 1.35}, "<");


// Scroll trigger
// Pin/ fixed Home page
const tlpage3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".alt-3",
        start: "0%",
        end: "100%",
        // markers: {startColor: "yellow", endColor: "orange"},
        scrub: true,
        pin: true, // keep page in place, can be used to animate the page content before scroll exit to next page
    },
});

const hamburgerBtn = document.querySelector(".home-hamburger-svg");
const hamburgerCloseBtn = document.querySelector(".home-hamburger-close-svg");
const hamburgerList = document.querySelector(".home-hamburger-list");

hamburgerBtn.addEventListener("click", () => {
    hamburgerList.classList.remove("hamburger-hidden");
    hamburgerCloseBtn.classList.remove("hamburger-hidden");
    hamburgerBtn.classList.add("hamburger-hidden");
});

hamburgerCloseBtn.addEventListener("click", () => {
    hamburgerList.classList.add("hamburger-hidden");
    hamburgerCloseBtn.classList.add("hamburger-hidden");
    hamburgerBtn.classList.remove("hamburger-hidden");
});