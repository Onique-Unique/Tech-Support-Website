// Index Banner Date Logic 
// Get Current Date JS Logic
const date = new Date(Date.now());
currentDate = date.toLocaleString("en-US", {month: "short", day: "numeric", year: "numeric"}); // remove unnecessary information from date and specify only what is needed

const dateMain = ["feeRangeDate"];

if(dateMain){
  for(i = 0; i < dateMain.length; i++){
    if(i  <= 1){
        document.getElementById(dateMain[i]).innerHTML = currentDate;
     }
    // else if (i === 1){
    //     document.getElementById(dateMain[i]).innerHTML = "Today " + currentDate;
    // }
  };
};