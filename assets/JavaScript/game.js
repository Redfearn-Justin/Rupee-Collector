$(document).ready(function() {

    //set W/L variables, and other variables

    var Wins = 0;
    var Lose = 0;
    var totalScore = 0;
    var gameRefresh = false;

    var computerPick = Math.floor(Math.random() * 120) + 19;
    var crystalPick = [
        Math.floor(Math.random() * 12) + 1,
        Math.floor(Math.random() * 12) + 1,
        Math.floor(Math.random() * 12) + 1,
        Math.floor(Math.random() * 12) + 1
    ];

    //Crystal value variables

    var redButtonVal = crystalPick[0];
    var purpleButtonVal = crystalPick[1];
    var yellowButtonVal = crystalPick[2];
    var greenButtonVal = crystalPick[3];

    //set every crystal to have a different random number assigned -- Console Log results

    $("#redButton").val(crystalPick[0]);
    $("#purpleButton").val(crystalPick[1]);
    $("#yellowButton").val(crystalPick[2]);
    $("#greenButton").val(crystalPick[3]);

    console.log("Red crystal value: " + crystalPick[0]);
    console.log("Purple crystal value: " + crystalPick[1]);
    console.log("Yellow crystal value: " + crystalPick[2]);
    console.log("Green crystal value: " + crystalPick[3]);

    //putting computerPick into the appropriate div -- Console Log results

    $("#houseNumber").append(computerPick);

    console.log("Computer chose: " + computerPick);

    //functions

    function resetGame() {

        //reset totalScore and refresh amount

        totalScore = 0;

        $("#totalScoreDiv").text(totalScore);

        //reset "Crystal to Collect" amount and refresh amont
    
        computerPick = Math.floor(Math.random() * 120) + 19;

        $("#houseNumber").text(computerPick);

        //have numbers to the crystals reassigned
        
        crystalPick = [
            Math.floor(Math.random() * 12) + 1,
            Math.floor(Math.random() * 12) + 1,
            Math.floor(Math.random() * 12) + 1,
            Math.floor(Math.random() * 12) + 1
        ];

        $("#redButton").val(crystalPick[0]);
        $("#purpleButton").val(crystalPick[1]);
        $("#yellowButton").val(crystalPick[2]);
        $("#greenButton").val(crystalPick[3]);

        //console log verifying the game has restarted and the new values

        console.log("game has reset");

        console.log("Red crystal value: " + crystalPick[0]);
        console.log("Purple crystal value: " + crystalPick[1]);
        console.log("Yellow crystal value: " + crystalPick[2]);
        console.log("Green crystal value: " + crystalPick[3]);

        gameRefresh = true;

    }

    function endGame () {

        if(totalScore === computerPick) {

            $("#vlconfirm").text("You Win!");

            Wins++;

            $("#winsDiv").text(Wins);

            console.log("Victory Achieved");

            $("#victorySound")[0].play();

            resetGame();

        }

        else if(totalScore > computerPick) {

            $("#vlconfirm").text("You Lose!");

            Lose++;

            $("#loseDiv").text(Lose);

            console.log("Failure Achieved");

            $("#loseSound")[0].play();

            resetGame();
        }
    }

    //set button click events

    $("#redButton").on("click", function() {

        totalScore = totalScore + redButtonVal;

        console.log("Current score: " + totalScore);

        $("#totalScoreDiv").text(totalScore);

        $("#rupeeSound")[0].play();

        if(gameRefresh) {

            //reset v/l banner

            $("#vlconfirm").text("");
        }

        endGame();
    });

    $("#purpleButton").on("click", function() {

        totalScore = totalScore + purpleButtonVal;

        console.log("Current score: " + totalScore);

        $("#totalScoreDiv").text(totalScore);

        $("#rupeeSound")[0].play();

        if(gameRefresh) {
            
            //reset v/l banner

            $("#vlconfirm").text("");
        }

        endGame();
    });

    $("#yellowButton").on("click", function() {

        totalScore = totalScore + yellowButtonVal;

        console.log("Current score: " + totalScore);

        $("#totalScoreDiv").text(totalScore);

        $("#rupeeSound")[0].play();

        if(gameRefresh) {
            
            //reset v/l banner

            $("#vlconfirm").text("");
        }

        endGame();
    });

    $("#greenButton").on("click", function() {

        totalScore = totalScore + greenButtonVal;

        console.log("Current score: " + totalScore);

        $("#totalScoreDiv").text(totalScore);

        $("#rupeeSound")[0].play();

        if(gameRefresh) {
            
            //reset v/l banner

            $("#vlconfirm").text("");
        }

        endGame();
    });
    
    

});