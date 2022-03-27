document.getElementById("playlist-container").innerHTML = `<div class="playlist-vid">
<i class="far fa-times-circle playlist-exit"></i>
<p>Game-lounge Playlist</p>
<div class="loader"></div>
<div id="playlist-embed">
    <iframe id="embed-music" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" src="https://www.youtube.com/embed/-9gEgshJUuY" frameborder="0" modestbranding="1"></iframe>
</div>               
<a href="#" id="click">Play Music <i class="fa-solid fa-play"></i></a>
<i class="fa-solid fa-arrows-rotate playlist-random"></i>
<h5>24/7 - Live</h5>
</div> 

<!-- Custom Ad spot -->
<section class="ad-spot">
<!-- Ad Spot text -->
<p style="color: #C33764; margin-top: 6%;">
    Featured ad spot by google
</p>
<!-- Ad spot block -->
<blockquote id="gamelounge-ad-placement">
    <!-- <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7079047961613379"
    crossorigin="anonymous"></script> -->
    <!-- Gamelounge ad -->
    <ins class="adsbygoogle"
    style="display:block; height: 18rem !important; width: 100%; "
    data-ad-client="ca-pub-7079047961613379"
    data-ad-slot="2601342528"
    data-full-width-responsive="true"></ins>
    <script>
        (adsbygoogle = window.adsbygoogle || []).push({});
    </script>
</blockquote>
</section>`