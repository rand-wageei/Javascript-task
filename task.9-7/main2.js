
var operator=(prompt("Please enter your opreation"));
var num1=Number(prompt("Please enter your number2"));
var num2=Number(prompt("Please enter your number3"));

if (operator==="+") {
    result=num1+num2;
  }
else if (operator==="-") {
    result=num1-num2;
}
else if (operator==="*") {
    result=num1*num2;
}
else if (operator==="/") 
{ result=num1/num2;}

console.log(result);
