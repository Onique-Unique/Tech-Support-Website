// Loading Function then remove when page is loaded completely
//Create loading screen
document.body.classList.add("body-fixed"); 
var loadingScreen = document.createElement("div");
loadingScreen.id = "loading-screen";
loadingScreen.style.position = "fixed";
loadingScreen.style.top = "0";
loadingScreen.style.bottom = "0";
loadingScreen.style.left = "0";
loadingScreen.style.right = "0";
loadingScreen.style.backgroundColor = "#000000d6";
document.body.appendChild(loadingScreen);

//Create loading animation
var loader = document.createElement("div");
loader.id = "loader";
loader.style.position = "absolute";
loader.style.top = "50%";
loader.style.left = "50%";
loader.style.transform = "translate(-50%, -50%)";
loadingScreen.appendChild(loader);

//Create loading animation circles
var circles = [
    document.createElement("div"),
    document.createElement("div"),
    document.createElement("div")
];

circles.forEach(function(circle, index) {
    circle.className = "circle";
    circle.style.background = "#FFFFFF";
    circle.style.height = "10px";
    circle.style.width = "10px";
    circle.style.borderRadius = "50%";
    circle.style.margin = "5px";
    circle.style.animationDelay = index * 0.5 + "s";
    loader.appendChild(circle);
});

//Detect when page is loaded
window.onload = function() {
    loadingScreen.parentNode.removeChild(loadingScreen);
    document.body.classList.remove("body-fixed"); 
};

// Check if the current domain is "feenixbloom.com"
if (window.location.hostname === "feenixbloom.com") {
    // Make the body of the current page blank
    document.body.innerHTML = "";

    // Display an alert message
    alert("You Do Not Have Access To This Page!");
}
// Check if the "access-key" is present in local storage
if (!localStorage.getItem("access-key")) {
    // Make the body of the current page blank
    document.body.innerHTML = "";
    setInterval(function() {
    // Display an alert message
    alert("Access key for this page is missing - ensure you are authorised access.");
    // Keep listening every 1 second
        if (localStorage.getItem("access-key")) {
            location.reload();
        }
    }, 1000);
}

const iframes = document.getElementsByTagName("iframe");
const motiveVidBtn = document.querySelector(".banner_button.purple");
let overlay = document.createElement("div");
overlay.classList.add("overlay");

const vidCloseButton = document.createElement("button");
vidCloseButton.innerText = "Close Window";
vidCloseButton.classList.add("vid-close-button");
vidCloseButton.style.display = "none";
document.body.appendChild(vidCloseButton);

for (let i = 0; i < iframes.length; i++) {
    const expandButton = document.createElement("button");
    expandButton.innerText = "Play Video";
    expandButton.classList.add("expand-button");
    iframes[i].parentNode.appendChild(expandButton);

    expandButton.addEventListener("click", function () {
        this.innerText = "Open Video";
        if (iframes[i].classList.contains("roadmap-vids")) {
            iframes[i].classList.remove("roadmap-vids");
            iframes[i].classList.add("expanded");
            document.body.insertBefore(overlay, document.body.firstChild);
            expandButton.style.display = "none";
            vidCloseButton.style.display = "block";
        }
    });
    vidCloseButton.addEventListener("click", function () {
        for (let j = 0; j < iframes.length; j++) {
            if (iframes[j].classList.contains("expanded")) {
                iframes[j].classList.remove("expanded");
                iframes[j].classList.add("roadmap-vids");
            }
            if (j == 1) {
                iframes[j].className = "expanded";
            }
        }
        overlay.remove();
        document.querySelector(".motive-div").style.display = "none";
        vidCloseButton.style.display = "none";
        for (let j = 0; j < iframes.length; j++) {
            let expandButton = iframes[j].parentNode.querySelector(".expand-button")
            expandButton.style.display = "block";
        }
    });
    motiveVidBtn.addEventListener("click", () => {
        document.querySelector(".motive-div").style.display = "block";
        document.body.insertBefore(overlay, document.body.firstChild);
        expandButton.style.display = "none";
        vidCloseButton.style.display = "block";
    });
}

//  Highlght text when in view onpage
// Get all elements with text content
const elementsWithTextContent = document.querySelectorAll('h1, h2, h3, li, p, i, button');

// Add event listener to window
window.addEventListener('scroll', function () {
    // Loop through each element
    elementsWithTextContent.forEach(element => {
        // Get element's position relative to the viewport
        const elementPosition = element.getBoundingClientRect();

        // When element is out of view
        if (elementPosition.top < 0 || elementPosition.bottom > window.innerHeight) {
            const initialOpacity = 0.4;
            element.style.transition = 'opacity 0.5s';
            element.style.opacity = initialOpacity;
        }

        // When element is in view
        else if (elementPosition.top > 0 && elementPosition.bottom < window.innerHeight) {
            const fullOpacity = 1;
            element.style.transition = 'opacity 0.5s';
            element.style.opacity = fullOpacity;
        }
    });
});

