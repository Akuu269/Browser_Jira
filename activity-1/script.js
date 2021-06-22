// to get element >- only first element
let inputBox = document.querySelector(".input-box");
// we create a child list below 
let ul = document.querySelector(".task-list"); // to select the parent when
//Listner >- listen the kayboard and mouse by passing key value and 
// function object
// To types element in dom
// 1. form >- value
// 2 . rest >- text-content
inputBox.addEventListener("keydown" , function(object){
  // show the at cosole what event is do by keyboard in input box
    // console.log("event obj" , object );

    console.log("event");
    if(object.key == "Enter" && inputBox.value !==" "){
        let value = inputBox.value;
        // console.log("value" , value);

        // if you want to create a list within html by js so,
        let li = document.createElement("li");
        // to append the value
        ul.appendChild(li);
        // but it's a empty list so add them by this
        li.innerText = value;
        // set the attribute
        li.setAttribute("class" , "task");
       
      // To remove list by double click
      li.addEventListener("dblclick" , function delFn(){
        li.remove();
      });
      inputBox.value = " "; // to do empty the box 
    }
});