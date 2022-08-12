// Related Links
window.onload = function () {
    // Array of links and anchor link name to be related by category by order
    var relatedLinks = ["/search-guide/hydro-flask/how-to-use-your-hydro-flask", "/search-guide/hydro-flask/hydro-flask-dishwasher-safe", "/search-guide/hydro-flask/hydro-flask-hot-drink-water-liquid", "/search-guide/hydro-flask/hydro-flask-in-freezer",
"/search-guide/hydro-flask/hydro-flask-made-usa", "/search-guide/hydro-flask/hydro-flask-sold-store", "/search-guide/hydro-flask/hydro-flask-worth-it-pros-cons",];


    var aLinkName = ["How to use your Hydro Flask?", "Hydro Flask Dishwasher Safe?", "Hydro Flask for anything Hot!", "Can i put Hydro Flask in the Freezer?", "Hydro Flask - Where is it made?", "Hydro Flask - Sold in Stores: All Details", "Hydro Flask Worth it - Pros and Cons?"];
    
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
