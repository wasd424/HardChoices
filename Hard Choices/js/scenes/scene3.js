//Scene 3 is when you didn't get an interview and have to choose to wait or to apply again.
var scene3 = new Phaser.Class({
    Extends: Phaser.Scene,

    initialize:

    function introScene(){
        Phaser.Scene.call(this, { key: 'scene3'});
    },

    preload: function ()
    {
        //this.load.image('text12', 'assets/text12.png');
        //this.load.image('text11', 'assets/text11.png');
        //this.load.image('bg_1', 'assets/bg_1.png');
    },

    create: function ()
    {
        currentScene = 3;
        this.bg = this.add.sprite(0,0, 'bg_1');
        this.bg.setOrigin(0,0);
        this.bg.setScale(0.65);
        console.log("scene3")
        this.text11 = this.add.sprite(100, 200, 'text11');
        this.text11.setScale(0.7);

        this.text12 = this.add.sprite(500, 200, 'text12');
        this.text12.setScale(0.7);
    },

    update: function () {

        if (whichOption == 1) {
            monthsToWait = dice.roll(1);
            highPayJob = true;
            whichOption = 0;
            this.scene.start('waitScene');
        } else if (whichOption == 2) {
            whichOption = 0;
            this.scene.start('scene2');
        }
    }
});
