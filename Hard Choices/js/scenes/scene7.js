// will your car break down
var scene7 = new Phaser.Class({
    Extends: Phaser.Scene,

    initialize:

    function introScene(){
        Phaser.Scene.call(this, { key: 'scene7'});
    },

    preload: function ()
    {
        this.load.image('background2', 'assets/backgorund46.png');
        this.load.image('carbroke', 'assets/carbroke.png');
        this.load.image('gottowork', 'assets/gottowork.png');
        this.load.image('misswork', 'assets/misswork.png');
        this.load.image('fixcar', 'assets/fixcar.png');
    },

    create: function ()
    {
        currentScene = 7;

        console.log("scene7");

        this.background = this.add.sprite(0,0, 'background2');
        this.background.setOrigin(0,0);
        this.background.setScale(0.65);

        this.carbroke = this.add.sprite(500, 200, 'carbroke');
        this.carbroke.setScale(0.5);
        this.carbroke.visible = false;

        this.gottowork = this.add.sprite(500, 200, 'gottowork');
        this.gottowork.setScale(0.5);
        this.gottowork.visible = false;

        this.misswork = this.add.sprite(500, 200, 'misswork');
        this.misswork.setScale(0.5);
        this.misswork.visible = false;

        this.fixcar = this.add.sprite(100, 200, 'fixcar');
        this.fixcar.setScale(0.5);
        this.fixcar.visible = false;

        this.isTimeForDiceRoll = true;
        this.isTimeForChoice = false;

        this.wait1 = false;
        this.wait2 = false;
        this.wait3 = false;
        this.startTime = 0;
    },

    update: function (time, delta) {
        if (this.isTimeForDiceRoll) { // So we only roll once
            this.isTimeForDiceRoll = false;

            if (dice.roll() > 1 && !carBroke) {
                //your car didn't break
                this.gottoworkShowing = true;
                this.gottowork.visible = true;
                this.wait1 = true;
                this.startTime = time;
            } else {
                this.carbroke.visible = true;
                carBroke = true;
                this.wait3 = true;
                this.startTime = time;
            }
        } else if (this.isTimeForChoice) {
            if (whichOption == 1) {
                whichOption = 0;
                this.isTimeForChoice = false;
                //Choose to fix car
                savings -= 500;
                carBroke =false;
                this.scene.start('scene11');
            } else if (whichOption == 2) {
                whichOption = 0;

                //Chose to miss work
                this.isTimeForChoice = false;
                this.startTime = time;
                strikes++;
                if (strikes >= 3) {
                    this.scene.start('scene10'); // go to fired scene
                } else {
                    nextScene = 'scene6';
                    this.scene.start('rentScene');
                }
            }
        }

        if (this.wait1 && (time - this.startTime) / 1000 > 3) {
            this.scene.start('scene11'); // go to work scene
        } else if (this.wait3 && (time - this.startTime) / 1000 > 3) {
            this.isTimeForChoice = true;
            this.misswork.visible = true;
            this.fixcar.visible = true;
            this.carbroke.visible = false;
            whichOption = 0;
        }
    }
});

