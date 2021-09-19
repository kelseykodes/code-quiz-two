var userScore = 0;
var timeLeft = 30;
var timerEl = document.querySelector(".time");
var mainEl = document.getElementById("main");
var ptagEl = document.getElementById("pTag");
var answerEl = document.querySelectorAll(".answer");
//create endgame function here. Setting it equal to clearInterval(timerInterval)
function endGame (){
}

function startTimer() {
    var timerInterval = setInterval(function() {
        timerEl.textContent = timeLeft + " seconds remaining";
        timeLeft--;
        if (timeLeft <= -1) {
            clearInterval(timerInterval);
            displayMessage ();
        }
    }, 1000);   
}
startTimer();

ptagEl.textContent = "The Correct Braces For A JavaScript Array is [ ]"; 
answerEl[0].textContent = "Ture";
answerEl[1].textContent = "False";

// changing the text of pTag so second question can display 

ptagEl.textContent = "Can You Use CSS Inside JavaScript?";
answerEl[0].textContent = "No";
answerEl[1].textContent = "Yes";
// changing the text of pTag so third question can display 
ptagEl.textContent = "Variables Can NOT Be Re-Assigned Multiple Values";
answerEl[0].textContent = "Ture";
answerEl[1].textContent = "False";


//  const quizQuestions = [   
    // {
    //   prompt: "Select The Correct Braces For An Array:\n(a) [ ]\n\ (b) { }\n(c) ( )",
    //    answer: "a"
//   },
//   {
    //   prompt: "Can You Style CSS In JavaScript?\n(a) No\n\ (b) Yes",
    //   answer: "b"
//   },
//    {
    // prompt: "Variables Can NOT Be Re-Assigned Multiple Values:\n(a) False\n\ (b) True",
    // answer: "a"
//    },
// ];

// for (var i = 0; i < 3; /*quizQuestions.length*/ i++) {
    // var userInput = quizQuestions[i].prompt; 
    // console.log (userInput);
    // if (userInput == quizQuestions[i].answer) {
    //     /*alert user they are correct!*/
    //     alert("Awesome answer! You're correct.")
        
    //     //userScore++; /*gives user one point*/
    // } else if (i = 3){ 
    //     //call endgame function here to stop the timer
    //     endGame();
    // } else {
    //     alert("Wrong. Looks like someone needs to study!");
    //     timeLeft = timeLeft - 5;
    //     console.log(timeLeft);
    // }
    
// };
// alert ("final score: " + timeLeft );
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
