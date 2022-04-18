document.getElementById("video-lounge").innerHTML = `<div class="lounge-flex">
<div class="video-carousel">
    <i class="far fa-times-circle video-lounge-exit"></i>
    <i class="far fa-times-circle video-lounge-exit video-lounge-exit-2 hide"></i>
    <div class="loader"></div>
    <div id="video-embed">
        <iframe id="embed-video" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" src="https://www.youtube.com/embed/p-vLAm7IEeo" frameborder="0"></iframe>
    </div>
    <div class="video-controls">
        <i title="Previous" class="fa-solid fa-caret-left video-prev icons"></i>
        <i title="Shuffle" class="fa-solid fa-shuffle video-shuffle icons"></i>
        <i title="Next" class="fa-solid fa-caret-right video-next icons"></i>
    </div>

     <!-- Custom Ad spot -->
    <section class="ad-spot video-lounge-ad" style="margin-top: 6%; position: absolute; bottom: -50%; width: 100%;">
        <!-- Ad Spot text -->
        <p style="color: #C33764;">
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
    </section>
</div>
<div class="video-live-chat">
    <div class="commentbox" id="video-chat-widget"></div>
    <!-- <widgetbot id="video-chat-widget"
        server="791303979597299782"
        channel="946039810886369310"
        width="100%">
    </widgetbot> -->
</div>
</div>`