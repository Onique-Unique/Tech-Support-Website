// This Tool Will Predict Who Will Win/ Generate A Winner, Can Be Custom or Set Fields
let winnerData = {};
const btn = document.querySelector('#btn');
const plusBtn = document.querySelector('#plusBtn');
const input1 = document.querySelector('#input1');
const input2 = document.querySelector('#input2');
const winnerPopup = document.querySelector('#popup');
const winner = document.querySelector('#winner');
const percentage = document.querySelector('#percentage');
const closeBtn = document.querySelector('#closeBtn');
const alertPopup = document.querySelector('#alertPopup');
const alertBtn = document.querySelector('#alertBtn');
const inputFields = document.querySelector('#inputFields');
const winnerDataContainer = document.querySelector('#winnerData');

plusBtn.addEventListener('click', function () {
    let counter = 2;
    let allInput = document.querySelectorAll("input");
    const newOrText = document.createElement('div');
    newOrText.innerHTML = 'OR';
    newOrText.style.color = 'white';
    newOrText.className = "orText";
    const newInputField = document.createElement('input');
    newInputField.type = 'text';
    newInputField.style.backgroundColor = '#222222';
    newInputField.style.color = 'white';
    newInputField.style.padding = '10px';
    newInputField.style.border = 'none';
    newInputField.style.borderRadius = '5px';
    newInputField.className = "text-align";
    inputFields.appendChild(newOrText);
    inputFields.appendChild(newInputField);
    for (let i = 0; i < allInput.length; i++) {
        newInputField.placeholder = `Input Field ${i+counter}`;
    }
});

// Change/ Remove This Section For Custom Entries vvvvvvvvvvvvvvvvvvvv
const inputField1 = document.getElementById("pickNumber1").innerText;
const inputField2 = document.getElementById("pickNumber2").innerText;
const select1 = document.getElementById("input1").value = inputField1;
const select2 = document.getElementById("input2").value = inputField2;
winnerDataContainer.classList.add("hide");
// --------------------------------------------------------------------

// Winning percentages to display on selection of winner
let winningPercentages = [58.2, 73.9, 64.4, 85.3, 65.7, 82.1, 56.1, 94.6, 57.9, 72.8, 84.2, 66.5, 51.7, 80.3, 79.4, 91.8, 60.3, 77.0, 63.6, 71.4, 78.9, 92.2, 83.7, 93.8, 55.8]; 
let winningPercentage = winningPercentages[Math.floor(Math.random()*winningPercentages.length)]; 

let btnClick = 0;
btn.addEventListener('click', function () {

    // Remove This Section For Custom Entries vvvvvvvvvvvvvvvvvv
    document.body.classList.add("body-fixed"); 
    // ---------------------------------------------------------

    const allInputs = document.querySelectorAll('#inputFields input');
    let emptyInputs = 0;
    allInputs.forEach(function (input) {
        if (input.value === '') {
            emptyInputs++;
        }
    });
    // For Custom Inputs to check if empty vvvv
    if (emptyInputs > 0) {
        alertPopup.style.display = 'block';
    } else {
        const randomNo = Math.floor(Math.random() * allInputs.length);
        winner.innerHTML = "🎉" + allInputs[randomNo].value;
        percentage.innerHTML = winningPercentage + "% Chance";
        if (!(allInputs[randomNo].value in winnerData)) {
            winnerData[allInputs[randomNo].value] = 1;
        } else {
            winnerData[allInputs[randomNo].value] += 1;
        }
        if(btnClick < 1) {
            // If Who Will Win btn is selected once then display promo popup
            setTimeout(() => {
                document.getElementsByClassName('popup')[0].style.display = 'block';
                document.querySelector(".landing-page-visible").classList.add("popup-blur");
                document.body.classList.add("page-body-popup-adjust");
                btnClick++;
            }, 10000);
        }
        let winnerDataText = '';
        for (let key in winnerData) {
            winnerDataText += `${key} has won ${winnerData[key]} times<br>`;
        }

        // Remove Slash/ Uncomment For Custom Input Fields vvvvvvvvvvvvv
        // winnerDataContainer.innerHTML = winnerDataText; <-------------
        // -------------------------------------------------
        winnerPopup.style.display = 'block';
    }
});

alertBtn.addEventListener('click', function () {
    alertPopup.style.display = 'none';
});

// Remove For Custom Input Fields vvvvvvvvvvvv
closeBtn.style.display = "none";
// -------------------------------------------


