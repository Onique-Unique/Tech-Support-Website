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
  fetch(`https://www.reddit.com/r/T3Arena.json?after=${after}`)
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
              image.src = body.data.children[elem].data.url_overridden_by_dest;
              h4.textContent = body.data.children[elem].data.title;
              loadMoreBtn.innerHTML = "Load More";
              div.id = "memes-inner";
              div.appendChild(h4);
              div.appendChild(image);
              secondarydiv.appendChild(div);
              parentdiv.appendChild(secondarydiv);
              parentdiv.appendChild(loadMoreBtn);
              document.body.appendChild(parentdiv);
            })
            document.querySelector(".content-wrap").appendChild(parentdiv);
            const memeBtn = document.getElementById("load-more");
            memeBtn.addEventListener("click", () => {
            fetchMemes();
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
            title: "Page Title",
            text: "Brief description",
            url: window.location.href,
        });
    } else {
        // Desktop Functionality
    }
};

shareBtn.addEventListener("click", () => {
    shareList();
});

window.addEventListener("load", () => {
    // Discord Chat Insert Top ------------------------------
    const bodyInsert = document.querySelector(".content-hub");   

    var discordScriptTag = document.createElement('script');
    discordScriptTag.src = "https://cdn.jsdelivr.net/npm/@widgetbot/html-embed";
    discordScriptTag.async = true;
    // End ------------------------------------------------
    var discordScriptTagMain = document.createElement('script');
    discordScriptTagMain.id = "discordBotInsert";
    discordScriptTagMain.src = "https://cdn.jsdelivr.net/npm/@widgetbot/crate@3";
    discordScriptTagMain.async = true;
    discordScriptTagMain.innerHTML = `
        const crate = new Crate({
            server: '791303979597299782',
            channel: '946896595172089887'
            })      
            crate.notify('Join Meme Chat')
        `;
    bodyInsert.appendChild(discordScriptTag);
    bodyInsert.appendChild(discordScriptTagMain);
});