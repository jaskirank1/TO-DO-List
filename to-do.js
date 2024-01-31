//  to work on input text area, ul list and add button we need to make varibales 
const inputBox = document.getElementById("textInput")
const listContainer = document.getElementById("listcontainer")

function addTask(){
    if(inputBox.value === ''){
        alert("You must write something!");
    }
    else{
        //  ab li ko update krna hai toh uska new element banao
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;    // li mein dalna kya hai jo bhi innerBox ki value hogi voh
        // ab ul vale mein add krna hai 
        listContainer.appendChild(li);
        // we have to add a cross icon at the end of the text in the each list elemnet to remove it
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);   // styling the span tag in css 
    } 
    // after adding the text we have to clear the text in the search bar 
    inputBox.value = '';
    saveData();
}

// iterating through all the list elements with variable e
// whenever we clcik in the list container so it will check where we clciked  
listContainer.addEventListener("click", function(e){
    // if we clciked on li then it must add checked class name or if already there then remove the checked clas name
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    // if we click on the cross ie span so it will delete the parent element ie li element
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

// if we rrelaod the page the tasks will be gone so we need to save them
function saveData(){
    // whenever we add a new data we need to call thsi fucntion 
    // we have to save whatever is the data of listcontainer 
    localStorage.setItem("data", listContainer.innerHTML);
}

//  we have to show the saved data whenever we open the website
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
