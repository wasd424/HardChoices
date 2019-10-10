//how are you going to get to work
var scene6 = new Phaser.Class({
    Extends: Phaser.Scene,

    initialize:

    function introScene(){
        Phaser.Scene.call(this, { key: 'scene6'});
    },

    preload: function ()
    {
        this.load.image('callfriend', 'assets/text23.png');
        this.load.image('text10', 'assets/text10.png');
        this.load.image('background2', 'assets/bg_2.png');
        this.load.image('text16', 'assets/text16.png');
        this.load.image('buycar', 'assets/text24.png');
        this.load.image('trycar', 'assets/text25.png');
        this.load.image('getloan', 'assets/text26.png');
        this.load.image('takecar', 'assets/text27.png');
    },

    create: function ()
    {
        currentScene = 6;
        this.bg = this.add.sprite(0,0, 'background2');
        this.bg.setOrigin(0,0);
        this.bg.setScale(0.65);
        console.log("scene6");
        this.callfriend = this.add.sprite(100, 200, 'callfriend');
        this.callfriend.setScale(0.7);

        this.text16 = this.add.sprite(500, 200, 'text16');
        this.text16.setScale(0.7);
        this.text16.visible = false;

        if (hasCar) { // you already bought a car
            this.takecar = this.add.sprite(500, 200, 'takecar');
            this.takecar.setScale(0.5);
        } else {
            this.trycar = this.add.sprite(500, 200, 'trycar');
            this.trycar.setScale(0.7);
        }
        this.buycar = this.add.sprite(100, 200, 'buycar');
        this.buycar.setScale(0.4);
        this.buycar.visible = false;

        this.getloan = this.add.sprite(500, 200, 'getloan');
        this.getloan.setScale(0.7);
        this.getloan.visible = false;

        this.text16Showing = false;
        this.startTime = 0xFFFFFFF;
        this.secondChoice = false;
    },

    update: function (time, delta) {


        if (this.text16Showing && (time - this.startTime) > 3000) {
            strikes++;
            if (strikes >= 3) {
                this.scene.start('scene10'); // go to fired scene
            } else {
                nextScene = 'scene6';
                this.scene.start('rentScene');
            }
        } 
        if (this.secondChoice) {
            if (whichOption == 2) {
                //loan
                whichOption = 0;
                this.scene.start('scene8');
            } else if (whichOption == 1) {
                //buy car for $1000
                savings -= 1000;
                hasCar = true;
                this.scene.start('scene7');
            }

        } else {
            if (whichOption == 1) {
                whichOption = 0;
                if (dice.roll() < 5) {
                    //your friend didn't show
                    console.log("friend didn't show");
                    highPayJob = false;
                    this.text16.visible = true;
                    this.callfriend.visible = false;

                    if (hasCar) {
                        this.takecar.visible = false;
                    } else {
                        this.trycar.visible = false;
                    }

                    this.startTime = time;
                    this.text16Showing = true;

                } else {
                    //your friend showed up
                    this.scene.start('scene11');
                }

            } else if (whichOption == 2) {
                if (hasCar) {
                    this.scene.start('scene7');
                } else {
                    this.text16.visible = false;
                    this.callfriend.visible = false;
                    this.trycar.visible = false;
                    this.buycar.visible = true;
                    this.getloan.visible = true;
                    this.secondChoice = true; //So we wont reset the whichOption again
                }
                whichOption = 0;
            }
        }

    }
});
