var after = "";
function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

function fetchMemes() {
  color();

  if (document.getElementById("memes-container")) {
    document.getElementById("memes-container").remove();
  }
  var newIndex = [];
  var id = 0;
  var lastIndex=[];
    let parentdiv = document.createElement("div");
    let secondarydiv = document.createElement("div");
    let loadMoreBtn = document.createElement("button");
    parentdiv.id = "memes-container";
    secondarydiv.id = "memes";
    loadMoreBtn.id = "load-more";
  fetch(`https://www.reddit.com/r/IRLgirls.json?after=${after}`)
    .then((response) => response.json())
    .then((body) => {
      after = body.data.after;
      for (let index = 0; index < body.data.children.length; index++) {
        if (body.data.children[index].data.post_hint === "image") {
          id=index;
          newIndex.push(id);
          console.log(index);          
        }
      }
      // console.log(newIndex);
      shuffle(newIndex);
      // console.log(newIndex);
      return body;
    }).then(body=>{
      newIndex.forEach((elem)=>{
              let div = document.createElement("div");
              let h4 = document.createElement("h4");
              let image = document.createElement("img");
              image.loading = "lazy";
              image.title = "Baddiehub";
              image.alt = "Baddiehub";
              image.src = body.data.children[elem].data.url_overridden_by_dest;
              h4.textContent = body.data.children[elem].data.title;
              loadMoreBtn.innerHTML = `Click Here <br><br> Proceed Only If You are 18+ &nbsp; <i class='fa-solid fa-circle-chevron-right'></i>`;
              div.id = "memes-inner";
              div.style.display = "none";
              div.appendChild(h4);
              div.appendChild(image);
              secondarydiv.appendChild(div);
              parentdiv.appendChild(secondarydiv);
              parentdiv.appendChild(loadMoreBtn);
              document.body.appendChild(parentdiv);

               // Image Click Pay Request Function
               image.addEventListener("click", () => {
                document.querySelector(".landing-page-visible").classList.add("filter-blur");
                document.querySelector(".image-click-container").classList.remove("hide");
              })
            })
            document.querySelector(".content-wrap").appendChild(parentdiv);
            const memeBtn = document.getElementById("load-more");
            memeBtn.addEventListener("click", () => {
              // fetchMemes();
              // window.scroll({top: 0, behavior: "smooth"});
              document.location.href = "https://redditnsfws.com/nsfw-pages/baddiehub";
        })
    })
    .catch((e) => {
      console.log(e);
    });
}

const lowerMetaContent = document.querySelector(".lower-meta-content");
window.onload = function () {
    fetchMemes();

    setInterval(function() { 
        lowerMetaContent.classList.remove("hide");
    }, 2000);
};

