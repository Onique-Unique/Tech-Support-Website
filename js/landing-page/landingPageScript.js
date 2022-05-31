const navItemDropDownList = document.querySelectorAll('.nav-item');
const navTogglerOpen = document.querySelector('.navbar-toggler-open');
const navTogglerClose = document.querySelector('.navbar-toggler-close');
const navbarCollapseDiv = document.querySelector('.navbar-collapse');
const newsClick = document.getElementById('news-click');
const landingPageVisible = document.querySelector('.landing-page-visible');
const contactForm = document.querySelector('.gamelounge-contact-container');
const disclaimerForm = document.querySelector('.fair-use-disclaimer--container');
const advertiseClick = document.getElementById('footer-advertise');
const privacyClick = document.getElementById('footer-privacy');
const contactClick = document.getElementById('footer-contact');
const contactFormExit = document.querySelector('.form-exit');
const disclaimerExit = document.querySelector('.disclaimer-exit');

navItemDropDownList.forEach((navItem) => {
    navItem.addEventListener('click', () => {
        // console.log(navItem);        
        if(navItem.lastElementChild.previousElementSibling.firstElementChild.className == "fas fa-chevron-down"){
            navItem.lastElementChild.previousElementSibling.firstElementChild.className = "fas fa-chevron-up";
            navItem.lastElementChild.classList.toggle('show-dropdown');
            if(!navItem.previousElementSibling.classList.contains("nav-item-dropdown")) {
                navItem.previousElementSibling.lastElementChild.classList.remove('show-dropdown');
                navItem.lastElementChild.previousElementSibling.firstElementChild.className = "fas fa-chevron-down";
            } if(!navItem.nextElementSibling.classList.contains("nav-item-dropdown")) {
                navItem.nextElementSibling.lastElementChild.classList.remove('show-dropdown');
                navItem.lastElementChild.previousElementSibling.firstElementChild.className = "fas fa-chevron-down";
            }    
        } else if(navItem.lastElementChild.previousElementSibling.firstElementChild.className == "fas fa-chevron-up"){
            navItem.lastElementChild.previousElementSibling.firstElementChild.className = "fas fa-chevron-down";
            navItem.lastElementChild.classList.toggle('show-dropdown'); 
        }
    });
});

navTogglerOpen.addEventListener('click', () =>{
    navbarCollapseDiv.classList.add('show-navbar');
});

navTogglerClose.addEventListener('click', () => {
    navbarCollapseDiv.classList.remove('show-navbar');
});

newsClick.addEventListener("click", () => {
    navbarCollapseDiv.classList.remove('show-navbar');
});

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

// animation and transition stopper
let resizeTimer;
window.addEventListener('resize', () => {
    document.body.classList.add('resize-animation-stopper');
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        document.body.classList.remove('resize-animation-stopper');
    }, 400);
});

// Discord Live Chat added
window.addEventListener("load", () => {
    // Discord Chat Insert Top ------------------------------
    const bodyInsert = document.querySelector(".landing-page-body");   

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
            crate.notify('Join Live Chat')
        `;
    bodyInsert.appendChild(discordScriptTag);
    bodyInsert.appendChild(discordScriptTagMain);
});