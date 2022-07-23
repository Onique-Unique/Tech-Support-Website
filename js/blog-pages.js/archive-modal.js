// Related Links
window.onload = function () {
    // Array of links and anchor link name to be related by category by order
    var relatedLinks = ["/fee/binance-eth-withdrawal-fee", "/fee/binance-bitcoin-withdrawal-fee", "/fee/crypto-fee-comparison" , "/fee/low-transaction-fee-crypto" , "/fee/webull-stock-transfer-fee",
                        "/fee/crypto-transaction-fee"];
    var aLinkName = ["Binance ETH Withdrawal Fee", "Binance Bitcoin Withdrawal Fee", "Crypto Fee Comparison", "Low Transaction Fee Crypto", "Webull Stock Transfer Fee",
                    "Crypto Transaction Fee"];
    
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
<a href="/fee/crypto-fee-comparison">
        <h3>01. Crypto Fee Comparison</h3>
        <span><i class="far fa-clock"></i>&nbsp; <time datetime="2022-07-18">Jul 18, 2022 &bull; 9 min read</time></span>              
    </a>
    <a href="/fee/binance-bitcoin-withdrawal-fee">
        <h3>02. Binance Bitcoin Withdrawal Fee</h3>
        <span><i class="far fa-clock"></i>&nbsp; <time datetime="2022-07-18">Jul 18, 2022 &bull; 6 min read</time></span>              
    </a>
    <a href="/fee/binance-eth-withdrawal-fee">
        <h3>03. Binance Ethereum (ETH) Withdrawal Fee</h3>
        <span><i class="far fa-clock"></i>&nbsp; <time datetime="2022-07-18">Jul 18, 2022 &bull; 7 min read</time></span>              
    </a>
    <a href="/fee/webull-stock-transfer-fee">
        <h3>04. Webull Stock Transfer Fee</h3>
        <span><i class="far fa-clock"></i>&nbsp; <time datetime="2022-07-20">Jul 20, 2022 &bull; 6 min read</time></span>              
    </a>
    <a href="/fee/low-transaction-fee-crypto">
        <h3>05. Low Transaction Fee Crypto</h3>
        <span><i class="far fa-clock"></i>&nbsp; <time datetime="2022-07-21">Jul 21, 2022 &bull; 9 min read</time></span>              
    </a>
    <a href="/fee/crypto-transaction-fee">
        <h3>06. Crypto Transaction Fee</h3>
        <span><i class="far fa-clock"></i>&nbsp; <time datetime="2022-07-23">Jul 23, 2022 &bull; 13 min read</time></span>              
    </a>
</div>
`;