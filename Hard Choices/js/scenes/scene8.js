//Loan scene
var scene8 = new Phaser.Class({
    Extends: Phaser.Scene,

    initialize:

    function introScene(){
        Phaser.Scene.call(this, { key: 'scene8'});
    },

    preload: function ()
    {
        this.load.image('background2', 'assets/bg_2.png');
        this.load.image('noloan', 'assets/text32.png');
        this.load.image('gotloan', 'assets/text33.png');
    },

    create: function ()
    {
        currentScene = 8;        

        console.log("scene8");

        this.background = this.add.sprite(0,0, 'background2');
        this.background.setOrigin(0,0);
        this.background.setScale(0.65);

        this.gotloan = this.add.sprite(500, 200, 'gotloan');
        this.gotloan.setScale(0.7);
        this.gotloan.visible = false;

        this.noloan = this.add.sprite(500, 200, 'noloan');
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

