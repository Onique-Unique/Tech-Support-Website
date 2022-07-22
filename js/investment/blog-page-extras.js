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

// Change Year Range Here -----------------------------------------------------------------------
// Article Year Range Targeting
const articleYear = "(2022 - 2023) "; // Update Year Range - for Blogpost here ----------------------
const metaChange = document.querySelectorAll(".metaPageTitle");
const metaContent = document.querySelector(".metaPageTitle").getAttribute("content");
const onPageYear = document.querySelectorAll(".yearInsert");

// Title Year Change
document.title = articleYear + document.title;

// Meta with specified class Year Change
if(metaChange){
  for(let i = 0; i < metaChange.length; i++){
    metaChange[i].getAttribute("content");
    metaChange[i].setAttribute("content", articleYear + metaContent);
  }
}

// In Article Page Year Change
if(onPageYear){
  for(let i = 0; i < onPageYear.length; i++){
    onPageYear[i].textContent = articleYear;
  }
}