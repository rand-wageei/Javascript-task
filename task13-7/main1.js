   let Div = document.getElementById("Div");

   Div.style.border = "solid 2px black";
   Div.style.height = "300px";
   Div.style.width = "300px";
   Div.style.backgroundColor = "purple";

   Div.onmouseover = function (){
    Div.style.backgroundColor = "blue";
   }

   Div.onmouseout = function () {
    Div.style.backgroundColor = "purple";
   }