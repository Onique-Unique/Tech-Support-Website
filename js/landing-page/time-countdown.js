// Get Current Date JS Logic----------------------------------------------------

    // Set the date we're counting down to
    var r6CountDownDate = new Date("Feb 08, 2023 15:37:25").getTime();
    var warzoneCountDownDate = new Date("Aug 31, 2023 15:37:25").getTime();
    var valorantCountDownDate = new Date("Apr 30, 2024 15:37:25").getTime();

    // Update the count down every 1 second
    var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var r6distance = r6CountDownDate - now;
    var warzonedistance = warzoneCountDownDate - now;
    var valorantdistance = valorantCountDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var r6days = Math.floor(r6distance / (1000 * 60 * 60 * 24));
    var r6hours = Math.floor((r6distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var r6minutes = Math.floor((r6distance % (1000 * 60 * 60)) / (1000 * 60));
    var r6seconds = Math.floor((r6distance % (1000 * 60)) / 1000);

    var warzonedays = Math.floor(warzonedistance / (1000 * 60 * 60 * 24));
    var warzonehours = Math.floor((warzonedistance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var warzoneminutes = Math.floor((warzonedistance % (1000 * 60 * 60)) / (1000 * 60));
    var warzoneseconds = Math.floor((warzonedistance % (1000 * 60)) / 1000);

    var valorantdays = Math.floor(valorantdistance / (1000 * 60 * 60 * 24));
    var valoranthours = Math.floor((valorantdistance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var valorantminutes = Math.floor((valorantdistance % (1000 * 60 * 60)) / (1000 * 60));
    var valorantseconds = Math.floor((valorantdistance % (1000 * 60)) / 1000);

    // Dot symbol as separation for text limited time only
    const dot = " &bull; ";

    // Display the result in the element with id="demo"
    document.getElementById("r6-mobile").innerHTML = r6days + "d " + r6hours + "h "
    + r6minutes + "m " + r6seconds + "s " + dot + " remaining";

    document.getElementById("warzone-mobile").innerHTML = warzonedays + "d " + warzonehours + "h "
    + warzoneminutes + "m " + warzoneseconds + "s " + dot + " remaining";

    document.getElementById("valorant-mobile").innerHTML = valorantdays + "d " + valoranthours + "h "
    + valorantminutes + "m " + valorantseconds + "s " + dot + " remaining";

        // If the count down is finished, write some text
        if (r6distance < 0) {
            clearInterval(x);
            document.getElementById("r6-mobile").innerHTML = "Released";
        }

        if (warzonedistance < 0) {
            clearInterval(x);
            document.getElementById("warzone-mobile").innerHTML = "Released";
        }

        if (valorantdistance < 0) {
            clearInterval(x);
            document.getElementById("valorant-mobile").innerHTML = "Released";
        }
    }, 1000);