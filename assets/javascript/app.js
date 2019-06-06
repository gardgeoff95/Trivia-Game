$("document").ready(function () {

    var correctAnswers = 0;
    var isCorrect = $(this).attr('isCorrect');
    $("input").on("click", function () {
        var isCorrect = $(this).attr('isCorrect');
        if (isCorrect == 'yes') {
            correctAnswers++;
            console.log(correctAnswers);
          

        }
       



    })
    $("#submit").on("click", function () {
        console.log(correctAnswers);
        
        if (correctAnswers == 6) {
            $("#winner").css("display", "block");
        } else if (correctAnswers < 6){
            $("#needsWork").css("display", "block");
        }
    })
    $("#reset").on("click", function(){
        location.reload();

    });



})
