document.getElementById("passive-contact").innerHTML = `
  <h3> Want To Earn More?</h3>
  <div class="form-text-h4">
      <h4>Leave Us Your Email.</h4>
      <h4 id="last-h4"><i class="fas fa-clipboard-check"></i><i class="fas fa-gifts"></i> It's time for you to gain your financial freedom..</h4>
  </div>
  <!--  -->
  <input type="hidden" name="_subject" value="Passive Income Roadmap Interest!">
  <input type="hidden" name="_autoresponse" value="This is an Automated response. A Team Member will reach out to you shortly">
  <input type="hidden" name="_next" value="https://www.feenixbloom.com/main-pages/apex-mobile/game-lounge-thankyou">

  <!--  -->
  <input type="hidden" name="_captcha" value="false">
  <input type="hidden" name="_template" value="table">
  <fieldset>
      <input name="name" placeholder="Your Name..." type="text" tabindex="1" required autofocus>
  </fieldset>
  <fieldset>
      <input name="email" placeholder="Your Email Address..." type="email" tabindex="2" required>
  </fieldset>
  <fieldset>
      <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
  </fieldset>
`

// Contact Send to avoid spam and hide email from email crawlers
const contactSend = document.getElementById("contact-submit");
const action = "https://formsubmit.co/oniquecampbell@yahoo.com";

contactSend.addEventListener("click", () => {
    document.getElementById("passive-contact").action = action;
});

// Onpage Popup 
let popup = document.createElement('div');
popup.className = 'popup';

let popupContent = document.createElement('div');
popupContent.className = 'popup-content';

let popupInnerContent = document.createElement('div');
popupInnerContent.className = 'popup-inner-content';

let h3 = document.createElement('h3');

let h4Main = document.createElement('h4');
h4Main.id = "popup-main-h4";

let h4Secondary = document.createElement('h4');
h4Secondary.style.fontSize = "2rem";
h4Secondary.innerHTML = `Is This Right For You?`;

let p = document.createElement('p');
p.style.fontSize = ".9rem";
let pText = document.createTextNode('If You Are The Type Of Person To Procrastinate Or Find It Hard To Invest In Your Own Self - Then No!');

p.appendChild(pText);

let popupURLBtn = document.createElement('button');
popupURLBtn.className = "popup-btn";
let btnText = document.createTextNode('I Understand');
popupURLBtn.appendChild(btnText);
popupURLBtn.onclick = closePopup;

popupInnerContent.appendChild(h3);
popupInnerContent.appendChild(h4Main);
popupInnerContent.appendChild(h4Secondary);
popupInnerContent.appendChild(p);
popupInnerContent.appendChild(popupURLBtn);

popupContent.appendChild(popupInnerContent);
popup.appendChild(popupContent);

document.body.appendChild(popup);
let showPopup = true;

function closePopup() {
  document.getElementsByClassName('popup')[0].style.display = 'none';
  showPopup = false;
  document.querySelector(".main-section").classList.remove("popup-blur");
}

document.onscroll = function () {
  if (window.scrollY > (window.innerHeight * 1.8) && showPopup) {
    document.getElementsByClassName('popup')[0].style.display = 'block';
    document.querySelector(".main-section").classList.add("popup-blur");
  }
};

const initiateRoadmapBtn = document.querySelector(".footer_button");
const detailsBtn = document.querySelector(".details_button");

const roadmapOpenBtns = [initiateRoadmapBtn, detailsBtn];

