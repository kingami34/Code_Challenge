
var quizQuestion = document.querySelector("#quizquestion")
var resultTest = document.querySelector("#result")
var buttonUp = document.querySelector("#button")
var countDown = document.querySelector("#Timer")
var scoresButton = document.querySelector("#scores")
var submitButton = document.querySelector("#submit")
var playersList = document.querySelector("#players")
var formName = document.querySelector("#form")


// Add a Shot Clock to start the quiz

var startMinutes  = 10;

var clock = startMinutes * 60;

var countdownEl = document.getElementById('countdown');

setInterval (countDown, 1000);

function countDown () {
    var minutes = Math.floor(time / 60);
    let seconds = time % 60; 

    seconds = seconds < 10 ? '0' + seconds : seconds;
    
    countdownEl.innerHTML =`${minutes}: ${seconds}`;
    time--;
    console.log('startMinutes')
};

  

// Game starts when user click the "start here"
submitButton.addEventListener("click", function () {
    console.log("click")
    for (var i = 0; i < questions.length; i++) {
        var response = window.prompt(questions[i].prompt);
        if (response == questions[i].Correct) {
            scores++;
            alert('Correct');
        } else {
            alert('Wrong');
        }
    }

    alert('your score' + scores + '/' + questions.length)
    formName.classList.remove("form");
    submitButton.addEventListener("submit", function () {
        console.log("submit")

    })
});

var resultTest = 5/5;

if(resultTest < 5/5) {
    alert("Try quiz again")
}



var questions = [
    {
        prompt: "What is the meaning of HTML?\n\
            (a)Stands for Hot time made live\n\
            (b)Computer science keywords\n\
            (c)Stands for hypertext markup language\n\
            (d)Means laptop not working",
        Correct: 'c',

    },
    {
        prompt: "What is computer science?\n\
            (a)Study of stars\n\
            (b)Study of plants\n\
            (c)Study of computers\n\
            (d)Study of science",
        Correct: 'c',

    },
    {
        prompt: "Which of these are most likely Not computing systems?\n\
            (a)Working in a computing lab\n\
            (b)Making a bacon sandwich\n\
            (c)Star War battle\n\
            (c)Playing basketball",
        Correct: 'b',

    },
    {
        prompt: "What is the difference between a consumer and a creator?\n\
            (a)The person that drinks coffee vs sales coffee\n\
            (b)Two people fighting the same battle\n\
            (c)A person that buys product vs the sales products\n\
            (d)The first rule of the world\n",
        Correct: 'c',

    },
    {
        prompt: "What is a group of connected computer called?\n\
            (a)A party\n\
            (b)A group of keywords\n\
            (c) A boring time\n\
            (d) A network\n",
        Correct: 'd',

    }
]

var scores = 0;









//for loop to ask questions and answners

// for (var i = 0; i < questions.length; i++) {
//     var response = window.prompt(questions[i].prompt);
//     if (response == questions[i].Correct) {
//         scores++;
//         alert('Correct');
//     } else {
//         alert('Wrong');
//     }
// }

// alert('your score' + scores + '/' + questions.length)


