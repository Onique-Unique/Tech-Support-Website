// Nav Bar Insert--------------------------------------------------
document.querySelector(".game-nav").innerHTML = 
`
<div class="game-nav-display">
    <div class="game-nav-top">
        <a href="/main-pages/apex-mobile/game-lounge-chatroom" title="Game-lounge"><img loading="lazy" id="top-icon" src="/images/game-lounge-img/Gamelounge-logo/GameLounge-logo-secondary-removebg-preview.png" alt="apex legends mobile gamelounge sidebar top image"></a>
    </div>
    <div class="game-search-bar"> 
                    <!--"http://www.youtube.com/results"  -->
        <form id="form-yt--search" method="get" target="_blank" >
            <i class="fas fa-search" id="search-icon"></i>
            <input class="search-input" id="gamelounge-search" name="search_query" type="search" maxlength="128" placeholder="Search content..."> <!-- onchange="openfile()"-->
            
            <p hidden="true"><input type="number" id="maxresult-input" placeholder="Max Results" min="1" max="50" value="50" required></p>
            <p hidden="true">
                <select id="order-input" required>
                    <option value="">--SELECT ORDER--</option>
                    <option value="date">Date</option>
                    <option value="rating">Rating</option>
                    <option value="relevance" selected>Relevance</option>
                    <option value="title">Title</option>
                    <option value="viewCount">View Count</option>
                </select>
            </p>
                <input style="display: none;" id="submit-icon" type="submit">
        </form>             
    </div>
    <div class="menu-icon">
        <i class="fas fa-bars" id="menu-bars" title="Menu"></i>
    </div>
</div>
`;

// Left Aside Insert----------------------------------------------------------
document.getElementById("game-lounge-left-menu-sidebar").innerHTML = `
<div class="game-sidebar-display">    
    <div class="game-sidebar-center">
        <div class="icons" id="yt-music-icon">
            <i title="Game-lounge Chill Zone Playlist" class="fas fa-chevron-circle-up" id="up-icon"></i>
        </div>
        <div class="icons" id="publisher-icon">
            <a href="#publishments" aria-label="Guides Beginner" title="Guides"><i class="fas fa-newspaper" ></i></a>
        </div>
        <div class="icons" id="latest-news-icon">
            <a href="#content-modal" aria-label="latest news home" title="Latest News"><i class="fas fa-users"></i></a>
        </div>
        <div class="icons" id="video-icon">
            <a href="#video-lounge" aria-label="videos to watch" title="Videos"><i class="fas fa-photo-video"></i></a>
        </div>
        <div class="icons" id="email-icon">
            <a href="#gamelounge-contact" aria-label="contact" title="Contact"><i class="fas fa-envelope"></i></a>
        </div>
        <div class="icons" id="settings-gear-min">
            <a href="#disclaimer" aria-label="disclaimer" title="Policy/ Terms and Conditions"><i class="fas fa-cog" id="settings-icon-min"></i></a>
        </div>     
    </div>
    <div class="game-sidebar-end" id="settings-gear">
        <div class="icons">
            <a href="#disclaimer" aria-label="disclaimer" title="Policy/ Terms and Conditions"><i class="fas fa-cog" id="settings-icon"></i></a>
        </div>
    </div>
</div> 
`;

// Secondary Nav------------------------------------------
document.querySelector(".solo-articles").innerHTML = 
`
<section class="secondary-nav-top nav-top-article">
    <div class="secondary-nav-inner">
        <h2 id="main-h2">NEWS</h2>
        <h2 id="tips-h2">Tips and Tricks</h2>
        <h2 id="gameplay-h2">Gameplay</h2>
        <h2 id="funny-h2">Funny/ EXE</h2>
    </div>
</section>
`