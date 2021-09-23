var userScore = 0;
var timeLeft = 60;
var timerEl = document.querySelector(".time");
var mainEl = document.getElementById("main");
var ptagEl = document.getElementById("pTag");
var answerEl = document.querySelectorAll(".answer");
var startBtn = document.getElementById('start-button')
var quiz = document.querySelector(".quiz")
var form = document.querySelector("form")
//var endGame = true;
// //create endgame function here. Setting it equal to clearInterval(timerInterval) so if user finishes before timer is up, the timer stops.
 
function endGame() {
    //form.removeAttribute("style=visibility: hidden");
    var finalScore = timerEl;
    alert ("final score: " + timeLeft );
    var name = document.querySelector("#fname").value;
    localStorage.setItem('name', name);
    localStorage.setItem('score', timeLeft);
 };

 //button will initate quiz and reveal questions and start timer 
startBtn.addEventListener("click", function(){
    console.log("start button was clicked")
    quiz.setAttribute("style", "visibility: visible;");
    startTimer();
});

//the timer itself, will begin counting down from 60 seconds
function startTimer() {
    var timerInterval = setInterval(function() {
        timeLeft--;
        timerEl.textContent = timeLeft + " seconds remaining";
        if (timeLeft == 0) {
            clearInterval(timerInterval);
            timerEl.textContent = timeLeft + " time remaining";
        } 
        if (timeLeft >= ptagEl.querySelectorAll("pTag")) {
            clearInterval(timerInterval);
            console.log("user answered all questions, timer stops")
            endGame();
        }
    }, 1000);   
}
//localStoarg.setItem('score', secondsLeft)

ptagEl.textContent = "The Correct Braces For A JavaScript Array is [ ]";
answerEl[0].textContent = "True";
answerEl[1].textContent = "False";
answerEl[2].textContent = "not an answer option"
answerEl[3].textContent = "not an answer option"
// // changing the text of pTag so second question can display 

// // ptagEl.textContent = "Can You Use CSS Inside JavaScript?";
// // answerEl[0].textContent = "Yes";
// // answerEl[1].textContent = "No";

// // changing the text of pTag so third question can display 
// // ptagEl.textContent = "Variables Can NOT Be Re-Assigned Multiple Values";
// // answerEl[0].textContent = "False";
// // answerEl[1].textContent = "True";

var currentQuestionCount = 0;
var text= "";

function getNextQuestion() {
    currentQuestionCount++;
    //need to loop the two other questions here
    ptagEl.textContent = "Can You Use CSS Inside JavaScript?";
    console.log(ptagEl);
    answerEl[0].textContent = "not an answer option"
    answerEl[1].textContent = "not an answer option"
    answerEl[2].textContent = "Yes";
    answerEl[3].textContent = "No";
    //answerEl[2].textContent = "click to see last question
    // for (var i = 0, i < 3) trying loop something here...maybe for in or for each? because I 
}

answerEl[0].addEventListener('click', function() {
    console.log('button one was clicked');
    // option 1 will always be correct answer
    alert("You are correct!");
    getNextQuestion();
});

answerEl[1].addEventListener("click", function() {
    console.log("button two was clicked")
    // option 2 will always be incorrect answer
    alert("Wrong. Looks like someone needs to study!")
    getNextQuestion();
});

function getLastQuestion() {
    currentQuestionCount++;
    ptagEl.textContent = "Variables Can NOT Be Re-Assigned Multiple Values";
    console.log(ptagEl);
    answerEl[0].textContent = "not an answer option"
    answerEl[1].textContent = "not an answer option"
    answerEl[2].textContent = "False";
    answerEl[3].textContent = "True";
    if (answerEl == "True") {
        console.log("quiz is over");
        endGame ();
    }
};

answerEl[2].addEventListener('click', function() {
    console.log('button one was clicked');
    alert("You are correct!");
    // option 1 one will always be correct answer
    getLastQuestion();
});

answerEl[3].addEventListener("click", function() {
    console.log("button two was clicked")
    alert("Wrong. Looks like someone needs to study!")

    // option 2 two will always be incorrect answer
    getLastQuestion();
});


//  const quizQuestions = [   
//     {
//       prompt:  "The Correct Braces For A JavaScript Array is [ ]",
//       choices: ["True", "False"],
//       answer: "True"
//   },
//   {
//       prompt: "Can You Use CSS Inside JavaScript?",
//       choices: ["Yes", "No"],
//       answer: "Yes"
//   },
//    {
//     prompt: "Variables Can NOT Be Re-Assigned Multiple Values.",
//     chocies: ["False", "True",],
//     answer: "False"
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
    timerEl.textContent = ('Times Up!');
};