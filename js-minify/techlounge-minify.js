var menuIcon=document.querySelector(".flex-div__nav-left--menu-icon"),sidebar=document.querySelector(".sidebar"),container=document.querySelector(".container"),listContainer=document.querySelector(".list-container"),userIcon=document.querySelector(".flex-div__nav-right--user-icon"),hidden=document.querySelector(".hidden");menuIcon.onclick=function(){sidebar.classList.toggle("small-sidebar"),container.classList.toggle("large__container"),listContainer.classList.toggle("large__list-container")},userIcon.onclick=function(){hidden.classList.toggle("hidden")};const date=new Date(Date.now());currentDate=date.toLocaleString("en-US",{month:"short",day:"numeric",year:"numeric"});const dot="&bull; ",dateMain=["currentDate-1","currentDate-2","currentDate-3","currentDate-4","currentDate-5","currentDate-6","currentDate-7","currentDate-8","currentDate-9"];for(i=0;i<dateMain.length;i++)document.getElementById(dateMain[i]).innerHTML="15k clicks "+dot+currentDate;const dateAlt=["currentDateAlt-1","currentDateAlt-2","currentDateAlt-3","currentDateAlt-4","currentDateAlt-5","currentDateAlt-6","currentDateAlt-7","currentDateAlt-8","currentDateAlt-9"];for(i=0;i<dateAlt.length;i++)document.getElementById(dateAlt[i]).innerHTML="15k clicks "+dot+currentDate;function articleForm(){if(document.body.scrollTop>1800||document.documentElement.scrollTop>1800){gsap.timeline({defaults:{duration:1.5,ease:"power2.out"}}).to(".tech-lounge-form",{opacity:1})}else{gsap.timeline({defaults:{duration:2,ease:"power2.out"}}).to(".tech-lounge-form",{opacity:0})}}window.onscroll=function(){articleForm()};const formMessageBtn=["form-btn-1","form-btn-2","form-btn-3"],formMessageContainer=["message-1","message-2","message-3"],formSubmitContainer=["top-1","top-2","top-3"],messageBox=["form-textarea-1","form-textarea-2","form-textarea-3"];for(i=0;i,i,i,i<messageBox.length;i++){const e=document.getElementById(formMessageBtn[i]),t=document.getElementById(formMessageContainer[i]),o=document.getElementById(formSubmitContainer[i]),n=document.getElementById(messageBox[i]);e.addEventListener("click",()=>{""===n.value?alert("Please Enter Valid Text"):n.value.length<=9?alert("Character minimum is 10"):o.classList.contains("article-hidden")&&(t.classList.add("article-hidden"),o.classList.remove("article-hidden"))})}const articleBtns=["article-1","article-2","article-3"],articles=["finance","lifestyle","gadgets","apps","tech","health","business","luxury","wfh"];for(i=0;i,i<articleBtns.length;i++){const e=document.querySelector(".tech-nav"),t=document.querySelector(".tech-sidebar"),o=document.querySelector(".tech-lounge__container"),n=document.getElementById(articleBtns[i]),r=document.getElementById(articles[i]);n.addEventListener("click",()=>{o.classList.toggle("article-hidden"),r.classList.toggle("article-hidden"),e.classList.toggle("article-outer-blur"),t.classList.toggle("article-outer-blur")})}function openfile(){var e=document.getElementById("search").value;e.toLowerCase().includesOneof(["remote","assistance"])?(window.close(),window.open("info-page.html")):e.toLowerCase().includesOneof(["group","policy"])?(window.close(),window.open("info-page2.html")):e.toLowerCase().includesOneof(["share","drive","permission"])?(window.close(),window.open("info-page3.html")):e.toLowerCase().includesOneof(["outlook"])?(window.close(),window.open("info-page4.html")):e.toLowerCase().includesOneof(["print"])?(window.close(),window.open("info-page5.html")):e.toLowerCase().includesOneof(["osi","osi model","layer"])?(window.close(),window.open("info-page6.html")):e.toLowerCase().includesOneof(["helpdesk issue","helpdesk solution","helpdesk problem","help desk issue","help desk solution","help desk problem","tech support issue","tech support solution","tech support problem","it support issue","it support solution","it support problems","common"])?(window.close(),window.open("info-page7.html")):e.toLowerCase().includesOneof(["rsat","r sat","rsat tool"])?(window.close(),window.open("info-page8.html")):e.toLowerCase().includesOneof(["start","technician","task","job","description","salary","career","path","quick","overview"])?(window.close(),window.open("info-page9.html")):e.toLowerCase().includesOneof(["guide","troubleshooting steps","steps","basic","resolve","resolving","cpu","process","maintenance","hardware","operating","system","prevent","error","virus","cable","disk","mouse","monitor","ware","boot","reset","power","heat","drive","keyboard"])?(window.close(),window.open("info-page10.html")):e.toLowerCase().includesOneof(["practice","guidance","omnichannel","omni","customer","knowledge","service","self","kpi","analytic","satisfy","satisfaction"])?(window.close(),window.open("info-page11.html")):e.toLowerCase().includesOneof(["software","tool","zendesk","zen","solarwinds","service desk","solar","sysaid","summit","ai","cxone","fresh","salesforce","force","capacity","control","connectwise","zoho","bench","ninja","front","team support","kustomer"])?(window.close(),window.open("info-page12.html")):e.toLowerCase().includesOneof(["resume","ats","cv","scan","job description","resume scanner","keyword tool","keyword optimize","applicant tracking system","jobscan","job scan","job research","skills match","match"])?(window.close(),window.open("resume-scan.html")):window.location.href="redirect.html"}String.prototype.includesOneof=function(e){if(!Array.isArray(e))throw new Error("includesOneOf only accepts an array");return e.some(e=>this.includes(e))};var input=document.getElementById("search");input.document("keyup",function(e){13===e.keyCode&&(e.preventDefault(),document.getElementsByClassName("flex-div__nav-middle--search-icon").click())});