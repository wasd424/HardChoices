//You are homeless now
var loseScene = new Phaser.Class({
    Extends: Phaser.Scene,

    initialize:

    function introScene(){
        Phaser.Scene.call(this, { key: 'loseScene'});
    },

    preload: function ()
    {
        currentScene = 'loseScene';
        this.load.image('bg_1', 'assets/bg_1.png');
        this.load.image('text21', 'assets/text21.png');

    },

    create: function (time, delta)
    {


        console.log("loseScene");
        currentScene = 101;
        this.background = this.add.sprite(0,0, 'background');
        this.background.setOrigin(0,0);
        this.background.setScale(0.65);

        this.text21 = this.add.sprite(300, 200, 'text21');	
        this.text21.setScale(0.7);

    },
    update: function (time, delta)
    {
        if (!timeStarted){
            this.startTime=time;
            timeStarted = true;
        }
        if ((time - this.startTime) > 2000) {
            timeStarted = false;
            this.scene.start('moralScene');
        }
    },
});
