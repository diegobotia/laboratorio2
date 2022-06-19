"use strict";

function add() {

  let uno=document.getElementById("n1");  
  let dos=document.getElementById("n2");  
  let myTotal=document.getElementById("total");  
  let laSuma=parseInt(uno.value) + parseInt(dos.value);  
  myTotal.innerText="El resultado es: "+ laSuma;  


  ///return a + b;
}
function minus(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}

function raiz(a){
  var n=0;
  
return Math.sqrt(a);
  
}

function divide(a, b) {
  if (b === 0) {
    return new Error("Can't divide by zero");
  } else {
    return a / b;
  }
}

module.exports = {
  add,
  minus,
  multiply,
  divide,
  raiz
};
