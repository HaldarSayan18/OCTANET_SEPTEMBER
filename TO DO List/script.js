const inputBox = document.getElementById("input-box")
const listContain = document.getElementById("list-contain")
const deadlineInput = document.getElementById("deadline");
const taskText = taskInput.value;
const deadline = deadlineInput.value;
function addTask(){
    if(inputBox.value === ''){
        alert("You have to write anything");
    }
    else{
        let li = document.createElement('li');  //creating a new element and assigning it the value of 'li'
        li.innerHTML = inputBox.value;
        listContain.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    /*const li = document.createElement("li");
    li.innerHTML = `
        <span>${taskText}</span>
        <span class="deadline">Deadline: ${deadline}</span>
        <button onclick="removeTask(this)">Remove</button>
    `;
    taskList.appendChild(li);
    taskInput.value = "";
    deadlineInput.value = "";*/
    inputBox.value = "";
    saveData();
}

listContain.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("check");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContain.innerHTML);
}
function showTask(){
    listContain.innerHTML = localStorage.getItem("data");
}
showTask();