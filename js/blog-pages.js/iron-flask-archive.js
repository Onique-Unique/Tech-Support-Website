// Related Links
window.onload = function () {
    // Array of links and anchor link name to be related by category by order
    var relatedLinks = ["/search-guide/iron-flask/how-to-use-your-iron-flask", "/search-guide/iron-flask/iron-flask-dishwasher-safe", "/search-guide/iron-flask/iron-flask-hot-drink-water-liquid", "/search-guide/iron-flask/iron-flask-in-freezer",
"/search-guide/iron-flask/iron-flask-made-usa", "/search-guide/iron-flask/iron-flask-sold-store", "/search-guide/iron-flask/iron-flask-worth-it-pros-cons", "/search-guide/iron-flask/how-does-iron-flask-work", "/search-guide/iron-flask/iron-flask-engraving",
"/search-guide/iron-flask/can-you-put-hot-beverages-in-iron-flask", "/search-guide/iron-flask/is-iron-flask-a-good-brand",];


    var aLinkName = ["How to use your Iron Flask?", "Iron Flask Dishwasher Safe?", "Iron Flask for anything Hot!", "Can i put Iron Flask in the Freezer?", "Iron Flask - Where is it made?", "Iron Flask - Sold in Stores: All Details", "Iron Flask Worth it - Pros and Cons?", 
"How does Iron Flask Work?", "Iron Flask Engraving", "Can You Put Hot Beverages In Iron Flask", "Is Iron Flask A Good Brand",];
    
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
