const topics = ["topic-PC", "topic-Mobile"];

for(let i = 0; i < topics.length; i++){
    document.getElementById(topics[i]).innerHTML = `
    <a class="twitter-timeline" href="https://twitter.com/Rainbow6Mobile?ref_src=twsrc%5Etfw">Tweets by Rainbow6Mobile</a>  
    `
};

window.addEventListener("load", () => {
    const bodyInsert = document.querySelector(".game-lounge-body");
    var apexTweetScriptTag = document.createElement('script'); 
    apexTweetScriptTag.src = "https://platform.twitter.com/widgets.js"
    charset="utf-8"; // set the src attribute
    // scriptTag.type = 'text/javascript'; // if you have an HTML5 website you may want to comment this line out
    apexTweetScriptTag.async = true; // the HTML5 async attribute
    bodyInsert.appendChild(apexTweetScriptTag);
});
