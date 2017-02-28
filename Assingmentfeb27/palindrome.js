"user strict";

/*
function checkpalindrome(){
    
 var  word=document.getElementById("fname").value;
    var wordArray=word.split("");
    wordArray.reverse();
   var reverseword=wordArray.join("");
    
    if(word==reverseword){
        document.getElementById("word").innerHTML=(word+"  is a Palindrome.");
    }else{
        document.getElementById("word").innerHTML=(word+"  is not a Palindrome.")
    }
   
}
*/

//checkpalindrome("sudeep");


 

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
   
    
    
    
    
    
    
    
    
    
    
    
