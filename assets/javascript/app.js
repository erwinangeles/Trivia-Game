let currentQuestion = 0;

const TriviaQuestions = {
    0: {
        prompt: "What year did The Office first air?",
        answers: ["1995", "2001", "2005", "2018"],
        correct: 2
    },
    1: {
        prompt: "What type of farm does Dwight own?",
        answers: ["Beet Farm", "Bear Farm", "Beetle Farm", "Carrot Farm"],
        correct: 0
    },
    2: {
        prompt: "Where do Jim and Pam share their first REAL kiss?",
        answers: ["The roof", "Jim's Desk", "The Park", "The warehouse"],
        correct: 1
    },
    3: {
        prompt: "What tattoo is Andy forced to get?",
        answers: ["A Wolf", "A Nard Dog", "Naked Man", "The Cornell logo"],
        correct: 1
    },
    4: {
        prompt: "Who ruined Pam's pregnancy secret during her wedding weekend?",
        answers: ["Andy", "Michael", "Holly", "Jim"],
        correct: 3
    },
    5: {
        prompt: "Which office employee did Michael hit with his car?",
        answers: ["Angela", "Meredith", "Kelly", "Stanley"],
        correct: 1
    },
    6: {
        prompt: "Who started the kitchen fire?",
        answers: ["Ryan", "Toby", "Kevin", "Donna"],
        correct: 0
    },
    7: {
        prompt: "Who does Toby have a major crush on in the series?",
        answers: ["Kelly", "Erin", "Pam", "Phyllis"],
        correct: 2
    },
    8: {
        prompt: "What is Michael's online username for the online dating website?",
        answers: ["ReadyForMarriage", "KidCrazy", "LittleKidLover", "Looking4Woman"],
        correct: 2
    },
    9: {
        prompt: "What type of car does Dwight drive?",
        answers: ["Corvette", "Pontiac Trans Am", "Camaro", "Toyota Prius"],
        correct: 1
    }
    
}

console.log(TriviaQuestions)


function setQAButtons(){


    //sets the question in the h2 tag
    $("#question").html(`<h2>${TriviaQuestions[currentQuestion].prompt}</h2>`);
    $("#timer").text(`30`);
    n = 30;

    //loads the answers
    for(let i = 0; i < 4; i++){
        let button = $("<button>");
        $(button).text(TriviaQuestions[currentQuestion].answers[i]);
        $(button).addClass("btn btn-outline-secondary btn-lg btn-block")
        $(button).attr("id", "answer" + i)
        $(button).attr("data-answer", i)
        $("#answers").append(button)
    }

    //on click 
    $(".btn").on("click", function(){
        if($(this).data("answer") == TriviaQuestions[currentQuestion].correct){ //checks if answer is correct
            // $(this).removeClass("btn-outline-secondary"); //removes default outline
            $(this).addClass("correct") //adds green outline
            currentQuestion++
            $("#answers").empty(); //clears answers div
            $("#question").empty(); //clears question div
            if(currentQuestion == 9){
             gameOver();
            }else{
                setQAButtons();
            }
        }else{
            $(this).addClass("wrong") //adds red outline
        }

    })
}


  let n = 30;
  setTimeout(countDown,1000);
  
  function countDown(){
     n--;
     if(n > 0){
        setTimeout(countDown,1000);
        $('#timer').text(n)
     }else{
         gameOver();
     }
  }

  function gameOver(){
    $("#question").html("<h2>Game Over!</h2>")
    let giphy = $("<img>")
    giphy.attr("src", "https://media.giphy.com/media/KhliiAkDFP9YY/giphy.gif")
    $("#answers").html(giphy);

    let button = $("<a>");
    $(button).html(`<br><br><a class="btn btn-primary" href="javascript:location.reload();" role="button">Play Again</a>`)
    $("#answers").append(button);
    $("#timer_label").html('');
  }