let taskadder = document.getElementById("addtask");
let taskinput = document.getElementById("listtask");
let box = document.getElementById("box");

function createtask(){
    let newtask=document.createElement("input");
    newtask.setAttribute("class","task");

    box.insertBefore(newtask,taskadder);
}

taskadder.addEventListener("click",()=>{
    createtask();
})
