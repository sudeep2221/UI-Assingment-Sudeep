"use strict"

var x=[];
    
function add(){
    
   x.push(document.getElementById("fname").value);
  
    document.getElementById("word").innerHTML=x;
   
}
  function sorting(a,b){
      return a - b;
  }

function sort(){
    
  
   document.getElementById("word").innerHTML=  x.sort(sorting);
}