for (i = 0; i < roadmapOpenBtns.length; i++) {
  roadmapOpenBtns[i].addEventListener("click", () => {
    let popupDiv = document.createElement('div');
    popupDiv.className = 'popup-div';

    // Create the popup container
    const roadmapPopup = document.createElement("div");
    roadmapPopup.classList.add("roadmap-popup");

    const roadmapClose = document.createElement("i");
    roadmapClose.classList.add("to-roadmap-close");
    roadmapClose.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>';

    // Create the message
    const roadmapMessage = document.createElement("p");
    roadmapMessage.innerHTML = "<span id='roadmap-span'>Wait!!</span> <br> <span>Limited Access Only</span>  - Please Do Not Click <span style='color: yellow; font-size: 1rem;'>Continue</span> If You Are Not Ready! <br> <span style='color: #f93535; font-size: 12px; text-shadow: 0px 0px 2px #065fd4;'>9+ hours Learning.</span>";

    // Create the continue button
    const continueRoadmapBtn = document.createElement("button");
    continueRoadmapBtn.classList.add("roadmap-btn");
    continueRoadmapBtn.innerText = "Continue";

    // Append the message and continue button to the popup container
    roadmapPopup.appendChild(roadmapClose);
    roadmapPopup.appendChild(roadmapMessage);
    roadmapPopup.appendChild(continueRoadmapBtn);

    // Append the popup container to the body
    popupDiv.appendChild(roadmapPopup);
    document.body.appendChild(popupDiv);
    document.querySelector(".main-section").classList.add("popup-blur");

    // Close roadmap click 
    roadmapClose.addEventListener("click", () => {
      popupDiv.style.display = 'none';
      document.querySelector(".main-section").classList.remove("popup-blur");
    });

    // When User Selects Continue
    continueRoadmapBtn.addEventListener("click", () => {

      let serverPopupDiv = document.createElement('div');
      serverPopupDiv.className = 'server-popup-div';

      // Create the popup container
      const serverPopup = document.createElement("div");
      serverPopup.classList.add("roadmap-popup");

      // Create the message
      const serverMessage = document.createElement("p");
      serverMessage.innerHTML = "Due to Server Load of users - there is a low charge of <span id='roadmap-price'>$8.99</span> to gain access to the program and full access to the Passive Income Roadmap! <br> <span id='pay-guarantee'>After One (1) Year - You do not reach your goal, I'll Give You $20 - Guaranteed!</span>";

      // Create the continue button
      const continueRoadmapBtn = document.createElement("button");
      continueRoadmapBtn.classList.add("server-pay-btn");
      continueRoadmapBtn.innerHTML = `<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
      <input type="hidden" name="cmd" value="_s-xclick">
      <input type="hidden" name="hosted_button_id" value="PNH6YEFQ59RKC">
      <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_paynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
      <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
      </form>      
      `;

      continueRoadmapBtn.addEventListener("click", function () {
        localStorage.setItem("continueRoadmap", "Yes");
      });

      // Append the message and pay button to the popup container
      serverPopup.appendChild(serverMessage);
      serverPopup.appendChild(continueRoadmapBtn);

      // Append the popup container to the body
      serverPopupDiv.appendChild(serverPopup);
      document.body.appendChild(serverPopupDiv);
      document.querySelector(".main-section").classList.add("popup-blur");
      roadmapClose.style.opacity = "0";
      roadmapClose.style.pointerEvents = "none";
    });
  });
}

const questionaireButton = document.querySelector(".questionaire_button");
const questionsHere = document.querySelector(".questions-here");
let currentQuestion = 0;

const questions = [{
    question: "Are you Already Earning $8000+ In Monthly Passive Income?",
    options: ["Yes", "No"]
  },
  {
    question: "Want To Learn Something You And Your Friends Don't Know?",
    options: ["Yes", "No"]
  },
  {
    question: "Is Passive Income One Of Your Goals?",
    options: ["Yes", "No"]
  },
  {
    question: "Do You Want To Own Or Live A Luxurious Life Of Wealth Freedom?",
    options: ["Yes", "No"]
  },
  {
    question: "Do You Want To Finally Enjoy Your Life To The Fullest?",
    options: ["Yes", "No"]
  }
];

questionaireButton.addEventListener("click", () => {
  questionaireButton.style.display = "none";
  addQuestion();
});

function addQuestion() {
  if (currentQuestion >= questions.length) {
    if (currentQuestion === questions.length) {
      if (questionsHere.innerHTML !== "Sorry Your Journey Ends Here..")
        questionsHere.innerHTML = '<img id="question-img" src="assets/images/details-arrow.png" alt="details image" srcset=""> <br> Welcome! - Scroll Down To Get Roadmap.';
    }
    return;
  }
  const question = document.createElement("p");
  question.innerText = questions[currentQuestion].question;

  const optionsDiv = document.createElement("div");
  optionsDiv.className = "questionaire-options";

  for (let i = 0; i < questions[currentQuestion].options.length; i++) {
    const option = document.createElement("button");
    option.innerText = questions[currentQuestion].options[i];
    option.classList.add("option-button");
    optionsDiv.appendChild(option);
  }

  questionsHere.appendChild(question);
  questionsHere.appendChild(optionsDiv);

  const optionButtons = document.querySelectorAll(".option-button");

  for (let i = 0; i < optionButtons.length; i++) {
    optionButtons[i].addEventListener("click", (e) => {
      if (currentQuestion === 0 && e.target.innerText === "No") {
        currentQuestion++;
        questionsHere.innerHTML = "";
        addQuestion();
      } else if (currentQuestion === 0 && e.target.innerText === "Yes") {
        questionsHere.innerHTML = "Sorry Your Journey Ends Here..";
      } else if (currentQuestion > 0 && e.target.innerText === "Yes") {
        currentQuestion++;
        questionsHere.innerHTML = "";
        addQuestion();
      } else {
        questionsHere.innerHTML = "Sorry Your Journey Ends Here..";
      }
    });
  }
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