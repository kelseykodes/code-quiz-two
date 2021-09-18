var userScore = 0;
var timeLeft = 30;
var timerEl = document.querySelector(".time");
var mainEl = document.getElementById("main");
//create endgame function here. Setting it equal to clearInterval(timerInterval)
function endGame (){

}

function startTimer() {
    var timerInterval = setInterval(function() {
        timeLeft--;
        timerEl.textContent = timeLeft + " seconds remaining";

        if (timeLeft === 0) {
            clearInterval(timerInterval);
            //call endGame function here
            endGame();
            displayMessage();

        }
    }, 1000);
}
startTimer();
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
        
        //userScore++; /*gives user one point*/
    } else if (i = 3){ 
        //call endgame function here to stop the timer
        endGame();
    } else {
        alert("Wrong. Looks like someone needs to study!");
        timeLeft = timeLeft - 5;
        console.log(timeLeft);
    }
    
};
alert ("final score: " + timeLeft + "/" + quizQuestions.length);
// alert ("final score: " + userScore + "/" + quizQuestions.length);


// function startTimer() {
//     var timerInterval = setInterval(function() {
//         timeLeft--;
//         timerEl.textContent = timeLeft + " seconds remaining";

//         if (timeLeft === 0){
//             clearInterval(timerInterval);
//             displayMessage();

//         }
//     }, 1000);
// }

function displayMessage() {
    timerEl.textContent = ('');
}

startTimer();
