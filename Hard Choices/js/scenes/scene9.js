//public transportation or friend
var scene9 = new Phaser.Class({
    Extends: Phaser.Scene,

    initialize:

    function introScene(){
        Phaser.Scene.call(this, { key: 'scene9'});
    },

    preload: function ()
    {
        //this.load.image('bg_2', 'assets/bg_2.png');
        //this.load.image('text34', 'assets/text34.png');
        //this.load.image('text23', 'assets/text23.png');
        //this.load.image('text35', 'assets/text35.png');
        //this.load.image('text36', 'assets/text36.png');


    },

    create: function ()
    {
        currentScene = 9;


        console.log("scene9");

        this.background = this.add.sprite(0,0, 'bg_2');
        this.background.setOrigin(0,0);
        this.background.setScale(0.65);

        this.publictrans = this.add.sprite(100, 200, 'text34');
        this.publictrans.setScale(0.6);

        this.friendcancels = this.add.sprite(100, 200, 'text35');
        this.friendcancels.setScale(0.7);
        this.friendcancels.visible = false;

        this.frienddrives = this.add.sprite(100, 200, 'text36');
        this.frienddrives.setScale(0.7);
        this.frienddrives.visible = false;

        this.callfriend = this.add.sprite(500, 200, 'text23');	
        this.callfriend.setScale(0.7);

        this.friend = false;

        this.isStart = true;

        this.startTime = 0;
    },

    update: function (time, delta) {
        if (this.isStart && whichOption == 1) {
            whichOption = 0;
            savings -= 100;
            this.scene.start('scene11');
        } else if (this.isStart && whichOption == 2) {
            whichOption = 0;
            if (dice.roll() > 4) {
                //your friend shows up
                this.friend = true;
                this.frienddrives.visible = true;
            } else {
                //you miss work
                this.friendcancels.visible = true;
            }
        } else if (!this.isStart && (time - this.startTime) / 1000 > 3) {
            if (this.friend) {
                this.scene.start('scene11');
            } else {
                strikes++;
                if (strikes >= 3) {
                    this.scene.start('scene10'); // go to fired scene
                } else {
                    nextScene = 'scene6';
                    this.scene.start('rentScene');
                }
            }
        }
    }
});

