// Selectors
const todoInput = document.querySelector(".todo-input");
const todoInput2 = document.querySelector(".todo-input2");
const todoInput3 = document.querySelector(".hidden2");
const refreshBtn = document.querySelector(".hidden3");
const emailPara1 = document.querySelector(".input-p");
const emailPara2 = document.querySelector(".p-hidden");
const reloadPara = document.querySelector(".p-hidden2");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

// Event Listeners
document.addEventListener("DOMContentLoaded", getTodos);
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", CheckMark);

// Todo Function
// ADD Function
function addTodo(event) {

    // ensure user cannot continue with empty input until a value has been inserted in required field
    while (true) {
        if(document.myForm.name.value == "") { // check if value on email field form is null
            alert("Please Provide A Valid Name");
            document.myForm.name.focus() // focus keeps the cursor (focused) at the email field
            
            // return false to allow program to continue render and not stuck at the alert
            return false
        } else if (document.myForm.message.value == "") {
            alert("Please Provide A Valid Text");
            document.myForm.message.focus() // focus keeps the cursor (focused) at the password field
            return false
        } else if (document.myForm.email.value == "") {
            alert("Please Provide An Email Address to Continue...");
            // Now prompt user to add email address to deter unwanted comments/ spam while removing other features by adding hidden styling
            emailPara2.classList.remove("p-hidden");
            todoInput3.classList.remove("hidden2");
            todoInput.classList.add("hidden2");
            todoInput2.classList.add("hidden2");
            emailPara1.classList.add("p-hidden");
            document.myForm.email.focus() // focus keeps the cursor (focused) at the password field
            return false

            // check if email address given is valid, when not valid prompt user to enter valid address if valid address - break;
        }else if (mail = document.getElementById("email").value) {
            /* Forming simple regex to validate user login/ email info, search online for regex cheatsheets for inputs - if needed */
            var regx = /^\S+@\S+\.\S+$/
            if(regx.test(mail)){
               break;
            }
            else {
                // grab user input name add to prompt message for personal touch
                alert(todoInput.value + " - Please Enter a valid Email Address...")
                return false;
            }
        }
        
        else {
            break;   
        } 
    }
             
    // prevent form default submission 
    event.preventDefault();  
    refreshBtn.classList.remove("hidden3"); 
    emailPara2.classList.add("p-hidden"); 
    reloadPara.classList.remove("p-hidden2");    

    // Create Todo div element
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    // Create Li element
    const newTodo = document.createElement("li");
    // new Todo grabs both input from name and text field
    newTodo.innerText = todoInput.value + " says - " + todoInput2.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);

    // ADD/ Link saveLocalTodos from localStorage function before arriving todoInput.value = to empty string
    // localStorage function - saveLocalTodos is added to be a part of addTodo function
    saveLocalTodos(todoInput.value + " says - " + todoInput2.value);

    // Checkmark Button
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class="bi bi-check2-square"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    // Trash Button that will remain hidden to regular webpage users
    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="bi bi-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    // Append to/ inside UL
    todoList.appendChild(todoDiv);

    // Clear Todo input Value when plus/add button submits
    todoInput.value = "";
    todoInput2.value = "";
    }


// CheckMark Function
function CheckMark(event) {
    const item = event.target;

    // Check Mark
    if(item.classList[0] === "complete-btn") {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }

    // Delete Todo
    // if first class selected is equal to trash-btn
    if(item.classList[0] === "trash-btn") {

        // selecting the parent element that contains the whole todo additions including check/ delete btn
        const todo = item.parentElement;
        
        todo.classList.add("fall"); // animation class before item delete
        
        // when an item is deleted it will be removed from localStorage as well by calling the removeLocalTodos function
        removeLocalTodos(todo);

        // funtion to wait for transition to end before delete/ remove item
        todo.addEventListener("transitionend", function() {
            todo.remove();
        })
    }
}

// localStorage Function to save to localStorage
function saveLocalTodos(todo) {
    // Check if localStorage have any already stored todo
    let todos;
    if(localStorage.getItem("todos") === null) {
        // if todo doesnt exist then create empty array
        todos = [];
    }else {
        // assuming a todo is available in localStorage then now will parse into an array
        todos = JSON.parse(localStorage.getItem("todos"));
    }

    // add/ push saveLocalTodos(todo) into todos array
    todos.unshift(todo);

    // then set todo into localStorage
    localStorage.setItem("todos", JSON.stringify(todos));
}

// localStorage Function to get items from localStorage and display to user on browser document
function getTodos() {

    // Check if localStorage have any already stored todo
    let todos;
    if(localStorage.getItem("todos") === null) {
        // if todo doesnt exist then create empty array
        todos = [];
    }else {
        // assuming a todo is available in localStorage then now will parse into an array
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.forEach(function(todo) {
        
        // Create Todo div element
        const todoDiv = document.createElement("div");
        todoDiv.classList.add("todo");

        // Create Li element
        const newTodo = document.createElement("li");
        newTodo.innerText = todo;
        newTodo.classList.add("todo-item");
        todoDiv.appendChild(newTodo);

        // Checkmark Button
        const completedButton = document.createElement("button");
        completedButton.innerHTML = '<i class="bi bi-check2-square"></i>';
        completedButton.classList.add("complete-btn");
        todoDiv.appendChild(completedButton);

        // Trash Button that will remain hidden to regular webpage users
        const trashButton = document.createElement("button");
        trashButton.innerHTML = '<i class="bi bi-trash"></i>';
        trashButton.classList.add("trash-btn");
        todoDiv.appendChild(trashButton);

        // Append to/ inside UL
        todoList.appendChild(todoDiv);    
    })
}

// Each entry is assigned an index value tha will be used to delete the user selected todo 
// Delete function will be hidden to webpage user
function removeLocalTodos(todo) {

    // Check if localStorage have any already stored todo
    let todos;
    if(localStorage.getItem("todos") === null) {
        // if todo doesnt exist then create empty array
        todos = [];
    }else {
        // assuming a todo is available in localStorage then now will parse into an array
        todos = JSON.parse(localStorage.getItem("todos"));
    }

    //accessing the text value of the todo div of its specific index within the localStorage
    const todoIndex = todo.children[0].innerText;

    // splice method is used to remove item from the localStorage by its index, 1 - identify as removing only one index at a time
    todos.splice(todos.indexOf(todoIndex), 1);

    // after item is deleted the new values are now set in the localStorage to reflect changes
    localStorage.setItem("todos", JSON.stringify(todos));
}

// Character limit for input boxes
var limitTextBox;
function limitText(limitField, limitNum) {
    if(limitField.value.length > limitNum) {
        limitField.value = limitField.value.substring(0, limitNum); // substring count starts at index 0 and ends at limitNum specified/ given in input html
    }else if (limitField == "") {
        // var limitTextBox is given a value = to limitNum specified/ given minus 0 if limitField value is empty
        limitTextBox = limitNum - 0;
    }
    else {
        limitTextBox = limitNum - limitField.value.length;
    }
}