
var array =[]
var correct_answer




$("#start").on("click", function(){
    $("button").remove()
    question()
})
function question(){
    $.ajax({
        url:"https://opentdb.com/api.php?amount=8&difficulty=easy&type=multiple"
    }).done(function(response){
        console.log(response)
        var quest1 = response.results[0].question
       var newDiv = $("<div class=question>").html(quest1)
       $("#trivia-btn").append(newDiv)
       for( var i=0; i<response.results.length; i++){
        console.log(response[i])
        var answ = response.results[0].incorrect_answers
    }
       
      
       
       array.push(answ)
       var duzgun = response.results[0].correct_answer
       array[0].push(duzgun)
       
       var div = $("<div class = answer>").html(answ)
       $("#trivia-btn").append(div)

       console.log(array)
        
       
    })
    }