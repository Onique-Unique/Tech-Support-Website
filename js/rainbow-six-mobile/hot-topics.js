const topics = ["topic-PC", "topic-Mobile"];

for(let i = 0; i < topics.length; i++){
    document.getElementById(topics[i]).innerHTML = `
    <a class="twitter-timeline" href="https://twitter.com/Rainbow6Mobile?ref_src=twsrc%5Etfw">Tweets by Rainbow6Mobile</a>
    
    <!-- 
    Fall Back Content Example---------
    
    <h2>Rainbow Six (6) Mobile Alpha Test Release Announcement...</h2><br>
    <img loading="lazy" src="/images/game-lounge-img/r6-hot-topics-assets/r6-announcement-closed-alpha-release.PNG" alt="rainbow six mobile gamelounge Hot topics image">                   
    <p>The Alpha test for Rainbow Six (6) Mobile has been officially announced to launch - May 3rd 2022.
    </p> <br>
    <div class="topic-space-br"></div>
     -->
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
