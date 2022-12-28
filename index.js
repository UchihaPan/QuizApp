var readlineSync = require("readline-sync");

var score = 0;




var questions = [{
  question: "Where do I live? ",
  answer: "Maharashtra"
}, {
  question: "My favorite superhero would be? ",
  answer: "IronMan"
},
{
  question: "What is the thing i like the most? ",
  answer: "Programming"
}];

function welcome() {
  var userName = readlineSync.question("What's your name? ");

  console.log("Welcome " + userName + " to do you know me?");
}



function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("right!");
    score = score + 1;

  } else {
    console.log("wrong!");

  }


  console.log("-------------")
}

function game() {
  for (var i = 0; i < questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}

function showscores() {
  console.log("YAY! Your total score is: ", score);

}


welcome();
game();
showscores();