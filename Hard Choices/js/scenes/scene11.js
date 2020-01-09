// go to work.
var scene11 = new Phaser.Class({
    Extends: Phaser.Scene,

    initialize:

    function introScene(){
        Phaser.Scene.call(this, { key: 'scene11'});
    },

    preload: function ()
    {
        this.load.image('bg_2', 'assets/bg_2.png');
        this.load.image('text38', 'assets/text38.png');
        this.load.image('text39', 'assets/text39.png');
    },

    create: function ()
    {
        currentScene = 11;
        console.log("scene11");

        this.background = this.add.sprite(0,0, 'bg_2');
        this.background.setOrigin(0,0);
        this.background.setScale(0.65);
    },

    update: function (time, delta) {
        
    }
});

