/*
    Hints: 
    1. Attach click event handlers to all four of the 
       buttons (#default, #ocean, #desert, and #high-contrast).
    2. Modify the className property of the body tag 
       based on the button that was clicked.
*/

let onClick = (ev) => {
   let target = ev.currentTarget;
   document.querySelector("body").className = target.id;
}

let buttons = document.querySelectorAll("nav > button");
buttons.forEach(button => button.onclick = onClick);
