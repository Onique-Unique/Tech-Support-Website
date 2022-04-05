const rankSubmit = document.getElementById('rank-submit');
const matchesInput = document.getElementById('matches');
const pointsInput = document.getElementById('points');
const rankInput = document.getElementById('current-rank');
const rankResult = document.querySelector('.rank-climb-result');

rankSubmit.addEventListener("click", () => {
    rankResult.style.opacity = 0;
    rankSubmit.classList.add("animating");

    setTimeout(function(){
        
        // BRONZE RANK----------------------------------
            if (rankInput.value == "Bronze-IV") {
            let multiply = matchesInput.value * pointsInput.value;
            let sum = multiply + 0;
            let minus = 10000 - sum;
            let days = minus / multiply;
            total = Math.round(days);
            document.querySelector(".rank-climb-result").innerHTML = total + " - Days To Hit Master" ;
            }else if (rankInput.value == "Bronze-III") {
                let multiply = matchesInput.value * pointsInput.value;
                let sum = multiply + 300;
                let minus = 10000 - sum;
                let days = minus / multiply;
                total = Math.round(days);
                document.querySelector(".rank-climb-result").innerHTML = total + " - Days To Hit Master" ;
            }else if (rankInput.value == "Bronze-II") {
                let multiply = matchesInput.value * pointsInput.value;
                let sum = multiply + 600;
                let minus = 10000 - sum;
                let days = minus / multiply;
                total = Math.round(days);
                document.querySelector(".rank-climb-result").innerHTML = total + " - Days To Hit Master" ;
            }else if (rankInput.value == "Bronze-I") {
                let multiply = matchesInput.value * pointsInput.value;
                let sum = multiply + 900;
                let minus = 10000 - sum;
                let days = minus / multiply;
                total = Math.round(days);
                document.querySelector(".rank-climb-result").innerHTML = total + " - Days To Hit Master" ;
            }
       

        // SILVER RANK----------------------------------
            if (rankInput.value == "Silver-IV") {
            let multiply = matchesInput.value * pointsInput.value;
            let sum = multiply + 1200;
            let minus = 10000 - sum;
            let days = minus / multiply;
            total = Math.round(days);
            document.querySelector(".rank-climb-result").innerHTML = total + " - Days To Hit Master" ;
            }else if (rankInput.value == "Silver-III") {
                let multiply = matchesInput.value * pointsInput.value;
                let sum = multiply + 1600;
                let minus = 10000 - sum;
                let days = minus / multiply;
                total = Math.round(days);
                document.querySelector(".rank-climb-result").innerHTML = total + " - Days To Hit Master" ;
            }else if (rankInput.value == "Silver-II") {
                let multiply = matchesInput.value * pointsInput.value;
                let sum = multiply + 2000;
                let minus = 10000 - sum;
                let days = minus / multiply;
                total = Math.round(days);
                document.querySelector(".rank-climb-result").innerHTML = total + " - Days To Hit Master" ;
            }else if (rankInput.value == "Silver-I") {
                let multiply = matchesInput.value * pointsInput.value;
                let sum = multiply + 2400;
                let minus = 10000 - sum;
                let days = minus / multiply;
                total = Math.round(days);
                document.querySelector(".rank-climb-result").innerHTML = total + " - Days To Hit Master" ;
            }

        // GOLD RANK----------------------------------
            if (rankInput.value == "Gold-IV") {
            let multiply = matchesInput.value * pointsInput.value;
            let sum = multiply + 2800;
            let minus = 10000 - sum;
            let days = minus / multiply;
            total = Math.round(days);
            document.querySelector(".rank-climb-result").innerHTML = total + " - Days To Hit Master" ;
            }else if (rankInput.value == "Gold-III") {
                let multiply = matchesInput.value * pointsInput.value;
                let sum = multiply + 3300;
                let minus = 10000 - sum;
                let days = minus / multiply;
                total = Math.round(days);
                document.querySelector(".rank-climb-result").innerHTML = total + " - Days To Hit Master" ;
            }else if (rankInput.value == "Gold-II") {
                let multiply = matchesInput.value * pointsInput.value;
                let sum = multiply + 3800;
                let minus = 10000 - sum;
                let days = minus / multiply;
                total = Math.round(days);
                document.querySelector(".rank-climb-result").innerHTML = total + " - Days To Hit Master" ;
            }else if (rankInput.value == "Gold-I") {
                let multiply = matchesInput.value * pointsInput.value;
                let sum = multiply + 4300;
                let minus = 10000 - sum;
                let days = minus / multiply;
                total = Math.round(days);
                document.querySelector(".rank-climb-result").innerHTML = total + " - Days To Hit Master" ;
            }

        // PLATINUM RANK----------------------------------
            if (rankInput.value == "Platinum-IV") {
            let multiply = matchesInput.value * pointsInput.value;
            let sum = multiply + 4800;
            let minus = 10000 - sum;
            let days = minus / multiply;
            total = Math.round(days);
            document.querySelector(".rank-climb-result").innerHTML = total + " - Days To Hit Master" ;
            }else if (rankInput.value == "Platinum-III") {
                let multiply = matchesInput.value * pointsInput.value;
                let sum = multiply + 5400;
                let minus = 10000 - sum;
                let days = minus / multiply;
                total = Math.round(days);
                document.querySelector(".rank-climb-result").innerHTML = total + " - Days To Hit Master" ;
            }else if (rankInput.value == "Platinum-II") {
                let multiply = matchesInput.value * pointsInput.value;
                let sum = multiply + 6000;
                let minus = 10000 - sum;
                let days = minus / multiply;
                total = Math.round(days);
                document.querySelector(".rank-climb-result").innerHTML = total + " - Days To Hit Master" ;
            }else if (rankInput.value == "Platinum-I") {
                let multiply = matchesInput.value * pointsInput.value;
                let sum = multiply + 6600;
                let minus = 10000 - sum;
                let days = minus / multiply;
                total = Math.round(days);
                document.querySelector(".rank-climb-result").innerHTML = total + " - Days To Hit Master" ;
            }

        // DIAMOND RANK----------------------------------
            if (rankInput.value == "Diamond-IV") {
            let multiply = matchesInput.value * pointsInput.value;
            let sum = multiply + 7200;
            let minus = 10000 - sum;
            let days = minus / multiply;
            total = Math.round(days);
            document.querySelector(".rank-climb-result").innerHTML = total + " - Days To Hit Master" ;
            }else if (rankInput.value == "Diamond-III") {
                let multiply = matchesInput.value * pointsInput.value;
                let sum = multiply + 7900;
                let minus = 10000 - sum;
                let days = minus / multiply;
                total = Math.round(days);
                document.querySelector(".rank-climb-result").innerHTML = total + " - Days To Hit Master" ;
            }else if (rankInput.value == "Diamond-II") {
                let multiply = matchesInput.value * pointsInput.value;
                let sum = multiply + 8600;
                let minus = 10000 - sum;
                let days = minus / multiply;
                total = Math.round(days);
                document.querySelector(".rank-climb-result").innerHTML = total + " - Days To Hit Master" ;
            }else if (rankInput.value == "Diamond-I") {
                let multiply = matchesInput.value * pointsInput.value;
                let sum = multiply + 9300;
                let minus = 10000 - sum;
                let days = minus / multiply;
                total = Math.round(days);
                document.querySelector(".rank-climb-result").innerHTML = total + " - Days To Hit Master" ;
            }

        rankSubmit.classList.remove("animating");
        rankResult.style.opacity = 1;
    }, 2000);
});