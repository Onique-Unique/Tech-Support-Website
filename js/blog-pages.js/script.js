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
popupInnerContent.appendChild(popupURLBtn);

popupContent.appendChild(popupInnerContent);
popup.appendChild(popupContent);

document.body.appendChild(popup);
let showPopup = true;

function closePopup() {
  document.getElementsByClassName('popup')[0].style.display = 'none';
  showPopup = false;
  document.querySelector(".main-section").style.webkitFilter = "blur(0px)";
}

function gotoURL() {
  document.location.href = 'https://www.amazon.com?&linkCode=ll2&tag=oniquecampbel-20&linkId=9e1e91f2e3d89d93e1684445475d82ee&language=en_US&ref_=as_li_ss_tl';
}

document.onscroll = function () {
  if (window.scrollY > (window.innerHeight * 2) && showPopup) {
    document.getElementsByClassName('popup')[0].style.display = 'block';
    document.querySelector(".main-section").style.webkitFilter = "blur(3px)";
  }
};

let timer = setInterval(function () {
  if (showPopup == false) {
    showPopup = true;
    document.getElementsByClassName('popup')[0].style.display = 'block';
  }
}, 40000);