closeBtn.addEventListener('click', function () {
    winnerPopup.style.display = 'none';
});

// Get all span elements with the Class 'current-year'
// Get the current year and display
let spans = document.querySelectorAll("span.current-year");
for (let i = 0; i < spans.length; i++) {
    spans[i].innerText = new Date().getFullYear();
}

const shareBtn = document.getElementById("button");

function shareList() {
    if (navigator.canShare) {
        navigator.share({
            // Will ${input1.value} or ${input2.value}?? Find Out here - Place This for Title For Custom Inputs
            title: `Who Will Win ${select1} or ${select2} Predictor/ Generator, Find Out here`,
            text: "Predict a winner, Decide a pick and more all for free...",
            url: window.location.href,
        });
    } else {
        // Desktop Functionality
    }
};

shareBtn.addEventListener("click", () => {
    shareList();
});

// mobile menu variables
const mobileMenuOpenBtn = document.querySelector('[data-mobile-menu-open-btn]');

mobileMenuOpenBtn.addEventListener('click', () => {
    document.location.href = "https://www.feenixbloom.com";
});

// Cookie Settings
document.cookie = "AC-C=ac-c;expires=Fri, 31 Dec 9999 23:59:59 GMT;path=/;SameSite=None;Secure";

// Affiliate Link stored in variable
const goToAffiliateLink = "https://www.amazon.com?&linkCode=ll2&tag=oniquecampbel-20&linkId=9e1e91f2e3d89d93e1684445475d82ee&language=en_US&ref_=as_li_ss_tl";

// always remove extra <img> at the end of the amazon affiliate image link
const affiliateImage = '<a href="https://www.amazon.com/dp/B07W22LYQK?psc=1&pd_rd_i=B07W22LYQK&pd_rd_w=8OtKx&content-id=amzn1.sym.bff6e147-54ad-4be3-b4ea-ec19ea6167f7&pf_rd_p=bff6e147-54ad-4be3-b4ea-ec19ea6167f7&pf_rd_r=QRVWA386EHZ4NDX4SG30&pd_rd_wg=y837k&pd_rd_r=ee737b51-3245-41e0-8f8a-79e415f4342a&s=furniture&sp_csd=d2lkZ2V0TmFtZT1zcF9kZXRhaWwy&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEzUlQ2T1BSM0s0SUFLJmVuY3J5cHRlZElkPUEwMDMzMjk3M0I1UUJGRjBCTFZQSyZlbmNyeXB0ZWRBZElkPUEwNTg4MjEwMU5IWEhLRTFaRlNHQyZ3aWRnZXROYW1lPXNwX2RldGFpbDImYWN0aW9uPWNsaWNrUmVkaXJlY3QmZG9Ob3RMb2dDbGljaz10cnVl&linkCode=li1&tag=oniquecampbel-20&linkId=543b85e5bce37362dafecb1de3f10780&language=en_US&ref_=as_li_ss_il" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B07W22LYQK&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=oniquecampbel-20&language=en_US" ></a>';

// Coupon Select/ Display for Popup
let springCoupons = [ { code: "SUMMERFUN20", discount: "20% off" }, { code: "NEWYEAR30", discount: "30% off" }, { code: "SUPERSALE20", discount: "20% off" }, { code: "SUMMERFUN30", discount: "30% off" }, { code: "SPRINGFREE50", discount: "Free shipping over $50" }, { code: "SPRING20OFF", discount: "20% off" }, { code: "MARCH20OFF", discount: "20% off" }, { code: "SPRINGSALE10", discount: "10% off" }, { code: "APRIL15OFF", discount: "15% off" }, { code: "SPRING50OFF", discount: "50% off" } ];

let summerCoupons = [ { code: "SALE25OFF", discount: "25% off" }, { code: "FREESHIPPING50", discount: "Free shipping over $50" }, { code: "SUPERSALE20", discount: "20% off" }, { code: "FREESHIPJUNE50", discount: "Free shipping over $50" }, { code: "SUMMER20OFF", discount: "20% off" }, { code: "JULY10OFF", discount: "10% off" }, { code: "JULY30OFF", discount: "30% off" }, { code: "AUGUST15OFF", discount: "15% off" }, { code: "SUMMER50OFF", discount: "50% off" }, { code: "SUMMERSHIP20", discount: "Free shipping over $20" } ];

