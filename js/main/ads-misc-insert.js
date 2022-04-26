window.addEventListener("load", () => {
    // Discord Chat Insert Top ------------------------------
    const bodyInsert = document.querySelector(".game-lounge-body");   
    var discordScriptTag = document.createElement('script');
    discordScriptTag.src = "https://cdn.jsdelivr.net/npm/@widgetbot/html-embed";
    discordScriptTag.async = true;
    // End ------------------------------------------------
    var discordScriptTagMain = document.createElement('script');
    discordScriptTagMain.src = "https://cdn.jsdelivr.net/npm/@widgetbot/crate@3";
    discordScriptTagMain.async = true;
    discordScriptTagMain.innerHTML = `
        const crate = new Crate({
            server: '791303979597299782',
            channel: '946896595172089887'
            })      
            crate.notify('Join Live Chat')
        `;
    bodyInsert.appendChild(discordScriptTag);
    bodyInsert.appendChild(discordScriptTagMain);

    // ADS Insert---------------------------------
    var adScriptTag = document.createElement('script'); 
    adScriptTag.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7079047961613379"
    crossorigin="anonymous"; // set the src attribute
    // scriptTag.type = 'text/javascript'; // if you have an HTML5 website you may want to comment this line out
    adScriptTag.async = true; // the HTML5 async attribute
    var blockTag = document.getElementsByTagName('blockquote')[0];
    blockTag.appendChild(adScriptTag);
});