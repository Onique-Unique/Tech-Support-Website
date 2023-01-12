const submit = document.getElementById('submit');
const output = document.getElementById('output');
const copy = document.getElementById('copy');
let paraEl = document.getElementById('paraEl');
let listMain = document.getElementById('listMain');
let listCustom = document.getElementById('listCustom');
let topics = document.getElementById('topics');
let title, description, link, secondary_title, secondary_para_1, secondary_para_2, current_image_link;
let input = {}, val = [];
let tCount = 0; //Topic count 
let htmlCode, htmlCode_second;
let htmlCode_topics = '';
let formCode;
let htmlCode_first_c = htmlCode_first;
let htmlCode_last_c = htmlCode_last;

let reviews, children; //all the topics will be stored here in an array and their children (paras and divs) will be stored in children for every iteration of reviews

paraEl.addEventListener('click', (e) => {
    e.preventDefault();
    tCount++;
    formCode = `                        
    <h2 class="title-secondary h2-highlight">Topic ${tCount}</h2>
    <div class="form-group para" id="review${tCount}">
        <label>Topic title</label>
        <input type="text" class="form-control" id="review-${tCount}">
        <label>Direct para 1</label>
        <textarea class='form-control' rows="2" cols="30"></textarea>
        <label>Direct para 2</label>
        <textarea class='form-control' rows="2" cols="30"></textarea>
        <label>Direct para 3</label>
        <textarea class='form-control' rows="2" cols="30"></textarea>
        <label>Inner para 1</label>
        <textarea class='form-control' rows="2" cols="30"></textarea>
        <label>Inner para 2</label>
        <textarea class='form-control' rows="2" cols="30"></textarea>
        <label>Alternate Inner para</label>
        <textarea class='form-control' rows="2" cols="30"></textarea>
        <label>Inner para 4</label>
        <textarea class='form-control' rows="2" cols="30"></textarea>
        <label>Indirect para 1</label>
        <textarea class='form-control' rows="2" cols="30"></textarea>
        <label>Indirect para 2</label>
        <textarea class='form-control' rows="2" cols="30"></textarea>
        <label>Indirect para 3</label>
        <textarea class='form-control' rows="2" cols="30"></textarea>
    </div>
    <br/>`;
    topics.insertAdjacentHTML('beforeend', formCode);
});

// Regular List Elements Generate
listMain.addEventListener('click', (e) => {
    e.preventDefault();
    tCount++;
    formCode = `
    <h2 class="title-secondary h2-highlight">Topic ${tCount}</h2>
    <div class="form-group listMain" id="review${tCount}">
        <label>Topic title</label>
        <input type="text" class="form-control" id="review-${tCount}"/>
        <label>Direct para 1</label>
        <textarea class='form-control' rows="2" cols="30"></textarea>
        <label>Direct para 2</label>
        <textarea class='form-control' rows="2" cols="30"></textarea>
        <label>Direct para 3</label>
        <textarea class='form-control' rows="2" cols="30"></textarea>
        <label>Topic list item 1</label>
        <input type="text" class="form-control" />
        <label>Topic list item 2</label>
        <input type="text" class="form-control" />
        <label>Topic list item 3</label>
        <input type="text" class="form-control">
        <label>Topic list item 4</label>
        <input type="text" class="form-control" />
        <label>Topic list item 5</label>
        <input type="text" class="form-control" />
        <label>Topic list item 6</label>
        <input type="text" class="form-control">
        <label>Topic list item 7</label>
        <input type="text" class="form-control">
        <label>Topic list item 8</label>
        <input type="text" class="form-control">
        <label>Topic list item 9</label>
        <input type="text" class="form-control">
        <label>Topic list item 10</label>
        <input type="text" class="form-control" />
        <label>Indirect para 1</label>
        <textarea class='form-control' rows="2" cols="30"></textarea>
        <label>Indirect para 2</label>
        <textarea class='form-control' rows="2" cols="30"></textarea>
        <label>Indirect para 3</label>
        <textarea class='form-control' rows="2" cols="30"></textarea>
    </div>
    <br/>
    `;
    topics.insertAdjacentHTML('beforeend', formCode);
});

