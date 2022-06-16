const date = new Date(Date.now());
currentDateMonth = date.toLocaleString("en-US", {month: "short"});
currentDateDay = date.toLocaleString("en-US", {day: "numeric"});
currentDateYear = date.toLocaleString("en-US", {year: "numeric"});

document.getElementById("offer-month").innerHTML = currentDateMonth;
document.getElementById("offer-day").innerHTML = currentDateDay;
document.getElementById("offer-year").innerHTML = currentDateYear;

// Get Current Date JS Logic----------------------------------------------------

    // Set the date we're counting down to
    var warzoneCountDownDate = new Date("Aug 31, 2023 15:37:25").getTime();

    // Update the count down every 1 second
    var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var warzonedistance = warzoneCountDownDate - now;

    // Time calculations for days, hours, minutes and seconds

    var warzonedays = Math.floor(warzonedistance / (1000 * 60 * 60 * 24));
    var warzonehours = Math.floor((warzonedistance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var warzoneminutes = Math.floor((warzonedistance % (1000 * 60 * 60)) / (1000 * 60));
    var warzoneseconds = Math.floor((warzonedistance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"

    document.getElementById("warzone-mobile-day").innerHTML = warzonedays;
    document.getElementById("warzone-mobile-hour").innerHTML = warzonehours;
    document.getElementById("warzone-mobile-min").innerHTML = warzoneminutes;
    document.getElementById("warzone-mobile-sec").innerHTML = warzoneseconds;

        // If the count down is finished, write some text

        if (warzonedistance < 0) {
            clearInterval(x);
            document.getElementById("warzone-mobile-day").innerHTML = "0";
            document.getElementById("warzone-mobile-hour").innerHTML = "0";
            document.getElementById("warzone-mobile-min").innerHTML = "0";
            document.getElementById("warzone-mobile-sec").innerHTML = "0";
        }

    }, 1000);