const readMeBtn = document.querySelector("#read-me-btn");

if (readMeBtn) {
    readMeBtn.addEventListener("click", () => {
        let popupDiv = document.createElement('div');
        popupDiv.className = 'popup-div';

        // Create the popup container
        const roadmapPopup = document.createElement("div");
        roadmapPopup.classList.add("roadmap-popup");

        const roadmapClose = document.createElement("i");
        roadmapClose.classList.add("to-roadmap-close");
        roadmapClose.innerHTML = '<i class="fa-solid fa-chevron-down"></i>';

        // Create the message
        const roadmapMessage = document.createElement("p");
        roadmapMessage.innerHTML = `<span id="read-me-head">Personal Message:</span> <br>  Hey you've made it to the end of the roadmap and i must say a big congratulations!!! I created this roadmap in hopes to help people find a clear path on how to build an online brand for themselves as many couldn't figure out the exact path or the quickest route to take. 
        Since you've made it this far you are serious about your future and i believe in your goals in the coming year. <br> When i started i didn't start to see income until around my first 150 blog posts and each were atleast 1000 words, now to create online content is much easier due to all the tools and resources available,
        and i stand behind what i said if you do not reach your goal after atleast one year plus (+) writing atleast 150 blog posts for your niche of choice whether that is to build an audience, start seeing an income etc. You are welcome to ask for your money back! <br><br> Now get to working see you in a year...`;

        // Append the message and continue button to the popup container
        roadmapPopup.appendChild(roadmapClose);
        roadmapPopup.appendChild(roadmapMessage);

        // Append the popup container to the body
        popupDiv.appendChild(roadmapPopup);
        document.body.appendChild(popupDiv);
        document.querySelector(".main-section").classList.add("popup-blur");

        // Close roadmap click 
        roadmapClose.addEventListener("click", () => {
            popupDiv.style.display = 'none';
            document.querySelector(".main-section").classList.remove("popup-blur");
        });
    });
}

// Protect Page from unwanted content stealing, plagiarism etc such as copying content or inspect element...
// Create error message box and design
let errorMessage = document.createElement('div');
errorMessage.className = 'error-message';
errorMessage.style.background = 'ghostwhite';
errorMessage.style.color = 'red';
errorMessage.style.padding = '10px';
errorMessage.style.position = 'fixed';
errorMessage.style.top = '50%';
errorMessage.style.left = '50%';
errorMessage.style.transform = 'translate(-50%, -50%)';
errorMessage.style.borderRadius = '5px';
errorMessage.style.zIndex = '2';
errorMessage.style.fontSize = '1.2rem';
errorMessage.style.display = 'none';
errorMessage.style.textAlign = "center";
errorMessage.style.minWidth = "280px";
errorMessage.innerText = 'Not Allowed: This page is protected!';
document.body.style.userSelect = "none";
document.body.style.WebkitUserSelect = "none";
document.body.style.msUserSelect = "none";
document.body.style.oUserSelect = "none";
document.body.appendChild(errorMessage);

// Detect attempts to copy any text on page
document.addEventListener('copy', event => {
  // Block the copy event and display error message
  errorMessage.style.display = 'block';
  setTimeout(function () {
    errorMessage.style.display = 'none';
  }, 1000);
  event.preventDefault();
});

// Listen for right click on page then display error message
document.addEventListener("contextmenu", function (event) {
  errorMessage.style.display = 'block';
  setTimeout(function () {
    errorMessage.style.display = 'none';
  }, 1000);
  event.preventDefault();
});

// Find all text elements on page excluding anchor tags, images etc, listen for mousedown/ long press then display error message
let textElements = document.querySelectorAll('p, span, h1, h2, h3, h4, h5, h6');

for (let i = 0; i < textElements.length; i++) {
  textElements[i].addEventListener("mousedown", function (event) {
    if (event.target.tagName != "a") {
      event.preventDefault();
    }
  });
}

// Listen for keyboard control A or control C or control U or control shift J or control shift I or F12 on page then display error message
document.addEventListener("keydown", function (event) {
  if (event.ctrlKey && event.keyCode == 65 || event.ctrlKey && event.keyCode == 67 || event.ctrlKey && event.shiftKey && event.keyCode == 74 || event.ctrlKey && event.keyCode == 85 || event.keyCode == 123 || event.ctrlKey && event.shiftKey && event.keyCode == 73) {
    errorMessage.style.display = 'block';
    setTimeout(function () {
      errorMessage.style.display = 'none';
    }, 1000);
    event.preventDefault();
  }
});

// Check every 1 second if body user select has been removed then run the following function:
setInterval(function () {
  if (document.body.style.userSelect !== "none") {
    document.body.style.display = "none";
    window.location.reload();
    alert("Really?! - You are attempting to do something that is not allowed!");
  }
}, 1000);