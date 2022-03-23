const rankSubmit = document.getElementById('rank-submit');
const matchesInput = document.getElementById('matches');
const pointsInput = document.getElementById('points');
const rankInput = document.getElementById('current-rank');
const rankResult = document.querySelector('.rank-climb-result');

rankSubmit.addEventListener("click", () => {
    if (rankInput.value == "Bronze") {
       let multiply = matchesInput.value * pointsInput.value;
       let sum = multiply + 0;
       let minus = 10000 - sum;
       let days = minus / multiply;
       total = Math.round(days);
       document.querySelector(".rank-climb-result").innerHTML = total + " - Days To Hit Master" ;
    }else if (rankInput.value == "Silver") {
        let multiply = matchesInput.value * pointsInput.value;
        let sum = multiply + 1200;
        let minus = 10000 - sum;
        let days = minus / multiply;
        total = Math.round(days);
        document.querySelector(".rank-climb-result").innerHTML = total + " - Days To Hit Master" ;
    }else if (rankInput.value == "Gold") {
        let multiply = matchesInput.value * pointsInput.value;
        let sum = multiply + 2800;
        let minus = 10000 - sum;
        let days = minus / multiply;
        total = Math.round(days);
        document.querySelector(".rank-climb-result").innerHTML = total + " - Days To Hit Master" ;
    }else if (rankInput.value == "Platinum") {
        let multiply = matchesInput.value * pointsInput.value;
        let sum = multiply + 4800;
        let minus = 10000 - sum;
        let days = minus / multiply;
        total = Math.round(days);
        document.querySelector(".rank-climb-result").innerHTML = total + " - Days To Hit Master" ;
    }else if (rankInput.value == "Diamond") {
        let multiply = matchesInput.value * pointsInput.value;
        let sum = multiply + 7200;
        let minus = 10000 - sum;
        let days = minus / multiply;
        total = Math.round(days);
        document.querySelector(".rank-climb-result").innerHTML = total + " - Days To Hit Master" ;
    }
});