let fallCoupons = [ { code: "BLACKFRIDAY50", discount: "50% off" }, { code: "CYBERMONDAY30", discount: "30% off" }, { code: "LABORDAY25", discount: "25% off" }, { code: "OCTOBERSALE20", discount: "20% off" }, { code: "FALL20OFF", discount: "20% off" }, { code: "SEPT10OFF", discount: "10% off" }, { code: "OCTOBER30OFF", discount: "30% off" }, { code: "NOVEMBER15OFF", discount: "15% off" }, { code: "FALL50OFF", discount: "50% off" }, { code: "FALLSHIP20", discount: "Free shipping over $20" } ];

let winterCoupons = [ { code: "HALLOWEEN30", discount: "30% off" }, { code: "FREESHIPPINGNOV50", discount: "Free shipping over $50" }, { code: "THANKSGIVING30", discount: "30% off" }, { code: "BLACKFRIDAY50", discount: "50% off" }, { code: "CYBERMONDAY35", discount: "35% off" }, { code: "CHRISTMAS20", discount: "20% off" }, { code: "WINTER20OFF", discount: "20% off" }, { code: "DECEMBER10OFF", discount: "10% off" }, { code: "JANUARY30OFF", discount: "30% off" }, { code: "FEBRUARY15OFF", discount: "15% off" }, { code: "WINTER50OFF", discount: "50% off" }, { code: "WINTERSHIP20", discount: "Free shipping over $20" } ];

// add function that checks current date, if the date is season relative then select a random coupon code from that list

function getCouponCodeBySeason() {
    let currentDate = new Date();
    let month = currentDate.getMonth();
    let coupons;

    if (month >= 3 && month <= 5) {
        coupons = springCoupons;
    } else if (month >= 6 && month <= 8) {
        coupons = summerCoupons;
    } else if (month >= 9 && month <= 11) {
        coupons = fallCoupons;
    } else if (month === 0 || month === 1 || month === 2 || month === 12) {
        coupons = winterCoupons;
    }

    // exclude all codes that have a month name that is not equal to current month
    let filteredCoupons = coupons.filter(coupon => {
        let code = coupon.code;
        let monthName = code.substring(0, 3).toUpperCase();
        let months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
        let currentMonth = months[month];
        return monthName !== currentMonth;
    });

    let randomIndex = Math.floor(Math.random() * filteredCoupons.length);
    let selectedCoupon = filteredCoupons[randomIndex];
    return selectedCoupon;
}

let couponCode = getCouponCodeBySeason();
console.log(couponCode);

// Onpage Popup 
const userSearch = document.querySelector(".content-hub-heading b").innerText;
let popup = document.createElement('div');
popup.className = 'popup';

let popupContent = document.createElement('div');
popupContent.className = 'popup-content';

let popupInnerContent = document.createElement('div');
popupInnerContent.className = 'popup-inner-content';

let h3 = document.createElement('h3');

// Amazon Version popup image -----------------------------------------------
let popupImage = document.createElement('div');
popupImage.style.fontSize = "1.4rem";
popupImage.style.color = "mediumvioletred";
popupImage.innerHTML = `${affiliateImage} <br> Neck + Back Massager!`;

let h3Text = document.createTextNode('Hurry!!');
h3.appendChild(h3Text);

let h4Main = document.createElement('h4');
h4Main.id = "popup-main-h4";
h4Main.innerHTML = `Interested In ${userSearch}?`;

let h4Secondary = document.createElement('h4');
h4Secondary.innerHTML = `<span id="span-head">Amazon</span> is showcasing special deals right now on the products you want to buy`;

let p = document.createElement('p');
let pText = document.createTextNode('Go quick and save your items to cart to lock in these deals for the holidays..');
p.appendChild(pText);

let pCoupon = document.createElement('p');
pCoupon.className = "coupon-text";
pCoupon.innerHTML = `Missed Your Chance To Use Coupon? Try One Now: <br><br><span id="coupon-code">${couponCode.code}</span>`;

let pCouponText = document.createElement('p');
pCouponText.className = "coupon-text";
pCouponText.innerHTML = `${couponCode.discount}`;

let popupURLBtn = document.createElement('button');
popupURLBtn.className = "popup-btn";
let btnText = document.createTextNode('Take Me There');
popupURLBtn.appendChild(btnText);
popupURLBtn.onclick = gotoURL;

let exitPopup = document.createElement("div");
exitPopup.className = "exit-popup";
exitPopup.innerHTML = `<i class="fa-regular fa-circle-xmark"></i>`;
popupContent.appendChild(exitPopup);
exitPopup.onclick = closePopup;

