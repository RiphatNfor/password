
function
  validatePassword(){
     var password = document.getElementById("password").value;
     var confirmPassword = document.getElementById("confirmPassword").value;
     if(password != confirmPassword){
         alert ("password do not match.");
         return false;
     }
     return true;
 } 
 var question = document.getElementById("question");
 var answers = document.getElementsByName("capital");
 var correctAnswer = "Paris";
 for(var i = 0; i < answers.length; i++){
   answers[i].addEventListener("click", function(){
if(this.value ===correctAnswer){
    question.innerHTML = "Correct!";
}else{
    question.innerHTML = "incorrect!";
}
   });
  
 }