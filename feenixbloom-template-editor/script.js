const submit = document.getElementById('submit');
const output = document.getElementById('output');
const copy = document.getElementById('copy');
let paraEl = document.getElementById('paraEl');
let listEl = document.getElementById('listEl');
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
    <h4>Topic ${tCount}</h4>
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
    topics.insertAdjacentHTML('beforeend',formCode);
});

listEl.addEventListener('click',(e) => {
    e.preventDefault();
    tCount++;
    formCode = `
    <h4>Topic ${tCount}</h4>
    <div class="form-group list" id="review${tCount}">
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
    topics.insertAdjacentHTML('beforeend',formCode);
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
    reviews.forEach((review,index) => {
        classN = review.className.replace('form-group ', '');
        //reset val
        val = [];
        children = review.children;
        children = Array.from(children);
        children.forEach((item) => {
            if(item.tagName === 'TEXTAREA' || item.tagName === 'INPUT') {
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
        switch(index + 1) {
            case 1: htmlCode_first = htmlCode_first.replace(/{ .first-h2 }/g,val[0]);
                    break;
            case 2: htmlCode_first = htmlCode_first.replace(/{ .second-h2 }/g,val[0]);
                    //find the first non-empty paragraph 
                    for(let i=1; i<val.length; i++) {
                        if(val[i] != '') {
                            htmlCode_first = htmlCode_first.replace(/{ .second-h2-paragraph }/,val[i]);
                        }
                    }
                    break;
            case 3: htmlCode_first = htmlCode_first.replace(/{ .third-h2 }/g,val[0]);
                    break;
            case 4: htmlCode_first = htmlCode_first.replace(/{ .fourth-h2 }/g,val[0]);
                    //find the first non-empty paragraph 
                    for(let i=1; i<val.length; i++) {
                        if(val[i] != '') {
                            htmlCode_first = htmlCode_first.replace(/{ .fourth-h2-paragraph }/,val[i]);
                        }
                    }
                    break;
            case 5: htmlCode_first = htmlCode_first.replace(/{ .fifth-h2 }/g,val[0]);
                    break;
            case 6: htmlCode_first = htmlCode_first.replace(/{ .sixth-h2 }/g,val[0]);
                    break;
            case 7: htmlCode_first = htmlCode_first.replace(/{ .seventh-h2 }/g,val[0]);
                    break;
            case 8: htmlCode_first = htmlCode_first.replace(/{ .eight-h2 }/g,val[0]);
                    break;
            case 9: htmlCode_first = htmlCode_first.replace(/{ .ninth-h2 }/g,val[0]);
                    break;
            case 10: htmlCode_first = htmlCode_first.replace(/{ .tenth-h2 }/g,val[0]);
                    break;                                                                           
        }
        if(index == 0) {
            
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
                    <a href="/coming-soon-page" target="_blank">
                    <span class="linkspanner"></span>
                    </a>
                <p class="promo-title"><a href="novatechoffice.com/coming-soon-page" target="_blank">Interested in Earning More This Year? <br> <span class="lighter">Lead your Investment, Growth and Digital Assets - Get Your Portfolio Today. <i class="fa-solid fa-cloud-arrow-down"></i></span></a></p>
                <p><a class="cta-button" href="novatechoffice.com/coming-soon-page" target="_blank">Generate Investment Portfolio <i class="fa-solid fa-download"></i></a></p>
                <div class="right-triangle"> </div>
                </div>
            </blockquote>
            <!-- Generate Portfolio Promo Card/ Box End -->
            <br><br>
            `
        }
        else {
            if(classN == 'para') {
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
            if(classN == 'list') {
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
        }
    });

    htmlCode = htmlCode_first + htmlCode_second + htmlCode_topics + htmlCode_last; //create the entire html code

    //Remove the h2 and p elements with no content (if the inputs have spaces, it'll stay)
    htmlCode = htmlCode.replace(/<p class="text">(\s)*<\/p>/gi,'\n');
    htmlCode = htmlCode.replace(/<p class="text text-alt">(\s)*<\/p>/gi,'\n');
    htmlCode = htmlCode.replace(/<li class="text">(\s)*<\/li>/gi,'\n');


    //remove the extra lines that come up
    //htmlCode = htmlCode.replace(/(\r\n|\r|\n){2}/g, '$1').replace(/(\r\n|\r|\n){3,}/g, '$1\n');;
    htmlCode = htmlCode.replace(/\n\s*\n\s*\n/g, '\n');

}

replaceCode = () => {
    let o = htmlCode; 
    for(const key in input) {
        let reg = new RegExp("{ ." + key + " }", 'g');
        o = o.replace(reg,input[key]);
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