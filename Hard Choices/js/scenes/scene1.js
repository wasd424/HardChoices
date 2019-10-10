//First is where you apply for a job
var scene1 = new Phaser.Class({
    Extends: Phaser.Scene,

    initialize:

    function introScene(){
        Phaser.Scene.call(this, { key: 'scene1'});
    },

    preload: function ()
    {
        this.load.image('text5', 'assets/text5.png');
        this.load.image('background', 'assets/bg_1.png');
    },

    create: function ()
    {
        console.log("scene1")
        this.bg = this.add.sprite(0,0, 'background');
        this.bg.setOrigin(0,0);
        this.bg.setScale(0.65);

        this.text5 = this.add.sprite(500, 200, 'text5');
        this.text5.setScale(0.7);
        this.text5.setInteractive();

        currentScene = 1;
    },
    update: function () {
        if (whichOption != 0) {
            whichOption = 0;
            var chance = dice.roll();
            if (chance > 3) {
                whichOption = 1;
                console.log('you got the interview');
            } else {

                console.log('you no get job');
                whichOption = 2;
            }
            this.scene.start('scene2');
        }
    }
});