popupInnerContent.appendChild(h3);
// Amazon Only - Aff Image Insert
popupInnerContent.appendChild(popupImage);
popupInnerContent.appendChild(h4Main);
popupInnerContent.appendChild(h4Secondary);
popupInnerContent.appendChild(p);
popupInnerContent.appendChild(pCoupon);
popupInnerContent.appendChild(pCouponText);
popupInnerContent.appendChild(popupURLBtn);

popupContent.appendChild(popupInnerContent);
popup.appendChild(popupContent);

document.body.appendChild(popup);
let showPopup = true;

function closePopup() {
    document.getElementsByClassName('popup')[0].style.display = 'none';
    showPopup = false;
    document.querySelector(".landing-page-visible").classList.remove("popup-blur");
    document.body.classList.remove("page-body-popup-adjust");
}

function gotoURL() {
    document.location.href = `${goToAffiliateLink}`;
}

document.onscroll = function () {
    if (window.scrollY > (window.innerHeight * 2) && showPopup) {
        document.getElementsByClassName('popup')[0].style.display = 'block';
        document.querySelector(".landing-page-visible").classList.add("popup-blur");
        document.body.classList.add("page-body-popup-adjust");
    }
};

setInterval(function () {
    if (showPopup == false) {
        showPopup = true;
        document.getElementsByClassName('popup')[0].style.display = 'block';
        document.body.classList.add("page-body-popup-adjust");
    }
}, 25000);

// AdBlock Detector
document.getElementById("adblock-info-insert").innerHTML = `
    <h3>Adblock Detected!</h3>
    <p>Our Website is made possible by dispaying ads to our visitors. Please show support by whitelisting our Website.</p>
    <button class="ad-ok-btn">Okay, i'll whitelist</button>
`;

if (window.catchMeIfYouCan === undefined) {
    const detect = document.querySelector("#detect");
    let wrapper = document.querySelector(".wrapper");
    let button = wrapper.querySelector(".ad-ok-btn");

    // possible classes that adblocker avoid to render
    let adClasses = ["ad", "ads", "adsbox", "ad-placement", "doubleclick", "ad-placeholder", "ad-badge"];
    for (let item of adClasses) {
        detect.classList.add(item); // adding all array item in detect element
    }

    let getProperty = window.getComputedStyle(detect).getPropertyValue("display");

    button.addEventListener("click", () => {

        if (landingPageVisible.classList.contains("hide")) {
            landingPageVisible.classList.remove("hide");
        };
        wrapper.classList.remove("show"); // hide popup on button click
        window.location.reload();
    });

    if (!wrapper.classList.contains("show")) {
        // if display property value is none then show the popup else hide it
        getProperty == "none" ? wrapper.classList.add("show") : wrapper.classList.remove("show");
        landingPageVisible.classList.add("hide");
        if (getProperty == "block") {
            landingPageVisible.classList.remove("hide");
        };
    }
}

// Exit Intent Modal Detect

 // Get the current mouse position
 let mouseX;
 let mouseY;
 
 // Create the exit intent modal
 let exitIntentModal = document.createElement('div');
 exitIntentModal.classList.add('exit-intent-modal');
 document.body.appendChild(exitIntentModal);
 
 // Add the modal content
     let modalContent = `
     <div class="modal-div-container">
         <h2>Wait! Before You Go...</h2>
         <p>We know you're about to leave, but before you go, take a look at this special offer just for you!</p>
         <div class="special-offer">
             <h3>${couponCode.discount}</h3>
             <p>Try code: <strong>${couponCode.code}</strong> using any of our links on page to get ${couponCode.discount} your next purchase.</p>
         </div>
         <button class="close-modal-btn">Close</button>
     </div>`
     exitIntentModal.innerHTML = modalContent;
 
 // Listen for mouse movement
 document.addEventListener('mousemove', (e) => {
   mouseX = e.clientX;
   mouseY = e.clientY;
   // Check if the mouse is near the header/ nav element
   if (mouseY < document.querySelector('nav').offsetHeight) {
     // Trigger custom action
     exitIntentModal.style.display = 'block';
   } else {
     exitIntentModal.style.display = 'none';
   }
 });
 
 // Listen for close modal button click
 document.querySelector('.close-modal-btn').addEventListener('click', () => {
 exitIntentModal.remove();
 });

