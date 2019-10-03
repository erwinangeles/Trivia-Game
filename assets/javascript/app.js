let currentQuestion = 0;
let correct = 0;
let gameoverMSG = "That's it! Check Out Your Score Below";
let gameoverIMG = "https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif";
let isgameover = false;


//status-msg-divs
let wrongAnswerDiv = `<div class="alert alert-danger" role="alert" style="display: none" id="status-msg-wrong"> Sorry, that's not the right answer. </div>`
let correctAnswerDiv = `<div class="alert alert-success" role="alert" style="display: none" id="status-msg-correct"> That's right! </div>`

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
        prompt: "What type of car does Dwight drive?",
        answers: ["Corvette", "Pontiac Trans Am", "Camaro", "Toyota Prius"],
        correct: 1
    },
    9: {
        prompt: "What is Michael's online username for the online dating website?",
        answers: ["ReadyForMarriage", "KidCrazy", "LittleKidLover", "Looking4Woman"],
        correct: 2
    }
    
}

console.log(TriviaQuestions)


function setQAButtons(){
    if(currentQuestion > 9){
        gameOver();
    }else{
        //sets the question in the h2 tag
    $("#question").html(`<h2>${TriviaQuestions[currentQuestion].prompt}</h2>`);
    // $("#timer").text(`30`);
    // n = 30;

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
            // $(this).addClass("correct") //adds green outline
            $("#status-msg-wrong").hide();
            $("#status-msg-correct").show();
            setTimeout(function(){ $("#status-msg-correct").hide("slow"); }, 2000)
            correct++

            currentQuestion++
            $("#answers").empty(); //clears answers div
            $("#question").empty(); //clears question div
            setQAButtons();
        }else{
            // $(this).addClass("wrong") //adds red outline
            $("#status-msg-correct").hide();
            $("#status-msg-wrong").show();
            setTimeout(function(){ $("#status-msg-wrong").hide("slow"); }, 2000)
            //skip to next question
            currentQuestion++
            $("#answers").empty(); //clears answers div
            $("#question").empty(); //clears question div
            setQAButtons();
        }

    })
    }
}


  let n = 30;
  setTimeout(countDown,1000);
  
  function countDown(){
     n--;
     if(n > 0){
        setTimeout(countDown,1000);
        $('#timer').text(n)
     }else if(n == 0 && isgameover == false){
        gameoverMSG = "Times up! Game over";
        gameoverIMG = "https://media.giphy.com/media/KhliiAkDFP9YY/giphy.gif";
        gameOver();
     }
  }

  function gameOver(){
    isgameover = true;
    $("#question").html(`<h2>${gameoverMSG}</h2>`)
    let giphy = $("<img>")
    giphy.attr("src", `${gameoverIMG}`)
    let correctheader = `<h4>Correct Answers: <span style="color:green">${correct}</span> out of 10</h4>`
    $("#answers").html(correctheader)
    $("#answers").append(giphy);

    let button = $("<a>");
    $(button).html(`<br><br><a class="btn btn-primary" href="javascript:location.reload();" role="button">Play Again</a>`)
    $("#answers").append(button);
    $("#timer_label").html('');
  }