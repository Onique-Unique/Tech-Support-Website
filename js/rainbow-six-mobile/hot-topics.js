const topics = ["topic-PC", "topic-Mobile"];

for(let i = 0; i < topics.length; i++){
    document.getElementById(topics[i]).innerHTML = `
    <h2>Rainbow Six Mobile Alpha Test Launch...</h2><br>
    <img loading="lazy" src="/images/game-lounge-img/r6-hot-topics-assets/r6-announcement-closed-alpha.PNG" alt="rainbow six mobile gamelounge Hot topics image">                   
    <p>Alpha Test Launch for Rainbow Six Mobile starting in spring.
    </p> <br>
    <div id="topic-space-br"></div>
    <h2>Rainbow Six Mobile Pre release Sign Up...</h2><br>
    <img loading="lazy" src="/images/game-lounge-img/r6-hot-topics-assets/r6-announcement-signup.PNG" alt="rainbow six mobile gamelounge Hot topics image">                   
    <p>Rainbow Six Mobile announces Pre release signup for alpha test stage.
    </p> <br>
    <div id="topic-space-br"></div>   
    `
};
