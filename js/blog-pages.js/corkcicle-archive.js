// Related Links
window.onload = function () {
    // Array of links and anchor link name to be related by category by order
    var relatedLinks = ["/search-guide/corkcicle/how-to-use-your-corkcicle", "/search-guide/corkcicle/corkcicle-dishwasher-safe", "/search-guide/corkcicle/corkcicle-hot-drink-water-liquid", "/search-guide/corkcicle/corkcicle-in-freezer",
"/search-guide/corkcicle/corkcicle-made-usa", "/search-guide/corkcicle/corkcicle-sold-store", "/search-guide/corkcicle/corkcicle-worth-it-pros-cons", "/search-guide/corkcicle/how-does-corkcicle-work", "/search-guide/corkcicle/corkcicle-engraving",
"/search-guide/corkcicle/can-you-put-hot-beverages-in-corkcicle", "/search-guide/corkcicle/is-corkcicle-a-good-brand",];


    var aLinkName = ["How to use your Corkcicle?", "Corkcicle Dishwasher Safe?", "Corkcicle for anything Hot!", "Can i put Corkcicle in the Freezer?", "Corkcicle - Where is it made?", "Corkcicle - Sold in Stores: All Details", "Corkcicle Worth it - Pros and Cons?", 
"How does Corkcicle Work?", "Corkcicle Engraving", "Can You Put Hot Beverages In Corkcicle", "Is Corkcicle A Good Brand",];
    
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
