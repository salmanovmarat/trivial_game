$("#start").on("click", function(){
    $("button").remove("#start")
    quest()
})
function quest(){
    var newDiv= $("<div>")
    newDiv.htm("testing")
    $("#trivia").append(newDiv)
}
