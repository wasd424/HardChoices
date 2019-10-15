//Second scene tells you if you got the job
var scene2 = new Phaser.Class({
    Extends: Phaser.Scene,

    initialize:

    function introScene(){
        Phaser.Scene.call(this, { key: 'scene2'});
    },

    preload: function ()
    {
        this.load.image('text7', 'assets/text7.png');
        this.load.image('text4', 'assets/text4.png');
        this.load.image('bg_1', 'assets/bg_1.png');
    },

    create: function ()
    {
        currentScene = 2;
        this.gotJob = false;
        console.log("scene2")
        this.bg = this.add.sprite(0,0, 'bg_1');
        this.bg.setOrigin(0,0);
        this.bg.setScale(0.65);
        var chance = dice.roll();
        if (chance > 3) {
            whichOption = 1;
            console.log('you got the interview');
        } else {

            console.log('you no get job');
            whichOption = 2;
        }
        if (whichOption == 1) {
            this.text7 = this.add.sprite(300, 200, 'text7');
            this.text7.setScale(0.7);
            this.text7.setInteractive();
            this.gotJob = true;
            whichOption = 0;
        } else if (whichOption == 2) {
            this.text4 = this.add.sprite(300, 200, 'text4');
            this.text4.setScale(0.7);
            whichOption = 0;


        }

        this.startTime = 0;
        this.wait = false;
        this.isStart = true;
    },

    update: function (time, delta) {
        if (this.isStart) {
            this.startTime = time;
            whichOption = 0;
            this.isStart = false;
            this.wait = true;
        }

        if (this.wait && (time - this.startTime) > 2000) {
            if (this.gotJob) {
                nextScene = 'scene4';
                this.scene.start('rentScene');
            } else {
                nextScene = 'scene3';
                this.scene.start('rentScene');
            }
        }
    }
});

