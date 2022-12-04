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

// Accordion Script
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

// Affiliate Links Attributes/ for external links that are not equal to hostname, feenixbloom
document.addEventListener("DOMContentLoaded", function () {
  var aTag = document.getElementsByTagName("a");
  var i;
  for (i = 0; i < aTag.length; i++) {
    if (location.hostname !== aTag[i].hostname) {
      aTag[i].rel = "nofollow noopener noreferrer";
      aTag[i].target = "_blank";
    }
  }

  var altAttr = document.getElementsByTagName("img");
  var affiliateLinks = ["//ws-na.amazon-adsystem.com", "https://ir-na.amazon-adsystem.com"];
  for (let i = 0; i < altAttr.length; i++) {

    var item = altAttr.item(i);
    if (item.alt == "" || altAttr.src == affiliateLinks) {
      altAttr[i].alt = "Amazon Affiliate Link";
      console.log(altAttr.src);
    }
  }
});

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

// Link Checker On WebPage - Gather All Links On Webpage In Console to See & Find Missing/ Broken Links
// var links = document.querySelectorAll("a");
// var linkReport = [];
// var linksChecked=0;
// links.forEach(function(link){

//     var reportLine = {url: link.getAttribute('href'), status:0, message : "", element : link};
//     linkReport.push(reportLine);

//     fetch(reportLine.url, {
//       method: 'HEAD'
//     })
//     .then(function(response) {
//         linksChecked++;
//         reportLine.status=response.status;
//         reportLine.message= response.statusText + " | " + response.type + " | " + 
//                             (response.message || "") + " | " + (response.redirected ? "redirected | " : "") +
//                             JSON.stringify(response.headers) ;
//         console.table(response);
//         }
//     )
//     .catch(function(error){
//         reportLine.message = error;
//         console.table(error);
//         linksChecked++;
//     });

// });
// var finishReport = setInterval(
//                         function(){if(linksChecked>=linkReport.length){console.table(linkReport);
//                         clearInterval(finishReport)}}, 3000);

// Affiliate Link stored in variable
const goToAffiliateLink = "https://www.amazon.com?&linkCode=ll2&tag=oniquecampbel-20&linkId=9e1e91f2e3d89d93e1684445475d82ee&language=en_US&ref_=as_li_ss_tl";

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
const userSearch = document.getElementById("main-post-1").innerText;
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
pCoupon.innerHTML = `Missed Your Chance To Use Coupon? Try One Now:<br><br> <span id="coupon-code">${couponCode.code}</span>`;

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
  document.querySelector(".main-section").classList.remove("popup-blur");
}

function gotoURL() {
  document.location.href = `${goToAffiliateLink}`;
}

document.onscroll = function () {
  if (window.scrollY > (window.innerHeight * 2) && showPopup) {
    document.getElementsByClassName('popup')[0].style.display = 'block';
    document.querySelector(".main-section").classList.add("popup-blur");
  }
};

let timer = setInterval(function () {
  if (showPopup == false) {
    showPopup = true;
    document.getElementsByClassName('popup')[0].style.display = 'block';
  }
}, 30000);

// Affiliate Onpage Promo Banner

// Get all h2 elements on the page
let h2Elements = document.querySelectorAll('h2');
   
// Loop through all h2 elements
h2Elements.forEach((h2Element, index) => {
// Skip the first and last h2 elements
        if (index === 0 || index === h2Elements.length - 1) {
            return;
        }

    // Generate a random number between 0 and 1
    let randomNumber = Math.random();

    // Create the mini-banner div element
    let miniBannerDiv = document.createElement('div');
    miniBannerDiv.className = 'mini-banner aff-banner';
    miniBannerDiv.style.transform = 'scale(.8)';
    miniBannerDiv.style.transition = 'transform 0.5s ease';

    // Create the link element
    let link = document.createElement('a');
    link.href = `${goToAffiliateLink}`;
    link.target = '_blank';
    link.rel = 'nofollow';

    // Create the button element
    let button = document.createElement('button');
    button.className = 'mini-banner-btn aff-banner-btn';

    // Create the text element
    let text = document.createElement('p');
    text.className = 'mini-banner-text';
    text.innerText = 'View On Amazon + Cheapest!';

    // Create the icon element
    let icon = document.createElement('i');
    icon.className = 'fa-solid fa-circle-chevron-right';

    // Append the text and icon to the button
    button.appendChild(text);
    button.appendChild(icon);

    // Append the button to the link
    link.appendChild(button);

    // Append the link to the mini-banner div
    miniBannerDiv.appendChild(link);

    // If the index of the h2 element is 1 (second h2)
    // and the h2 element does not have an id of 'main-post-3'
    // then place the div above the h2
    if (index === 1 && h2Element.id !== 'main-post-3') {
        h2Element.parentNode.insertBefore(miniBannerDiv, h2Element);
    } 

    // If the index of the h2 element is greater than 1
    // and the h2 element does not have an id of 'main-post-3'
    // and the random number is greater than 0.5
    // then place the div below the h2
    if (index > 1 && h2Element.id !== 'main-post-3' && randomNumber > 0.5) {
        h2Element.parentNode.insertBefore(miniBannerDiv, h2Element.nextSibling);
    }

    // Add an event listener for when the mini-banner div comes into view
    // When the div comes into view, scale it up to 1.2
    window.addEventListener('scroll', () => {
        if (isInViewport(miniBannerDiv)) {
            miniBannerDiv.style.transform = 'scale(1)';
        } else {
            miniBannerDiv.style.transform = 'scale(.8)';
        }
    });
});

// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
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
   // Check if the mouse is near the header element
   if (mouseY < document.querySelector('header').offsetHeight) {
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