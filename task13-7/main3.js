   let Div = document.getElementById("Div");

   Div.style.border = "solid 2px black";
   Div.style.height = "70px";
   Div.style.width = "300px";
   Div.style.backgroundColor = " rgb(38, 226, 100)";

   Div.onmouseover = function (){
    Div.style.backgroundColor = "rgb(140, 77, 241)";
   }

   Div.onmouseout = function () {
    Div.style.backgroundColor = " rgb(38, 226, 100)";
   }