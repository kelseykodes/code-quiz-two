var userScore = 0;
const quizQuestions = [
  {
      prompt: "Select The Correct Braces For An Array:\n(a) [ ]\n\ (b) { }\n(c) ( )",
      answer: "a"
  },
  {
      prompt: "Can You Style CSS In JavaScript?\n(a) No\n\ (b) Yes",
      answer: "b"
  },
   {
    prompt: "Variables Can NOT Be Re-Assigned Multiple Values:\n(a) False\n\ (b) True",
    answer: "a"
   },
];

for (var i = 0; i < 3; /*quizQuestions.length*/ i++) {
    var userInput = window.prompt (quizQuestions[i].prompt); 
    if (userInput == quizQuestions[i].answer) {
        /*alert user they are correct!*/
        alert("Awesome answer! You're correct.")
        userScore++; /*gives user one point*/
    } else {
        alert("Wrong. Looks like someone needs to study!");
    }
        
}
alert ("final score: " + userScore + "/" + quizQuestions.length);

var timerEl = document.querySelector(".time");
var mainEl = document.getElementById("main");
var timeLeft = 30;

//function startTimer() {
  //  var timerInterval = setInterval(function() {
    //    timeLeft--;
      //  timeLeft.
    //}
//}