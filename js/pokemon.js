const typeColor = {
    bug: "#26de81",
    dragon: "#ffeaa7",
    electric: "#fed330",
    fairy: "#FF0069",
    fighting: "#30336b",
    fire: "#f0932b",
    flying: "#81ecec",
    grass: "#00b894",
    ground: "#EFB549",
    ghost: "#a55eea",
    ice: "#74b9ff",
    normal: "#95afc0",
    poison: "#6c5ce7",
    psychic: "#a29bfe",
    rock: "#2d3436",
    water: "#0190FF",
  };
  const url = " https://pokeapi.co/api/v2/pokemon/";
  const card = document.getElementById("card");
  const btn = document.getElementById("btn");
  const navBar = document.querySelector(".content-hub-nav-fixed");
  const menuTitle = document.querySelector(".sidebar-top span");
  const lowerMeta = document.querySelector(".lower-meta-content");
  
  let getPokeData = () => {
    // Generate a random number between 1 and 150
    let id = Math.floor(Math.random() * 150) + 1;
    // Combine the pokeapi url with pokemon id
    const finalUrl = url + id;
    // Fetch generated URL
    fetch(finalUrl)
      .then((response) => response.json())
      .then((data) => {
        generateCard(data);
      });
  };
  
  //Generate Card
  
  let generateCard = (data) => {
    // Get necessary data and assign it to variables
    console.log(data);
    const hp = data.stats[0].base_stat;
    const imgSrc = data.sprites.other.dream_world.front_default;
    const pokeName = data.name[0].toUpperCase() + data.name.slice(1);
    const statAttack = data.stats[1].base_stat;
    const statDefense = data.stats[2].base_stat;
    const statSpeed = data.stats[5].base_stat;
  
    // Set themeColor based on pokemon type
    const themeColor = typeColor[data.types[0].type.name];
    console.log(themeColor);
    card.innerHTML = `
          <p class="hp">
            <span>HP</span>
              ${hp}
          </p>
          <img src=${imgSrc} />
          <h2 class="poke-name">${pokeName}</h2>
          <div class="types">
           
          </div>
          <div class="stats">
            <div>
              <h3>${statAttack}</h3>
              <p>Attack</p>
            </div>
            <div>
              <h3>${statDefense}</h3>
              <p>Defense</p>
            </div>
            <div>
              <h3>${statSpeed}</h3>
              <p>Speed</p>
            </div>
          </div>
    `;
    appendTypes(data.types);
    styleCard(themeColor);
  };
  let appendTypes = (types) => {
    types.forEach((item) => {
      let span = document.createElement("SPAN");
      span.textContent = item.type.name;
      document.querySelector(".types").appendChild(span);
    });
  };
  let styleCard = (color) => {
    card.style.background = `radial-gradient(circle at 50% 0%, ${color} 36%, #ffffff 36%)`;
    navBar.style.background = `${color}`;
    menuTitle.style.background =`${color}`;
    lowerMeta.style.background =`${color}`;
    card.querySelectorAll(".types span").forEach((typeColor) => {
      typeColor.style.backgroundColor = color;
    });
  };
  
  btn.addEventListener("click", getPokeData);
  window.addEventListener("load", getPokeData);

  const shareBtn = document.getElementById("button");
function shareList() {
    if (navigator.canShare) {
        navigator.share({
            title: "Random Pokemon Generator",
            text: "Generate +1000000 Unlimited Pokemon From Every Single Category",
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