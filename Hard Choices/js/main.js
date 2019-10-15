/* --- Hard Choices: A game about homelessness --- */

//global variables for all scenes
var whichOption = 0;
var isChoosen = false;
var text3Clicked = false;
var savings = 5100;
var month = 0;
var lastRoll = 0;
var isIntro = true;
var highPayJob = false;
var timeUntilChoice = 5;
var hasCar = false;
var strikes = 0;
var currentScene = 0;
var evictionProb = 1;
var nextScene;
var hasJob = false;
var monthsToWait;
var hasLoan = false;
var timeStarted = false;
var carBroke = false;


// set the configuration of the game
let config = {
    type: Phaser.AUTO, 
    width: 640,
    height: 360,
    scene: [bootScene, preload, titleScene, introScene, uiScene, playerScene, scene1, scene2, scene3, scene4, scene5, scene6, scene7, scene8, scene9, scene10, scene11, loseScene, rentScene, waitScene, moralScene]
};

// create a new game, pass the configuration
let game = new Phaser.Game(config);


//dice code
var dice = {
    sides: 6,
    roll: function () {
        var randomNumber = Math.floor(Math.random() * this.sides) + 1;
        lastRoll = randomNumber;
        return randomNumber;
    }
}