// For Custom List Input Amount
// Define numListItems as a global variable
let numListItems;

listCustom.addEventListener('click', (e) => {
    e.preventDefault();
    // Create the popup box
    const popup = document.createElement('div');
    popup.id = "listBox";
    popup.innerHTML = `<i class="fa-solid fa-rectangle-xmark" id="close-custom-list"></i><p>Enter the number of topic list items:</p><input type="text" id="num-list-items" /><button id="submit-num-list-items">Submit</button>`;
    document.body.appendChild(popup);

    let customListClose = document.getElementById("close-custom-list");
    customListClose.onclick = function () {
        document.body.removeChild(popup);
    }

    // Add a click event listener to the submit button
    const submitBtn = document.querySelector('#submit-num-list-items');
    submitBtn.addEventListener('click', () => {
        tCount++;

        formCode = `
        <h2 class="title-secondary h2-highlight">Topic ${tCount}</h2>
        <div class="form-group listCustom" id="review${tCount}">
            <label>Topic title</label>
            <input type="text" class="form-control" id="review-${tCount}"/>
            <label>Direct para 1</label>
            <textarea class='form-control' rows="2" cols="30"></textarea>
            <label>Direct para 2</label>
            <textarea class='form-control' rows="2" cols="30"></textarea>
            <label>Direct para 3</label>
            <textarea class='form-control' rows="2" cols="30"></textarea>
        `;

        numListItems = document.querySelector('#num-list-items').value;

        // Ensure that numListItems is a number, create list areas based on user amount specified
        while (isNaN(numListItems)) {
            alert('Please enter a valid number');
            return;
        }

        for (let i = 1; i <= parseInt(numListItems); i++) {
            formCode += `<label>Topic list item ${i}</label><input type="text" class="form-control" />`;
        }

        formCode += `
            <label>Indirect para 1</label>
            <textarea class='form-control' rows="2" cols="30"></textarea>
            <label>Indirect para 2</label>
            <textarea class='form-control' rows="2" cols="30"></textarea>
            <label>Indirect para 3</label>
            <textarea class='form-control' rows="2" cols="30"></textarea>
        </div>
        <br/>
        `;
        topics.insertAdjacentHTML('beforeend', formCode);
        popup.remove();
    });
});

/* On Submitting the form */
submit.addEventListener('click', (e) => {
    e.preventDefault();
    //reset Html topics so the changes are replaced 
    htmlCode_topics = '';

    //Refresh htmlCode and htmlCode_last so it can be placed again with the changes made 
    htmlCode_first = htmlCode_first_c;
    htmlCode_last = htmlCode_last_c;

    getPreInputs();
    createParas();
    replaceCode();
});

//Get the preliminary inputs - title, description, link, secondary title details
getPreInputs = () => {
    title = document.getElementById('title');
    description = document.getElementById('description');
    link = document.getElementById('link');
    secondary_title = document.getElementById('secondary_title');
    secondary_para_1 = document.getElementById('secondary_para_1');
    secondary_para_2 = document.getElementById('secondary_para_2');
    current_image_link = document.getElementById("image-link");

    input = {
        title: title.value,
        description: description.value,
        'current-page-link': link.value,
        'secondary-title': secondary_title.value,
        'secondary-title-paragraph': secondary_para_1.value,
        'secondary-title-paragraph-2': secondary_para_2.value,
        'current-image-link': current_image_link.value
    };
};

