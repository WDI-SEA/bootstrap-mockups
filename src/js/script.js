$(document).ready(function() {
    $('#game_area').css({"margin":"auto", "margin-top": "75px", "width": "430px", "height": "420px", });
    $('.tile').css({"background-color": "black", "height": "100px", "width": "100px", "margin": "2px", "display": "inline-block"});
    var score = 0;
    var gameRunning = true;
    function endGame() {
        alert("Game Over! Score: " + score); 
        gameRunning = false;
    }
    if (gameRunning) {
        setTimeout(endGame, 5000);
        $(".tile").each(function() {
            hideMole(this);
        });
    }
    function randomInt(min, max){
        return Math.ceil(Math.random() * (max - min) ) + min;
    }
    function showMole(tile) {
        if (gameRunning) {
            $(this).css({"background-color": "green"});
            $(tile).data('mole', true);
            randomInt(400, 1200) {hideMole(this)};
        }
    }
    function hideMole(tile) {
        $(tile).css({"background-color": "black"});
        $(tile).data('mole', false);
        randomInt(4000,48000) {showMole(this)};
    }
    $('.tile').click(function() {
        if (mole, gameRunning) {
            score++;
            hideMole(this);
        }
    });
});



var game = function() {
  var gameBoard_Selector = "#gameBoard";
  var tile_Selector = ".tile";
  var mole_ClassName = "mole";

  var $gameBoard = $(gameBoard_Selector);
  var $gameTiles = $gameBoard.find(tile_Selector);

  var gameTime = 20 * 1000;
  var turnTime = 1000;

  var moleInterval;
  var moleLifeMin = 1000;
  var moleLifeMax = 3 * 1000;

  var gameScore = 0;