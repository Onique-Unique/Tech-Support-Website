// Index Banner Date Logic 
// Get Current Date JS Logic
const date = new Date(Date.now());
currentDate = date.toLocaleString("en-US", {month: "short", day: "numeric", year: "numeric"}); // remove unnecessary information from date and specify only what is needed

const dot = "&bull; ";

const dateMain = ["investHub-currentDate"];
for(i = 0; i < dateMain.length; i++){
    if(i  <= 1){
        document.getElementById(dateMain[i]).innerHTML = "Today " + currentDate;
     }
    // else if (i === 1){
    //     document.getElementById(dateMain[i]).innerHTML = "Today " + currentDate;
    // }
};

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

  if (document.getElementById("news-container")) {
    document.getElementById("news-container").remove();
  }
  var newIndex = [];
  var id = 0;
  var lastIndex=[];
    let parentdiv = document.createElement("div");
    let secondarydiv = document.createElement("div");
    let loadMoreBtn = document.createElement("button");
    parentdiv.id = "news-container";
    secondarydiv.id = "news";
    loadMoreBtn.id = "load-more";
  fetch(`https://www.reddit.com/r/Crypto_com.json?after=${after}`)
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
              image.src = body.data.children[elem].data.url_overridden_by_dest;
              h4.textContent = body.data.children[elem].data.title;
              loadMoreBtn.innerHTML = "Load More";
              div.id = "news-inner";
              div.appendChild(h4);
              div.appendChild(image);
              secondarydiv.appendChild(div);
              parentdiv.appendChild(secondarydiv);
              parentdiv.appendChild(loadMoreBtn);
              document.body.appendChild(parentdiv);
            })
            document.querySelector(".content-wrap").appendChild(parentdiv);
            const newsBtn = document.getElementById("load-more");
            newsBtn.addEventListener("click", () => {
            fetchMemes();
            window.scroll({top: 0, behavior: "smooth"});
            document.getElementById("investHub-currentDate").classList.add("hide");
        })
    })
    .catch((e) => {
      console.log(e);
    });
}

window.onload = function () {
    fetchMemes();
};

const shareBtn = document.getElementById("button");
function shareList() {
    if (navigator.canShare) {
        navigator.share({
            title: "Investors Trading Network",
            text: "Find & Share Real Investment Opportunities",
            url: window.location.href,
        });
    } else {
        // Desktop Functionality
    }
};

shareBtn.addEventListener("click", () => {
    shareList();
});

document.getElementById("adblock-info-insert").innerHTML = `
    <h3>Adblock Detected!</h3>
    <p>Our Website is made possible by dispaying ads to our visitors. Please show support by whitelisting our Website.</p>
    <button class="ad-ok-btn">Okay, i'll whitelist</button>
`;

const adPageVisible = document.querySelector('.landing-page-visible');

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
        if (adPageVisible.classList.contains("hide")) {
            adPageVisible.classList.remove("hide");
        };
        wrapper.classList.remove("show"); // hide popup on button click
        window.location.reload();
    });

    if(!wrapper.classList.contains("show")) {
        // if display property value is none then show the popup else hide it
    getProperty == "none" ? wrapper.classList.add("show") : wrapper.classList.remove("show");
    adPageVisible.classList.add("hide");
        if (getProperty == "block") {
            adPageVisible.classList.remove("hide");
        };
    }
}

