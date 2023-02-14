let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
  searchIcon.classList.remove('fa-times');
  searchForm.classList.remove('active');
}

let searchIcon = document.querySelector('#search-icon');
let searchForm = document.querySelector('.search-form');

searchIcon.onclick = () => {
  searchIcon.classList.toggle('fa-times');
  searchForm.classList.toggle('active');
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
}

window.onscroll = () => {
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
  searchIcon.classList.remove('fa-times');
  searchForm.classList.remove('active');
}

// Advisory Notice For Affiliate
const advisoryNotice = document.getElementById("advisory");
const advisoryText = document.getElementById("advisory-text");

if (advisoryNotice) {
  advisoryNotice.addEventListener("click", () => {
    advisoryText.classList.toggle("hide");
  });
};

// Related Links
const relatedContainer = document.getElementById("related-link-list");
const relatedLinks = document.getElementById("related-links");
const relatedLinksAlt = document.getElementById("related-links-alt");
const relatedContainerAlt = document.getElementById("top-picks-list");
if (relatedLinks) {
  relatedLinks.addEventListener("click", () => {
    relatedContainer.classList.toggle("hide");
  });
};

if (relatedLinksAlt) {
  relatedLinksAlt.addEventListener("click", () => {
    relatedContainerAlt.classList.toggle("hide");
  });
};

// Share Button script
const shareBtn = document.getElementById("share-btn");

if (shareBtn) {
  const shareTitle = document.getElementById("share-title").textContent;
  const shareDescription = document.getElementById("share-description").textContent;

  function shareList() {
    if (navigator.canShare) {
      navigator.share({
        title: shareTitle,
        text: shareDescription,
        url: window.location.href,
      });
    } else {
      // Desktop Functionality
    }
  };

  shareBtn.addEventListener("click", () => {
    shareList();
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
    setTimeout(function(){
      errorMessage.style.display = 'none';
    }, 1000);
  event.preventDefault();
});

// Listen for right click on page then display error message
document.addEventListener("contextmenu", function(event) {
	errorMessage.style.display = 'block';
  setTimeout(function(){
    errorMessage.style.display = 'none';
  }, 1000);
	event.preventDefault();
});

// Find all text elements on page excluding anchor tags, images etc, listen for mousedown/ long press then display error message
let textElements = document.querySelectorAll('p, span, h1, h2, h3, h4, h5, h6');

for (let i = 0; i < textElements.length; i++) {
	textElements[i].addEventListener("mousedown", function(event) {
		if (event.target.tagName != "a") {
			event.preventDefault();
		}
	});
}

// Listen for keyboard control A or control C or control U or control shift J or control shift I or F12 on page then display error message
document.addEventListener("keydown", function(event) {
	if (event.ctrlKey && event.keyCode == 65 || event.ctrlKey && event.keyCode == 67 || event.ctrlKey && event.shiftKey && event.keyCode == 74 || event.ctrlKey && event.keyCode == 85 || event.keyCode == 123 || event.ctrlKey && event.shiftKey && event.keyCode == 73) {
		errorMessage.style.display = 'block';
    setTimeout(function(){
      errorMessage.style.display = 'none';
    }, 1000);
		event.preventDefault();
	}
});

// Check every 1 second if body user select has been removed then run the following function:
setInterval(function(){
  if (document.body.style.userSelect !== "none") {
    document.body.style.display = "none";
    window.location.reload();
    alert("Really?! - You are attempting to do something that is not allowed!");
  }
}, 1000);

// Rain Effect Script Only For Pages That Have Rain Mentioned In Title:
// A script that shows rain effects on page when it is present in title
window.addEventListener("load", () => {
  var title = document.title;
  var rainWords = /^rain$|^rains$|^raining$|^wet$/gi;
  var snowWords = /^snow$|^snowing$|^snowfall$|^ski$|^skiing$/gi;
  if (title.match(rainWords)) {
      var canvas = document.createElement("canvas");
      canvas.setAttribute("style", "width: 100%; height: 100%; position: fixed; top:0; left:0; z-index: 2;");
      canvas.setAttribute("id", "rain");
      document.body.appendChild(canvas);

      var canvas = document.getElementById("rain");
      var ctx = canvas.getContext("2d");
      var rainSpeed = 2.5;

      function Raindrop() {
          this.x = Math.random() * canvas.width;
          this.y = 0;
          this.speed = (Math.random() * rainSpeed) + rainSpeed;
      }

      Raindrop.prototype.draw = function () {
          ctx.beginPath();
          ctx.fillStyle = "#32c8fa";
          ctx.arc(this.x, this.y, 2, 0, 2 * Math.PI);
          ctx.fill();
      }

      Raindrop.prototype.move = function () {
          this.y += this.speed;
      }

      var raindrops = [];
      for (var i = 0; i < 100; i++) {
          raindrops.push(new Raindrop());
      }

      function animate() {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          for (var i = 0; i < raindrops.length; i++) {
              raindrops[i].move();
              raindrops[i].draw();
          }
      }

      setInterval(animate, 1000 / 60); // Runs the animation 60 times per second
      setInterval(function () {
          raindrops.push(new Raindrop());
      }, 100); // Add a new raindrop every 100ms
  } else if (title.match(snowWords)) {
    var canvas = document.createElement("canvas");
    canvas.setAttribute("style", "width: 100%; height: 100%; position: fixed; top:0; left:0; z-index: 2;");
    canvas.setAttribute("id", "rain");
    document.body.appendChild(canvas);
    var canvas = document.getElementById("rain");
    var ctx = canvas.getContext("2d");
    var rainSpeed = 1.5; // change rain speed for snow effect
  
    function Raindrop() {
        this.x = Math.random() * canvas.width;
        this.y = 0;
        this.speed = (Math.random() * rainSpeed) + rainSpeed;
    }
  
    Raindrop.prototype.draw = function () {
        ctx.beginPath();
        ctx.fillStyle = "#e6f5fa"; // change fill style for snow effect
        ctx.arc(this.x, this.y, 2, 0, 2 * Math.PI);
        ctx.fill();
    }
  
    Raindrop.prototype.move = function () {
        this.y += this.speed;
    }
  
    var raindrops = [];
    for (var i = 0; i < 100; i++) {
        raindrops.push(new Raindrop());
    }
  
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (var i = 0; i < raindrops.length; i++) {
            raindrops[i].move();
            raindrops[i].draw();
        }
    }
  
    setInterval(animate, 1000 / 60); // Runs the animation 60 times per second
    setInterval(function () {
        raindrops.push(new Raindrop());
    }, 100); // Add a new raindrop every 100ms
  }   
});