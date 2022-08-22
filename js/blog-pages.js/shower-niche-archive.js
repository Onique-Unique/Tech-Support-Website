// Related Links
window.onload = function () {
    // Array of links and anchor link name to be related by category by order
    var relatedLinks = ["/search-guide/shower-niche/how-deep-is-a-shower-niche","/search-guide/shower-niche/how-to-tile-shower-niche-without-bullnose","/search-guide/shower-niche/how-to-waterproof-a-shower-niche","/search-guide/shower-niche/where-to-place-shower-niche",
    "/search-guide/shower-niche/how-to-tile-a-shower-niche-without-trim","/search-guide/shower-niche/can-you-add-a-niche-to-an-existing-shower","/search-guide/shower-niche/how-to-build-a-shower-niche-with-cement-board",];


    var aLinkName = ["How Deep Is A Shower Niche?", "How To Tile Shower Niche Without Bullnose?", "How To Waterproof A Shower Niche?", "Where To Place Shower Niche?", "How To Tile A Shower Niche Without Trim?","Can You Add A Niche To An Existing Shower","How To Build A Shower Niche With Cement Board",];
    
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
            document.getElementById("other-pages-list").appendChild(linkList);
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
            document.getElementById("other-pages-list").appendChild(linkList);
        }
    }
};
