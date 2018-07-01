$(document).ready(function() {

    //set W/L variables

    var Wins = 0;
    var Lose = 0;
    var totalScore = 0;

    //matching above variables to appropriate Divs

    $("#winsDiv").text(Wins);
    $("#loseDiv").text(Lose);
    $("#totalScoreDiv").text(totalScore);

    //gamble on "refresh" functionality
    var refreshGame = false;

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

    // function addRedScore () {
    //     totalScore = totalScore + redButtonVal;
    //     $("#totalScoreDiv").text(totalScore);
    // }

    // function addPurpleScore() {
    //     totalScore = totalScore + purpleButtonVal;
    //     $("#totalScoreDiv").text(totalScore);
    // }

    // function addYellowScore() {
    //     totalScore = totalScore + yellowButtonVal;
    //     $("#totalScoreDiv").text(totalScore);
    // }

    // function addGreenScore() {
    //     totalScore = totalScore + greenButtonVal;
    //     $("#totalScoreDiv").text(totalScore);
    // }

    //set button click events

    $(".userButton").on("click", function() {

        if (redButtonVal) {

        }
        //adding button value to the appropriate score holder div
    });






});