// Generate the access key
var accessKey = Math.random().toString(36).slice(2);

// Check the current page URL
if (window.location.href === "https://www.feenixbloom.com/roadmap-course/access-key") {
    // Create h1 message 
    var h1Message = document.createElement("h1");
    h1Message.className = "access-h1";
    h1Message.innerText = "Tap/ Click Key To Access Roadmap";

    // Create the popup element
    var popup = document.createElement("div");
    popup.setAttribute("id", "access-key-popup");
    popup.setAttribute("class", "access-key-popup");

    // Create h1 message 
    var paraMessage = document.createElement("h1");
    paraMessage.className = "access-para";
    paraMessage.innerText = "Save/ Bookmark This Page To Keep Access Key!";

    // Add the access key to the popup element
    popup.innerHTML = `<i class="fa-solid fa-unlock-keyhole"></i> &nbsp;Access Key: ` + accessKey;

    // Append the popup element to the body
    document.body.appendChild(h1Message);
    document.body.appendChild(popup);
    document.body.appendChild(paraMessage);
    //Add event listener to copy the key to local storage and go to fast track page
    popup.addEventListener("click", function () {
        localStorage.setItem("access-key", accessKey);
        window.location.href = "https://www.feenixbloom.com/roadmap-course/fast-track";
    });

    // Store the access key in the local storage when the page loads
    localStorage.setItem("access-key", accessKey);
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
