let addbtn = document.getElementById("add");
let tasks = document.getElementById("input");
let ul = document.getElementById("list");

addbtn.addEventListener("click", function()
{
    var li = document.createElement("li")
    li.innerText=tasks.value;
    ul.appendChild(li);
    tasks.value = "";
    li.style.fontSize = "20px";
    li.style.color = "#ff5b09";
    li.style.fontWeight="7px";
    li.addEventListener("click", function(){
        li.style.textDecoration = 'line-through';
        li.style.color = "#f2c6c6";
        
    })
    li.addEventListener("dblclick", function(){
        ul.removeChild(li);
    })
})