window.addEventListener("load", () => {
    const bodySubscriptionInsert = document.querySelector(".game-lounge-body");
    // Giveaway Banner Create Element ----------------------------------------------
    const bannerInsertArea = document.querySelector(".gamelounge-article-content");
    const bannerInsertArea2 = document.getElementsByClassName("article-video-container")[1];
    let giveawayBanner = document.createElement("div");
    giveawayBanner.className = "subscription-cta";
    giveawayBanner.innerHTML = `
        <button id="subscription-btn-cta">
            Enter here
        </button>
        <div class="subscription-cta-text">
            <p>Win Free Battle Pass! &#127881;</p>
        </div>
    `
    // Giveaway Banner Placement Area 2
    let giveawayBanner2 = document.createElement("div");
    giveawayBanner2.className = "subscription-cta--2";
    giveawayBanner2.innerHTML = `
        <button id="subscription-btn-cta--2">
            Enter here
        </button>
        <div class="subscription-cta-text--2">
            <p>Win Free Battle Pass! &#127881;</p>
        </div>
    `
    if (bannerInsertArea2) {
        bannerInsertArea.prepend(giveawayBanner);
        bannerInsertArea2.appendChild(giveawayBanner2); 
    }else {
        bannerInsertArea.prepend(giveawayBanner);
    };
   
    
    // Subscription Modal Create Element ---------------------------------------------------------  
    let subscriptionInfo = document.createElement("div");
    subscriptionInfo.className = "subscription-modal hide";
    subscriptionInfo.id = "subscription-modal";
    subscriptionInfo.innerHTML = `

    <!-- Subscription Modal -->
        <div class="subscription-modal--container">
            <div class="subscription-campaign">
                <div class="subscription-campaign__wrp swiper-wrapper">
                    <div class="subscription-campaign__item swiper-slide">
                        <div class="subscription-campaign__img">                       
                            <img src="/images/game-lounge-img/apex-article-img/apex-legends-battle-pass-rank.jpg" alt="Subscription Sign Up Image">
                        </div>
                        <div class="subscription-campaign__content" id="subscription-campaign__content--main">
                            <div class="subscription-campaign__title">
                                <h2>
                                    Champion Slot
                                </h2>                       
                            </div>
                            <span class="subscription-campaign__time" id="subscription-time"></span>
                            <div class="subscription-campaign__title">
                                <p>
                                    $1.20 USD
                                </p>                       
                            </div>
                            <div class="subscription-campaign__text">
                                <p>
                                    Become a Champion Today! The Game Lounge features are all accessible plus more, with chances of earning free Entry for Battlpass Giveaways monthly.
                                    Members of the "Champion Slot" are highly valuable. - Giveaway begins at first 100 entries.
                                </p>
                                <ul class="subscription-list">
                                    <li>Free* Rank Tool Access</li>
                                    <li>Free* Character/ Legend Generator - upcoming</li>
                                    <li class="li-additionals">Creator Highlights - 12 mth subscription minimum</li>
                                    <li class="li-additionals">Discord* Members Only Channel Access - 12 mth subscription minimum</li>
                                    <li id="battlepass-highlight">Free* BattlePass Entry - 3 monthly winners</li>
                                    <li>Free* Loadout Spectator - upcoming</li>
                                    <li class="li-additionals">Exclusive* Members Email</li>
                                    <li>Weekly* Game Lounge Articles</li>
                                    <li class="li-additionals">Frequent* Champion Member Shoutouts!</li>
                                    <li class="li-additionals">Watch Undisturbed Game Lounge adfree videos</li>
                                </ul>         
                            </div>
                        </div>
                        <div class="subscription-campaign__content subscription-payment__container hide">
                            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                                <input type="hidden" name="cmd" value="_s-xclick">
                                <input type="hidden" name="hosted_button_id" value="N8CR36TBRJTBJ">
                                <table>
                                    <tr>
                                        <td id="payment-header">
                                            <input type="hidden" name="on0" value="Champion-Slot Member Options">Champion-Slot Member Options
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <select id="payment-selection" name="os0">
                                                <option value="Champion Member 1">Champion Member 1 : $1.20 USD - monthly</option>
                                                <option value="Champion Member 2">Champion Member 2 : $12.50 USD - yearly</option>
                                            </select> 
                                        </td>
                                    </tr>
                                </table>
                                <input type="hidden" name="currency_code" value="USD">
                                <input id="subscription-payment-option" type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_subscribeCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
                                <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
                            </form>                                    
                        </div>
                    </div>
                </div>
                <div class="subscription-btn--container">
                    <div class="subscription-btn--inner">
                        <button class="subscription-btn subscription-cancel"><span>Cancel</span></button>
                        <button class="subscription-btn subscription-continue">Membership <span>&rarr;</span></button>
                    </div>
                </div>       
            </div>
        </div>               
    `
    bodySubscriptionInsert.appendChild(subscriptionInfo);

    //Giveaway Enter Button Id
    const enterGiveawayButton = document.getElementById("subscription-btn-cta");
    const enterGiveawayButton2 = document.getElementById("subscription-btn-cta--2");
    const bodyHide = document.querySelector(".game-lounge-body-container");
    const subscriptionModal = document.getElementById("subscription-modal");

    enterGiveawayButton.addEventListener("click", () => {
        bodyHide.classList.add("hide");
        subscriptionModal.classList.remove("hide");
    });

    if (bannerInsertArea2) {
        enterGiveawayButton2.addEventListener("click", () => {
            bodyHide.classList.add("hide");
            subscriptionModal.classList.remove("hide");
        });
    };  
    
    // Subscription Classes and Id's----------------------------------------------
    const membershipBtn = document.querySelector(".subscription-continue");
    const cancelBtnMembership = document.querySelector(".subscription-cancel");
    const membershipOffers = document.getElementById("subscription-campaign__content--main");
    const paymentContainer = document.querySelector(".subscription-payment__container");

    membershipBtn.addEventListener("click", () => {
        membershipOffers.classList.add("hide");
        paymentContainer.classList.remove("hide");
        membershipBtn.style.display = "none";
    });

    cancelBtnMembership.addEventListener("click", () => {
        bodyHide.classList.remove("hide");
        subscriptionModal.classList.add("hide");
        membershipOffers.classList.remove("hide");
        paymentContainer.classList.add("hide");
        membershipBtn.style.display = "block";
    });

    // Get Current Date JS Logic----------------------------------------------------
    const date = new Date(Date.now());
    currentDate = date.toLocaleString("en-US", {month: "short", day: "numeric", year: "numeric"}); // remove unnecessary information from date and specify only what is needed

    const dot = " &bull; ";

    document.getElementById("subscription-time").innerHTML = currentDate + dot + " limited time only";
});

