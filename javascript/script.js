var userScore = 0;
var timeLeft = 30;
var timerEl = document.querySelector(".time");
var mainEl = document.getElementById("main");
var ptagEl = document.getElementById("pTag");
var answerEl = document.querySelectorAll(".answer");
var startBtn = document.getElementById('start-button')
var card = document.querySelector(".card")
// //create endgame function here. Setting it equal to clearInterval(timerInterval) so if user finishes before timer is up, the timer stops.
// function endGame (){
// }

startBtn.addEventListener("click", function(){
    console.log("start button was clicked")
    card.setAttribute("style", "visibility: visible;");

});

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
    // button one will always be correct answer
    getNextQuestion();
});

answerEl[1].addEventListener("click", function() {
    console.log("button two was clicked")
    // buttone two will always be incorrect answer
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
};
answerEl[2].addEventListener('click', function() {
    console.log('button one was clicked');
    // button one will always be correct answer
    getLastQuestion();
});

answerEl[3].addEventListener("click", function() {
    console.log("button two was clicked")
    // buttone two will always be incorrect answer
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
    timerEl.textContent = ('Times Up!');
}

startTimer();


// the form to store the users to store info 
// headTitle.textContent = "The quiz is now over!"
// ques.textContent = "Your final score was " + secondsLeft;
// var endMess = document.createElement('form');
// newItem.innerHTML = "<label> Name:</label><br>\n<input type='text'<br><br>\n<a href= './/highscore.html'> <input type='submit' value='Submit'> </a>";
// replaceAns.parentNode.replaceChild(endMess, replaceAns);