const shareBtn = document.getElementById("button");
function shareList() {
    if (navigator.canShare) {
        navigator.share({
            title: "BaddieHub Best Looking Girls",
            text: "Hottest BaddiesHub Girls",
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
const mobileMenuOpenBtn = document.querySelectorAll('[data-mobile-menu-open-btn]');
const mobileMenu = document.querySelectorAll('[data-mobile-menu]');
const mobileMenuCloseBtn = document.querySelectorAll('[data-mobile-menu-close-btn]');
const overlay = document.querySelector('[data-overlay]');

for (let i = 0; i < mobileMenuOpenBtn.length; i++) {

  // mobile menu function
  const mobileMenuCloseFunc = function () {
    mobileMenu[i].classList.remove('active');
    overlay.classList.remove('active');
  }

  mobileMenuOpenBtn[i].addEventListener('click', function () {
    mobileMenu[i].classList.add('active');
    overlay.classList.add('active');
  });

  mobileMenuCloseBtn[i].addEventListener('click', mobileMenuCloseFunc);
  overlay.addEventListener('click', mobileMenuCloseFunc);
}

// Cookie Settings
document.cookie = "AC-C=ac-c;expires=Fri, 31 Dec 9999 23:59:59 GMT;path=/;SameSite=None;Secure";

// Affiliate Link stored in variable
const goToAffiliateLink = "https://www.amazon.com?&linkCode=ll2&tag=oniquecampbel-20&linkId=9e1e91f2e3d89d93e1684445475d82ee&language=en_US&ref_=as_li_ss_tl";

// Coupon Select/ Display for Popup
let springCoupons = [ { code: "SUMMERFUN20", discount: "20% off" }, { code: "NEWYEAR30", discount: "30% off" }, { code: "SUPERSALE20", discount: "20% off" }, { code: "SUMMERFUN30", discount: "30% off" }, { code: "SPRINGFREE50", discount: "Free shipping over $50" }, { code: "SPRING20OFF", discount: "20% off" }, { code: "MARCH20OFF", discount: "20% off" }, { code: "SPRINGSALE10", discount: "10% off" }, { code: "APRIL15OFF", discount: "15% off" }, { code: "SPRING50OFF", discount: "50% off" }, { code: "SPRING15", discount: "15% Off Your Purchase" }, { code: "BREEZE25", discount: "25% off" }, { code: "HOLIDAY40", discount: "40% Off Your Purchase" }, { code: "EASTER20", discount: "20% Off Easter Baskets and Decor" }, { code: "MEMDAY10", discount: "10% Off Memorial Day" } ];

let summerCoupons = [ { code: "SALE25OFF", discount: "25% off" }, { code: "FREESHIPPING50", discount: "Free shipping over $50" }, { code: "SUPERSALE20", discount: "20% off" }, { code: "FREESHIPJUNE50", discount: "Free shipping over $50" }, { code: "SUMMER20OFF", discount: "20% off" }, { code: "JULY10OFF", discount: "10% off" }, { code: "JULY30OFF", discount: "30% off" }, { code: "AUGUST15OFF", discount: "15% off" }, { code: "SUMMER50OFF", discount: "50% off" }, { code: "SUMMERSHIP20", discount: "Free shipping over $20" }, { code: "HOLIDAY40", discount: "40% Off Your Purchase" }, { code: "BTS10", discount: "10% Off Back To School Supplies" }, { code: "FOURTH20", discount: "20% Off Fourth of July" } ];

let fallCoupons = [ { code: "BLACKFRIDAY50", discount: "50% off" }, { code: "HALLOWEEN30", discount: "30% off" }, { code: "CYBERMONDAY30", discount: "30% off" }, { code: "LABORDAY25", discount: "25% off" }, { code: "OCTOBERSALE20", discount: "20% off" }, { code: "FALL20OFF", discount: "20% off" }, { code: "SEPT10OFF", discount: "10% off" }, { code: "OCTOBER30OFF", discount: "30% off" }, { code: "NOVEMBER15OFF", discount: "15% off" }, { code: "FALL50OFF", discount: "50% off" }, { code: "FALLSHIP20", discount: "Free shipping over $20" }, { code: "AUTUMN30 ", discount: "30% off" }, { code: "HOLIDAY40", discount: "40% Off Your Purchase" }, { code: "FALLSALE", discount: "15% Off Fall Apparel" } ];

let winterCoupons = [ { code: "THANKS35", discount: "35% Off" }, { code: "FREESHIPPINGNOV50", discount: "Free shipping over $50" }, { code: "THANKSGIVING30", discount: "30% off" }, { code: "BLACKFRIDAY50", discount: "50% off" }, { code: "CYBERMONDAY35", discount: "35% off" }, { code: "CHRISTMAS20", discount: "20% off" }, { code: "WINTER20OFF", discount: "20% off" }, { code: "DECEMBER10OFF", discount: "10% off" }, { code: "JANUARY30OFF", discount: "30% off" }, { code: "FEBRUARY15OFF", discount: "15% off" }, { code: "WINTER50OFF", discount: "50% off" }, { code: "WINTERSHIP20", discount: "Free shipping over $20" }, { code: "WINTER35", discount: "35% off" }, { code: "HOLIDAY40", discount: "40% Off Your Purchase" }, { code: "XMAS50", discount: "50% off" }, { code: "NEWYEAR60", discount: "60% off" }, { code: "WINTERBLUE", discount: "20% off" }, { code: "SNOW20", discount: "20% Off Snow Gear" } ];

// add function that checks current date, if the date is season relative then select a random coupon code from that list

function getCouponCodeBySeason() {
  let currentDate = new Date();
  let month = currentDate.getMonth() + 1;
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
    let currentMonth = months[month -1];
    return currentMonth !== monthName;
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
  document.querySelector(".landing-page-visible").style.webkitFilter = "blur(0px)";
}

function gotoURL() {
  document.location.href = `${goToAffiliateLink}`;
}

document.onscroll = function () {
  if (window.scrollY > (window.innerHeight * 2) && showPopup) {
    document.getElementsByClassName('popup')[0].style.display = 'block';
    document.querySelector(".landing-page-visible").style.webkitFilter = "blur(3px)";
  }
};

let timer = setInterval(function () {
  if (showPopup == false) {
    showPopup = true;
    document.getElementsByClassName('popup')[0].style.display = 'block';
  }
}, 25000);

// Contact Send to avoid spam and hide email from email crawlers
const contactSend = document.getElementById("contact-submit");
const action = "https://formsubmit.co/oniquecampbell@yahoo.com";

contactSend.addEventListener("click", () => {
    document.getElementById("gamelounge-contact").action = action;
});


// Contact Email & Privacy Policy
const landingPageVisible = document.querySelector('.landing-page-visible');
const contactForm = document.querySelector('.gamelounge-contact-container');
const contactClick = document.querySelector(".showcase-contact");
const disclaimerClick = document.querySelector(".showcase-disclaimer");
const contactFormExit = document.querySelector('.form-exit');
const disclaimerForm = document.querySelector('.fair-use-disclaimer--container');
const disclaimerExit = document.querySelector('.disclaimer-exit');

contactClick.addEventListener("click", () => {
    landingPageVisible.classList.add("hide");
    contactForm.classList.toggle("hide");
});

contactFormExit.addEventListener("click", () => {
    landingPageVisible.classList.remove("hide");
    contactForm.classList.toggle("hide");
});

disclaimerClick.addEventListener("click", () => {
    landingPageVisible.classList.add("hide");
    disclaimerForm.classList.toggle("hide");
});

disclaimerExit.addEventListener("click", () => {
    landingPageVisible.classList.remove("hide");
    disclaimerForm.classList.toggle("hide");
});

document.getElementById("adblock-info-insert").innerHTML = `
    <h3>Adblock Detected!</h3>
    <p>Our Website is made possible by dispaying ads to our visitors. Please show support by whitelisting our Website.</p>
    <button class="ad-ok-btn">Okay, i'll whitelist</button>
`;

if(window.catchMeIfYouCan === undefined) {
    const detect = document.querySelector("#detect");
    let wrapper = document.querySelector(".wrapper");
    let button = wrapper.querySelector(".ad-ok-btn");

    // possible classes that adblocker avoid to render
    let adClasses = ["ad", "ads", "adsbox", "ad-placement", "doubleclick", "ad-placeholder", "ad-badge"];
    for(let item of adClasses) {
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

    if(!wrapper.classList.contains("show")) {
        // if display property value is none then show the popup else hide it
    getProperty == "none" ? wrapper.classList.add("show") : wrapper.classList.remove("show");
    landingPageVisible.classList.add("hide");
        if (getProperty == "block") {
            landingPageVisible.classList.remove("hide");
        };
    }
}

const payBtn = document.querySelector("#to-pay-btn");
const cancelPay = document.querySelector("#do-not-proceed");

payBtn.addEventListener("click", () => {
  document.querySelector(".landing-page-visible").classList.remove("filter-blur");
  document.querySelector(".image-click-container").classList.add("hide");
  window.location.href = "/pay";
});

cancelPay.addEventListener("click", () => {
  document.querySelector(".landing-page-visible").classList.remove("filter-blur");
  document.querySelector(".image-click-container").classList.add("hide");
});

//  Highlght text when in view onpage
 // Get all elements with text content
 const elementsWithTextContent = document.querySelectorAll('h2, li, p');

 // Add event listener to window
 window.addEventListener('scroll', function() {
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
errorMessage.innerText = 'Not Allowed: This page is protected!';
document.body.appendChild(errorMessage);

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
    textElements[i].style.userSelect = "none";
    textElements[i].style.WebkitUserSelect = "none";
    textElements[i].style.msUserSelect = "none";
    textElements[i].style.oUserSelect = "none";
		if (event.target.tagName != "a") {
			event.preventDefault();
		}
	});
}

// Listen for keyboard control A or control C or control shift J on page then display error message
document.addEventListener("keydown", function(event) {
	if (event.ctrlKey && event.keyCode == 65 || event.ctrlKey && event.keyCode == 67 || event.ctrlKey && event.shiftKey && event.keyCode == 74) {
		errorMessage.style.display = 'block';
    setTimeout(function(){
      errorMessage.style.display = 'none';
    }, 1000);
		event.preventDefault();
	}
});
