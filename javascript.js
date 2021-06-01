var submitButton = document.querySelector("#submit")
var quizQuestion = document.querySelector("#quizquestion")
var resultTest = document.querySelector("#result")
var buttonUp = document.querySelector("#button")
var countDown = document.querySelector("#Timer")
var scoresButton = document.querySelector("#scores")




    
// Game starts when user click the "start here"
submitButton.addEventListener ("click" , function (){});


//for loop to ask questions and answners
function submitButton(){
for(var i=0; i < submitButton.length; i++){
    var response = window.question(submitButton[i].question);
    if(response == submitButton[i].Correct){
        scores++;
        alert('Correct');
    }else{
        alert('Wrong');
    }
}
}
    console.log(submitButton);

alert('your score' + scores + '/' + submitButton.length)

var scores = 0;


    var question = [
        {
            question: "What is the meaning of HTML?\n(a)Stands for Hot time made live\n\
            (b)Computer science keywords\n(c)Stands for hypertext markup language\n(d)Means laptop not working",
            Correct: 'Stands for hypertext markup language',
    
        },
        {
            question: "What is computer science?\n(a)Study of stars\n(b)Study of plants\n\
             (c)Study of computers\n(d)Study of science",
            Correct: 'Study of computers',
    
        },
        {
            question: "Which of these are most likely Not computing systems?\n(a)Working in a computing lab\n\
            (b)Making a bacon sandwich\n(c)Star War battle\n(c)Playing basketball",
            Correct: 'Making a bacon sandwich',
    
        },
        {
            question: "What is the difference between a consumer and a creator?\n\
            (a)The person that drinks coffee vs sales coffee\n\
            (b)Two people fighting the same battle\n\
            (c)A person that buys product vs the sales products\n\
            (d)The first rule of the world\n",
            Correct: 'A person that buys product vs the sales products',
    
        },
        {
            question: "What is a group of connected computer called?\n\
            (a)A party\n\
            (b)A group of keywords\n\
            (c) A boring time\n\
            (d) A network\n",
            Correct: 'A network',
    
        }
    ]
    
