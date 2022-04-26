window.addEventListener("load", () => {
    var scriptTag = document.createElement('script'); 
    scriptTag.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7079047961613379"
    crossorigin="anonymous"; // set the src attribute
    // scriptTag.type = 'text/javascript'; // if you have an HTML5 website you may want to comment this line out
    scriptTag.async = true; // the HTML5 async attribute
    var blockTag = document.getElementsByTagName('blockquote')[0];
    blockTag.appendChild(scriptTag);
});