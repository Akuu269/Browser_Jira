// Here , We want to add filter class with main-container class 
// i.e. we we select any color from filter class main-container should also become like that color
let filtercolor = document.querySelectorAll(".filter");
let mainContainer = document.querySelector(".main-container");
let taskBox = document.querySelector(".task_box")
let plusBtn = document.querySelector(".plus");
let modalFlag = false;
let iColor = "black";

for(let i = 0 ; i < filtercolor.length ;  i++){
     filtercolor[i].addEventListener("click" , function(){
        let classes = filtercolor[i].getAttribute("class");
        let strArr = classes.split(" ");
        let color = strArr[1];
        let mainClasses = mainContainer.getAttribute("class");
        let mainCArr = mainClasses.split(" ");
        mainCArr[1] = color;
        mainClasses =  mainCArr.join(" ");
        mainContainer.setAttribute("class" , mainClasses);
    });
    
}
plusBtn.addEventListener("click" , function(){
    let tast = prompt("Enter Your Task");
    let color = prompt("Color");

    if(task!= "" && color != ""){
        let taskContainer = document.createElement("div");
        taskContainer.setAttribute("class" , "ticket_container");
        taskContainer.innerHTML = `<div class="ticket_color ${color}"></div>
        <div class="ticket_desc_container">
            <div class="ticket_id">#ticket_id</div>
            <div class="ticket_desc">${task}</div>
        </div>`;
        mainContainer.appendChild(taskContainer);
    }
});
taskBox.addEventListener("keydown" , function(e){
    if(e.key == "Enter" && taskBox.value != ""){
        let taskContainer = document.createElement("div");
        let task = taskBox.value;
        taskContainer.setAttribute("class" , "ticket_container");
        taskContainer.innerHTML = `<div class="ticket_color ${icolor}"></div>
        <div class="ticket_desc_container">
            <div class="ticket_id">#ticket_id</div>
            <div class="ticket_desc">${task}</div>
        </div>`;
        mainContainer.appendChild(taskContainer);
        // cleanup code
        madalContainer.style.display = "none";
        taskBox.value = "";
    }
})