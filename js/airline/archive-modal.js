// Related Links
window.onload = function () {
    // Array of links and anchor link name to be related by category by order
    var relatedLinks = ["/fee/airline/best-no-fee-airline-miles-credit-card", "/fee/airline/what-airline-has-the-best-extra-luggage-fee"];
    var aLinkName = ["Best No Fee Airline Miles Credit Card", "What Airline Has The Best Extra Luggage Fee"];
    
    // store url pathname as string into current variable 
    const currentUrl = window.location.pathname.toString();
    var i;

    // check if related links contain converted current Url string in array
    if (relatedLinks.includes(currentUrl)) {

        // if current Url exists in array - remove from link list & link name by it's corresponding index
        const linkIndex = relatedLinks.indexOf(currentUrl);
        relatedLinks.splice(linkIndex,1);
        aLinkName.splice(linkIndex, 1);

        // store new array in new variables
        var linkItem = relatedLinks;
        var nameItem = aLinkName;

        // execute a for loop for new set of array - get elements by their new index
        for (i = 0; i < linkItem.length && nameItem.length; i++) {
            idLink = linkItem[i];
            idText = nameItem[i];

            // create new element list item - insert innerhtml components
            let linkList = document.createElement("li");
            linkList.innerHTML = 
            `
            <a href="${idLink}">${idText}</a>
            `;

            // find element by it's id inside document and append created new list item
            document.getElementById("related-link-list").appendChild(linkList);
        }
    } else {
        // execute a for loop for new set of array - get elements by their new index
        for (i = 0; i < relatedLinks.length && aLinkName.length; i++) {
            idLink = relatedLinks[i];
            idText = aLinkName[i];

            // create new element list item - insert innerhtml components
            let linkList = document.createElement("li");
            linkList.innerHTML = 
            `
            <a href="${idLink}">${idText}</a>
            `;

            // find element by it's id inside document and append created new list item
            document.getElementById("related-link-list").appendChild(linkList);
        }
    }
};



// Sidebar Table Links
document.getElementById("popular-posts-box").innerHTML = 
`
<h3 class="title">popular posts</h3>
<div class="p-post">
    <a href="/fee/airline/best-no-fee-airline-miles-credit-card">
        <h3>01. Best No Fee Airline Miles Credit Card</h3>
        <span><i class="far fa-clock"></i>&nbsp; <time datetime="2022-07-25">Jul 25, 2022 &bull; 8 min read</time></span>              
    </a>
    <a href="/fee/airline/what-airline-has-the-best-extra-luggage-fee">
        <h3>02. What Airline Has The Best Extra Luggage Fee</h3>
        <span><i class="far fa-clock"></i>&nbsp; <time datetime="2022-07-25">Jul 25, 2022 &bull; 6 min read</time></span>              
    </a>
</div>
`;