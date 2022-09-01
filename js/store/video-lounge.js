document.getElementById("video-lounge").innerHTML = `<div class="lounge-flex">
<div class="video-carousel">
    <i class="far fa-times-circle video-lounge-exit" id="video-lounge-exit-btn-1"></i>
    <i class="far fa-times-circle video-lounge-exit video-lounge-exit-2 hide" id="video-lounge-exit-btn-2"></i>
    <div class="loader"></div>
    <div id="video-embed"></div>
    <div class="video-controls">
        <i title="Previous" class="fa-solid fa-caret-left video-prev icons"></i>
        <i title="Shuffle" class="fa-solid fa-shuffle video-shuffle icons"></i>
        <i title="Next" class="fa-solid fa-caret-right video-next icons"></i>
    </div>
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