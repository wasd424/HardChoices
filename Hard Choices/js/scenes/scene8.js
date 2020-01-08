//Loan scene
var scene8 = new Phaser.Class({
    Extends: Phaser.Scene,

    initialize:

    function introScene(){
        Phaser.Scene.call(this, { key: 'scene8'});
    },

    preload: function ()
    {
        currentScene = 'scene8';
        this.load.image('bg_2', 'assets/bg_2.png');
        this.load.image('text32', 'assets/text32.png');
        this.load.image('text33', 'assets/text33.png');
    },

    create: function ()
    {
        console.log("scene8");

        this.background = this.add.sprite(0,0, 'bg_2');
        this.background.setOrigin(0,0);
        this.background.setScale(0.65);

        this.gotloan = this.add.sprite(500, 200, 'text33');
        this.gotloan.setScale(0.7);
        this.gotloan.visible = false;

        this.noloan = this.add.sprite(500, 200, 'text32');
        this.noloan.setScale(0.7);
        this.noloan.visible = false;

        this.gotLoan = false;

        this.isStart = true;

        if (dice.roll() > 3) {
            this.gotLoan = true;
            hasCar = true;
        }

        this.startTime = 0;
    },

    update: function (time, delta) {
        if (this.isStart) {
            this.isStart = false;
            if (this.gotLoan) {
                this.gotloan.visible = true;
                this.startTime = time;
            } else {
                this.noloan.visible = true;
                this.startTime = time;
            }
        }

        if (!this.isStart && (time - this.startTime) / 1000 > 3) {
            if (this.gotLoan) {
                hasLoan = true; 
                this.scene.start('scene11'); //go to work
            } else {
                this.scene.start('scene9');
            }
        } 
    }
});