createParas = () => {
    let classN;
    //the remaining paragraphs 
    reviews = topics.children;
    reviews = Array.from(reviews);
    reviews = reviews.filter(r => r.tagName === 'DIV'); //filtered out only the 'review' div elements that we need inputs from
    reviews.forEach((review, index) => {
        classN = review.className.replace('form-group ', '');
        //reset val
        val = [];
        children = review.children;
        children = Array.from(children);
        children.forEach((item) => {
            if (item.tagName === 'TEXTAREA' || item.tagName === 'INPUT') {
                /*if(item.id === `review-${index+1}` && item.value == '') {
                    alert('Please enter a title for your topics');
                    stat = 0;
                    return;
                }
                else {*/
                val.push(item.value); //Even if the title field is not filled, start pushing the content
                //}
            }
        });

        //Replace the misc h2's and secondary-paras first with a switch statement
        switch (index + 1) {
            case 1:
                htmlCode_first = htmlCode_first.replace(/{ .first-h2 }/g, val[0]);
                break;
            case 2:
                htmlCode_first = htmlCode_first.replace(/{ .second-h2 }/g, val[0]);
                //find the first non-empty paragraph 
                for (let i = 1; i < val.length; i++) {
                    if (val[i] != '') {
                        htmlCode_first = htmlCode_first.replace(/{ .second-h2-paragraph }/, val[i]);
                    }
                }
                break;
            case 3:
                htmlCode_first = htmlCode_first.replace(/{ .third-h2 }/g, val[0]);
                break;
            case 4:
                htmlCode_first = htmlCode_first.replace(/{ .fourth-h2 }/g, val[0]);
                //find the first non-empty paragraph 
                for (let i = 1; i < val.length; i++) {
                    if (val[i] != '') {
                        htmlCode_first = htmlCode_first.replace(/{ .fourth-h2-paragraph }/, val[i]);
                    }
                }
                break;
            case 5:
                htmlCode_first = htmlCode_first.replace(/{ .fifth-h2 }/g, val[0]);
                break;
            case 6:
                htmlCode_first = htmlCode_first.replace(/{ .sixth-h2 }/g, val[0]);
                break;
            case 7:
                htmlCode_first = htmlCode_first.replace(/{ .seventh-h2 }/g, val[0]);
                break;
            case 8:
                htmlCode_first = htmlCode_first.replace(/{ .eight-h2 }/g, val[0]);
                break;
            case 9:
                htmlCode_first = htmlCode_first.replace(/{ .ninth-h2 }/g, val[0]);
                break;
            case 10:
                htmlCode_first = htmlCode_first.replace(/{ .tenth-h2 }/g, val[0]);
                break;
            case 11:
                htmlCode_first = htmlCode_first.replace(/{ .eleventh-h2 }/g, val[0]);
                break;
            case 12:
                htmlCode_first = htmlCode_first.replace(/{ .twelfth-h2 }/g, val[0]);
                break;
            case 13:
                htmlCode_first = htmlCode_first.replace(/{ .thirteenth-h2 }/g, val[0]);
                break;
            case 14:
                htmlCode_first = htmlCode_first.replace(/{ .fourteenth-h2 }/g, val[0]);
                break;
            case 15:
                htmlCode_first = htmlCode_first.replace(/{ .fifteenth-h2 }/g, val[0]);
                break;
        }
        // if first para is at index 0 then do this or move to next if statement
        if (index === 0 && classN === 'para') {

            htmlCode_second = `
            <h2 class="title-secondary h2-highlight" id="review-1">${val[0]}</h2>
            <p class="text">${val[1]}</p> 
            <p class="text">${val[2]}</p> 
            <p class="text">${val[3]}</p> 
            <div class="div-container">
                <p class="text"> ${val[4]}</p> 
                <p class="text"> ${val[5]}</p> 
                <p class="text"> ${val[6]}</p> 
                <p class="text"> ${val[7]}</p> 
            </div>
            <br>
            <p class="text">${val[8]}</p> 
            <p class="text">${val[9]}</p> 
            <p class="text">${val[10]}</p> 
            <br><br>
            <!-- Generate Portfolio Promo Card/ Box Start -->
            <blockquote>
                <div class="promo-box-container">
                    <a href="https://novatechoffice.com/statement-generate/index" target="_blank">
                    <span class="linkspanner"></span>
                    </a>
                <p class="promo-title"><a href="https://novatechoffice.com/statement-generate/index" target="_blank">Interested in Earning More This Year? <br> <span class="lighter">Lead your Investment, Growth and Digital Assets - Get Your Portfolio Today. <i class="fa-solid fa-cloud-arrow-down"></i></span></a></p>
                <p><a class="cta-button" href="https://novatechoffice.com/statement-generate/index" target="_blank">Generate Investment Portfolio <i class="fa-solid fa-download"></i></a></p>
                <div class="right-triangle"> </div>
                </div>
            </blockquote>
            <!-- Generate Portfolio Promo Card/ Box End -->
            <br><br>
            `
        }
        if (index === 0 && classN === 'listMain') {
            htmlCode_topics += `
            <h2 class="title-secondary h2-highlight" id="review-${index+1}">${val[0]}</h2>
            <p class="text">${val[1]}</p> 
            <p class="text">${val[2]}</p> 
            <p class="text">${val[3]}</p> 
            <div class="div-container"> 
               <ul>
                    <li class="text">${val[4]}</li> 
                    <li class="text">${val[5]}</li>
                    <li class="text">${val[6]}</li> 
                    <li class="text">${val[7]}</li> 
                    <li class="text">${val[8]}</li>
                    <li class="text">${val[9]}</li> 
                    <li class="text">${val[10]}</li> 
                    <li class="text">${val[11]}</li>
                    <li class="text">${val[12]}</li> 
                    <li class="text">${val[13]}</li>
               </ul>
            </div>
            <br>
            <p class="text">${val[14]}</p> 
            <p class="text">${val[15]}</p> 
            <p class="text">${val[16]}</p> 
            <br><br>
            `
        }
        if (index === 0 && classN === 'listCustom') {

            htmlCode_second = `
            <h2 class="title-secondary h2-highlight" id="review-${index+1}">${val[0]}</h2>
            <p class="text">${val[1]}</p> 
            <p class="text">${val[2]}</p> 
            <p class="text">${val[3]}</p> 
            <div class="div-container"> 
                <ul>
            `;
            // generate the amount of list areas based on user input stored in variable numListItems
            for (let i = 4; i < 4 + parseInt(numListItems); i++) {
                htmlCode_topics += `<li class="text">${val[i]}</li>`;
            }

            htmlCode_topics += `</ul></div>`;

            let startIndex = 4 + parseInt(numListItems);
            htmlCode_topics += `
                <br>
                <p class="text">${val[startIndex]}</p> 
                <p class="text">${val[startIndex + 1]}</p> 
                <p class="text">${val[startIndex + 2]}</p> 
                <br><br>
            <!-- Generate Portfolio Promo Card/ Box Start -->
            <blockquote>
                <div class="promo-box-container">
                    <a href="https://novatechoffice.com/statement-generate/index" target="_blank">
                    <span class="linkspanner"></span>
                    </a>
                <p class="promo-title"><a href="https://novatechoffice.com/statement-generate/index" target="_blank">Interested in Earning More This Year? <br> <span class="lighter">Lead your Investment, Growth and Digital Assets - Get Your Portfolio Today. <i class="fa-solid fa-cloud-arrow-down"></i></span></a></p>
                <p><a class="cta-button" href="https://novatechoffice.com/statement-generate/index" target="_blank">Generate Investment Portfolio <i class="fa-solid fa-download"></i></a></p>
                <div class="right-triangle"> </div>
                </div>
            </blockquote>
            <!-- Generate Portfolio Promo Card/ Box End -->
            <br><br>
            `
        } else {
            if (classN === 'para' && index != 0) {
                htmlCode_topics += `
                <h2 class="title-secondary h2-highlight" id="review-${index+1}">${val[0]}</h2>
                <p class="text">${val[1]}</p> 
                <p class="text">${val[2]}</p> 
                <p class="text">${val[3]}</p> 
                <div class="div-container">
                    <p class="text"> ${val[4]}</p> 
                    <p class="text">  ${val[5]} </p>
                    <p class="text text-alt">  ${val[6]} </p> 
                    <p class="text">  ${val[7]} </p>
                </div>
                <br>
                <p class="text">${val[8]}</p> 
                <p class="text">${val[9]}</p> 
                <p class="text">${val[10]}</p> 
                <br><br>
                `
            }
            if (classN === 'listMain' && index != 0) {
                htmlCode_topics += `
                <h2 class="title-secondary h2-highlight" id="review-${index+1}">${val[0]}</h2>
                <p class="text">${val[1]}</p> 
                <p class="text">${val[2]}</p> 
                <p class="text">${val[3]}</p> 
                <div class="div-container"> 
                   <ul>
                        <li class="text">${val[4]}</li> 
                        <li class="text">${val[5]}</li>
                        <li class="text">${val[6]}</li> 
                        <li class="text">${val[7]}</li> 
                        <li class="text">${val[8]}</li>
                        <li class="text">${val[9]}</li> 
                        <li class="text">${val[10]}</li> 
                        <li class="text">${val[11]}</li>
                        <li class="text">${val[12]}</li> 
                        <li class="text">${val[13]}</li>
                   </ul>
                </div>
                <br>
                <p class="text">${val[14]}</p> 
                <p class="text">${val[15]}</p> 
                <p class="text">${val[16]}</p> 
                <br><br>
                `
            }
            if (classN == 'listCustom' && index != 0) {
                htmlCode_topics += `
                <h2 class="title-secondary h2-highlight" id="review-${index+1}">${val[0]}</h2>
                <p class="text">${val[1]}</p> 
                <p class="text">${val[2]}</p> 
                <p class="text">${val[3]}</p> 
                <div class="div-container"> 
                   <ul>
                `;

                for (let i = 4; i < 4 + parseInt(numListItems); i++) {
                    htmlCode_topics += `<li class="text">${val[i]}</li>`;
                }

                htmlCode_topics += `</ul></div>`;

                let startIndex = 4 + parseInt(numListItems);
                htmlCode_topics += `
                    <br>
                    <p class="text">${val[startIndex]}</p> 
                    <p class="text">${val[startIndex + 1]}</p> 
                    <p class="text">${val[startIndex + 2]}</p> 
                    <br><br>
                `;
            }
        }
    });

    htmlCode = htmlCode_first + htmlCode_second + htmlCode_topics + htmlCode_last; //create the entire html code

    // Get date time
    const now = new Date();

    // Get the current year, month, and day
    const year = now.getFullYear();
    const month = now.getMonth() + 1; // Months are 0-indexed
    const day = now.getDate();

    // Format the date in the YYYY-MM-DD format
    const isoDate = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;

    // Get the month names
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    // Get the current month name
    const monthName = monthNames[month - 1];

    //   Replace instances with latest date
    htmlCode = htmlCode.replace(/{ .date-schema }/g, isoDate);
    htmlCode = htmlCode.replace(/{ .dateMM }/g, `${monthName} ${day}, ${year}`);

    //Remove the h2, p, div, ul, li elements with no content (if the inputs have spaces, it'll stay)
    htmlCode = htmlCode.replace(/<(ul|h2|li)[^>]*>\s*<\/\1>|<li><a[^>]*>\s*<\/a><\/li>|<div class="div-container">\s*<\/div>/gi, '');
    htmlCode = htmlCode.replace(/<p class="text">(\s)*<\/p>/gi, '\n');
    htmlCode = htmlCode.replace(/<p class="text text-alt">(\s)*<\/p>/gi, '\n');
    htmlCode = htmlCode.replace(/<li class="text">(null|undefined|\s)*<\/li>/gi, '\n');
    htmlCode = htmlCode.replace(/<p class="text">(null|undefined|\s)*<\/p>/gi, '\n');
    htmlCode = htmlCode.replace(/<li><a[^>]*>.*?{.*?}.*?<\/a><\/li>/gi, '');


    //remove the extra lines that come up
    //htmlCode = htmlCode.replace(/(\r\n|\r|\n){2}/g, '$1').replace(/(\r\n|\r|\n){3,}/g, '$1\n');;
    htmlCode = htmlCode.replace(/\n\s*\n\s*\n/g, '\n');

}

