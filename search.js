
// Search Bar Script

// a script allowing search user to find an option between multiple strings/ words that may lead to the same content
String.prototype.includesOneof = function(arrayOfStrings) {

    if (!Array.isArray(arrayOfStrings)) {
        throw new Error("includesOneOf only accepts an array")
    }
    return arrayOfStrings.some(str => this.includes(str))
}

// writing a script for the search bar function logic
// for the explore page will identify different sections searched using location.href = "#idName"
function openfile() {
    var info = document.getElementById("search").value;

    if (info.toLowerCase().includesOneof(["remote", "assistance"])) {

        // closing window searched from, then open search item to be appeared as in same tab
        window.close();
        window.open("info-page.html",);
    } 

    else if (info.toLowerCase().includesOneof(["group", "policy"])) {

        window.close();
        window.open("info-page2.html",);
    } 

    else if (info.toLowerCase().includesOneof(["share", "drive", "permission"])) {

        window.close();
        window.open("info-page3.html",);
    } 

    else if (info.toLowerCase().includesOneof(["outlook"])) {

        window.close();
        window.open("info-page4.html",);
    } 

   else if (info.toLowerCase().includesOneof(["print"])) {

        window.close();
        window.open("info-page5.html",);
    } 

    else if (info.toLowerCase().includesOneof(["osi", "osi model", "layer"])) {

        window.close();
        window.open("info-page6.html",);
    } 

    else if (info.toLowerCase().includesOneof(["helpdesk issue", "helpdesk solution", "helpdesk problem", 
    "help desk issue", "help desk solution", "help desk problem", "tech support issue", "tech support solution",
    "tech support problem", "it support issue", "it support solution", "it support problems", "common"])) {

        window.close();
        window.open("info-page7.html",);
    } 

    else if (info.toLowerCase().includesOneof(["rsat", "r sat", "rsat tool"])) {

        window.close();
        window.open("info-page8.html",);
    } 

    else if (info.toLowerCase().includesOneof(["start", "technician", "task", "job", "description",
    "salary", "career", "path", "quick", "overview"])) {

        window.close();
        window.open("info-page9.html",);
    } 

    else if (info.toLowerCase().includesOneof(["guide", "troubleshooting steps", "steps", "basic", "resolve", "resolving",
    "cpu", "process", "maintenance", "hardware", "operating", "system", "prevent", "error", "virus", "cable", "disk", "mouse",
    "monitor", "ware", "boot", "reset", "power", "heat", "drive", "keyboard"])) {

        window.close();
        window.open("info-page10.html",);
    } 

    else if (info.toLowerCase().includesOneof(["practice", "guidance", "omnichannel", "omni", "customer",
    "knowledge", "service", "self", "kpi", "analytic", "satisfy", "satisfaction"])) {

        window.close();
        window.open("info-page11.html",);
    }
    
    else if (info.toLowerCase().includesOneof(["software", "tool", "zendesk", "zen", "solarwinds", "service desk", "solar",
    "sysaid", "summit", "ai", "cxone", "fresh", "salesforce", "force", "capacity", "control", "connectwise", "zoho",
    "bench", "ninja", "front", "team support", "kustomer" ])) {

        window.close();
        window.open("info-page12.html",);
    } 

    else if (info.toLowerCase().includesOneof(["resume", "ats", "cv", "scan", "job description", "resume scanner", "keyword tool", 
    "keyword optimize", "applicant tracking system", "jobscan", "job scan", "job research", "skills match", "match"])) {

        window.close();
        window.open("resume-scan.html",);
    } 

    else {
        window.location.href ="redirect.html";
    }

}

// Search Button Script
// Writing a function allowing the search icon to submit a request when pressed to act as the enter key

// writing the input field to gather the search information
var input = document.getElementById("search");

// executing the function when the user releases the key
input.document("keyup", function(event) {

    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
        event.preventDefault();

        // triggering the button element with a click
        document.getElementsByClassName("flex-div__nav-middle--search-icon").click();
    }
});
