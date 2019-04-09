$('#start').on('click', function(){
  $('#start').remove();
  game.loadQuestion();
})

$(document).on('click', '.answer-button', function(e){
  game.clicked(e);
})
$(document).on('click','#reset', function(){
  game.reset();
})

var questions = [{
  question: "1 . What does http stand for?",
  answers: ["Hypertext Terminal Protocol", "Hypertext Transfer Protocol", "Hypertext Transmission Protocol", "HypeText Trans Protocol"],
  correctAnswer: "Hypertext Transfer Protocol"
 
}, {
  question: "2 . What is the common shortcut for the ''paste'' function?",
  answers: ["ctrl + p", "ctrl + s", "ctrl + v", "ctrl + c"],
  correctAnswer: "ctrl + v"
}, {
  question: "3 . Which of the following is a video file format?",
  answers: [".png", ".avi", ".bmp", ".mp3"],
  correctAnswer: ".avi"
}, {
  question: "4 . Which web browser is developed by Apple?",
  answers: ["Chrome", "Opera", "Safari", "Firefox"],
  correctAnswer: "Safari"
}, {
  question: "5 . Which of the following is the smallest unit of memory size?",
  answers: ["Terabyte", "Gigabyte", "Kilobyte", "Megabyte"],
  correctAnswer: "Kilobyte"
}, {
  question:  "6 . Which of the following is not an Operating System?",
  answers: ["Windows", "Linux", "OS X", "Java"],
  correctAnswer: "Java"
}, {
  question: "7 . What does the computing term ''RAM'', stand for?",
  answers: ["Random Access Memory", "Reliable Alternate Memory", "Reverse Architecture Memory", "Reliable Access Memory"],
  correctAnswer: "Random Access Memory"
}, {
  question: "8 . How many computer languages are in use??",
  answers: ["20", "2000", "50", "4500"],
  correctAnswer: "2000"
}];

var game = {
  questions:questions,
  currentQuestion:0,
  counter:30,
  correct:0,
  incorrect:0,
  unanswered:0,
  countdown: function(){
      game.counter--;
      $('#counter').html(game.counter);
      if(game.counter<=0){
          console.log("TIME UP!");
          game.timeUp();
      }
  },
  loadQuestion: function(){
      timer = setInterval(game.countdown, 1000);
      $('#trivia-btn').html("<h2>TIME REMAINING: <span id='counter'>30</span> Seconds</h2>");
      $('#trivia-btn').append('<h2>'+questions[game.currentQuestion].question+'</h2>');
      for(var i=0 ; i<questions[game.currentQuestion].answers.length;i++){
          $('#trivia-btn').append('<button class = "answer-button" id="button-'+i+'" data-name="'+questions[game.currentQuestion].answers[i]+'">'+questions[game.currentQuestion].answers[i]+'</button>');
      };
  },
  nextQuestion: function(){
      game.counter = 30;
      $('#counter').html(game.counter);
      game.currentQuestion++;
      game.loadQuestion();
  },
  timeUp: function(){
      clearInterval(timer);
      game.unanswered++;
      $('#trivia-btn').html('<h2>OUT OF TIME!</h2>');
      $('#trivia-btn').append('<h3>The correct Answer was: '+questions[game.currentQuestion].correctAnswer+'</h3>');
      if(game.currentQuestion==questions.length-1){
          setTimeout(game.results,3*1000);
      } else {
          setTimeout(game.nextQuestion,3*1000);
      }
  }, 
  results: function(){
      clearInterval(timer);
      $('#trivia-btn').html("<h2>ALL DONE!</h2>");
      $('#trivia-btn').append("<h3>Correct: "+game.correct+"</h3>");
      $('#trivia-btn').append("<h3>Incorrect: "+game.incorrect+"</h3>");
      $('#trivia-btn').append("<h3>Unanswered: "+game.unanswered+"</h3>");
      $('#trivia-btn').append("<button id='reset'>RESET</button>");
  },
  clicked: function(e){
      clearInterval(timer);
      if($(e.target).data("name")==questions[game.currentQuestion].correctAnswer){
          game.answeredCorrectly();
      } else{
          game.answeredIncorrectly();
      }
      
  },
  answeredCorrectly: function(){
      console.log("YOU GOT IT!");
      clearInterval(timer);
      game.correct++;
      $('#trivia-btn').html('<h2>YOU GOT IT RIGHT!</h2>');
      if(game.currentQuestion==questions.length-1){
          setTimeout(game.results,3*1000);
      } else {
          setTimeout(game.nextQuestion,3*1000);
      }
  },
  answeredIncorrectly: function(){
      console.log("WRONG!");
      clearInterval(timer);
      game.incorrect++;
      $('#trivia-btn').html('<h2>YOU GOT IT WRONG!</h2>');
      $('#trivia-btn').append('<h3>The correct Answer was: '+questions[game.currentQuestion].correctAnswer+'</h3>');
      if(game.currentQuestion==questions.length-1){
          setTimeout(game.results,3*1000);
      } else {
          setTimeout(game.nextQuestion,3*1000);
      }
  },
  reset: function(){
      game.currentQuestion = 0;
      game.counter = 0;
      game.correct = 0;
      game.incorrect = 0;
      game.unanswered = 0;
      game.loadQuestion();
  }


};

