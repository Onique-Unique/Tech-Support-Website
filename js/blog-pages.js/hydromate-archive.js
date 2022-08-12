// Related Links
window.onload = function () {
    // Array of links and anchor link name to be related by category by order
    var relatedLinks = ["/search-guide/hydromate/how-to-use-your-hydromate", "/search-guide/hydromate/hydromate-dishwasher-safe", "/search-guide/hydromate/hydromate-hot-drink-water-liquid", "/search-guide/hydromate/hydromate-in-freezer",
"/search-guide/hydromate/hydromate-made-usa", "/search-guide/hydromate/hydromate-sold-store", "/search-guide/hydromate/hydromate-worth-it-pros-cons", "/search-guide/hydromate/how-does-hydromate-work", "/search-guide/hydromate/hydromate-engraving",];


    var aLinkName = ["How to use your Hydromate?", "Hydromate Dishwasher Safe?", "Hydromate for anything Hot!", "Can i put Hydromate in the Freezer?", "Hydromate - Where is it made?", "Hydromate - Sold in Stores: All Details", "Hydromate Worth it - Pros and Cons?", 
"How does Hydromate Work?", "Hydromate Engraving",];
    
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
