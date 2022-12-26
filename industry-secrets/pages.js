// Get a reference to the ordered list element
var list = document.querySelector("ul");

// Get a reference to all the list items in the ordered list
var listItems = list.querySelectorAll("li");

// Loop through the list items and add a blur effect to the ones below the 5th item
for (var i = 2; i < listItems.length; i++) {
    listItems[i].style.filter = "blur(5px)";
}

function addListItemNumbers() {
    // Get a reference to the unordered list element
    var list = document.querySelector("ul");

    // Get a reference to all the list items in the unordered list
    var listItems = list.querySelectorAll("li");

    // Loop through the list items and add the list item number as a prefix
    for (var i = 0; i < listItems.length; i++) {
        listItems[i].innerHTML = (i + 1) + ". " + listItems[i].innerHTML;
    }
}
window.addEventListener("load", addListItemNumbers);

const unlockButton = document.querySelector('.unlock-button');
const popup = document.getElementById('popup');
const popup2 = document.getElementById('popup-2');
const contentWrap = document.querySelector(".content-wrap");
const exitButton = document.querySelector('.exit-popup');
const exitButton2 = document.querySelector('.exit-popup-2');

unlockButton.addEventListener('click', function () {
    popup.style.display = 'block';
    contentWrap.style.filter = "blur(8px)";
});

exitButton.addEventListener('click', function () {
    popup2.style.display = 'block';
    popup.style.display = 'none';
});

exitButton2.addEventListener('click', function () {
    popup2.style.display = 'none';
    popup.style.display = 'none';
    contentWrap.style.filter = "none";
});

// Simultaenously save to local when click and go to payment area
let popupBtns = document.querySelectorAll('.popup-btn');

popupBtns.forEach(function(btn) {
  btn.addEventListener('click', function() {
    // Get the div element with the class "pdf-download"
    const pdfDownloadDiv = document.querySelector('.pdf-download');

    // Get the inner HTML of the div
    const pdfDownloadDivInnerHTML = pdfDownloadDiv.innerHTML;

    // Save the inner HTML to local storage
    localStorage.setItem('pdfDownloadDivInnerHTML', pdfDownloadDivInnerHTML);
  });
});


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

// Set a flag to track if the blur effect has been removed
var blurRemoved = false;

// Set up an event listener to check if the blur effect has been removed every second
setInterval(function () {
    // Check if the blur effect has been removed
    for (var i = 2; i < listItems.length; i++) {
        if (listItems[i].style.filter !== "blur(5px)") {
            blurRemoved = true;
            break;
        }
    }

    // If the blur effect has been removed, refresh the page and display a popup
    if (blurRemoved) {
        document.body.style.display = "none";
        window.location.reload();
        alert("Please do not manipulate any areas of the page to avoid legal actions. Click OK to continue.");
    }
}, 1000);