//  Highlght text when in view onpage
// Get all elements with text content
const elementsWithTextContent = document.querySelectorAll('h2, li, p');

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

// Affiliate Shopping Chat Notification Bot
setTimeout( () => {
    // Create shopping container div to be positioned at end of page
    let shoppingCartContainer = document.createElement('div');
    shoppingCartContainer.className = 'shopping-cart-container';
    shoppingCartContainer.style.width = "100%";
    shoppingCartContainer.style.position = 'fixed';
    shoppingCartContainer.style.bottom = '20px';
    shoppingCartContainer.style.cursor = 'pointer';
    shoppingCartContainer.style.zIndex = '99999999';
  
    // Design and create the shopping cart element and style
    let shoppingCart = document.createElement('div');
    shoppingCart.className = 'shopping-cart';
    shoppingCart.style.position = "absolute";
    shoppingCart.style.right = '10px';
    shoppingCart.style.bottom = '50px';
    shoppingCart.style.width = '60px';
    shoppingCart.style.height = '60px';
    shoppingCart.style.borderRadius = '100%';
    shoppingCart.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.3)';
    shoppingCart.style.padding = '20px';
    shoppingCart.style.background = '#fff';
    shoppingCart.style.fontSize = '16px';
  
    // When shopping cart is clicked go to link
    shoppingCart.addEventListener("click", () => {
      document.location.href = `${goToAffiliateLink}`;
    });
  
    // Adding the shopping icon with style
    let shoppingCartIcon = document.createElement('div');
    shoppingCartIcon.innerHTML = `<i class="fa-brands fa-amazon"></i>`;
    shoppingCartIcon.style.fontSize = "4rem";
    shoppingCartIcon.style.position = "absolute";
    shoppingCartIcon.style.top = "50%";
    shoppingCartIcon.style.left = "50%";
    shoppingCartIcon.style.transform = "translate(-50%, -50%)";
    shoppingCartIcon.style.color = "rebeccapurple";
  
    // Appending the elements
    shoppingCart.appendChild(shoppingCartIcon);
    shoppingCartContainer.appendChild(shoppingCart);
  
    // Create the notification display elements and design
    let notification = document.createElement('div');
    notification.className = 'shopping-cart__notification';
    notification.style.position = 'absolute';
    notification.style.bottom = '115px';
    notification.style.right = '20px';
    notification.style.padding = '1px 5px';
    notification.style.fontSize = '11px';
    notification.style.borderRadius = '0 5px 0 0';
    notification.style.color = '#fff';
    notification.style.background = '#3F51B5';
    notification.style.textAlign = 'center';
    notification.style.zIndex = '99999999';
  
    // Create notification text area to display
    let notificationText = document.createElement('span');
    notificationText.innerHTML = 'New deals available every single day!';
  
    // Append elements
    notification.appendChild(notificationText);
    shoppingCartContainer.appendChild(notification);
    document.body.appendChild(shoppingCartContainer);
  
    // Start the timer
    setInterval(function() {
        // Create random notification message
        let messages = [ 'Purchases get free shipping!', 'Shop exclusive collections and save big!', 'Unlock savings today!', 'Shop top picks and save!', 'Get exclusive deals and discounts!', 'Claim personalized discounts!', 'New deals available!', 'Buy now and enjoy the benefits!', 'Don\'t wait, buy now!', 'Get the best deals now!', 'Click and shop for deals!', 'Don\'t miss out, buy now!', 'Get yours now and save!', 'Try it now and save big!', 'Save big on your purchase!', 'Don\'t delay, shop now!', 'Enjoy big savings now!', 'Take advantage now and save!', 'Get yours now and enjoy the savings!', 'Act now and get yours today!', 'Hurry, before limited time offers end!', 'Buy now and save more!', 'Get yours before they\'re gone!', 'Check out these new offers!', 'Don\'t miss out, act now!', 'Grab these deals now!', 'Shop now and save big!' ];
        let randomMessage = messages[Math.floor(Math.random() * messages.length)];
        // Update the notification text
        document.querySelector('.shopping-cart__notification span').innerHTML = randomMessage;
    }, 10000);
  
    // Shopping cart animation to correspond with text change timing
    shoppingCartContainer.addEventListener('animationend', () => {
      shoppingCartContainer.classList.remove('wiggle');
    });
  
    setInterval(function() {
      shoppingCartContainer.classList.add('wiggle');
    }, 10000);
  }, 1500);

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