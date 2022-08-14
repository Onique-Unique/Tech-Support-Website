// Related Links
window.onload = function () {
    // Array of links and anchor link name to be related by category by order
    var relatedLinks = ["/search-guide/ceramic-coating/how-long-does-ceramic-coating-last", "/search-guide/ceramic-coating/ceramic-coating-cost", "/search-guide/ceramic-coating/tesla-ceramic-coating",
"/search-guide/ceramic-coating/boat-ceramic-coating", "/search-guide/ceramic-coating/disadvantages-of-ceramic-coating", "/search-guide/ceramic-coating/ceramic-coating-vs-ppf", "/search-guide/ceramic-coating/how-to-remove-ceramic-coating",
"/search-guide/ceramic-coating/interior-ceramic-coating", "/search-guide/ceramic-coating/benefits-of-ceramic-coating", "/search-guide/ceramic-coating/what-is-aeternum-ceramic-coating", "/search-guide/ceramic-coating/is-ceramic-coating-good-for-your-car",
"/search-guide/ceramic-coating/aluminum-boat-ceramic-coating", "/search-guide/ceramic-coating/bass-boat-ceramic-coating", "/search-guide/ceramic-coating/benefits-of-black-ceramic-coating-exhaust", "/search-guide/ceramic-coating/boat-ceramic-coating-vs-wax",
"/search-guide/ceramic-coating/ceramic-coated-motorcycle-exhausts", "/search-guide/ceramic-coating/ceramic-coating-cure-time", "/search-guide/ceramic-coating/ceramic-coating-what-why", "/search-guide/ceramic-coating/diy-boat-ceramic-coating", 
"/search-guide/ceramic-coating/fiberglass-boat-ceramic-coating", "/search-guide/ceramic-coating/how-long-does-ceramic-coating-last-tesla", "/search-guide/ceramic-coating/how-to-clean-ceramic-coated-exhaust", "/search-guide/ceramic-coating/malibu-boat-ceramic-coating",
"/search-guide/ceramic-coating/pontoon-boat-ceramic-coating", "/search-guide/ceramic-coating/tesla-ceramic-coating-good-or-bad", "/search-guide/ceramic-coating/tesla-ceramic-coating-interior-+-seats", "/search-guide/ceramic-coating/tesla-ceramic-coating-should-i-get-it", 
"/search-guide/ceramic-coating/tesla-ceramic-coating-vs-ppf", "/search-guide/ceramic-coating/what-does-ceramic-coating-do-for-a-boat", "/search-guide/ceramic-coating/yacht-ceramic-coating", "/search-guide/ceramic-coating/ceramic-coating-vs-exhaust-wrap", 
"/search-guide/ceramic-coating/ceramic-coating-exhaust-temperature-reduction", "search-guide/ceramic-coating/are-ceramic-coatings-toxic", "/search-guide/ceramic-coating/are-ceramic-coatings-safe", "/search-guide/ceramic-coating/are-ceramic-coatings-any-good",];


    var aLinkName = ["How Long Does Ceramic Coating Last", "Ceramic Coating Cost", "Tesla Ceramic Coating", "Boat Ceramic Coating", "Disadvantages of Ceramic Coating", "Ceramic Coating vs PPF",
"How to Remove Ceramic Coating", "Interior Ceramic Coating", "Benefits Of Ceramic Coating", "What is Aeternum Ceramic Coating", "Is Ceramic Coating Good For Your Car?", "Aluminum Boat Ceramic Coating",
"Bass Boat Ceramic Coating", "Benefits Of Black Ceramic Coating Exhaust", "Boat Ceramic Coating Vs Wax", "Ceramic Coated Motorcycle Exhaust", "Ceramic Coating Cure Time", "Ceramic Coating What Why", 
"DIY Boat Ceramic Coating", "Fiberglass Boat Ceramic Coating", "How Long Does Ceramic Coating Last Tesla", "How To Clean Ceramic Coated Exhaust", "Malibu Boat Ceramic Coating", "Pontoon Boat Ceramic Coating",
"Tesla Ceramic Coating Good Or Bad", "Tesla Ceramic Coating Interior Seats", "Tesla Ceramic Coating Should I Get It", "Tesla Ceramic Coating Vs PPF", "What Does Ceramic Coating Do For A Boat", "Yacht Ceramic Coating",
"Ceramic Coating Vs Exhaust Wrap", "Ceramic Coating Exhaust Temperature Reduction", "Are Ceramic Coatings Toxic?", "Are Ceramic Coatings Safe?", "Are Ceramic Coatings Any Good",];
    
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
