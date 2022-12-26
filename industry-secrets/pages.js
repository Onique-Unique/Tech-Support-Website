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