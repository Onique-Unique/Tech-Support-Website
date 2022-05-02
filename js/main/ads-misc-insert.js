window.addEventListener("load", () => {
    // Discord Chat Insert Top ------------------------------
    const bodyInsert = document.querySelector(".game-lounge-body");   
    const headInsert = document.getElementsByTagName("head")[0];
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

    //Mail Chimp Subscription-----------------------------
    var mailChimpSubTag = document.createElement('script');
    mailChimpSubTag.id = "mailchimp-sub";
    mailChimpSubTag.innerHTML = `
        id="mcjs">!function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/2cd40847db1a4a5ab0a438183/dfc1926a8e7593b479f4fbcb6.js");
    `
    headInsert.appendChild(mailChimpSubTag)
});