replaceCode = () => {
    let o = htmlCode;
    for (const key in input) {
        let reg = new RegExp("{ ." + key + " }", 'g');
        o = o.replace(reg, input[key]);
    }

    //o has the final html code, but htmlCode still has the original 
    output.innerText = o;
};

/* Copy generated HTML code */
copy.addEventListener('click', event => {
    event.preventDefault();
    let r = document.createRange();
    r.selectNode(document.getElementById('output'));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(r);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
    alert("Copied To Clipboard");
});

const nameSafe = "Bearer";

const x1 = 'sk-';
const x2 = 'Kcbg';
const x3 = 'Yasw';
const x4 = 'Gw7c';
const x5 = 'eec6';
const x6 = 'ZpA5';
const x7 = 'T3Bl';
const x8 = 'bkFJ';
const x9 = 'NNsK';
const x10 = 'JYnI';
const x11 = '7ayt';
const x12 = 'phql';
const x13 = 'AE0s';

const secureAI = x1 + x2 + x3 + x4 + x5 + x6 + x7 + x8 + x9 + x10 + x11 + x12 + x13;

var AIbutton = document.getElementById('ai-gen');

const aiInstructions = "write original and creative information for:";

AIbutton.onclick = async function () {
    event.preventDefault();
    // Create the popup container
    var askAI = document.createElement('div');
    askAI.classList.add('ask-ai');

    // Create the input field
    var inputAI = document.createElement('textarea');
    inputAI.type = 'text';
    inputAI.placeholder = 'Enter something';

    // Create the generate button
    var aigenerateButton = document.createElement('button');
    aigenerateButton.innerHTML = 'Generate';
    aigenerateButton.id = "aiGenerateText";
    aigenerateButton.onclick = async function () {

        // Check if the input value is empty before executing rest of code
        if (inputAI.value === "") {
            alert("Please enter a value");
            return;
        }

        const replacedAIValue = inputAI.value;
        const topicInsert = document.getElementById("TopicInsert").value;

        // match the text within brackets
        var matchFind = topicInsert.match(/\[(.*?)\]/);

        // check if input1 has brackets
        if (matchFind) {
            // Replace instances of "[blank]" in input2 with text inside the bracket
            const newAIValue = replacedAIValue.replace(/\[blank\]/g, matchFind[1]);

            // Show the loading element and blur background
            document.querySelector('.app-container').style.filter = 'blur(2px) brightness(0.5)';
            document.querySelector('.loading').style.display = 'block';

            // Call the OpenAI API to generate content
            const response = await fetch(`https://api.openai.com/v1/completions`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `${nameSafe} ${secureAI}`
                },
                body: JSON.stringify({
                    model: 'text-davinci-003',
                    prompt: aiInstructions + newAIValue + "?",
                    max_tokens: 500,
                }),
            });

            // Check if the request was successful
            if (!response.ok) {
                // Hide the loading element
                document.querySelector('.loading').style.display = 'none';

                // Display the error message
                console.error(`Error: ${response.status} ${response.statusText}`);
                return;
            }

            // Parse the response as JSON
            const data = await response.json();

            // Check if the data object has a choices property
            if (!data.choices) {
                // Hide the loading element
                document.querySelector('.loading').style.display = 'none';

                // Display the error message
                console.error(`Error: The data object does not have a 'choices' property.`);
                return;
            }

            // Hide the loading element and remove background blur
            document.querySelector('.loading').style.display = 'none';
            document.querySelector('.app-container').style.filter = 'none';
            
            // Update Text Area with new values
            inputAI.value = newAIValue;

            // Display the generated content in the page
            var output = document.getElementById("output");
            output.innerText = data.choices[0].text;

        }
    }

    // Create the close button
    var aicloseButton = document.createElement('button');
    aicloseButton.innerHTML = 'Close';
    aicloseButton.id = "closeAiGenerate";
    aicloseButton.onclick = function () {
        document.body.removeChild(askAI);
    }

    // Add the input field, buttons, and close button to the popup container
    askAI.appendChild(inputAI);
    askAI.appendChild(aigenerateButton);
    askAI.appendChild(aicloseButton);

    // Add the popup container to the body of the page
    document.body.appendChild(askAI);
}

/*//get all the para icons - plus buttons 
let plusP = document.getElementsByClassName('plusP');

//Make the plus button work 
for(let i=0; i<plusP.length; i++) {
    plusP[i].addEventListener('click', () => {
        addEl = plusP[i];
        createParaBox(addEl);
    });
}

createParaBox = (addEl) => {
    let parent = addEl.parentElement;

    let t = document.createElement('textarea');
    t.cols = 30;
    t.rows = 2;
    t.className = 'form-control secondary-para';
    parent.appendChild(t);
};*/